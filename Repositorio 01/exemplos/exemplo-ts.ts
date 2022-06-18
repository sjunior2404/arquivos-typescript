window.addEventListener('load', function(){
    let btn = document.getElementById('btn');
    let input1 = document.getElementById('input1') as HTMLInputElement;
    let input2 = document.getElementById('input2') as HTMLInputElement;

    function somarNumeros(numero1:number, numero2:number, devPrintar:boolean){
       let resultado = numero1 + numero2     
       let frase = 'O valor é: '

        if(devPrintar){
            console.log(frase + resultado)
        }
        return resultado
    }

        let devPrintar = true;

        if(btn && input1 && input2){
        btn.addEventListener('click', ()=>{
            console.log(somarNumeros(Number(input1.value), Number(input2.value), devPrintar));   
        });
    }
});