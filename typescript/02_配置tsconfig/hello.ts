export const hello = 'my name is hello';

function fn(a, b) {
  return a + b
}

function fn1(this: Window) {
  console.log(this);
}


let box = document.getElementById('box');
box.addEventListener('click', () => {
  console.log('box')
})