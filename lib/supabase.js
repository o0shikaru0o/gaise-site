import { createClient } from '@supabase/supabase-js';

// The URL + publishable key are the same public credentials baked into the
// Chrome extension. Anon reads are gated by RLS: the share viewer can only
// see collections that were explicitly marked is_public=true and the items
// they reference.
const SUPABASE_URL = 'https://fevjlfaobfeejplfipsi.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_hER1aUnaL4CFJ5ULTP51QQ_ru6NXUsD';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false },
});
