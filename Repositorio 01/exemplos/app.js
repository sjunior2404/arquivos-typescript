window.addEventListener('load', function(){
    let btn = document.getElementById('btn');
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');

    function somarNumeros(numero1, numero2){
        return Number(numero1) + Number(numero2)
    }

        btn.addEventListener('click', ()=>{
            console.log(somarNumeros(input1.value, input2.value));   
        });
});