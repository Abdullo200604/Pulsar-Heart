/* script.js fayliga saqlang */
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

const particles = [];
const particleCount = 4000; // Zarrachalar soni

// Har bir zarracha uchun obyekt yaratamiz
for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        size: Math.random() * 0.5 + 0.2
    });
}

// Nur effektini yaratish uchun
ctx.fillStyle = 'rgba(255, 60, 60, 0.7)';
ctx.shadowColor = 'rgba(255, 0, 0, 1)';
ctx.shadowBlur = 10;

function getHeartPosition(t) {
    // Yurak shakli uchun parametrik tenglama
    // O'lcham va pozitsiyani o'zgartirish uchun koeffitsientlarni o'zgartirishingiz mumkin
    const scale = Math.min(width, height) * 0.035;
    const x = width / 2 + 16 * Math.pow(Math.sin(t), 3) * scale;
    const y = height / 2 - (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * scale;
    return { x, y };
}

function animate() {
    // Orqa fonni o'chirib, "iz" effektini hosil qilamiz
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);

    // Har bir zarrachani yangilaymiz va chizamiz
    const time = performance.now() * 0.0005;

    particles.forEach((p, index) => {
        const angle = (index / particleCount) * Math.PI * 2;
        const target = getHeartPosition(angle + time);

        // Zarrachani yurak shakli tomon harakatlantiramiz
        p.vx += (target.x - p.x) * 0.01;
        p.vy += (target.y - p.y) * 0.01;
        
        // "Havo" qarshiligi effekti
        p.vx *= 0.9;
        p.vy *= 0.9;

        p.x += p.vx;
        p.y += p.vy;

        // Zarrachani chizish
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 60, 60, 0.7)';
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
