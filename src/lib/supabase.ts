import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

// Try to use service role key first (bypasses RLS), fallback to anon key
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false,
        autoRefreshToken: false,
    }
});

// Database Types
export interface ContactSubmission {
    id?: string;
    name: string;
    email: string;
    phone: string;
    organization: string;
    product_interest?: string;
    technology_interest?: string;
    message?: string;
    created_at?: string;
    status?: 'new' | 'contacted' | 'converted' | 'closed';
}

export interface DemoBooking {
    id?: string;
    name: string;
    email: string;
    phone: string;
    organization: string;
    product_interest: string;
    preferred_date: string;
    preferred_time: string;
    created_at?: string;
    status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    meeting_link?: string;
}

export interface NewsletterSubscription {
    id?: string;
    email: string;
    subscribed_at?: string;
    is_active?: boolean;
}