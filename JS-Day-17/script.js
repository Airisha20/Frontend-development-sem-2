localStorage.setItem ('username', 'JohnDoe')
sessionStorage.setItem ('theme', 'dark')

const username = localStorage.getItem('username')
const theme = sessionStorage.getItem('theme')

console.log('Username:', username)
console.log('Theme:', theme)

