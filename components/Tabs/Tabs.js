
class TabLink {
  constructor(element) { // element refers to individual tab links
    
    // Assign this.element to the passed in DOM element
    this.element = element;
    // console.log("TabLink element", this.element); //tabs-link

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // console.log("data", this.data); 1,2,3,4
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`); // itemElement is the content of the tabs. we're selecting it here so we can link it to its corresponding tab through calling a new TabItem object below
    // console.log("TabLink itemElement", this.itemElement); //tabs-item
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement); //tabItem is new content object
    // console.log("tabItem in Tablink", this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select()); // eventlistener is on the tab (this.element is tabs-link)
  };

  select() { // select method removes tabs-links-selected class (display:block) from all links and then adds tabs-links-seleted to the selected tabs-link (this.element, which is defined on line 6). NOTE: This select method is different than the select method on TabItem
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    console.log(this.element);
    
    // Call the select method on the item associated with this link (this instruction is so confusing)
    this.tabItem.select(); // this is the select method from the TabItem class. It is called from within the select method of the TabLink class, so that when we click on a tab, this method applies the .tabs-item-selected class to the TabItem.

  }
}

class TabItem {
  constructor(element) { //element refers to individual tab items
    // Assign this.element to the passed in element
    this.element = element;
    console.log("tabitem", this.element);
  }

  select() { // this method is called from within the TabLink select method.
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove('tabs-item-selected'))
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll('.tabs-link');

links.forEach(link => new TabLink(link));