let emojis = ['😀', '😂', '😢', '😎', '😢'];
let countEmojis = {};
let emojiDivs = [];

let title = document.createElement(`h1`);
title.textContent = `Voting: `
document.body.appendChild(title);

for(let i = 0; i < emojis.length; i++) {
    let emojiDiv = document.createElement('div');
    let span = document.createElement('span');
    emojiDiv.style.fontSize = `33px`;
    emojiDiv.style.cursor = `pointer`;
    

    span.setAttribute('id', `count${i+1}`);
    emojiDiv.setAttribute('id', `emoji${i+1}`);
    emojiDiv.textContent = emojis[i];

    emojiDiv.appendChild(span);
    emojiDivs.push(emojiDiv);

    countEmojis[emojiDiv.id] = 0;

    emojiDiv.addEventListener('click', function() {
        countEmojis[emojiDiv.id]++;
        document.getElementById('count' + (i+1)).textContent = " " + countEmojis[emojiDiv.id];
    });
}

for(let emojiDiv of emojiDivs) {
    document.body.appendChild(emojiDiv);
}
