export function menuPageLoad() {
    const container = document.createElement('div')
    
    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = "Our Menu"

    container.appendChild(title)

    const blurb = document.createElement('div')
    blurb.classList.add('blurb')
    blurb.textContent = "Please note, all handhelds come with a side of fries, salad or fruit."

    container.appendChild(blurb)

    const handhelds = [
        {
            name: "HTML Sandwich",
            price: "$16.22",
        },
        {
            name: "Pixel Popper",
            price: "$19.99",
        },
        {
            name: "Tech Tuner",
            price: "$24.50",
        },
        {
            name: "Gizmo Grabber",
            price: "$14.75",
        },
        {
            name: "Widget Whiz",
            price: "$21.30",
        },
        {
            name: "Chip Chaser",
            price: "$17.40",
        },
        {
            name: "Nano Navigator",
            price: "$22.85",
        },
        {
            name: "Echo Element",
            price: "$18.60",
        },
        {
            name: "Vortex Vibe",
            price: "$25.00",
        },
        {
            name: "Byte Blaster",
            price: "$16.75",
        },
    ]

    const salads = [
        {
            name: "CSS Salad",
            price: "10.98"
        },
        {
            name: "HTML Harvest",
            price: "9.50"
        },
        {
            name: "JavaScript Greens",
            price: "12.75"
        },
        {
            name: "Python Platter",
            price: "11.30"
        },
        {
            name: "Ruby Rhapsody",
            price: "13.20"
        },
        {
            name: "Java Jumble",
            price: "14.10"
        },
        {
            name: "Swift Salad",
            price: "15.00"
        },
        {
            name: "Kotlin Kale",
            price: "10.85"
        },
        {
            name: "Go Greens",
            price: "11.50"
        },
        {
            name: "Perl Plate",
            price: "12.00"
        }
    ]

    const mains = [
        {
            name: "Javascript Steak",
            price: "$25.67"
        },
        {
            name: "Python Pasta",
            price: "$22.45"
        },
        {
            name: "Ruby Ribs",
            price: "$27.30"
        },
        {
            name: "Java Jambalaya",
            price: "$24.80"
        },
        {
            name: "C++ Chili",
            price: "$26.10"
        }
    ]

    const specials = [
        {
            name: "JSON Poutine",
            price: "$8.00"
        },
        {
            name: "API Nachos",
            price: "$9.50"
        },
        {
            name: "HTML Hot Wings",
            price: "$7.75"
        },
        {
            name: "CSS Burrito",
            price: "$10.25"
        },
        {
            name: "JavaScript Tacos",
            price: "$8.85"
        },
        {
            name: "React Wraps",
            price: "$9.99"
        },
        {
            name: "Node Noodles",
            price: "$11.40"
        }
    ]

    function createPageElement(arr) {
        const element = document.createElement('div')

        for (const obj of arr) {
            const innerElem = document.createElement('div')
            innerElem.textContent = `${obj.name} - ${obj.price}`
            element.appendChild(innerElem)
        }
        return element
    }

    const menuItems = document.createElement('div')
    menuItems.classList.add('dishes')
    menuItems.appendChild(createPageElement(handhelds))
    menuItems.appendChild(createPageElement(salads))
    menuItems.appendChild(createPageElement(mains))
    menuItems.appendChild(createPageElement(specials))
    menuItems.style.marginTop = "3%"

    container.appendChild(menuItems)

    return container
}