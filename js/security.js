class SecurityManager {
    constructor() {
        this.init();
    }
    
    init() {
        console.log('%c[SECURITY] Systems Active', 'color: #00ff00;');
        console.log('%c[DOMAIN] sakhawat.pro.bd', 'color: #00e5ff;');
    }
    
    sanitizeInput(input) {
        if (typeof input !== 'string') return input;
        return input.replace(/<[^>]*>/g, '').trim();
    }
}

const securityManager = new SecurityManager();