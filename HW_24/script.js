let catagories = ['Літні кросівки', 'Зимові кросівки', 'Осінні кросівки'];

let products = {
    'Літні кросівки': ['NewBalanceSummer', 'NikeSmellWinter', 'NewBalanceHotSneakers'],
    'Зимові кросівки': ['NikeSmellWinter', 'NewBalanceWinter', 'NewBalanceColdSneakers'],
    'Осінні кросівки': ['OldFashionSneakers', 'NewOneSneakers', 'NiceChoiceSneakers'],
}

let productsDetailes = {
    'NewBalanceSummer': 'Good choice for the every men who like to run in the morning!',
    'NikeSmellWinter': 'Good choice for the everyone who likes to go for a long walk',
    'NewBalanceHotSneakers': 'Good choice if you want to wear comfortable shoes for every day',
    'NewBalanceHotSneakers': 'Good choice if you want to wear comfortable shoes for every day!',
    'NewBalanceWinter': 'Good choice if you adore walking on the street in a cold weather!',
    'NewBalanceColdSneakers': 'Good choice if you`re fond of running in a cold weather!',
    'OldFashionSneakers': 'Good choice if you admire wearing casual clothes',
    'NewOneSneakers': 'Good choice if you want to show how outstanding shoes you have!',
    'NiceChoiceSneakers': 'Good choice if you want to boast in front of your friends about your shoes',
}

let mainContainer = document.getElementById('main-container');

mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'row-reversed';

let activeButton = null;

function displayCatagories() {
    let leftBlock = document.getElementById('left-block');
    leftBlock.style.display = 'flex';
    leftBlock.style.gap = '15px';
    leftBlock.style.margin = '12px';
    leftBlock.style.flexDirection = 'column';
    leftBlock.style.border = '4px solid black';
    while (leftBlock.firstChild) {
        leftBlock.removeChild(leftBlock.firstChild)
    }
    catagories.forEach(function(catagory) {
        let button = document.createElement('button');
        button.textContent = catagory;
        button.style = 'padding: 20px; background-color: white; font-size: 22px;font-weight: 700; border: 0px;'
        button.onclick = function() {
            if (activeButton) {
                activeButton.style.backgroundColor = 'white';
            }
            this.style.backgroundColor = 'blue';
            activeButton = this;
            displayProducts(catagory);
        };
        leftBlock.appendChild(button);
    })
}

function displayProducts(catagory) {
    let middleBlock = document.getElementById('middle-block');
    middleBlock.style.margin = '12px';
    while (middleBlock.firstChild) {
        middleBlock.removeChild(middleBlock.firstChild);
    }
    products[catagory].forEach(function(product) {
        let button = document.createElement('button');
        button.textContent = product;
        button.style = 'margin: 10px; border: 0px; font-size: 22px; font-weight: 700; display: flex; flex-direction: column; border: 2px solid black';
        button.onclick = function() {
            if (activeButton) {
                activeButton.style.backgroundColor = 'white';
            }
            this.style.backgroundColor = 'grey';
            activeButton = this;
            displayProductDetails(product);
        }
        middleBlock.appendChild(button);
    })
}

function displayProductDetails(product) {
    let rightBlock = document.getElementById('right-block');
    while (rightBlock.firstChild) {
        rightBlock.removeChild(rightBlock.firstChild);
    }
    let productDetail = document.createElement('p');
    productDetail.style.margin = '12px'
    productDetail.textContent = productsDetailes[product];
    rightBlock.appendChild(productDetail);
    let button = document.createElement('button');
    button.textContent = 'Купити';
    button.style = 'background-color: green; border-radius: 6px; border: 0px; margin: 12px; padding: 12px; color:white'
    button.onclick = function() {
        let messageBox = document.getElementById('message-box');
        messageBox.style.position = 'absolute';
        messageBox.style.top = '300px';
        messageBox.textContent = 'Товар ${product} куплено!';
        messageBox.style.display = 'block';
        messageBox.style.fontSize = '22px'
        setTimeout(function() {
            messageBox.style.display = 'none';
        }, 3000);
        displayCatagories();

        while (rightBlock.firstChild) {
            rightBlock.removeChild(rightBlock.firstChild);
        }
        let middleBlock = document.getElementById('middle-block');
        while (middleBlock.firstChild) {
            middleBlock.removeChild(middleBlock.firstChild);
        }
    }
    rightBlock.appendChild(button);
}

window.addEventListener('load', displayCatagories);