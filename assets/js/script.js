// Zap Gráfica - JavaScript Interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header com efeito glassmorphism no scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('header-glass');
            header.classList.remove('bg-white');
        } else {
            header.classList.remove('header-glass');
            header.classList.add('bg-white');
        }
    });

    // Animação de fade-in quando elementos entram na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos os cards e seções
    document.querySelectorAll('.card-hover, .highlight-box, .section').forEach(el => {
        observer.observe(el);
    });

    // Contador animado para números (se houver)
    function animateNumbers() {
        const numbers = document.querySelectorAll('.animate-number');
        numbers.forEach(num => {
            const finalNumber = parseInt(num.dataset.number);
            let currentNumber = 0;
            const increment = finalNumber / 50;
            
            const counter = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    num.textContent = finalNumber;
                    clearInterval(counter);
                } else {
                    num.textContent = Math.floor(currentNumber);
                }
            }, 50);
        });
    }

    // Efeito de parallax suave no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.gradient-hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Adicionar classe de animação aos cards quando carregam
    setTimeout(() => {
        document.querySelectorAll('.card-hover').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        });
    }, 500);    // Click tracking para CTAs (para analytics futuros)
    document.querySelectorAll('.gradient-cta, .btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log(`CTA Clicked: ${buttonText}`);
            // Aqui você pode adicionar Google Analytics ou outro tracking
        });
    });

    // Preloader simples
    function hidePreloader() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 300);
        }
    }

    // Esconder preloader quando tudo carregar
    window.addEventListener('load', hidePreloader);

    // Lazy loading para imagens (quando adicionar)
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));    // Hover effect nos produtos - mudança de cor dinâmica
    document.querySelectorAll('.card-hover').forEach((card, index) => {
        const colors = ['var(--zap-green)', 'var(--zap-blue)'];
        const color = colors[index % colors.length];
        
        card.addEventListener('mouseenter', function() {
            this.style.setProperty('--hover-color', color);
        });
    });

    // Tooltip simples para botões
    function createTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            pointer-events: none;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        
        element.addEventListener('mouseenter', function(e) {
            document.body.appendChild(tooltip);
            tooltip.style.left = e.pageX + 'px';
            tooltip.style.top = (e.pageY - 30) + 'px';
            tooltip.style.opacity = '1';
        });
        
        element.addEventListener('mouseleave', function() {
            if (tooltip.parentNode) {
                tooltip.parentNode.removeChild(tooltip);
            }
        });
    }

    // Adicionar tooltips aos botões WhatsApp
    document.querySelectorAll('[href*="whatsapp"], .whatsapp-float').forEach(btn => {
        createTooltip(btn, 'Fale conosco no WhatsApp!');
    });

});
