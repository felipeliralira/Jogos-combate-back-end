
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
            log.innerHTML = resultado;
        }else if(dado > 12){
            resultado += "<span class='sucesso'> VITÓRIA: Você farmou muita aura.</span>"
            log.innerHTML = resultado;
        }else{
            resultado += "<span class='derrota'> DERROTA: Monstro farmou mais aura que você ;-;</span>"
            log.innerHTML = resultado;
        }
        break;
        case "mago":
        if(arma.toLowerCase() === "cajado" && dado >8){
            resultado += "<span class='sucesso'> SUCESSO: Você transformou o inimigo num slime.</span>"
            log.innerHTML = resultado;
        }else if (dado === 20){
            resultado += "<span class='critico'> SUCESSO: Você meteu um ataque crítico forte dms.</span>"
            log.innerHTML = resultado;
        }else{
            resultado += "<span class='derrota'> DERROTA: Você foi mlk ;-;.</span>"
            log.innerHTML = resultado;
        }break;
        case "arqueiro":
        if(arma.toLowerCase() === "arco" && dado > 10){
            resultado += "<span class='vitoria'> SUCESSO: Você acertou a flecha bem na cara do inimigo.</span>"
            log.innerHTML = resultado;
        }else{
            resultado += "<span class='derrota'> DERROTA: O inimigo desviou da flecha </span>"
            log.innerHTML = resultado;
        }break;

        default:
            resultado += "Você ficou paralisado de medo";

    }
    log.innerHTML = resultado;
}