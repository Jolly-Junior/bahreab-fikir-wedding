import { NextRequest, NextResponse } from 'next/server'
import { weddingConfig } from '@/lib/config'
import axios from 'axios'

interface RSVPData {
  fullName: string
  email: string
  phone: string
  partySize: number
  relationship: string
  dietaryRestrictions: string
  qrCode: string
}

export async function POST(req: NextRequest) {
  try {
    const body: RSVPData = await req.json()

    // Validate required fields
    if (!body.fullName || !body.email || !body.phone || !body.partySize) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to guest via Web3Forms
    const guestEmailData = {
      access_key: weddingConfig.web3forms.accessKey,
      name: body.fullName,
      email: body.email,
      subject: `Your ${weddingConfig.couple.bride} & ${weddingConfig.couple.groom} Wedding Invitation Pass`,
      message: `Dear ${body.fullName},

Thank you for confirming your attendance at our wedding celebration!

Wedding Details:
Date: June 25, 2026
Location: ${weddingConfig.location.city}, ${weddingConfig.location.country}

Party Size: ${body.partySize}
Relationship: ${body.relationship}
${body.dietaryRestrictions ? `Dietary Restrictions: ${body.dietaryRestrictions}` : ''}

Your unique QR code pass has been generated. Please bring it with you for check-in.

We look forward to celebrating with you!

Warm regards,
${weddingConfig.couple.bride} & ${weddingConfig.couple.groom}`,
      from_name: `${weddingConfig.couple.bride} & ${weddingConfig.couple.groom} Wedding`,
    }

    // Send email to admin via Web3Forms
    const adminEmailData = {
      access_key: weddingConfig.web3forms.accessKey,
      name: 'Wedding Admin',
      email: weddingConfig.admin.email,
      subject: `New RSVP: ${body.fullName}`,
      message: `New RSVP Submission:

Guest Name: ${body.fullName}
Email: ${body.email}
Phone: ${body.phone}
Party Size: ${body.partySize}
Relationship: ${body.relationship}
Dietary Restrictions: ${body.dietaryRestrictions || 'None'}
Submission Time: ${new Date().toLocaleString()}`,
      from_name: `${weddingConfig.couple.bride} & ${weddingConfig.couple.groom} Wedding System`,
    }

    // Send both emails in parallel
    const [guestResponse, adminResponse] = await Promise.all([
      axios.post(weddingConfig.web3forms.apiEndpoint, guestEmailData),
      axios.post(weddingConfig.web3forms.apiEndpoint, adminEmailData),
    ])

    // Check if both emails were sent successfully
    if (guestResponse.status === 200 && adminResponse.status === 200) {
      return NextResponse.json(
        {
          success: true,
          message: 'RSVP received and confirmation email sent',
          guestName: body.fullName,
          partySize: body.partySize,
        },
        { status: 200 }
      )
    } else {
      throw new Error('Email service returned error')
    }
  } catch (error: any) {
    console.error('[v0] Email sending error:', error.message)
    console.error('[v0] Error details:', error.response?.data || error)

    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error.message,
      },
      { status: 500 }
    )
  }
}
