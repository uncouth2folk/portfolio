class DynamicManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.startClock();
        this.updateDate();
        this.updateGreeting();
        this.updateYear();
    }
    
    startClock() {
        const updateClock = () => {
            const now = new Date();
            const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
            const clockElement = document.getElementById('live-clock');
            if (clockElement) clockElement.textContent = time;
        };
        updateClock();
        setInterval(updateClock, 1000);
    }
    
    updateDate() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateElement = document.getElementById('live-date');
        if (dateElement) dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
    
    updateGreeting() {
        const hour = new Date().getHours();
        let greeting;
        if (hour < 12) greeting = '☀️ Good Morning';
        else if (hour < 17) greeting = '🌤️ Good Afternoon';
        else if (hour < 21) greeting = '🌅 Good Evening';
        else greeting = '🌙 Good Night';
        
        const element = document.getElementById('live-greeting');
        if (element) element.textContent = greeting;
    }
    
    updateYear() {
        const element = document.getElementById('current-year');
        if (element) element.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DynamicManager();
});