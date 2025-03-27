# FSW-Donalds 🍔

🚀 Projeto desenvolvido durante a Full-Stack-Week com a Full Stack Club & o professor Felipe Rocha.

## 📌 Sobre o Projeto

O **FSW-Donalds** é um sistema completo para gerenciamento de pedidos e cardápio de uma hamburgueria, utilizando as melhores práticas de desenvolvimento Full Stack.

### 🎯 Principais Funcionalidades

✅ Autenticação segura com **Next Auth** ✅ Validação de formulários com **Zod** e **React-Hook-Form** ✅ Componentização eficiente utilizando **Shadcn** ✅ Gerenciamento dinâmico de pedidos e cardápio

## 💻 Tecnologias Utilizadas

- **Next.js** (React Framework)
- **TypeScript**
- **Tailwind CSS**
- **Next Auth** (Autenticação)
- **Shadcn** (Componentes UI)
- **Date-fns** (Manipulação de datas)
- **Zod** (Validação de schemas)
- **React-Hook-Form** (Gerenciamento de formulários)
- **Prisma** (ORM para banco de dados)
- **PostgreSQL** (Banco de dados relacional)

## 🚀 Como Rodar o Projeto

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (v16 ou superior)
- PostgreSQL
- Gerenciador de pacotes **npm** ou **yarn**

### 🛠️ Passos para execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/fsw-donalds.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd fsw-donalds
   ```
3. Instale as dependências:
   ```bash
   npm install  # ou yarn install
   ```
4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
     ```env
     DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco"
     NEXTAUTH_SECRET="sua-chave-secreta"
     NEXTAUTH_URL="http://localhost:3000"
     ```
5. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```
6. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev  # ou yarn dev
   ```
7. O projeto estará disponível em `http://localhost:3000`

## 🌍 Deploy

O projeto está hospedado em: [FSW-Donalds Deploy](https://lnkd.in/d822CX2b)

## 📚 Saiba Mais

Para aprender mais sobre Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - Recursos e API do framework.
- [Curso interativo de Next.js](https://nextjs.org/learn) - Aprenda Next.js de forma prática.
- [Repositório do Next.js no GitHub](https://github.com/vercel/next.js) - Para contribuir e acompanhar novidades.

## 🚀 Deploy na Vercel

A maneira mais fácil de hospedar o projeto é pela [Vercel](https://vercel.com/new?utm_medium=default-template\&filter=next.js\&utm_source=create-next-app\&utm_campaign=create-next-app-readme), plataforma oficial do Next.js.

Confira a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e contribuir!

---

Desenvolvido por **Alfredo Corrêa Lima Junior** 🚀

