
const panels = document.querySelectorAll('.panel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');

let activeIndex = 1;

prev.addEventListener('click', () => {
  activeIndex--;
  update();
})
next.addEventListener('click', () => {
  activeIndex++;
  update();
})

function update() {
  panels.forEach((panel, index) => {
    if (index < activeIndex) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  })

  progress.style.width = (activeIndex - 1) / (panels.length - 1) * 100 + '%';

  if (activeIndex == panels.length) {
    next.disabled = true;
  } else if (activeIndex == 1) {
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}