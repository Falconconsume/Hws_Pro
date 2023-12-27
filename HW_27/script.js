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

let prices = {
    'NewBalanceSummer': 200,
    'NikeSmellWinter': 350,
    'NewBalanceHotSneakers': 400,
    'NewBalanceHotSneakers': 400,
    'NewBalanceWinter': 2000,
    'NewBalanceColdSneakers': 4000,
    'OldFashionSneakers': 5000,
    'NewOneSneakers': 2100,
    'NiceChoiceSneakers': 1000,
}

let mainContainer = document.getElementById('main-container');

mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'row-reversed';

let activeButton = null;
let orders = getOrders();

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

const btnOrders = document.createElement('button');
mainContainer.append(btnOrders);
btnOrders.textContent = "Мої замовлення";
btnOrders.style = 'font-size: 22px; font-weight: 700; background: #333366; color: #DDDDDD; margin-left: 100px; border-radius: 8px; border:0px; padding:10px';

btnOrders.onclick = () => {
    mainContainer.style.display = 'none';
    const storageContainer = document.getElementById('storage');
    storageContainer.style.display = 'block';
    const btnBack = document.createElement('button');
    btnBack.textContent = 'Повернутися до каталогів';
    storageContainer.append(btnBack);
    btnBack.style = 'position:absolute; right:300px; padding: 20px; background-color: #FF7F50; color: #fff; border:0px; border-radius: 8px';
    btnBack.onclick = () => {
        mainContainer.style.display = 'block';
        mainContainer.style.display = 'flex';
        storageContainer.style.display = 'none';
    }
    saveOrders();
    displayOrders();
}

function getOrders() {
    return JSON.parse(localStorage.getItem('orders')) || [];
}

function saveOrders() {
    return localStorage.setItem('orders', JSON.stringify(orders));
}

function deleteOrder(orderId, order) {
    const orderElement = document.querySelector(`.order[data-id="${orderId}"]`);
    if (orderElement) {
        orderElement.remove();
        const updatedOrders = orders.filter(order => order.id !== orderId);
        orders = updatedOrders;
        saveOrders();
    } 
    const orderDetails = document.querySelectorAll(`.order-details[data-id="${orderId}"]`);
    orderDetails.forEach(detail => detail.remove());
}

function displayOrders() {
    const orders = getOrders();
    let ordersHtml = '';
    let titleOrders = document.createElement('h1');
    titleOrders.textContent = 'Мої замовлення:';
    orders.forEach(order => {
        ordersHtml += `<div class="order" data-id="${order.id}">
        <div class="order-info">
            <h2>Замовлення №${order.id}</h2>
            <br>
            <p>Дата: ${order.date}</p>
            <p>Ціна: ${order.price}</p>
            <button id="btnDelete${order.id}">Видалити замовлення</button>
        </div>
        <div class="order-details" data-id="${order.id}"></div>
    </div> 
    <br>`;//знаю, я поганий студент
    });
    const ordersContainer = document.getElementById('orders');
    ordersContainer.innerHTML = ordersHtml;
    
    orders.forEach(order => {
        const orderElement = document.querySelector(`.order[data-id="${order.id}"]`);
        orderElement.style = 'cursor:pointer'
        orderElement.addEventListener('click', () => {
            displayOrderDetails(order.id);
        })
    })

    orders.forEach(order => {
        const btnDelete = document.getElementById(`btnDelete${order.id}`);
        btnDelete.style = 'padding:10px; color: #0000FF; background-color: grey; font-size: 22px; font-weight: 700; border: 0px; border-radius: 8px'
        btnDelete.addEventListener('click', function (e) {
            e.stopPropagation();
            deleteOrder(order.id);
        });
    });

    if (ordersHtml.length === 0) {
        const textOrder = document.createElement('h1');
        textOrder.textContent = 'Немає замовлень!';
        ordersContainer.append(textOrder);
    }
}

function displayOrderDetails(orderId) {
    const existingDetails = document.querySelectorAll(`.order-details[data-id="${orderId}"] p`);
    existingDetails.forEach(detail => detail.remove());

    const order = orders.find(order => order.id === orderId);
    if(order) {
        createP(`Товар ${order.product}`, orderId);
        createP(`ПІБ: ${order.PIB}`, orderId);
        createP(`Місто: ${order.city}`, orderId);
        createP(`Поштове відділення: ${order.PostOffice}`, orderId);
        createP(`Оплата: ${order.Payment}`, orderId);
        createP(`Кількість: ${order.Quantity}`, orderId);
    }
}

