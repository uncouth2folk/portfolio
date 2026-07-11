export default function handler(req, res) {
    const now = new Date();
    const hour = now.getHours();
    
    let status = "Building the future";
    if (hour < 12) status = "Morning coding session";
    else if (hour < 17) status = "Active development mode";
    else if (hour < 21) status = "Evening creative work";
    else status = "Night owl coding";
    
    res.status(200).json({
        name: "Samiul Tasab Sakhawat",
        status: status,
        available: true,
        lastUpdate: now.toISOString(),
        skills: ["HTML5", "CSS3", "C", "Python"],
        social: {
            github: "https://github.com/samiultasabsakhawat",
            linkedin: "https://linkedin.com/in/samiultasabsakhawat"
        }
    });
}