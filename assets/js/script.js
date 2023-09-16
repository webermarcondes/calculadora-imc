const form = document.getElementById('form'); //pega o elemento com id "form" na página

form.addEventListener('submit', function(event) {
    event.preventDefault(); //impede o carregamento da página quando o usuário clica no botão "Calcular" e os dados são enviados;

    const weight = document.getElementById('weight').value; //peso inserido no formulário
    const height = document.getElementById('height').value; //altura inserida no formulário

    const bmi = (weight / (height * height)).toFixed(2) //"toFixed arredonda o número para a quantidade de casas decimais especificadas"


    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');  //retira a classe hidden do elemento com id "infos"

    if (bmi < 18.5) {
        description = "Cuidado! Você está abaixo do peso!";
    }

    else if(bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";

        value.classList.remove('attention');
        value.classList.add('normal');;
        
    }

    else if(bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
    }

    else if(bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
    }

    else if(bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
    }

    else {
        description = "Cuidado! Você está com obesidade morbida!";
    }




    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});

