const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// Sichqoncha pozitsiyasini saqlash uchun
const mouse = {
    x: width / 2,
    y: height / 2
};

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
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

// BU FUNKSIYA ENDI MOUSE VA PULSE'NI HISOBLAYDI
function getHeartPosition(t, pulse = 1) {
    const scale = Math.min(width, height) * 0.035 * pulse; // Pulsatsiya uchun o'lchamni o'zgartiramiz
    // Markaz sifatida sichqoncha koordinatalarini ishlatamiz
    const x = mouse.x + 16 * Math.pow(Math.sin(t), 3) * scale;
    const y = mouse.y - (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * scale;
    return { x, y };
}

function animate() {
    // Orqa fonni o'chirib, "iz" effektini hosil qilamiz
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);

    const time = performance.now() * 0.0005;

    // RANG O'ZGARISHI UCHUN
    const hue = (performance.now() * 0.05) % 360;
    const color = `hsla(${hue}, 100%, 60%, 0.7)`;
    const shadowColor = `hsla(${hue}, 100%, 50%, 1)`;
    
    // PULSATSIYA UCHUN
    const pulse = 1 + 0.1 * Math.sin(time * 5);

    particles.forEach((p, index) => {
        const angle = (index / particleCount) * Math.PI * 2;
        const target = getHeartPosition(angle + time, pulse); // puls'ni funksiyaga yuboramiz

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
        ctx.fillStyle = color; // Dinamik rangni ishlatamiz
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = 10;
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
