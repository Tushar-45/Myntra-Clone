let bagItems;
onLoad();
function onLoad(){
    let bagstr = localStorage.getItem('bagItems');
    bagItems = bagstr ? JSON.parse(bagstr) : [];
    displayItemOnHomePage();
    dispayBagIcon();
}


function addToBag(itemID){
    bagItems.push(itemID);  
    localStorage.setItem('bagItems', JSON.stringify(bagItems)); 
    dispayBagIcon();
}

function dispayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}
function displayItemOnHomePage(){
    let itemsContainer = document.querySelector('.items-container');
if(!itemsContainer){
    return ;
}
let innerhtml = '';
items.forEach(item=>{
    innerhtml+= `<div class="item-container">
    <img class="item-image" src="${item.image}" alt="image">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}K
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to bag</button>
    </div>`
});

itemsContainer.innerHTML=innerhtml;
}
