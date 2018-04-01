const map = (v, min1, max1, min2, max2) => 
  (v - min1) / (max1 - min1) * (max2 - min2) + min2

const random = (max, min) => Math.floor( Math.random() * (max - min) + min )

window.addEventListener('mousemove', e => {
  const halfWidth  = window.innerWidth / 2
  const halfHeight = window.innerHeight / 2
  const x = e.clientX - halfWidth
  const y = e.clientY - halfHeight
  const eye = document.getElementById('eye')

  console.log(`X: ${x}\nY: ${y}`)

  eye.style.setProperty('--x', map(x, 0, halfWidth,  0, 8))
  eye.style.setProperty('--y', map(y, 0, halfHeight, 0, 8))
}, {passive: true})