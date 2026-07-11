export default async function handler(req, res) {
    try {
        const response = await fetch('https://api.github.com/users/samiultasabsakhawat/repos?sort=updated&per_page=5');
        const repos = await response.json();
        
        const data = repos.map(repo => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            stars: repo.stargazers_count,
            updated: repo.updated_at
        }));
        
        res.status(200).json({ repos: data });
    } catch (error) {
        res.status(200).json({ repos: [] });
    }
}