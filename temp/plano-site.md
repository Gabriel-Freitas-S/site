# Plano para Site Pessoal Profissional

## Tecnologias
- Next.js 14 (App Router)
- shadcn/ui para componentes de UI
- Tailwind CSS para estilização
- TypeScript para type safety

## Estrutura de Páginas
1. **Página Inicial (Home)**
   - Hero section com foto profissional e breve introdução
   - Call-to-action para seções importantes
   - Resumo das principais habilidades

2. **Experiência Profissional**
   - Timeline interativa mostrando experiências anteriores
   - Detalhes sobre responsabilidades e conquistas em cada posição
   - Logos das empresas onde trabalhou

3. **Certificações**
   - Grid de certificados com imagens
   - Detalhes sobre cada certificação
   - Links para verificação (quando disponível)
   - Organização por categorias/tecnologias

4. **Habilidades**
   - Seção organizada por categorias (Frontend, Backend, etc.)
   - Visualização do nível de proficiência
   - Tecnologias e ferramentas dominadas

## Recursos Técnicos
1. **Performance**
   - Otimização de imagens
   - Loading states com Suspense
   - Server Components para melhor SEO

2. **Design**
   - Theme switcher (Light/Dark mode)
   - Layout responsivo
   - Animações suaves
   - UI consistente com shadcn/ui

3. **Estrutura de Diretórios**
```
src/
  ├── app/
  │   ├── page.tsx (Home)
  │   ├── experience/
  │   ├── certifications/
  │   └── skills/
  ├── components/
  │   ├── ui/ (shadcn components)
  │   └── custom/ (componentes específicos)
  ├── lib/
  │   └── utils/
  └── types/
```

## Funcionalidades Adicionais
- Filtros para certificações
- Possibilidade de download do currículo em PDF
- Integração com redes profissionais (LinkedIn, GitHub)
- Formulário de contato
- SEO otimizado
- Analytics para tracking de visitas

## Próximos Passos
1. Setup inicial do projeto com Next.js
2. Configuração do shadcn/ui e Tailwind
3. Desenvolvimento da estrutura base
4. Implementação página por página
5. Testes e otimizações
6. Deploy