# Sistema de Atendimento de Enfermagem

Sistema para gerenciamento de atendimentos de enfermagem com autenticação Google e envio de relatórios por email.

## Requisitos

- Node.js 18 ou superior
- NPM ou Yarn
- Conta Google Cloud Platform para autenticação
- Conta no Resend para envio de emails

## Configuração

1. Clone o repositório:
```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd atendimento-enf
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env.local`
   - Preencha as variáveis com seus valores

### Configurando o Google OAuth

1. Acesse o [Google Cloud Console](https://console.cloud.google.com)
2. Crie um novo projeto ou selecione um existente
3. Ative a API do Google OAuth
4. Configure as credenciais OAuth:
   - Tipo: Aplicativo Web
   - Origens JavaScript autorizadas: `http://localhost:3000`
   - URIs de redirecionamento autorizadas: `http://localhost:3000/api/auth/callback/google`
5. Copie o Client ID e Client Secret para o arquivo `.env.local`

### Configurando o Resend

1. Crie uma conta no [Resend](https://resend.com)
2. Gere uma API Key
3. Copie a API Key para o arquivo `.env.local`

## Executando o projeto

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

2. Acesse o sistema em `http://localhost:3000`

## Funcionalidades

- Login com Google
- Cadastro de atendimentos com:
  - Nome do paciente
  - Idade
  - Sexo
  - Receituário
- Envio de relatórios por email
- Interface responsiva com Tailwind CSS

## Estrutura do Projeto

```
/app
  /api
    /auth - Configuração do NextAuth
    /enviar-relatorio - API de envio de relatórios
  /atendimento
    /novo - Página de novo atendimento
  /login - Página de login
/lib
  email.ts - Configuração do Resend
```

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- NextAuth.js
- Tailwind CSS
- Resend

## Variáveis de Ambiente Necessárias

| Variável | Descrição |
|----------|-----------|
| GOOGLE_CLIENT_ID | ID do cliente OAuth do Google |
| GOOGLE_CLIENT_SECRET | Chave secreta do OAuth do Google |
| RESEND_API_KEY | Chave API do Resend |
| EMAIL_DESTINO | Email padrão para envio (opcional) |
| NEXTAUTH_URL | URL base do aplicativo |
| NEXTAUTH_SECRET | Chave secreta para NextAuth |

## Desenvolvimento

Para contribuir com o projeto:

1. Crie um fork
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Crie um Pull Request
