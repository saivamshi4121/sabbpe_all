import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { ContactSubmission } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const data: ContactSubmission = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.organization) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data: submission, error: insertError } = await supabase
      .from('contact_submissions')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        organization: data.organization,
        product_interest: data.product_interest || null,
        technology_interest: data.technology_interest || null,
        message: data.message || null,
        status: 'new',
      })
      .select()
      .single();

    if (insertError) {
      // Safe error logging
      const errorMessage = insertError?.message || 'Unknown error';
      const errorCode = insertError?.code || 'NO_CODE';
      
      return NextResponse.json(
        { 
          error: 'Failed to save submission',
          details: `${errorCode}: ${errorMessage}`
        },
        { status: 500 }
      );
    }

    if (!submission) {
      return NextResponse.json(
        { error: 'No data returned from database' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you soon.',
      submissionId: submission.id,
    });

  } catch (error) {
    // Safe error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}
