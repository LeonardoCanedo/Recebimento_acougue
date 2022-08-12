const calculateLomb1 = document.getElementById('calculateLomb1');
const calculateLomb2 = document.getElementById('calculateLomb2');
const calculateLomb3 = document.getElementById('calculateLomb3');
const result = document.getElementById('result');
const lastResults = [];
const lastResultsWrap = document.getElementById('lastResultsWrap');
let sum = 0;

/*calculateLomb1.addEventListener('click', () => {
    let lomb1Tare = document.getElementById('lomb1Tare').value;
    let lomb1Weight = document.getElementById('lomb1Weight').value;
    let pieceWeight = lomb1Weight - lomb1Tare;

    if (lomb1Weight == 0) {
        window.alert("Por favor, insira o peso previsto na balança.");
    } else if (lomb1Tare == 0) {
       if (confirm('O lombador 1 está sem tara, deseja continuar?')) {
            sum += pieceWeight;
            sum = +sum.toFixed(2);
            result.innerText = `${sum}KG`;
            document.getElementById('lomb1Weight').value = '';
            //Array storing action
            lastResults.push(pieceWeight);
            lastResultsWrap.innerHTML = lastResults;
       } else {window.alert('A operação foi cancelada!')};
    } else {
        sum += pieceWeight;
        sum = +sum.toFixed(2);
        result.innerText = `${sum}KG`;
        document.getElementById('lomb1Weight').value = '';
        //Array storing action
        lastResults.push(pieceWeight);
        lastResultsWrap.innerHTML = lastResults;  
    };
});

calculateLomb2.addEventListener('click', () => {
    let lomb2Tare = document.getElementById('lomb2Tare').value;
    let lomb2Weight = document.getElementById('lomb2Weight').value;
    let pieceWeight = lomb2Weight - lomb2Tare;

    if (lomb2Weight == 0) {
        window.alert("Por favor, insira o peso previsto na balança.");
    } else if (lomb2Tare == 0) {
       if (confirm('O lombador 2  está sem tara, deseja continuar?')) {
            sum += pieceWeight;
            sum = +sum.toFixed(2);
            result.innerText = `${sum}KG`;
            document.getElementById('lomb2Weight').value = '';
            //Array storing action
            lastResults.push(pieceWeight);
            lastResultsWrap.innerHTML = lastResults;
       } else {window.alert('A operação foi cancelada!')};
    } else {
        sum += pieceWeight;
        result.innerText = `${sum}KG`;
        document.getElementById('lomb2Weight').value = '';
        //Array storing action
        lastResults.push(pieceWeight);
        lastResultsWrap.innerHTML = lastResults;
    };
});

calculateLomb3.addEventListener('click', () => {
    let lomb3Tare = document.getElementById('lomb3Tare').value;
    let lomb3Weight = document.getElementById('lomb3Weight').value;
    let pieceWeight = lomb3Weight - lomb3Tare;

    if (lomb3Weight == 0) {
        window.alert("Por favor, insira o peso previsto na balança.");
    } else if (lomb3Tare == 0) {
       if (confirm('O lombador 3  está sem tara, deseja continuar?')) {
            sum += pieceWeight;
            sum = +sum.toFixed(2);
            result.innerText = `${sum}KG`;
            document.getElementById('lomb3Weight').value = '';
            //Array storing action
            lastResults.push(pieceWeight);
            lastResultsWrap.innerHTML = lastResults;
       } else {window.alert('A operação foi cancelada!')};
    } else {
        sum += pieceWeight;
        result.innerText = `${sum}KG`;
        document.getElementById('lomb3Weight').value = '';
        //Array storing action
        lastResults.push(pieceWeight);
        lastResultsWrap.innerHTML = lastResults;
    };
});*/

//Optimizing PRONTO, FAZER ATUALIZAÇÃO NO GIT HUB, JÁ ONLINE
function calculateLomb(event, lomb) {
    let lombTare = document.getElementById(`${lomb}Tare`).value;
    let lombWeight = document.getElementById(`${lomb}Weight`).value;
    let pieceWeight = Math.round((lombWeight - lombTare) * 100) / 100;

    if (lombWeight == 0) {
        window.alert('Por favor, insira o peso previsto na balança.');
    } else if (lombTare == 0) {
        if (confirm(`O lombador ${lomb.slice(-1)} está sem tara, deseja continuar?`)){
            sum += pieceWeight;
            Math.round(sum * 100) / 100;
            result.innerText = `${sum}KG`;
            document.getElementById(`${lomb}Weight`).value
            //Array storing action
            lastResults.push(pieceWeight);
            lastResultsWrap.innerHTML = lastResults;
        } else {window.alert('A operação foi cancelada!')};
    } else {
        sum += pieceWeight;
        sum = Math.round(sum * 100) / 100;
        result.innerText = `${sum}KG`;
        document.getElementById(`${lomb}Weight`).value
        //Array storing action
        lastResults.push(pieceWeight);
        lastResultsWrap.innerHTML = lastResults;
    };
}

//Removing action
const removeAll = document.getElementById('removeAll');

removeAll.addEventListener('click', ()=> {
    sum = 0;
    result.innerText = `${sum}KG`;
    lastResults = [];
    lastResultsWrap = lastResultsWrap.innerHTML = lastResults;
});

