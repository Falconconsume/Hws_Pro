let offensive = 0;
const sliderLine = document.querySelector(`.slider-line`);

const nextButton = document.querySelector(`.slider-next`);
const prevButton = document.querySelector(`.slider-prev`);

nextButton.addEventListener(`click`, () => {
    offensive +=500;
    if(offensive > 1500) {
        offensive = 0;
    }
    sliderLine.style.left = -offensive + `px`;

    if(offensive === 1500) {
        nextButton.style.display = `none`;
    } else {
        nextButton.style.display = `block`;
    }

    if(offensive === 0) {
        prevButton.style.display = `none`;
    } else {
        prevButton.style.display = `block`;
    }
});

prevButton.addEventListener(`click`, () => {
    offensive -=500;
    if(offensive < 0) {
        offensive = 1500;
    }
    sliderLine.style.left = -offensive + `px`;

    if(offensive === 1500) {
        nextButton.style.display = `none`;
    } else {
        nextButton.style.display = `block`;
    }

    if(offensive === 0) {
        prevButton.style.display = `none`;
    } else {
        prevButton.style.display = `block`;
    }
});
