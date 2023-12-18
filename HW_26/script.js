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
    button.style = 'background-color: green; border-radius: 6px; border: 0px; margin: 12px; padding: 12px; color:white';
    button.onclick = function() {

        let form = document.getElementById('forms');
        form.style = ''
        let h2 = document.createElement('h2');
        h2.textContent = 'Форма оформлення замовлення';
        form.appendChild(h2);
        form.style = 'position: absolute; top: 500px';
        let labelPIB = document.createElement('label');
        labelPIB.textContent = 'ПІБ покупця:';
        labelPIB.style = 'font-size:20px';
        form.appendChild(labelPIB);
        let br = document.createElement('br');
        form.appendChild(br);
        let input = document.createElement('input');
        input.type = 'text';
        input.required = 'true';
        form.appendChild(input)
        form.appendChild(br.cloneNode());

        let labelCity = document.createElement('label');
        labelCity.textContent = 'Місто:';
        labelCity.style = 'font-size:20px'
        form.appendChild(labelCity);
        form.appendChild(br.cloneNode());
        let selectCity = document.createElement('select');
        let optionKyiv = new Option('Київ');
        let optionLviv = new Option('Львів');
        let optionTernopil = new Option('Тернопіль');
        let optionOdessa = new Option('Одеса', );
        let optionCharkiv = new Option('Харків', );
        form.appendChild(selectCity);
        selectCity.appendChild(optionKyiv);
        selectCity.appendChild(optionLviv);
        selectCity.appendChild(optionTernopil);
        selectCity.appendChild(optionKyiv);
        selectCity.appendChild(optionOdessa);
        selectCity.appendChild(optionCharkiv);
        form.appendChild(br.cloneNode());

        let labelPostOffice = document.createElement('label');
        labelPostOffice.textContent = 'Склад нової пошти для надсилання:';
        labelPostOffice.style = 'font-size:20px'
        form.appendChild(labelPostOffice);
        form.appendChild(br.cloneNode());
        let inputPostOffice = document.createElement('input');
        inputPostOffice.required = 'true';
        form.appendChild(inputPostOffice);
        form.appendChild(br.cloneNode());

        let labelPay = document.createElement('label');
        labelPay.textContent = 'Метод оплати:';
        labelPay.style = 'font-size:20px'
        form.appendChild(labelPay);
        form.appendChild(br.cloneNode());
        let selectPayment = document.createElement('select');
        let optionPay1 = new Option('Післяоплата');
        let optionPay2 = new Option('Оплата банківською карткою');
        form.appendChild(selectPayment);
        selectPayment.appendChild(optionPay1);
        selectPayment.appendChild(optionPay2);
        form.appendChild(br.cloneNode());

        let labelQuantity = document.createElement('label');
        labelQuantity.textContent = 'Кількість продукції, що купується:';
        labelQuantity.style = 'font-size:20px'
        form.appendChild(labelQuantity);
        form.appendChild(br.cloneNode());
        let inputQuantity = document.createElement('input');
        inputQuantity.required = 'true';
        inputQuantity.type = 'number'
        inputQuantity.min = '1';
        form.appendChild(inputQuantity);
        form.appendChild(br.cloneNode());

        let labelComment = document.createElement('label');
        labelComment.textContent = 'Коментар до замовлення:';
        labelComment.style = 'font-size:20px'
        form.appendChild(labelComment);
        form.appendChild(br.cloneNode());
        let textAreaComment = document.createElement('textarea');
        form.appendChild(textAreaComment);
        form.appendChild(br.cloneNode());
        let buttonForm = document.createElement('button');
        buttonForm.textContent = 'Підтвердити'
        buttonForm.type = 'submit';
        buttonForm.style = 'padding: 20px; border-radius:8px; font-size: 24px; background-color: orange; border: 0px; font-weight: 700;'
        form.appendChild(buttonForm);

        buttonForm.onclick = function(event) {
            event.preventDefault();
            let inputPIB = document.querySelector('input[type="text"]');
            let selectCity = document.querySelector('select');
            let inputPostOffice = document.querySelector('input[type="text"]');
            let selectPay = document.querySelector('select');
            let inputQuantity = document.querySelector('input[type="number"]');
            if (
                inputPIB.value.trim() === '' ||
                selectCity.value === '' ||
                inputPostOffice.value.trim() === '' ||
                selectPay.value === '' ||
                inputQuantity.value.trim() === ''
            ) {
                alert('Будь ласка, заповніть усі поля форми!');
                return;
            }

            let orderInfo = document.createElement('div');
            orderInfo.textContent = 'Інформація про замовлення:';
            orderInfo.style = 'text-align: center; font-size: 22px'
            document.body.appendChild(orderInfo);

            let productInfo = document.createElement('p');
            productInfo.textContent = 'Товар: ' + product;
            orderInfo.appendChild(productInfo);

            let deliveryInfo = document.createElement('p');
            deliveryInfo.innerHTML = 'Доставка товару: ' + product + '<br>Місто: ' + selectCity.value + '<br>Склад нової пошти для надсилання: ' + inputPostOffice.value + '<br> Метод оплати: ' + selectPayment.value + '<br> Кількість продукції, що купується: ' + inputQuantity.value + '<br> Коментар до замовлення: ' + textAreaComment.value + '<br> <br> Дякуємо за покупку!';
            setTimeout(function() {
                orderInfo.style.display = 'none';
            }, 5000);

            orderInfo.appendChild(deliveryInfo); //Я знаю, я поганий студент...

            let messageBox = document.getElementById('message-box');
            messageBox.style.position = 'absolute';
            messageBox.style.top = '300px';
            messageBox.textContent = `Товар ${product} куплено!`;
            messageBox.style.display = 'block';
            messageBox.style.fontSize = '22px';
            setTimeout(function() {
                messageBox.style.display = 'none';
            }, 3000);
            displayCatagories();
            let rightBlock = document.getElementById('right-block');
            while (rightBlock.firstChild) {
                rightBlock.removeChild(rightBlock.firstChild);
            }
            let middleBlock = document.getElementById('middle-block');
            while (middleBlock.firstChild) {
                middleBlock.removeChild(middleBlock.firstChild);
            }
            while (form.firstChild) {
                form.removeChild(form.firstChild);
            }
        }
    }
    rightBlock.appendChild(button);
}

window.addEventListener('load', displayCatagories);
