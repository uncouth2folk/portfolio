class APIManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.fetchGitHubData();
        this.trackVisitor();
        this.hideLoader();
    }
    
    async fetchGitHubData() {
        try {
            const response = await fetch('https://api.github.com/users/samiultasabsakhawat/repos?sort=updated&per_page=5');
            const repos = await response.json();
            this.displayRepos(repos);
        } catch (error) {
            console.log('GitHub data unavailable');
        }
    }
    
    displayRepos(repos) {
        const container = document.getElementById('github-repos');
        if (!container || !repos.length) return;
        
        container.innerHTML = repos.map(repo => `
            <div class="repo-card">
                <div class="repo-name">
                    <a href="${repo.html_url}" target="_blank" style="color: #00e5ff; text-decoration: none;">
                        ${repo.name}
                    </a>
                </div>
                <div class="repo-desc">${repo.description || 'No description'}</div>
                <div class="repo-stats">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🔄 ${repo.updated_at.split('T')[0]}</span>
                </div>
            </div>
        `).join('');
    }
    
    trackVisitor() {
        let count = parseInt(localStorage.getItem('visitorCount') || '0');
        count++;
        localStorage.setItem('visitorCount', count);
        
        const element = document.getElementById('visitor-count');
        if (element) element.textContent = count;
    }
    
    hideLoader() {
        setTimeout(() => {
            const loader = document.getElementById('loading-screen');
            if (loader) loader.classList.add('hidden');
        }, 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new APIManager();
});