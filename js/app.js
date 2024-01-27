console.log("dom lab")

//task 3.0
// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
// task 1.0: Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');
console.log(mainEl);
//task 1.1 Set the background color of mainEl using the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';
//task 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML ='<h1>SEI Rocks!</h1>';
//task 1.3 Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');
//task 2.0 Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.getElementById('top-menu');
//task 2.1 Set the height topMenuEl element to be 100%.
topMenuEl.style.height = '100%';
//task 2.2 Set the background color of topMenuEl using the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//task 2.3 Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');
//task 3.1 Iterate over the entire menuLinks array and for each "link" object 
menuLinks.forEach(function(link) {
//console.log(menuLinks);
  //Create an <a> element.
    const newLink = document.createElement('a');
  //On the new element, add an href attribute with its value set to the href property of the "link" object.
    newLink.setAttribute('href', 'link.href')
  //Set the new element's content to the value of the text property of the "link" object.
    newLink.textContent = link.text; 
  //Append the new element to the topMenuEl element
    topMenuEl.appendChild(newLink)

});

