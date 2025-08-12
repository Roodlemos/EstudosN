export interface EmailData {
  companyName: string
  corporateEmail: string
  projectType: string
  projectDescription: string
}

export const sendStudyRequestEmail = async (data: EmailData): Promise<boolean> => {
  // Simulação de envio de email
  // Em um ambiente real, aqui seria feita a integração com um serviço de email
  // como SendGrid, Nodemailer, ou outro provedor
  
  console.log('Enviando email para estudos@nexoestudos.com.br...')
  console.log('Dados da solicitação:', data)
  
  // Simula delay de rede
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Simula sucesso (95% de chance de sucesso)
  const success = Math.random() > 0.05
  
  if (success) {
    console.log('Email enviado com sucesso!')
  } else {
    console.error('Falha no envio do email')
  }
  
  return success
}

export const formatEmailContent = (data: EmailData): string => {
  return `
Nova Solicitação de Estudo Elétrico

Empresa: ${data.companyName}
Email Corporativo: ${data.corporateEmail}
Tipo de Projeto: ${data.projectType}
Descrição do Projeto: ${data.projectDescription}

Data da Solicitação: ${new Date().toLocaleString('pt-BR')}

---
Este email foi enviado automaticamente através do site da Nexo Estudos Elétricos.
  `.trim()
}