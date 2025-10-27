import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  // Se já estiver logado, redireciona para a página principal
  if (session) {
    redirect("/atendimento/novo");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-lg">
        <div className="text-center">
          <Image
            src="/next.svg"
            alt="Logo"
            width={50}
            height={50}
            className="mx-auto dark:invert"
          />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Entrar no Sistema
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sistema de Atendimento de Enfermagem
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/api/auth/signin"
            className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-4 py-3 text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50"
          >
            <Image
              src="https://www.google.com/favicon.ico"
              alt="Google"
              width={20}
              height={20}
            />
            <span>Entrar com Google</span>
          </Link>
        </div>
      </div>
    </div>
  );
}