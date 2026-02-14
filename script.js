onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const video = document.getElementById('bg-video');
const btn = document.getElementById('startBtn');

btn.addEventListener('click', () => {
    video.play().catch(err => console.log(err));
    btn.style.display = 'none';
});
