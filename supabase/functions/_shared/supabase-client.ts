import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// This utility creates a Supabase client instance.
// It correctly handles passing the Authorization header from the incoming request
// to the Supabase client, which is essential for authenticating users in Edge Functions.
export const createSupabaseClient = (req: Request) => {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    {
      global: {
        headers: { Authorization: req.headers.get('Authorization')! },
      },
      auth: {
        // This is crucial for RLS to work correctly. It ensures that the user's JWT
        // is correctly interpreted by the database.
        persistSession: false
      }
    }
  )
}
