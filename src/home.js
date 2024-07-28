export function titleLoad() {
    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = "Pranav's Imaginary Restaurant"

    return title
}

export function blurbLoad() {
    const blurb = document.createElement('div')
    blurb.classList.add('blurb')
    blurb.textContent = "Welcome to a brand new world where food meets code. Try an html sandwich topped with id and class, along with a side of div sauce, you'll keep coming back for more!"

    return blurb
}

export function dishesLoad() {
    const dishes = document.createElement('div')
    dishes.classList.add('dishes')

    const items = [
        {
          id: 'item1',
          imgText: 'image coming soon',
          title: 'HTML Sandwich',
          explanation: 'This Sandwich is composed of all your favourites: head, body, links, rel and more! Topped with ids and classes for garnishing.'
        },
        {
          id: 'item2',
          imgText: 'image coming soon',
          title: 'CSS Salad',
          explanation: 'This salad is composed of an array of finely julienned selectors such as child, siblings, id, element, and classes. Topped with the standard flexbox sauce.'
        },
        {
          id: 'item3',
          imgText: 'image coming soon',
          title: 'Javascript steak (well done)',
          explanation: 'A rich, juicy, mouth watering javascript steak with all the right imports and classes. Can be made rare, medium rare, medium, medium done and well done.'
        },
        {
          id: 'item4',
          imgText: 'image coming soon',
          title: 'JSON Poutine',
          explanation: 'A limited time special! JSON cut into fries and served as a poutine with object sauce.'
        }
      ];
      
      // Function to create an item element
      function createItem({ id, imgText, title, explanation }) {
        // Create main container
        const itemDiv = document.createElement('div');
        itemDiv.id = id;
      
        // Create image div
        const imgDiv = document.createElement('div');
        imgDiv.className = 'img';
        imgDiv.textContent = imgText;
      
        // Create dish blurb container
        const dishBlurbDiv = document.createElement('div');
        dishBlurbDiv.className = 'dish-blurb';
      
        // Create dish title
        const dishTitleDiv = document.createElement('div');
        dishTitleDiv.className = 'dish-title';
        dishTitleDiv.textContent = title;
      
        // Create dish explanation
        const dishExplanationDiv = document.createElement('div');
        dishExplanationDiv.className = 'dish-explanation';
        dishExplanationDiv.textContent = explanation;
      
        // Append title and explanation to dish blurb
        dishBlurbDiv.appendChild(dishTitleDiv);
        dishBlurbDiv.appendChild(dishExplanationDiv);
      
        // Append image and dish blurb to item
        itemDiv.appendChild(imgDiv);
        itemDiv.appendChild(dishBlurbDiv);
      
        return itemDiv;
      }

      items.forEach(item => {
        dishes.appendChild(createItem(item));
      });

    return dishes
}