# Zapack – Landing Page para Adesivos, Etiquetas e Rótulos

Landing page estática e de alta conversão desenvolvida para o portfólio, com foco em performance, SEO e integrações de marketing. Hospedada no Netlify e mantida neste repositório como projeto de referência técnica.

## Sobre o projeto

Página única (SPA estática) para apresentação comercial da Zapack. Implementação responsiva com Bootstrap 5, CTAs otimizados (WhatsApp) e carrosséis customizados para catálogos. Integrações nativas com RD Station, GA4 e Meta Pixel, além de cabeçalhos de cache e segurança via Netlify.

## Tecnologias e integrações

- HTML5 semântico e acessível (aria-attrs em carrosséis/accordions)
- CSS3 + Bootstrap 5.3 (CDN) e CSS custom em `assets/css/style.css`
- JavaScript vanilla em `assets/js/script.js` + scripts inline críticos
- Integrações de marketing: RD Station Forms, Google Analytics 4 (GA4), Meta Pixel (Facebook Pixel) e Tag Manager (noscript)
- SEO: `sitemap.xml`, `robots.txt` e redirects em `_redirects`
- Deploy e edge: Netlify com `netlify.toml` (headers de segurança e cache imutável para assets)

## Diferenciais técnicos

- Mobile-first com componentes Bootstrap e ajustes finos para UX em telas pequenas
- Carrosséis de produtos otimizados: reflow para mobile, scroll-snap horizontal e indicadores dinâmicos
- CTA WhatsApp em múltiplos pontos (navbar, seção de contato, rodapé e flutuante) usando deep link `wa.me`
- Performance e segurança: cache agressivo para assets, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` e `Permissions-Policy`
- Organização de documentação e versões: diretórios `docs/`, `backup-docs/` e `backup-html-versions/`

## Estrutura do projeto

```
📦 lp-adesivos-rotulos/
├── index.html                  # Página principal (HTML + trechos CSS/JS críticos)
├── netlify.toml                # Headers de segurança/cache e redirects de build
├── _redirects                  # Regras adicionais de redirecionamento
├── sitemap.xml                 # Mapa do site para mecanismos de busca
├── robots.txt                  # Políticas de rastreamento
├── assets/
│   ├── css/
│   │   └── style.css          # Estilos globais
│   ├── js/
│   │   └── script.js          # Interações e ajustes de UI
│   └── images/                # Logos e imagens otimizadas (inclui AVIF/PNG/ICO)
├── docs/                       # Guias técnicos e checklists
├── backup-docs/                # Backups de documentação
├── backup-html-versions/       # Snapshots de versões do HTML
└── lp-adesivos-rotulos.code-workspace
```

## Como executar localmente

- Opção rápida: abra `index.html` no navegador.
- Opção recomendada: sirva como site estático para testar headers relativos de assets.
   - Exemplos: `npx serve .` ou qualquer servidor HTTP estático equivalente.

## Deploy (Netlify)

1) Conectar o repositório no Netlify (ou usar drag-and-drop da pasta do projeto)
2) Publicar diretório: `.` (raiz)
3) Build command: `echo 'Build complete - Static site ready!'` (static-only)
4) Headers e cache já definidos em `netlify.toml`
5) Configurar domínio e HTTPS automáticos

## Links

- 🔗 Site (Netlify): https://zapack.netlify.app
- 💻 Repositório: https://github.com/svlucas7/lp-adesivos-rotulos

## Objetivo no portfólio

Demonstrar implementação de landing page comercial enxuta, bem estruturada e pronta para conversão, com integração a ferramentas de marketing, otimizações de performance e código claro e manutenível.

---

Projeto desenvolvido e mantido por Lucas Silva. Todos os direitos reservados.
