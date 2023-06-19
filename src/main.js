window.addEventListener('load', function () {
    (async function main() {
        try {
            const response = await fetch('/src/links.json')

            if (response.ok) {
                const linksResponse = await response.json()
                createLinkElements(linksResponse.links)
            } else {
                // A non 200 response was returned
            }
        } catch (error) {
            // This is probably a syntax error
        }
    }())

    const createLinkElements = (links = []) => {
        const linksDiv = this.document.querySelector('#links')
        links.forEach(link => {
            const linkElement = this.document.createElement('a')
            linkElement.classList.add('button_link')
            linkElement.href = link.url
            linkElement.text = link.name
            linkElement.target = "_blank"
            linkElement.rel = "noopener noreferrer"
            linksDiv.appendChild(linkElement)
        });
    }
})