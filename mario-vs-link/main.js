// Mario vs Link
'use strict';

// Event listener
document.getElementById('mario-btn').addEventListener('click', MarioSelected);
document.getElementById('link-btn').addEventListener('click', LinkSelected);
document.getElementById('calc-btn').addEventListener('click', CalculateValues)
document.getElementById('battle-btn').addEventListener('click', PrintText)
document.getElementById('hidden').addEventListener('click', Hidden)


// Event function
function LinkSelected() {
    //Update Content
    document.getElementById('Main-img').src = 'images/link.png';
    document.getElementById('html').style.backgroundColor = 'green';
    document.body.style.backgroundColor = 'lightgreen';
    document.getElementById('1-bul').innerHTML = 'Hyrule';
    document.getElementById('2-bul').innerHTML = 'Princess Zelda';
    document.getElementById('3-bul').innerHTML = 'Ganon';
}

// Event function
function MarioSelected() {
    //Update Content
    document.getElementById('Main-img').src = 'images/Mario.png';
    document.getElementById('html').style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'pink';
    document.getElementById('1-bul').innerHTML = 'The Mushroom Kingdom';
    document.getElementById('2-bul').innerHTML = 'Princess Peach';
    document.getElementById('3-bul').innerHTML = 'King Bowser';
}

// Event Function
function CalculateValues() {
    // Input
    let MStr = Number(document.getElementById('M-str').value);
    let MDef = Number(document.getElementById('M-def').value);
    let LStr = Number(document.getElementById('L-str').value);
    let LDef = Number(document.getElementById('L-def').value);

    // Process
    let MTot =  2 * MStr  /  LDef + 5 ;
    let LTot =  LStr + 15  / MDef;

    // Output
    document.getElementById("M-Value").innerHTML = Math.floor(MTot); 
    document.getElementById("L-Value").innerHTML = Math.floor(LTot);
}

// Event Functions
function PrintText() {
    //Input
    document.getElementById('Box1').innerHTML = Box-1
    document.getElementById('Box2').innerHTML = Box-2
    document.getElementById('Box3').innerHTML = Box-3
    document.getElementById('Box4').innerHTML = Box-4
    document.getElementById('Box5').innerHTML = Box-5
}

function Hidden() {
    //Hidden Secret
    document.getElementById('Main-img').src = 'images/61bU2wTpQNL._SX425_.jpg';
    document.getElementById('html').style.backgroundColor = 'black';
    document.body.style.backgroundColor = 'gray';
    document.getElementById('1-bul').innerHTML = 'Nobody';
    document.getElementById('2-bul').innerHTML = 'Princess Peach';
    document.getElementById('3-bul').innerHTML = 'Mario';
    document.getElementById('html').style.fontFamily = 'Bad Script';
}
