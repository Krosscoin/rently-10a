// These are default CORS headers. You may want to restrict the `Access-Control-Allow-Origin`
// to a specific domain for production environments for enhanced security.
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
