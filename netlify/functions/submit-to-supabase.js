const { createClient } = require('@supabase/supabase-js')

// Handler expects env vars: SUPABASE_URL, SUPABASE_KEY, SMS_WEBHOOK_URL (optional)
exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  const body = event.body || ''
  // Netlify form submissions will POST urlencoded form data when using forms
  const params = new URLSearchParams(body)
  const data = Object.fromEntries(params.entries())

  // Initialize Supabase client
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY
  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase env vars')
  } else {
    const supabase = createClient(supabaseUrl, supabaseKey)
    try {
      await supabase.from('loan_applications').insert([{
        name: data.name || null,
        phone: data.phone || null,
        product: data.product || null,
        town: data.town || null,
        message: data.message || null,
        created_at: new Date().toISOString()
      }])
    } catch (err) {
      console.error('Supabase insert error', err)
    }
  }

  // Optionally call an SMS webhook (e.g., Africa's Talking proxy or Twilio)
  if (process.env.SMS_WEBHOOK_URL) {
    try {
      await fetch(process.env.SMS_WEBHOOK_URL, { method: 'POST', body: JSON.stringify({ phone: data.phone, message: 'Received your loan request' }), headers: { 'Content-Type': 'application/json' } })
    } catch (e) {
      console.error('SMS webhook failed', e)
    }
  }

  return { statusCode: 302, headers: { Location: '/thank-you' }, body: 'Submitted' }
}
