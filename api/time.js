export default function handler(req, res) {
    const now = new Date();
    
    res.status(200).json({
        time: now.toLocaleTimeString('en-US', { hour12: false }),
        date: now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        hour: now.getHours(),
        greeting: getGreeting(now.getHours()),
        timestamp: now.getTime()
    });
}

function getGreeting(hour) {
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    if (hour < 21) return 'Good Evening';
    return 'Good Night';
}