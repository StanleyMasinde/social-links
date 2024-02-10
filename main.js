import './style.css'
window.addEventListener('load', function () {
  ;(async function main() {
    // Set the current year in the #year element
    document.querySelector('#year').textContent = new Date().getFullYear()
    await fetchLinks()
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

  // Async function to fetch links data from links.json
  async function fetchLinks() {
    try {
      const response = await fetch('/links.json')

      if (response.ok) {
        const linksResponse = await response.json()
        createLinkElements(linksResponse.links)
      } else {
        // Handle the case when a non-200 response was returned
        console.error('Error: Unable to fetch links data.')
      }
    } catch (error) {
      // Handle any errors occurred during the fetch or JSON parsing
      console.error('Error:', error)
    }
  }
})
