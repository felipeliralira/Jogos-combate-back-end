
function lutar(){
    const classe = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');

    if (!arma){
        log.innerHTML = 'Por favor, selecione uma arma para lutar!';
        return;
    }
    const dado = Math.floor(Math.random() * 20) + 1;
    let resultado = `Dado: ${dado} | Classe: <strong>${classe}</strong> | Arma: <strong>${arma}</strong>`;

    switch(classe){
        case "guerreiro":
        if(arma.toLowerCase() === "espada" && dado >5){
            resultado += "<span class='sucesso'> SUCESSO: Você decapitou o inimigo.</span>"
        }else if(dado > 15){
            resultado += "<span class='sucesso'> VITÓRIA: Você farmou muita aura.</span>"
        }else{
            resultado += "<span class='derrota'> DERROTA: Monstro farmou mais aura que você ;-;</span>"
        }
        break;
        case "mago":
        if(arma.toLowerCase() === "cajado" && dado >8){
            resultado += "<span class='sucesso> SUCESSO: Você transformou o inimigo num slime.</span>"
        }else if (dado = 20){
            resultado += "<span class='critico'> SUCESSO: Você meteu um ataque crítico forte dms.</span>"
        }else{
            resultado += "<span class='derrota'> DERROTA: Você foi mlk ;-;.</span>"
        }
        case "arqueiro":

    }
}