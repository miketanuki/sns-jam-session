import { createClient } from "@supabase/supabase-js";

// supabaseの初期化を行う
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and API key must be provided");
}

export const supabase = createClient(supabaseUrl, supabaseKey);