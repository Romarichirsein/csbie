// Route API Contact - Envoi email via Resend
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  nom: z.string().min(2),
  email: z.string().email(),
  telephone: z.string().optional(),
  objet: z.string().min(5),
  message: z.string().min(20),
});

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not defined in environment variables');
    return NextResponse.json({ error: 'Configuration mail manquante' }, { status: 500 });
  }
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    await resend.emails.send({
      from: 'CSBIE Contact <infos@csbie.org>',
      to: process.env.CONTACT_EMAIL_TO || 'infos@csbie.org',
      subject: `[Contact CSBIE] ${data.objet}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B2D6B; border-bottom: 2px solid #C9A84C; padding-bottom: 10px;">
            Nouveau message - CSBIE
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1B2D6B; width: 30%;">Nom</td>
              <td style="padding: 8px; color: #333;">${data.nom}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 8px; font-weight: bold; color: #1B2D6B;">Email</td>
              <td style="padding: 8px; color: #333;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            ${data.telephone ? `<tr><td style="padding: 8px; font-weight: bold; color: #1B2D6B;">Téléphone</td><td style="padding: 8px; color: #333;">${data.telephone}</td></tr>` : ''}
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 8px; font-weight: bold; color: #1B2D6B;">Objet</td>
              <td style="padding: 8px; color: #333;">${data.objet}</td>
            </tr>
          </table>
          <div style="background-color: #f8f9fa; padding: 16px; border-radius: 8px; border-left: 4px solid #1B2D6B;">
            <p style="font-weight: bold; color: #1B2D6B; margin-top: 0;">Message :</p>
            <p style="color: #333; white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            Ce message a été envoyé depuis le formulaire de contact de csbie.org
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Erreur API contact:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Données invalides', details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}
