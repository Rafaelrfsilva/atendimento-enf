"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NovoAtendimentoPage() {
  const router = useRouter();
  const [enviando, setEnviando] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    sexo: "",
    receituario: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    try {
      const response = await fetch("/api/enviar-relatorio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Relatório enviado com sucesso!");
        setFormData({
          nome: "",
          idade: "",
          sexo: "",
          receituario: "",
          email: "",
        });
      } else {
        throw new Error("Erro ao enviar relatório");
      }
    } catch (error) {
      alert("Erro ao enviar relatório. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">Novo Atendimento</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome do Paciente
            </label>
            <input
              type="text"
              required
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Idade
            </label>
            <input
              type="number"
              required
              min="0"
              max="150"
              value={formData.idade}
              onChange={(e) =>
                setFormData({ ...formData, idade: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sexo
            </label>
            <select
              required
              value={formData.sexo}
              onChange={(e) =>
                setFormData({ ...formData, sexo: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail para envio
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Receituário
          </label>
          <textarea
            required
            rows={10}
            value={formData.receituario}
            onChange={(e) =>
              setFormData({ ...formData, receituario: e.target.value })
            }
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={enviando}
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
          >
            {enviando ? "Enviando..." : "Enviar Relatório"}
          </button>
        </div>
      </form>
    </div>
  );
}