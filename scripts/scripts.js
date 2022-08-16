//To do:
    //Fixes:

    //Melhorias:
    //Informar tipo de recebimento/peça
    //Receber peças diferentes ao mesmo tempo/informar regras de recebimento
    //Menu para diferir recebimentos/arquivar recebimentos(nota, valor, pesos)
const result = document.getElementById('result');
const lastResultsWrap = document.getElementById('lastResultsWrap');
let lastResults = [];
let sum = 0;

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
            document.getElementById(`${lomb}Weight`).value = '';
            //Array storing action
            lastResults.push(pieceWeight);
            lastResultsWrap.innerHTML = lastResults;
        } else {window.alert('A operação foi cancelada!')};
    } else {
        sum += pieceWeight;
        sum = Math.round(sum * 100) / 100;
        result.innerText = `${sum}KG`;
        document.getElementById(`${lomb}Weight`).value = '';
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
    lastResultsWrap.innerHTML = lastResults;
});

