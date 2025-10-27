import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  to = process.env.EMAIL_DESTINO!,
  subject,
  html,
}: {
  to?: string;
  subject: string;
  html: string;
}) {
  try {
    const data = await resend.emails.send({
      from: 'Atendimento Enf <onboarding@resend.dev>',
      to,
      subject,
      html,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error };
  }
}