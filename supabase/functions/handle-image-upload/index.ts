import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    const { projectId, imageType, description, fileExt } = await req.json()

    // Generate a unique file name
    const fileName = `${crypto.randomUUID()}.${fileExt}`
    const storagePath = `project-images/${projectId}/${fileName}`

    // Create a signed URL for uploading
    const { data: uploadData, error: uploadError } = await supabaseClient
      .storage
      .from('project-images')
      .createSignedUploadUrl(storagePath)

    if (uploadError) {
      throw uploadError
    }

    // Create image record in the database
    const { data: imageData, error: imageError } = await supabaseClient
      .from('images')
      .insert({
        project_id: projectId,
        storage_path: storagePath,
        type: imageType,
        description
      })
      .select()
      .single()

    if (imageError) {
      throw imageError
    }

    return new Response(
      JSON.stringify({
        uploadUrl: uploadData.signedUrl,
        imageRecord: imageData
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})