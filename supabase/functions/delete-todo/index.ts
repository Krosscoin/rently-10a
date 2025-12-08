import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createSupabaseClient } from '../_shared/supabase-client.ts'
import { corsHeaders } from '../_shared/cors.ts'

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

    const { id } = await req.json()
    if (!id) {
        return new Response(JSON.stringify({ error: 'Todo ID is required.' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }
    
    const { error, count } = await supabase
      .from('todos')
      .delete({ count: 'exact' })
      .eq('id', id)
      .eq('user_id', user.id) // RLS handles this, but explicit check is good practice

    if (error) {
      throw error
    }

    if (count === 0) {
        return new Response(JSON.stringify({ error: 'Todo not found or you do not have permission to delete it.' }), { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    return new Response(JSON.stringify({ message: 'Todo deleted successfully' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Internal server error:', error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
