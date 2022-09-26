const image = document.getElementById('im')
const rekt = image.getBoundingClientRect()
const imageX = rekt.left + rekt.width / 2
const imageY = rekt.top + rekt.height / 2
const eyesContainer = document.querySelectorAll('.eye-container')

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const angleDeg = angle(mouseX, mouseY, imageX, imageY)
    eyesContainer.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`
        image.style.filter = `hue-rotate(${angleDeg}deg)`
    })
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI
    return deg
}