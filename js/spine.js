class SpineSystem {
    constructor() {
        this.wrapper = document.getElementById('spine-wrapper');
        this.currentRotation = 0;
        this.init();
    }
    
    init() {
        // Create spine segments
        for (let i = 0; i < 12; i++) {
            const segment = document.createElement('div');
            segment.className = 'spine-segment';
            segment.style.top = (i * 40) + 'px';
            this.wrapper.appendChild(segment);
        }
        
        this.animate();
        window.addEventListener('scroll', () => this.updateRotation());
    }
    
    updateRotation() {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
        this.targetRotation = progress * 360 * 3;
    }
    
    animate() {
        if (this.targetRotation) {
            this.currentRotation += (this.targetRotation - this.currentRotation) * 0.1;
            this.wrapper.style.transform = `rotateY(${this.currentRotation}deg)`;
        }
        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SpineSystem();
});