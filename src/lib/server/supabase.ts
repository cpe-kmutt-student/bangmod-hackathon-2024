import { createClient } from '@supabase/supabase-js';

import type { Database } from './database.types';

import { SUPABASE_ANON_KEY, SUPABASE_URL } from '$env/static/private';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
