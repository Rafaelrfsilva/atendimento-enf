import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/next.svg"
              alt="Logo"
              width={30}
              height={30}
              className="dark:invert"
            />
            <span className="text-lg font-semibold">Sistema de Atendimento</span>
          </div>
          <div>
            {session ? (
              <div className="flex items-center gap-4">
                <span>Olá, {session.user?.name}</span>
                <Link
                  href="/api/auth/signout"
                  className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                  Sair
                </Link>
              </div>
            ) : (
              <Link
                href="/api/auth/signin"
                className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Entrar com Google
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Novo Atendimento</h2>
            <p className="mb-4 text-gray-600">
              Iniciar um novo atendimento de enfermagem
            </p>
            <Link
              href="/atendimento/novo"
              className="inline-block rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Iniciar
            </Link>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Histórico</h2>
            <p className="mb-4 text-gray-600">
              Visualizar histórico de atendimentos
            </p>
            <Link
              href="/atendimento/historico"
              className="inline-block rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              Visualizar
            </Link>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Relatórios</h2>
            <p className="mb-4 text-gray-600">
              Gerar relatórios de atendimentos
            </p>
            <Link
              href="/relatorios"
              className="inline-block rounded-md bg-purple-500 px-4 py-2 text-white hover:bg-purple-600"
            >
              Gerar
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t">
        <div className="container mx-auto py-4 text-center text-sm text-gray-600">
          © 2025 Sistema de Atendimento de Enfermagem. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
