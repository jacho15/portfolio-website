import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '1 h'),
})

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: Request) {
  try {
    const { name, email, message, phone } = await request.json()

    // Honeypot check — before rate limiting so bots don't consume quota
    if (phone) {
      return NextResponse.json({ success: true, id: 'filtered' })
    }

    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    const { success } = await ratelimit.limit(ip)

    if (!success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <contact@jacob-a-cho.com>',
      to: ['jacobcho99@gmail.com'],
      subject: `Calling Card from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #0D0D0D;
                color: #FAFAFA;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 40px 20px;
              }
              .header {
                background-color: #D80027;
                padding: 20px;
                text-align: center;
                transform: skewX(-5deg);
                margin-bottom: 30px;
              }
              .header h1 {
                margin: 0;
                color: #FAFAFA;
                font-size: 24px;
                letter-spacing: 3px;
                transform: skewX(5deg);
              }
              .card {
                background-color: #1A1A1A;
                border-left: 4px solid #D80027;
                padding: 30px;
                margin-bottom: 20px;
              }
              .label {
                color: #D80027;
                font-size: 12px;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin-bottom: 5px;
              }
              .value {
                color: #FAFAFA;
                font-size: 16px;
                margin-bottom: 20px;
                line-height: 1.6;
              }
              .footer {
                text-align: center;
                color: #666;
                font-size: 12px;
                margin-top: 30px;
              }
              .accent {
                width: 50px;
                height: 4px;
                background-color: #D80027;
                transform: skewX(-20deg);
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>CALLING CARD RECEIVED</h1>
              </div>

              <div class="card">
                <div class="label">CODENAME</div>
                <div class="value">${escapeHtml(name)}</div>

                <div class="label">COORDINATES</div>
                <div class="value">${escapeHtml(email)}</div>

                <div class="accent"></div>

                <div class="label">MESSAGE</div>
                <div class="value">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
              </div>

              <div class="footer">
                Sent from your portfolio contact form
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
