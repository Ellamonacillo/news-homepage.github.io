// Create Navigation Links
const navigationLinks = [ "Home", "New", "Popular", "Trending", "Categories" ];

const createLinks = () => {
    const ul = document.createElement('ul');

    navigationLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = '#';
        a.textContent = link;

        li.appendChild(a);
        ul.appendChild(li);
    })

    return ul;
}

const mobileNavContainer = document.querySelector('.drawer-nav');
const desktopNavContainer = document.querySelector('.desktop-nav');

mobileNavContainer.appendChild(createLinks());
desktopNavContainer.appendChild(createLinks().cloneNode(true));



// Navigation Toggle
const menuOpen = document.querySelector('#menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const menuClose = document.querySelector('#menu-close');

const toggleNav = () => {
    const isOpen = menuOpen.getAttribute('aria-expanded') === 'true';
    menuOpen.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.classList.toggle('hidden');
}

menuOpen.addEventListener('click', toggleNav);
menuClose.addEventListener('click', toggleNav);


// Create Aside 
const asides = [
    { 
        title: "Hydrogen VS Electric Cars",
        text: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    { 
        title: "The Downsides of AI Artistry", 
        text: "What are the possible adverse effects of on-demand AI image generation?" 
    },
    { 
        title: "Is VC Funding Drying Up?", 
        text: "Private funding by VC firms is down 50% YOY. We take a look at what that means." 
    },
];

const createAside = () => {
    const asideContainer = document.querySelector('aside');
    asideContainer.innerHTML = '';

    const heading = document.createElement('h2');
    heading.textContent = 'New';
    asideContainer.appendChild(heading);
    
    asides.forEach((aside, index) => {
        const div = document.createElement('div');
        div.classList.add('aside-content');

        const hr = document.createElement('hr');

        const a = document.createElement('a');
        a.href = '#';
        a.textContent  = aside.title;
        a.setAttribute('aria-label', `Read more: ${aside.title}`);

        const p = document.createElement('p');
        p.textContent = aside.text;

        div.appendChild(a);
        div.appendChild(p);

        asideContainer.appendChild(div);
        if (index < asides.length - 1) {
            asideContainer.appendChild(hr);
        }
    })
}

createAside();


// Create Articles
const articles = [
    { 
        image: "./assets/images/image-retro-pcs.jpg",
        imageAlt: "Retro PCs",
        title: "Reviving Retro PCs",
        text: "What happens when old PCs are given modern upgrades?"
    },
    { 
        image: "./assets/images/image-top-laptops.jpg",
        imageAlt: "Laptop Keyboard",
        title: "Top 10 Laptops of 2022",
        text: "Our best picks for various needs and budgets"
    },
    { 
        image: "./assets/images/image-gaming-growth.jpg",
        imageAlt: "Console Controller",
        title: "The Growth of Gaming",
        text: "How the pandemic has sparked fresh opportunities."
    },
]

const createArticle = () => {
    const articleContainer = document.querySelector('article');
    articleContainer.innerHTML = '';

    articles.forEach((article, index) => {
        const divContainer = document.createElement('div');
        divContainer.classList.add('article-container');

        const img = document.createElement('img');
        img.src = article.image;
        img.alt = article.imageAlt;

        const divContent = document.createElement('div');
        divContent.classList.add('article-content');

        const heading = document.createElement('h3');
        heading.textContent = String(index + 1).padStart(2, '0');

        const a = document.createElement('a');
        a.href = '#';
        a.textContent = article.title;
        a.setAttribute('aria-label', `Read article: ${article.title}`);

        const p = document.createElement('p');
        p.textContent = article.text;

        divContent.appendChild(heading);
        divContent.appendChild(a);
        divContent.appendChild(p);

        divContainer.appendChild(img);
        divContainer.appendChild(divContent);

        articleContainer.appendChild(divContainer);
    })
}

createArticle();