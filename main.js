import './style.css'
import { links } from './links.json'

window.addEventListener('load', function () {
  ;(async function main() {
    // Set the current year in the #year element
    document.querySelector('#year').textContent = new Date().getFullYear()
  })()

  // Function to create link elements and append them to the #links div
  function createLinkElements(links = []) {
    const linksDiv = document.querySelector('#links')
    links.forEach((link) => {
      const linkElement = document.createElement('a')
      linkElement.classList.add('button_link')
      linkElement.href = link.url
      linkElement.textContent = link.name
      linkElement.target = '_blank'
      linkElement.rel = 'noopener noreferrer'
      linksDiv.appendChild(linkElement)
    })
  }
  createLinkElements(links)
})
