const catagories = document.querySelectorAll('.catagories');
const listCatagories = document.querySelector('.list_catagories');
const summerShoes = document.querySelector('.block_shoes_summer');
const shoes1 = document.querySelector(`.shoes1`);
const count1 = document.getElementById(`count1`);
const rightShoes1 = document.querySelector(`.right_block_shoes1`);
const endingPurchase = document.querySelector(`.endingPurchase`);
const rightShoes2 = document.querySelector(`.right_block_shoes2`);
const count2 = document.getElementById(`count2`);
const rightShoes3 = document.querySelector(`.right_block_shoes3`);
const count3 = document.getElementById(`count3`);
const count4 = document.getElementById(`count4`);
const winterShoes = document.querySelector(`.block_shoes_winter`);
catagories.forEach(function(catagory) {
    catagory.addEventListener('click', function() {
        summerShoes.style.display = 'block';
        summerShoes.style.display = `flex`;
        shoes1.style.display = `block`;
        shoes1.style.height = `auto`;
        this.style.color = `purple`;
    });
});


shoes1.addEventListener(`click`, function() {
    count1.style.display = `block`;
    count2.style.display = `none`;
    count3.style.display = `none`;
    count4.style.display = `none`;
})

const buybtn = document.querySelectorAll(`.buyButton`);

buybtn.forEach(function(event) {
    event.addEventListener(`click`,() => {
            endingPurchase.style.display = `block`;
            endingPurchase.style.display = `flex`;
    })
})


const shoes2 = document.querySelector(`.shoes2`);
shoes2.addEventListener(`click`, function() {
    count1.style.display = `none`;
    count2.style.display = `block`;
    count3.style.display = `none`;
    count4.style.display = `none`;})

const shoes3 = document.querySelector(`.shoes3`);
shoes3.addEventListener(`click`, function() {
    count1.style.display = `none`;
    count2.style.display = `none`;
    count3.style.display = `block`;
    count4.style.display = `none`;})

const shoes4 = document.querySelector(`.shoes4`);
shoes4.addEventListener(`click`, function() {
    count1.style.display = `none`;
    count2.style.display = `none`;
    count3.style.display = `none`;
    count4.style.display = `block`;})

const closeOption = document.querySelectorAll(`.close_shoes`);

closeOption.forEach( function(event) {
    event.addEventListener(`click`, function() {
        rightShoes1.style.display = `none`;
        count2.style.display = `none`;
        count3.style.display = `none`;
        count4.style.display = `none`;
    })
})

const btnEnd = document.querySelector(`.btnEnd`);

btnEnd.addEventListener(`click`, function() {
    summerShoes.style.display = `none`;
    endingPurchase.style.display = `none`;
    count1.style.display = `none`;
    count2.style.display = `none`;
    count3.style.display = `none`;
    count4.style.display = `none`;
})

const block = document.querySelector('.block');

block.addEventListener('click', function() {
    block.classList.add('show');
});

