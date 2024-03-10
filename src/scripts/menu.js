const menu = document.querySelector('.mobile_slash')
const bar = document.querySelector('.menubar')
const crosss = document.querySelector('.cross_mobile')

bar.addEventListener('mousedown', () => {
	menu.style.display = 'block'
})

crosss.addEventListener('mousedown', () => {
	menu.style.display = 'none'
})

menu.addEventListener('scroll', () => {
	document.body.style.overflow = 'hidden'
})

crosss.addEventListener('mousedown', () => {
	document.body.style.overflow = 'scroll'
})
