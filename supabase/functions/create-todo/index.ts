import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createSupabaseClient } from '../_shared/supabase-client.ts'
import { corsHeaders } from '../_shared/cors.ts'
import { CreateTodoPayload } from '../types/index.ts'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createSupabaseClient(req)

    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError || !user) {
      console.error('Authentication error:', userError?.message)
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    const payload: CreateTodoPayload = await req.json()

    // Input validation
    if (!payload.task || typeof payload.task !== 'string' || payload.task.trim() === '') {
      return new Response(JSON.stringify({ error: '`task` is required and must be a non-empty string.' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    const { data, error } = await supabase
      .from('todos')
      .insert({ 
        user_id: user.id,
        task: payload.task.trim(),
       })
      .select()
      .single()

    if (error) {
      throw error
    }

    return new Response(JSON.stringify({ todo: data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 201,
    })
  } catch (error) {
    console.error('Internal server error:', error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
