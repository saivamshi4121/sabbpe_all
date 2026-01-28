import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .eq('email', email)
      .single();

    if (existing) {
      if (existing.is_active) {
        return NextResponse.json({
          success: true,
          message: 'You are already subscribed!',
        });
      } else {
        // Reactivate subscription
        const { error: updateError } = await supabase
          .from('newsletter_subscriptions')
          .update({ 
            is_active: true,
            unsubscribed_at: null 
          })
          .eq('email', email);

        if (updateError) {
          const errorMessage = updateError?.message || 'Unknown error';
          
          return NextResponse.json(
            { 
              error: 'Failed to reactivate subscription',
              details: errorMessage
            },
            { status: 500 }
          );
        }

        return NextResponse.json({
          success: true,
          message: 'Welcome back! Subscription reactivated.',
        });
      }
    }

    // Insert new subscription
    const { error: insertError } = await supabase
      .from('newsletter_subscriptions')
      .insert({
        email: email,
        is_active: true,
      });

    if (insertError) {
      const errorMessage = insertError?.message || 'Unknown error';
      
      return NextResponse.json(
        { 
          error: 'Failed to subscribe',
          details: errorMessage
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to our newsletter!',
    });

  } catch (error) {
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
