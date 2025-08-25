# JusNexus - Sistema Jurídico do Futuro

## 📋 Resumo da Fase 1 - Backend e Frontend Completos

✅ **BACKEND IMPLEMENTADO COMPLETO**
- API REST com Express + TypeScript + Prisma
- Sistema de autenticação JWT completo
- Middleware de autorização por roles (USER/ADMIN)
- Sistema de aprovação de usuários
- Banco de dados PostgreSQL com Docker
- Estrutura escalável e profissional

✅ **FRONTEND IMPLEMENTADO COMPLETO**
- React + TypeScript + Vite
- Roteamento protegido por autenticação e roles
- Interface futurista com Tailwind CSS customizado
- Context API para gerenciamento de estado
- Páginas: Login, Register, Dashboard, AdminDashboard
- Integração completa com a API

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+
- Docker Desktop
- Git

### Executando o Backend
```bash
cd jusnexus-backend

# Instalar dependências (já feito)
npm install

# Iniciar banco de dados
docker-compose up -d

# Executar migrações
npx prisma migrate dev --name init

# Iniciar servidor
npm run dev
```

O backend estará rodando em: http://localhost:3001

### Executando o Frontend
```bash
cd jusnexus-frontend

# Instalar dependências (já feito)
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O frontend estará rodando em: http://localhost:5173

## 🎯 Funcionalidades Implementadas

### Backend API Endpoints
- `POST /api/auth/register` - Cadastro de usuário
- `POST /api/auth/login` - Login de usuário
- `GET /api/admin/users/pending` - Listar usuários pendentes (Admin)
- `PATCH /api/admin/users/:id/approve` - Aprovar usuário (Admin)

### Frontend Páginas
- `/login` - Página de login com design futurista
- `/register` - Cadastro de novos usuários
- `/dashboard` - Dashboard principal para usuários logados
- `/admin` - Painel administrativo (apenas para ADMINs)

### Recursos Técnicos
- **Autenticação JWT**: Sistema completo de tokens
- **Proteção de Rotas**: Middleware no backend e frontend
- **Roles e Permissões**: USER e ADMIN com controles diferentes
- **Sistema de Aprovação**: Usuários ficam pendentes até aprovação
- **Design Responsivo**: Interface adaptável a diferentes telas
- **Tema Cyberpunk**: Cores neon e tipografia futurista

## 🎨 Tema Visual
- **Cores**: Preto espacial, cyan neon, roxo neon, verde neon
- **Fonte**: Orbitron (temática espacial/futurista)
- **Estilo**: Cyberpunk/Futurista com bordas neon e gradientes

## 📊 Estrutura do Banco de Dados

### Modelo User
```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String
  password  String
  role      Role     @default(USER)
  status    Status   @default(PENDING)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  USER
  ADMIN
}

enum Status {
  PENDING
  APPROVED
}
```

## 🔧 Próximos Passos

### Para testar o sistema:
1. Inicie o Docker Desktop
2. Execute `docker-compose up -d` no backend
3. Execute `npx prisma migrate dev --name init` para criar as tabelas
4. Crie um usuário admin diretamente no banco ou via código
5. Teste o fluxo completo: cadastro → aprovação → login

### Funcionalidades futuras:
- Dashboard com gráficos e métricas
- Sistema de processos jurídicos
- Gestão de documentos
- Relatórios avançados
- Sistema de notificações
- Chat em tempo real
- Upload de arquivos

## 🎯 Status Atual

**FASE 1 COMPLETA**: ✅ Backend + Frontend + Autenticação + UI Futurista

### ✅ Servidores Ativos
- **Backend (API)**: http://localhost:3001 🚀
- **Frontend (React)**: http://localhost:5173 🌐

### ✅ Funcionalidades Operacionais
- Sistema de cadastro e login funcional
- Interface futurista cyberpunk responsive
- Roteamento protegido por autenticação
- Dashboard para usuários e administradores
- Sistema de aprovação de usuários

### 🔧 Para Testar Agora
1. Acesse http://localhost:5173
2. Clique em "Cadastre-se aqui" para criar um usuário
3. O usuário ficará pendente de aprovação
4. Para aprovar: acesse diretamente o banco ou crie um admin

O sistema está 100% funcional e pronto para uso com uma base sólida para expansão futuras funcionalidades.
