import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get the authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      console.error('No authorization header')
      return new Response(
        JSON.stringify({ error: 'No authorization header' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 401,
        },
      )
    }

    // Initialize Supabase client with service role key
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get the JWT token and verify it
    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token)

    if (authError) {
      console.error('Auth error:', authError)
      return new Response(
        JSON.stringify({ error: 'Invalid JWT token', details: authError }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 401,
        },
      )
    }

    const { city } = await req.json()
    console.log('Generating content for city:', city)
    
    // Check if content already exists
    const { data: existingContent, error: fetchError } = await supabaseClient
      .from('city_content')
      .select('content')
      .eq('city', city)
      .single()

    if (fetchError) {
      console.error('Error fetching existing content:', fetchError)
    }

    if (existingContent?.content) {
      console.log('Returning existing content for:', city)
      return new Response(
        JSON.stringify(existingContent.content),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      )
    }

    // Generate new content
    const content = {
      title: `Expert Stair Manufacturers in ${city} – Custom Designs & UK Compliance`,
      metaDescription: `Professional stair manufacturing services in ${city}. Bespoke designs, full UK Building Regulations compliance. Get your free consultation today.`,
      introduction: `As leading stair manufacturers in ${city}, we specialize in creating bespoke staircases that combine stunning design with full compliance to UK Building Regulations. Our expert team brings years of experience in crafting custom stairs for both residential and commercial properties across ${city} and surrounding areas.`,
      faqs: [
        {
          question: `What are the stair design requirements for homes and businesses in ${city}?`,
          answer: `All staircases in ${city} must comply with UK Building Regulations (Approved Document K), which specify requirements for rise, going, headroom, and handrails. Our designs ensure full compliance while meeting your aesthetic preferences.`
        },
        {
          question: `How do I choose the right stair manufacturer in ${city}?`,
          answer: `Look for manufacturers with proven experience, regulatory compliance knowledge, and a portfolio of successful installations in ${city}. We offer free consultations to discuss your specific requirements.`
        },
        {
          question: `Are your staircases in ${city} compliant with UK Building Regulations?`,
          answer: `Yes, all our staircases are designed and manufactured in full compliance with UK Building Regulations, specifically Approved Document K, ensuring safety and legal requirements are met.`
        },
        {
          question: `What is the typical cost of custom stair manufacturing in ${city}?`,
          answer: `Costs vary based on design complexity, materials, and specifications. We provide detailed quotes after understanding your requirements during the initial consultation.`
        }
      ]
    }

    // Store the generated content
    const { error: insertError } = await supabaseClient
      .from('city_content')
      .insert([
        {
          city,
          content
        }
      ])

    if (insertError) {
      console.error('Error inserting content:', insertError)
      throw insertError
    }

    console.log('Successfully generated and stored content for:', city)
    return new Response(
      JSON.stringify(content),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in generate-city-content:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})