/**
 * Create a Linked List using OOP
 */

/**
 * Class Node
 * Defines the Node for the Linked List
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getLength() {
    return this.size;
  }

  addAtStart(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  addAtEnd(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = newNode;
    }
    this.size++;
  }
}

const list = new LinkedList();

list.addAtStart('1st');
list.addAtStart('2nd');
list.addAtStart('3rd');
list.addAtStart('last');
list.addAtEnd('1st end');
list.addAtEnd('2nd end');
list.addAtEnd('3rd end');
list.addAtEnd('4th end');

let attributes = {
  color: ['Red', 'Blue'],
  sizes: ['Small', 'Medium', 'Large'],
  material: ['Cotton', 'Wool'],
  gender: ['Men', 'Women'],
  type: ['Casual', 'Sport'],
};

let attrs = [];

for (const [attr, values] of Object.entries(attributes))
  attrs.push(values.map((v) => ({ [attr]: v })));

attrs = attrs.reduce((a, b) =>
  a.flatMap((d) => b.map((e) => ({ ...d, ...e })))
);
let productVariant = attrs.map((item) => {
  let tempArr = Object.values(item);
  return {
    variantTitle: tempArr.join('/'),
    variantPrice: parseInt(70 + tempArr.join('/').length + Math.random() * 10),
    onHand: parseInt(1000 + tempArr.join('/').length + Math.random() * 10),
    available: parseInt(575 + tempArr.join('/').length + Math.random() * 10),
    sku: `13456789${parseInt(Math.random() * 10)}`,
    ...item,
  };
});

const productWithVariant = {
  name: 'Main Product',
  sku: '13456789',
  price: '510',
  variantLength: productVariant.length,
  variants: productVariant,
};
console.log('productWithVariant:', productWithVariant);

const getCurrentPrice = (rang, lambai, cheese, ling, dharan) => {
  const matchedVariant = productWithVariant.variants.find(
    (el) =>
      el.color === rang &&
      el.sizes === lambai &&
      el.material === cheese &&
      el.gender === ling &&
      el.type === dharan
  );
  // console.log('matchedVariant:', matchedVariant);
  return matchedVariant?.variantPrice;
};

const currentPrice =
  getCurrentPrice('Red', 'Large', 'Wool', 'Men', 'Sport') ||
  productWithVariant.price;
// console.log('currentPrice:', currentPrice);

const apiResponse = [productWithVariant];
const finalArr = [];
const allProducts = apiResponse.forEach((item) => {
  const parentObj = JSON.parse(JSON.stringify(item));
  delete parentObj.variants;
  delete parentObj.variantLength;
  finalArr.push(parentObj);
  item.variants.forEach((el) => {
    const variantObj = JSON.parse(JSON.stringify(parentObj));
    variantObj.sku = el.sku;
    variantObj.price = el.variantPrice;
    variantObj.name = el.variantTitle;
    finalArr.push(variantObj);
  });

  // console.log('allProducts ~ finalObj:', finalObj);
});

// console.log('finalArr.length', finalArr.length, 'finalArr:', finalArr);

