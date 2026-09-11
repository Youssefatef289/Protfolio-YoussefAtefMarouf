import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const clean = (value: unknown, limit = 200) =>
  typeof value === 'string' ? value.trim().slice(0, limit) : ''

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const firstName = clean(body.firstName)
    const lastName = clean(body.lastName)
    const email = clean(body.email)
    const service = clean(body.service)
    const date = clean(body.date, 30)
    const time = clean(body.time, 30)
    const country = clean(body.country)
    const message = clean(body.message, 4000)

    if (!firstName || !email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Please provide your name and a valid email.' }, { status: 400 })
    }

    const user = process.env.GMAIL_USER
    const pass = process.env.GMAIL_APP_PASSWORD
    if (!user || !pass) {
      console.error('Missing Gmail contact-form environment variables.')
      return NextResponse.json({ error: 'Email service is not configured yet.' }, { status: 503 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    })

    const details = [
      ['Name', `${firstName} ${lastName}`.trim()], ['Email', email], ['Service', service],
      ['Preferred date', date], ['Preferred time', time], ['Country', country], ['Message', message],
    ].filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join('\n')

    await transporter.sendMail({
      from: `Website contact form <${user}>`,
      to: user,
      replyTo: email,
      subject: `New website inquiry from ${firstName}${lastName ? ` ${lastName}` : ''}`,
      text: details,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact-form delivery failed:', error)
    return NextResponse.json({ error: 'Unable to send your message. Please try again later.' }, { status: 500 })
  }
}
