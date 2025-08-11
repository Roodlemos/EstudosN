# Assets Structure

Esta pasta contém todos os recursos estáticos da aplicação NEXO Estudos Elétricos, organizados seguindo as melhores práticas de desenvolvimento.

## Estrutura de Pastas

```
src/assets/
├── images/          # Imagens estáticas (PNG, JPG, WebP)
├── videos/          # Vídeos de background e demonstrações
├── svgs/           # Ícones e ilustrações em formato SVG
├── icons/          # Ícones específicos da aplicação
├── fonts/          # Fontes customizadas
├── index.ts        # Arquivo central de exportação
└── README.md       # Esta documentação
```

## Arquivos Criados

### SVGs
- **nexo-logo.svg**: Logo oficial da empresa com gradiente e efeitos
- **electrical-grid-animated.svg**: Grade elétrica animada para background decorativo

### Ícones
- **electrical-studies.svg**: Ícone para estudos elétricos
- **protection-systems.svg**: Ícone para sistemas de proteção
- **power-analysis.svg**: Ícone para análise de potência

## Como Usar

### Importação
```typescript
import { svgs, icons, images, videos, fonts } from '../assets'
```

### Uso em Componentes
```tsx
// SVG Logo
<img src={svgs.nexoLogo} alt="NEXO Logo" className="w-10 h-10" />

// Ícones de serviços
<img src={icons.electricalStudies} alt="Estudos Elétricos" className="w-8 h-8" />
```

### Hook de Assets
```tsx
import { useAssets, useAssetUrl } from '../hooks/useAssets'

// Carregar assets críticos
const { isLoading, progress } = useAssets()

// Verificar URL de asset com fallback
const { url, isLoaded } = useAssetUrl('/path/to/asset.svg', '/fallback.svg')
```

## Gerenciamento de Assets

### Assets Críticos
Os assets marcados como críticos são pré-carregados automaticamente:
- Logo da empresa
- Ícones principais dos serviços
- SVG animado da grade elétrica

### Lazy Loading
Assets não críticos são carregados sob demanda para otimizar a performance inicial.

### Fallbacks
Todos os assets possuem fallbacks apropriados em caso de falha no carregamento.

## Convenções

### Nomenclatura
- Use kebab-case para nomes de arquivos: `electrical-studies.svg`
- Use camelCase para exports: `electricalStudies`

### Formatos Recomendados
- **Ícones**: SVG (escalável, pequeno)
- **Imagens**: WebP com fallback PNG/JPG
- **Vídeos**: MP4 com fallback WebM
- **Fontes**: WOFF2 com fallback WOFF

### Otimização
- SVGs são otimizados e minificados
- Imagens são comprimidas sem perda de qualidade
- Vídeos são otimizados para web

## Performance

### Preload
Assets críticos são pré-carregados para melhor UX:
```typescript
export const criticalAssets = [
  svgs.nexoLogo,
  svgs.electricalGridAnimated,
  icons.electricalStudies,
  icons.protectionSystems,
  icons.powerAnalysis
]
```

### Lazy Loading
Assets não críticos são carregados quando necessário.

### Caching
Todos os assets são configurados para cache otimizado no navegador.

## Manutenção

### Adicionando Novos Assets
1. Adicione o arquivo na pasta apropriada
2. Exporte no `index.ts`
3. Adicione aos `criticalAssets` se necessário
4. Atualize esta documentação

### Removendo Assets
1. Remova o arquivo
2. Remova a exportação do `index.ts`
3. Remova dos `criticalAssets` se aplicável
4. Verifique se não há referências no código