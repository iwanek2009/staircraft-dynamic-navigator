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
    const { city } = await req.json()
    
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Check if content already exists
    const { data: existingContent } = await supabaseClient
      .from('city_content')
      .select('*')
      .eq('city', city)
      .single()

    if (existingContent) {
      return new Response(
        JSON.stringify(existingContent),
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
    const { data, error } = await supabaseClient
      .from('city_content')
      .insert([
        {
          city,
          content
        }
      ])
      .select()
      .single()

    if (error) throw error

    return new Response(
      JSON.stringify(data.content),
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