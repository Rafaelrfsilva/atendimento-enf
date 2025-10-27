import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  // Verifica se o usuário está autenticado
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse(JSON.stringify({ error: "Não autorizado" }), {
      status: 401,
    });
  }

  try {
    const body = await request.json();
    const { nome, idade, sexo, receituario, email } = body;

    // Formata o HTML do e-mail
    const html = `
      <h1>Relatório de Atendimento</h1>
      <p><strong>Nome do Paciente:</strong> ${nome}</p>
      <p><strong>Idade:</strong> ${idade}</p>
      <p><strong>Sexo:</strong> ${sexo === "M" ? "Masculino" : "Feminino"}</p>
      <h2>Receituário</h2>
      <p>${receituario.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Este relatório foi gerado automaticamente pelo Sistema de Atendimento de Enfermagem.</small></p>
    `;

    // Envia o e-mail
    await sendEmail({
      to: email,
      subject: `Relatório de Atendimento - ${nome}`,
      html,
    });

    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return new NextResponse(
      JSON.stringify({ error: "Erro ao enviar relatório" }),
      {
        status: 500,
      }
    );
  }
}