import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { DemoBooking } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const data: DemoBooking = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.organization || 
        !data.product_interest || !data.preferred_date || !data.preferred_time) {
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

    // Validate date is not in the past
    const selectedDate = new Date(data.preferred_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return NextResponse.json(
        { error: 'Cannot book demo for past dates' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data: booking, error: insertError } = await supabase
      .from('demo_bookings')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        organization: data.organization,
        product_interest: data.product_interest,
        preferred_date: data.preferred_date,
        preferred_time: data.preferred_time,
        status: 'pending',
      })
      .select()
      .single();

    if (insertError) {
      const errorMessage = insertError?.message || 'Unknown error';
      const errorCode = insertError?.code || 'NO_CODE';
      
      return NextResponse.json(
        { 
          error: 'Failed to save booking',
          details: `${errorCode}: ${errorMessage}`
        },
        { status: 500 }
      );
    }

    if (!booking) {
      return NextResponse.json(
        { error: 'No data returned from database' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Demo scheduled successfully!',
      bookingId: booking.id,
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
