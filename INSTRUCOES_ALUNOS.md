# Instruções para Executar o Projeto

Olá! Este é o Sistema de Atendimento de Enfermagem. Siga os passos abaixo para executar o projeto em seu computador.

## Pré-requisitos

Antes de começar, você precisa ter instalado em seu computador:
1. Node.js (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
2. Visual Studio Code - [Download aqui](https://code.visualstudio.com/)
3. Git - [Download aqui](https://git-scm.com/downloads)

## Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/SEU-USUARIO/atendimento-enf.git
   cd atendimento-enf
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   - Crie um arquivo chamado `.env.local` na raiz do projeto
   - Copie o conteúdo do arquivo `.env.example`
   - Preencha com as credenciais que o professor fornecerá

4. **Inicie o projeto**
   ```bash
   npm run dev
   ```

5. **Acesse o sistema**
   - Abra seu navegador
   - Acesse http://localhost:3000
   - Faça login com sua conta Google
   - Comece a usar!

## Em Caso de Problemas

Se você encontrar algum problema:
1. Verifique se todos os pré-requisitos estão instalados
2. Confirme se todas as variáveis de ambiente estão configuradas
3. Tente deletar a pasta `node_modules` e o arquivo `package-lock.json` e execute `npm install` novamente
4. Se o problema persistir, entre em contato com o professor

## Funcionalidades Disponíveis

- Login com conta Google
- Cadastro de novo atendimento
- Preenchimento de dados do paciente
- Envio de relatório por email

Bom trabalho!