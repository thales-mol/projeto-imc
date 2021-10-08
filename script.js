const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const imc = (peso/(altura**2)).toFixed(2);
        const max = (25*(altura**2)).toFixed(0);
        const min = ((18.5*(altura**2))).toFixed(0);
        
        let classificacao = '';

        if (imc < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (imc < 25) {
            classificacao = 'com o peso ideal.';
        }else if (imc < 30){
            classificacao = 'levemente acima do peso.';
        }else if (imc < 35){
            classificacao = 'com obesidade grau I.';
        }else if (imc < 40){
            classificacao = 'com obesidade grau II.';
        }else {
            classificacao = 'com obesidade grau III.';
        }

        resultado.textContent = `Olá, ${nome}! Com o peso de ${peso}kg e altura de ${altura}m, seu IMC é ${imc}. Atualmente, você está ${classificacao} Procure manter o seu peso entre ${min} KG e ${max} KG.`;

    }else {
        window.alert('Preencha todos os campos!');
    }

}
calcular.addEventListener('click', imc);