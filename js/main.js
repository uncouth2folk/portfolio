class PortfolioApp {
    constructor() {
        this.init();
    }
    
    init() {
        this.initTypewriter();
        this.renderContent();
        this.initAnimations();
    }
    
    initTypewriter() {
        const texts = CONFIG.typewriterTexts;
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const element = document.getElementById('typewriter-text');
        
        const type = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                element.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                element.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => { isDeleting = true; }, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            
            setTimeout(type, isDeleting ? 50 : 100);
        };
        
        type();
    }
    
    renderContent() {
        const container = document.getElementById('dynamic-content');
        if (container) contentManager.renderAllSections(container);
    }
    
    initAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        
        document.querySelectorAll('.content-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.8s ease';
            observer.observe(card);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});