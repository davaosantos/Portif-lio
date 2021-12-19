//Sistema para calculo de meta de produtos produzidos 
//Meta de produtos produzidas , por hora e por equipe = 130 
//Meta diaria de produtos para a fabrica = 3120

var equipes = ["equipeA", "equipeB", "equipeC", "equipeD"];
var qtdH1 = [ 120 , 50, 140, 150];
var qtdH2 = [ 140 , 90, 200, 120];
var qtdH3 = [ 10 , 100, 40, 150];
var qtdH4 = [ 130 , 130, 130, 130];
var qtdH5 = [ 120 , 50, 120, 120 ];
var qtdH6 = [ 140 , 150, 14, 100 ];

var totalEquipe;
var totalGeralEquipes = 0;

function calculoMediaDiaria(totalGeral){
    mediaDiariaAtingida = "Média diária não atingida";

    if(totalGeral >= 3120){
        mediaDiariaAtingida = "Média diária atingida";
    }

    return mediaDiariaAtingida
}

for(var index in equipes){

    var valoresEquipe = [qtdH1[index], qtdH2[index], qtdH3[index], qtdH4[index], qtdH5[index], qtdH6[index]];
    var totalEquipe = 0;
    var indice = 1;

    for(i = 0; i < valoresEquipe.length ; i++){
        var metaHorariaEquipe = "Meta horária não atingida";
        totalEquipe += valoresEquipe[i];
        if(valoresEquipe[i] >= 130){
            metaHorariaEquipe = "Meta horária atingida"
        }
        console.log(index + " " + indice + " ° Hora " + valoresEquipe[i] + " " + metaHorariaEquipe);
        indice += 1;
    }

    totalGeralEquipes += totalEquipe;
    console.log(equipes[index] + " - " + (indice - 1) + "° Hora: " + totalEquipe);

}

var mediaDiaria = calculoMediaDiaria(totalGeralEquipes);

console.log(mediaDiaria + " com total de: " + totalGeralEquipes);
