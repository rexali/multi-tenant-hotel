import { NextRequest, NextResponse } from 'next/server'
import TenantModel  from'@/app/lib/model.tenant'

export async function GET(request: NextRequest) {
  const subdomain = request.nextUrl.searchParams.get('subdomain')

  console.log('API: Received request for subdomain:', subdomain)

  if (!subdomain) {
    console.log('API: Subdomain is required')
    return NextResponse.json({ error: 'Subdomain is required' }, { status: 400 })
  }

  try {
    const tenant = await TenantModel.findOne({ subdomain })

    console.log('API: Tenant found:', tenant)

    if (!tenant) {
      console.log('API: Tenant not found')
      return NextResponse.json({ error: 'Tenant not found' }, { status: 404 })
    }

    return NextResponse.json(tenant)
  } catch (error) {
    console.error('API: Error fetching tenant:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}