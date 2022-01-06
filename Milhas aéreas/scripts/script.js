

let inputViagens = document.getElementById("viagens");
let inputPremium = document.getElementById("premium");
let inputLight = document.getElementById("light");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let totalViagens = inputViagens.value;
    let tarPremium = inputPremium.value;
    let tarLight = inputLight.value;

    let totalMilhas = calculoMilhagem(totalViagens, tarPremium, tarLight);

    let totalDinheiro = (totalMilhas) * 0.05;
    
    resultado.innerHTML = `<p>Total de ${totalMilhas} Milhas</p>`
    resultado.innerHTML += `<p>Equivalente a ${totalDinheiro} reais</p>`
    
}

function calculoMilhagem(totalViagens, totPremium, totLight){

    let calculoMilhas ;

    let verificacao = (parseFloat(totPremium) + parseFloat(totLight));

    if (totalViagens == verificacao){
        if (totalViagens >= 10){
            calculoMilhas = parseFloat((totLight * 600) + (totPremium * 800));
            return calculoMilhas;
        }else{
            calculoMilhas = parseFloat((totLight * 450) + (totPremium * 700));
            return calculoMilhas;
        }
    }else if(verificacao > totalViagens){
        alert("O total de tarifas não pode ser maior que o de viagens")
        return null
    }else{
        alert("A somatoria das tarifas deve ser igual ao total de viagens")
        return null
    }
}

