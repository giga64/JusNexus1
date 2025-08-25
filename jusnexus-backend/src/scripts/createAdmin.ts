import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    // Verificar se já existe um admin
    const existingAdmin = await prisma.user.findFirst({
      where: { role: 'ADMIN' }
    });

    if (existingAdmin) {
      console.log('⚠️  Admin já existe!');
      console.log('📧 Email:', existingAdmin.email);
      console.log('🔑 Se esqueceu a senha, delete este usuário e execute o script novamente.');
      return;
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const admin = await prisma.user.create({
      data: {
        name: 'Admin JusNexus',
        email: 'admin@jusnexus.com',
        password: hashedPassword,
        role: 'ADMIN',
        status: 'APPROVED'
      }
    });

    console.log('✅ Admin criado com sucesso!');
    console.log('👤 Nome:', admin.name);
    console.log('📧 Email: admin@jusnexus.com');
    console.log('🔑 Senha: admin123');
    console.log('');
    console.log('🚀 Agora você pode fazer login no sistema!');
    console.log('🌐 Frontend: http://localhost:5174');
    
  } catch (error: any) {
    if (error.code === 'P2002') {
      console.log('❌ Este email já está em uso!');
    } else {
      console.error('❌ Erro ao criar admin:', error);
    }
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
