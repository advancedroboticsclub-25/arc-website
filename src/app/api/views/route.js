import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // CounterAPI.dev v2
    const apiKey = process.env.COUNTER_API_KEY || 'ut_HlcngzYkgI0PQl3oS5PU9PvuUSnWfqHGmb3T75H5';
    
    // Your counter: joyash-shresthas-team-1978/ar
    const teamNamespace = 'joyash-shresthas-team-1978';
    const counterName = 'ar';
    
    const url = `https://api.counterapi.dev/v2/${teamNamespace}/${counterName}/up`;
    console.log('Fetching counter from:', url);
    
    const response = await fetch(url, { 
      cache: 'no-store',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    console.log('Response status:', response.status);
    
    if (response.ok) {
      const result = await response.json();
      console.log('Counter response:', result);
      // CounterAPI v2 returns: { code, data: { up_count, ... }, message }
      const count = result.data?.up_count || 1247;
      return NextResponse.json({ views: count });
    }

    // Log error response
    const errorText = await response.text();
    console.error('CounterAPI error response:', response.status, errorText);
    return NextResponse.json({ views: 1247 });

  } catch (error) {
    console.error('Counter API error:', error.message);
    return NextResponse.json({ views: 1247 });
  }
}

/* 
// VERCEL ANALYTICS IMPLEMENTATION (commented out)
// Uncomment and use this if you set up Vercel Analytics API access
// Required environment variables:
// - VERCEL_ANALYTICS_ID
// - VERCEL_ACCESS_TOKEN

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const analyticsId = process.env.VERCEL_ANALYTICS_ID;
    const accessToken = process.env.VERCEL_ACCESS_TOKEN;

    if (analyticsId && accessToken) {
      const response = await fetch(
        `https://api.vercel.com/v1/analytics/${analyticsId}/pageviews`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const totalViews = data.pageviews?.reduce((sum, pv) => sum + pv.count, 0) || 0;
        return NextResponse.json({ views: totalViews });
      }
    }

    return NextResponse.json({ 
      views: 1000,
      message: 'Analytics not configured'
    });

  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json({ views: 1000 }, { status: 500 });
  }
}
*/
