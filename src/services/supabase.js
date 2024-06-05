import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oiiexdfbxpyckfghbmbb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9paWV4ZGZieHB5Y2tmZ2hibWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxOTMxOTMsImV4cCI6MjAzMjc2OTE5M30.qnk8u9MOSBx7Ymb9n9VPPucdLCk_HyslCfYxsxnyeGk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
