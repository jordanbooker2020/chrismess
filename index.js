const button = document.querySelector('button')

const changeHeading = function() {
  const heading = document.querySelector('p.fancy')
  heading.textContent = 'Scorpion'
}

button.addEventListener('click', changeHeading)
