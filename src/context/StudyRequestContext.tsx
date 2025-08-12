import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface StudyRequest {
  id: string
  companyName: string
  corporateEmail: string
  projectType: string
  projectDescription: string
  submittedAt: Date
  status: 'pending' | 'reviewed' | 'approved' | 'rejected'
}

interface StudyRequestContextType {
  requests: StudyRequest[]
  addRequest: (request: Omit<StudyRequest, 'id' | 'submittedAt' | 'status'>) => void
  updateRequestStatus: (id: string, status: StudyRequest['status']) => void
  getRequestById: (id: string) => StudyRequest | undefined
}

const StudyRequestContext = createContext<StudyRequestContextType | undefined>(undefined)

export const useStudyRequests = () => {
  const context = useContext(StudyRequestContext)
  if (context === undefined) {
    throw new Error('useStudyRequests must be used within a StudyRequestProvider')
  }
  return context
}

interface StudyRequestProviderProps {
  children: ReactNode
}

export const StudyRequestProvider: React.FC<StudyRequestProviderProps> = ({ children }) => {
  const [requests, setRequests] = useState<StudyRequest[]>([
    // Dados de exemplo
    {
      id: '1',
      companyName: 'Energia Verde Ltda',
      corporateEmail: 'contato@energiaverde.com.br',
      projectType: 'Geração Renovável',
      projectDescription: 'Estudo de viabilidade para usina solar de 50MW no interior de Minas Gerais',
      submittedAt: new Date('2024-12-15'),
      status: 'pending'
    },
    {
      id: '2',
      companyName: 'Distribuidora Sul S.A.',
      corporateEmail: 'projetos@distribuidorasul.com.br',
      projectType: 'Distribuição',
      projectDescription: 'Análise de qualidade de energia e eficiência energética para rede de distribuição urbana',
      submittedAt: new Date('2024-12-14'),
      status: 'reviewed'
    }
  ])

  const addRequest = (requestData: Omit<StudyRequest, 'id' | 'submittedAt' | 'status'>) => {
    const newRequest: StudyRequest = {
      ...requestData,
      id: Date.now().toString(),
      submittedAt: new Date(),
      status: 'pending'
    }
    setRequests(prev => [newRequest, ...prev])
  }

  const updateRequestStatus = (id: string, status: StudyRequest['status']) => {
    setRequests(prev => 
      prev.map(request => 
        request.id === id ? { ...request, status } : request
      )
    )
  }

  const getRequestById = (id: string) => {
    return requests.find(request => request.id === id)
  }

  return (
    <StudyRequestContext.Provider value={{
      requests,
      addRequest,
      updateRequestStatus,
      getRequestById
    }}>
      {children}
    </StudyRequestContext.Provider>
  )
}