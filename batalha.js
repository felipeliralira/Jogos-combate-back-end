
function lutar(){
    const classe = document.getElementById('classe').value;
    const arma = document.getElementById('arma');
    const log = document.getElementById('log');

    if (!arma){
        log.innerHTML = 'Por favor, selecione uma arma para lutar!';
        return;
    }
    const dado = Math.floor(Math.random() * 20) + 1;
    let resultado = `Dado: ${dado} | Classe: <strong>${classe}</strong> | Arma: <strong>${arma}</strong>`;
}