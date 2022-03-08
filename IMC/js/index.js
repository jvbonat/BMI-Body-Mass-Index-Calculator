const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido!',false)
        return;
    }

    if(!altura){
        setResultado('Altura inválida!',false)
        return;
    }
        const imc = getImc(peso,altura)
        const nivel = getNivelImc(imc);
        msg = `<p>Seu IMC é:${imc}.Seu nível de IMC é:${nivel}`
        setResultado(msg,true)
    
})

function getNivelImc(imc){
    const nivel = ['Abaixo do Peso','Peso normal','Sobrepeso','Obesidade grau 1',
'Obesidade grau 2','Obesidade grau 3'];   
       if(imc<18.5){
           return nivel[0]
       }
       else if(imc>=18.5 && imc<=24.9){
           return nivel[1]
       }else if(imc>=25 && imc<=29.9){
           return nivel[2]
       }else if(imc>=30 && imc<=34.9){
           return nivel[3]
       }else if(imc>=35 && imc<=39.9){
           return nivel[4]
       }else{
           return nivel[5]
       }   
}

function getImc(peso,altura){
    const imc = (peso/altura**2);
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg,isValid){
    const resultado = document.querySelector('.resultado');
    const p = criaP();
    if(isValid==true){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }
    resultado.appendChild(p);
    p.innerHTML = msg;
}