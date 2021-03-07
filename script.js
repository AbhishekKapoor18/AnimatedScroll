const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.5;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else if (document.documentElement.scrollHeight==window.innerHeight+window.scrollY) {
            box.classList.add("show")
            console.log("bottom reached")
          } else {
            box.classList.remove('show')
        }
    })
}
