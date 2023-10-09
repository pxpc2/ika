import { supabase } from '../lib/supabaseClient.js';

export async function load({  }) {
    const {data} = await supabase
    .from('Newsletter')
    .select('*');
    return { 
        props: {
            newsletterEntry: data
        }
    }
}
