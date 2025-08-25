const images = [
  'images/photo1.jpeg',
  'images/photo2.jpeg',
  'images/photo3.jpeg',
  'images/photo4.jpeg',
];
let currentIndex = 0;

function changeImage() {
  const img = document.getElementById('slideshow-image');
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
}
setInterval(changeImage, 3000);

// Music player
function playMusic() {
  document.getElementById('birthday-audio').play();
}

// Confetti effect
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function randomColor() {
  const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createConfetti() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: Math.random() * 8 + 2,
    speed: Math.random() * 3 + 2,
    color: randomColor()
  };
}

for (let i = 0; i < 150; i++) {
  confetti.push(createConfetti());
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.speed;

    if (c.y > canvas.height) {
      c.y = 0;
      c.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}
drawConfetti();
