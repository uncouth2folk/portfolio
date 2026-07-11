class ContentManager {
    constructor() {
        this.content = {
            about: {
                title: "ABOUT_ME",
                description: "I am Samiul Tasab Sakhawat, a passionate developer weaving the future through code. With expertise spanning web technologies and programming languages, I build digital experiences that push boundaries.",
                skills: ["Creative", "Detail-Oriented", "Problem Solver", "Quick Learner"]
            },
            skills: {
                title: "SKILLS_MATRIX",
                description: "My technical toolkit for digital innovation.",
                categories: [
                    {
                        name: "Web Development",
                        skills: ["HTML5", "CSS3", "Responsive Design"]
                    },
                    {
                        name: "Programming",
                        skills: ["C - System Programming", "Python - Automation"]
                    }
                ]
            },
            social: {
                title: "CONNECT",
                description: "Find me across the digital universe.",
                links: CONFIG.social
            }
        };
    }
    
    renderAllSections(container) {
        let html = '';
        
        // About Section
        html += `
            <section class="content-section left" id="about">
                <div class="content-card">
                    <h2>// ${this.content.about.title}</h2>
                    <p>${this.content.about.description}</p>
                    <div class="skill-tags">
                        ${this.content.about.skills.map((s, i) => 
                            `<span class="skill-tag ${i % 2 === 0 ? 'red' : 'blue'}">${s}</span>`
                        ).join('')}
                    </div>
                </div>
            </section>
        `;
        
        // Skills Section
        html += `
            <section class="content-section right" id="skills">
                <div class="content-card">
                    <h2>// ${this.content.skills.title}</h2>
                    <p>${this.content.skills.description}</p>
                    ${this.content.skills.categories.map(cat => `
                        <h3>[ ${cat.name} ]</h3>
                        <ul>
                            ${cat.skills.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    `).join('')}
                </div>
            </section>
        `;
        
        // Social Section
        html += `
            <section class="content-section left" id="social">
                <div class="content-card">
                    <h2>// ${this.content.social.title}</h2>
                    <p>${this.content.social.description}</p>
                    <div class="social-links">
                        ${Object.entries(this.content.social.links).map(([name, url], i) => `
                            <a href="${url}" target="_blank" class="social-link ${i % 2 === 0 ? 'red' : 'blue'}">
                                ${name}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
        
        container.innerHTML = html;
    }
}

const contentManager = new ContentManager();