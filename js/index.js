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


const links = document.querySelectorAll('nav a');
// links.forEach( links => console.log(links.textContent));
const linksArray = Array.from(links);
// for (let i = 0 ; i < links.length; i++){
//   links[i].textContent = 'Services';
// };
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];


// Done with links
let titleContent = siteContent['cta']['h1'];
titleContent = titleContent.replaceAll(' ', '<br> ');
const title = document.querySelector('.cta-text h1');
title.innerHTML = titleContent; 

const button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);



const newLinkOne = document.createElement('a');
newLinkOne.textContent = 'New Button';
newLinkOne.href = '#';
newLinkOne.style.color = 'green';
document.querySelector('nav').appendChild(newLinkOne);

const newLinkTwo = document.createElement('a');
newLinkTwo.textContent = 'New Button';
newLinkTwo.href = '#';
newLinkTwo.style.color = 'green';
document.querySelector('nav').appendChild(newLinkTwo);

links.forEach(link => link.style.color = 'green');

//DONE with header

const textContent = document.querySelectorAll('.main-content h4');
const textContentArray = Array.from(textContent);
textContent[0].textContent = siteContent['main-content']['features-h4'];
textContent[1].textContent = siteContent['main-content']['about-h4'];
textContent[2].textContent = siteContent['main-content']['services-h4'];
textContent[3].textContent = siteContent['main-content']['product-h4'];
textContent[4].textContent = siteContent['main-content']['vision-h4'];


let midImg = document.querySelector("#middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const paraphContent = document.querySelectorAll('.text-content p');
const paraphContentArray = Array.from(paraphContent);

paraphContent[0].textContent = siteContent['main-content']['features-content'];
paraphContent[1].textContent = siteContent['main-content']['about-content'];
paraphContent[2].textContent = siteContent['main-content']['services-content'];
paraphContent[3].textContent = siteContent['main-content']['product-content'];
paraphContent[4].textContent = siteContent['main-content']['vision-content'];


const contactHFour = document.querySelectorAll('.contact h4');
contactHFour[0].textContent = siteContent['contact']['contact-h4'];

const contactParaph = document.querySelectorAll('.contact p');
const contactParaphArray = Array.from(contactParaph);

contactParaph[0].textContent = siteContent['contact']['address'];
contactParaph[1].textContent = siteContent['contact']['phone'];
contactParaph[2].textContent = siteContent['contact']['email'];

contactParaph[0].textContent = contactParaph[0].textContent.replace('Street ', 'Street<br>');
contactParaph[0].innerHTML = contactParaph[0].textContent; 

//done with contact

const copyRight = document.querySelector('footer p');
copyRight.textContent = siteContent['footer']['copyright'];