function createP(detail, orderId) {
    let orderDetailsContainer = document.querySelector(`.order-details[data-id="${orderId}"]`);
    let textP = document.createElement('p');
    textP.textContent = detail;
    textP.style = 'font-size: 20px; position: relative;'
    orderDetailsContainer.append(textP);
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

        function createLabel(textLabel) {
            let label = document.createElement('label');
            label.textContent = textLabel;
            return label;
        }
        
        function createInput() {
            let input = document.createElement('input');
            return input;
        }

        function createFormAppend(el) {
            return form.append(el);
        }

        function createTitle(textContent) {
            let h2 = document.createElement('h2');
            h2.textContent = textContent;
            return h2;
        }

        function createCityAppend(el) {
            return selectCity.append(el)
        }
        

        let form = document.getElementById('forms');
        if (!form) {
            form = document.createElement('form');
            form.id = 'forms';
            mainContainer.appendChild(form);
        } else {
            while (form.firstChild) {
                form.removeChild(form.firstChild);
            }
        }
        let h2 = createTitle('Форма оформлення замовлення');
        createFormAppend(h2);
        form.style = 'position: absolute; top: 800px';
        let labelPIB = createLabel('ПІБ покупця:');
        labelPIB.style = 'font-size:20px';
        createFormAppend(labelPIB);
        let br = document.createElement('br');
        createFormAppend(br);
        let input = createInput();
        input.type = 'text';
        createFormAppend(input)
        form.appendChild(br.cloneNode());

        let labelCity = createTitle('Місто:');
        labelCity.style = 'font-size:20px'
        createFormAppend(labelCity);
        createFormAppend(br.cloneNode());
        let selectCity = document.createElement('select');
        let optionKyiv = new Option('Київ');
        let optionLviv = new Option('Львів');
        let optionTernopil = new Option('Тернопіль');
        let optionOdessa = new Option('Одеса', );
        let optionCharkiv = new Option('Харків', );
        createFormAppend(selectCity);
        createCityAppend(optionKyiv);
        createCityAppend(optionLviv);
        createCityAppend(optionTernopil);
        createCityAppend(optionKyiv);
        createCityAppend(optionOdessa);
        createCityAppend(optionCharkiv);
        createFormAppend(br.cloneNode());

        let labelPostOffice = createTitle('Склад нової пошти для надсилання');
        labelPostOffice.style = 'font-size:20px'
        createFormAppend(labelPostOffice);
        createFormAppend(br.cloneNode());
        let inputPostOffice = createInput();
        createFormAppend(inputPostOffice);
        createFormAppend(br.cloneNode());

        let labelPay = createTitle('Метод оплати: ');
        labelPay.style = 'font-size:20px'
        createFormAppend(labelPay);
        createFormAppend(br.cloneNode());
        let selectPayment = document.createElement('select');
        let optionPay1 = new Option('Післяоплата');
        let optionPay2 = new Option('Оплата банківською карткою');
        createFormAppend(selectPayment);
        selectPayment.appendChild(optionPay1);
        selectPayment.appendChild(optionPay2);
        createFormAppend(br.cloneNode());

        let labelQuantity = createTitle('Кількість продукції, що купується:');
        labelQuantity.style = 'font-size:20px'
        createFormAppend(labelQuantity);
        createFormAppend(br.cloneNode());
        let inputQuantity = createInput();
        inputQuantity.required = 'true';
        inputQuantity.type = 'number'
        inputQuantity.min = '1';
        createFormAppend(inputQuantity);
        createFormAppend(br.cloneNode());

        let labelComment = createTitle('Коментар до замовлення:');
        labelComment.style = 'font-size:20px'
        createFormAppend(labelComment);
        createFormAppend(br.cloneNode());
        let textAreaComment = document.createElement('textarea');
        createFormAppend(textAreaComment);
        createFormAppend(br.cloneNode());
        let buttonForm = document.createElement('button');
        buttonForm.textContent = 'Підтвердити'
        buttonForm.type = 'submit';
        buttonForm.style = 'padding: 20px; border-radius:8px; font-size: 24px; background-color: orange; border: 0px; font-weight: 700;'
        createFormAppend(buttonForm);

        buttonForm.onclick = function(event) {
            event.preventDefault();
            let inputPIB = document.querySelector('input[type="text"]');
            let selectCity = document.querySelector('select');
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

            let orderId = Math.floor(Math.random() * 1000);
            orders.push({
                id:orderId,
                date: new Date().toLocaleDateString(),
                price: prices[product] * inputQuantity.value,
                product: product,
                PIB: input.value,
                city: selectCity.value,
                PostOffice: inputPostOffice.value,
                Payment: selectPayment.value,
                Quantity: inputQuantity.value,
            })


            let messageBox = document.getElementById('message-box');
            messageBox.style.position = 'absolute';
            messageBox.style.top = '200px';
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