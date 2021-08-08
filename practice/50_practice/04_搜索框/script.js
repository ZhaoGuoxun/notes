const wrap = document.querySelector('.wrap');
const btn = document.querySelector('.btn');
const input = document.querySelector('.search');

btn.addEventListener('click', () => {
  if (wrap.classList.contains('active')) {
    wrap.classList.remove('active');
  } else {
    wrap.classList.add('active');
    input.focus();
  }
})
