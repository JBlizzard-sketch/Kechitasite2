# Deploy to Netlify (static export)

1. Install Node 18+
2. Run `npm ci`
3. Run `npm run build` (creates `out/` via next export)
4. Deploy `out/` to Netlify (connect GitHub or drag & drop)
5. Ensure Netlify build command: `npm run build` and publish directory: `out`

Netlify Forms: Contact form uses `data-netlify="true"` and will appear in Netlify when form submissions happen.


# Supabase & Serverless integration

To save form submissions into Supabase and send SMS notifications:

1. Create a Supabase project and create a table `loan_applications` with columns matching the payload.
2. Add the following environment variables in Netlify (Site settings -> Build & deploy -> Environment):
   - SUPABASE_URL
   - SUPABASE_SERVICE_KEY (service role key)
   - SMS_WEBHOOK_URL (optional)
3. The Netlify Function `submit-to-supabase` will be invoked on form submission and store the data.

Note: To enable this, ensure `netlify/functions` is included in your repo and Netlify functions are enabled.
