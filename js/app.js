console.log("dom lab")

//task 3.0 & task 5.0 
// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
//task 1.0: Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');
//console.log(mainEl);
//task 1.1 Set the background color of mainEl using the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';
//task 1.2 Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
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
menuLinks.forEach(function (link) {
  //console.log(menuLinks);
  //Create an <a> element.
  const linkEl = document.createElement('a');
  //On the new element, add an href attribute with its value set to the href property of the "link" object.
  linkEl.setAttribute('href', 'link.href');
  //Set the new element's content to the value of the text property of the "link" object.
  linkEl.textContent = link.text;
  //Append the new element to the topMenuEl element
  topMenuEl.appendChild(linkEl);

});

//SOMETHING IS NOT WORKING HERE
//task 4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu');
//console.log(subMenuEl);
//task 4.1 Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%';
//task 4.2 Set the background color of subMenuEl using the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//task 4.3 Add the class of flex-around to the subMenuEl element
subMenuEl.classList.add('flex-around');
//END SOMETHING IS NOT WORKING

//Task 4.4 Set the CSS position property of subMenuEl to the value of absolute
subMenuEl.style.position = 'abosolute';
//Task 4.5 Set the CSS top property of subMenuEl to the value of 0
//reference (https://www.w3schools.com/jsref/prop_style_top.asp)
subMenuEl.style.top = 0;

//Task 5.1 Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
//top-menu a is an id in css  
const topMenuLinks = document.querySelectorAll('#top-menu a');
  //Declare a global showingSubMenu variable and initialize it to false;
  const showingSubMenu = false;

  //Task 5.2 Attach a delegated 'click' event listener to topMenuEl.
  topMenuEl.addEventListener('click', function(evt) {
  //The first line of code of the event listener function should call the event object's preventDefault() method
        //this prevents the default behavior  
    evt.preventDefault();
  //The second line of code function should immediately return if the element clicked was not an <a> element.    
        //grabs element evt.target which is within topMenuEl (about, catalog, orders, account)
        const link = evt.target;    
        //if line is not an anchor tag (about, menu, etc) fxn returns that it does not execute code
        if (link.tagName != 'A') 
        return;
  //console.log the content of the <a> to verify the handler is working.
        console.log(link.textContent);
  });
  //Task 5.3 
