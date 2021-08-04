const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClass();
        panel.classList.add('active')
    })
})

function removeClass() {
    panels.forEach(item => item.classList.remove('active'))
}