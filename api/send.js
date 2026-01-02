// /api/send.js
// Vercel Serverless Function

import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        try {
            const data = await resend.emails.send({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: ['meghnaofficial66@gmail.com'],
                reply_to: email,
                subject: `New Message from ${name}`,
                html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #333;">New Contact Form Submission</h2>
                  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background: #fff; padding: 15px; border-radius: 4px; border: 1px solid #ddd;">${message}</p>
                  </div>
                  <p style="color: #666; font-size: 12px; margin-top: 20px;">Sent from your portfolio website.</p>
                </div>
              `
            });

            return res.status(200).json({ success: true, data });

        } catch (error) {
            console.error('Resend Error:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        // Method not allowed
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
