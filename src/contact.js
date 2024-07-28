export function contactLoad() {
    const container = document.createElement('div')
    
    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = "Contact Us"

    container.appendChild(title)

    const blurb = document.createElement('div')
    blurb.classList.add('blurb')
    blurb.textContent = "Please note, all reservations must be done on the phone with the phone number provided below. Any reservations late by more than 15 minutes are cancelled automatically without prior notice."
    blurb.style.paddingLeft = "50px"
    blurb.style.paddingRight = "50px"
    blurb.style.color = "darkred"

    container.appendChild(blurb)

    function createPageElement(message) {
        const element = document.createElement('div')
        element.textContent = `${message}`

        return element
    }

    const contactInfo = document.createElement('div')
    contactInfo.classList.add('blurb')
    contactInfo.appendChild(createPageElement("Phone Number - 647.123.4567 (NOT A REAL NUMBER)"))
    contactInfo.appendChild(createPageElement("Email - pranavsrestaurant@imaginary.ca"))
    contactInfo.style.marginTop = "3%"
    contactInfo.style.display = "flex"
    contactInfo.style.flexDirection = "column"
    contactInfo.style.gap = "8px"

    container.appendChild(contactInfo)

    return container
}