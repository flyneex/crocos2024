const modal = document.querySelector('.modal')
const btn = document.querySelector('.imodal')
const cross = document.querySelector('.cross')

btn.addEventListener('mousedown', () => {
	modal.style.display = 'block'
})

cross.addEventListener('mousedown', () => {
	modal.style.display = 'none'
})

modal.addEventListener('scroll', () => {
	document.body.style.overflow = 'hidden'
})

cross.addEventListener('mousedown', () => {
	document.body.style.overflow = 'scroll'
})
