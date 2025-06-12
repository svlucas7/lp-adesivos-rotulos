# Zap Gráfica - Performance Budget
# Use este arquivo para monitorar a performance da landing page

## Performance Targets:
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Time to Interactive (TTI)**: < 3.5s

## Lighthouse Scores Target:
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95

## Image Optimization:
- Logo verde: 52x52px (navbar)
- Logo branco: 48x48px (footer)
- Comprimir todas as imagens para WebP quando possível
- Lazy loading implementado para imagens fora da viewport

## CSS Optimization:
- Critical CSS inlined
- Non-critical CSS lazy loaded
- CSS variables para cores consistentes
- Transições otimizadas com will-change

## JavaScript Optimization:
- Event listeners com passive: true quando possível
- Intersection Observer para animações
- RequestAnimationFrame para scroll events
- Debounce/throttle em eventos de alta frequência

## Teste de Performance:
```bash
# Lighthouse CLI
npx lighthouse https://zapgrafica.com.br --output json --output html --output-path ./lighthouse-report

# WebPageTest
# https://www.webpagetest.org/

# Google PageSpeed Insights
# https://pagespeed.web.dev/
```

## Checklist de Deploy:
- [ ] Testar em mobile e desktop
- [ ] Verificar todas as imagens carregam
- [ ] Validar links de WhatsApp e contato
- [ ] Testar formulários (se houver)
- [ ] Verificar meta tags e Schema.org
- [ ] Confirmar redirects funcionando
- [ ] Testar performance com Lighthouse
