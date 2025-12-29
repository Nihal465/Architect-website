import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://babbtidqvoqnphvrlycu.supabase.co'
const supabaseKey = 'sb_publishable_VGpXwkUJY87yoaGwSuOPWA_GOG6BW-R'

export const supabase = createClient(supabaseUrl, supabaseKey)