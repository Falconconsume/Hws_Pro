let tableContent = `<table>`;

for(let i = 1; i <= 10; i++) {
    tableContent += `<tr style="padding:20px">`;
    for(let j = 1; j <= 10; j++) {
        tableContent += `<td style="border: 4px solid grey; text-align: center; color: #0000FF; font-weight:700; background-color: black; padding: 27px; font-size: 21px">` + i*j + `</td>`;
    }
    tableContent += `</tr>`;
}

tableContent += `</table>`;

let tables = document.querySelectorAll(`table`);
for(let table of tables) {
    table.innerHTML = tableContent;
}
