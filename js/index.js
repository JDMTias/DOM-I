const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ## Task 1: Create selectors to point your data into elements

// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content

// update image sources
let heroImg = document.getElementById('cta-img');
heroImg.setAttribute('src', siteContent['cta'] ['img-src'])

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

// ## Task 2: Update the HTML with the JSON data

// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

// nav links
let navi = document.querySelectorAll('nav a');

navi[0].textContent = siteContent ['nav'] ['nav-item-1'];

navi[1].textContent = siteContent ['nav'] ['nav-item-2'];

navi[2].textContent = siteContent ['nav'] ['nav-item-3'];

navi[3].textContent = siteContent ['nav'] ['nav-item-4'];

navi[4].textContent = siteContent ['nav'] ['nav-item-5'];

navi[5].textContent = siteContent ['nav'] ['nav-item-6'];

// hero button text 
let buttonText = document.querySelector('button');
buttonText.textContent = siteContent['cta'] ['button']

// hero title
let heroTitle = document.querySelector('h1');
heroTitle.textContent = siteContent['cta'] ['h1'];

// maincontent titles
let titles = document.querySelectorAll('h4');

titles[0].textContent = siteContent ['main-content'] ['features-h4'];

titles[1].textContent = siteContent ['main-content'] ['about-h4'];

titles[2].textContent = siteContent ['main-content'] ['services-h4'];

titles[3].textContent = siteContent ['main-content'] ['product-h4'];

titles[4].textContent = siteContent ['main-content'] ['vision-h4'];

// contact title 
titles[5].textContent = siteContent ['contact'] ['contact-h4'];

// maincontent p
let mainDesc = document.querySelectorAll('p');

mainDesc[0].textContent = siteContent ['main-content'] ['features-content'];

mainDesc[1].textContent = siteContent ['main-content'] ['about-content'];

mainDesc[2].textContent = siteContent ['main-content'] ['services-content'];

mainDesc[3].textContent = siteContent ['main-content'] ['product-content'];

mainDesc[4].textContent = siteContent ['main-content'] ['vision-content'];

// contact p
mainDesc[5].textContent = siteContent ['contact'] ['address'];

mainDesc[6].textContent = siteContent ['contact'] ['phone'];

mainDesc[7].textContent = siteContent ['contact'] ['email'];

// footer cr

mainDesc[8].textContent = siteContent ['footer'] ['copyright'];



// ## Task 3: Add new content

// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser

// adding colors to nav
navi.forEach(item => item.style.color = 'green');

// new links to add make object with properties

const warlock = {
  href: '#',
  title: 'Silver'
};

const titan = {
  href: '#',
  title2: 'Crayons'
};

// make element needed
const titanLink = document.createElement('a');

const warlockLink = document.createElement('a');

// add properties
titanLink.href = titan.href;
titanLink.textContent = titan.title2;

warlockLink.href = warlock.href;
warlockLink.textContent = warlock.title;

// add what is needed
document.querySelector('nav').appendChild(titanLink);
document.querySelector('nav').prepend(warlockLink);



// ## Stretch Goals

// * [ ] Update styles throughout the page as you see fit.  Study what happens when you updated the DOM using style in JavaScript.  
// * [ ] Study tomorrow's lesson on events and try to integrate a button that can update content on the site with a click of a button.  You could build a similar data object with new values to help you test the click event.

// styles update

titles.forEach(item => item.style.color = 'blue');

mainDesc.forEach(item => item.style.fontFamily = 'Inconsolata', 'mon ospace' )


// ## Stretch Project: Digital Timer

// This project is heavier on logic but employs some DOM manipulation to achieve its goals.  Go check it out here: [stretch assignment](stretch-assignment) and see how far you can get.
