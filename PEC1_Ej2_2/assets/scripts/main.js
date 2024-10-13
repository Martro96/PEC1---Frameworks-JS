//recoger contenido segun inicie la pagina
document.addEventListener('DOMContentLoaded', function(){
    //recoger cantidades y divisar
    const amountA = document.getElementById('amount-A');
    const amountB = document.getElementById('amount-B');
    const divisaA = document.querySelector('.money1 select');
    const divisaB = document.querySelector('.money2 select');
    const infoSwapAmount = document.querySelector('.infoSwapAmount');

    const getExchangeRate = async function() {
        const baseCurrency = divisaA.value;
        const targetCurrency = divisaB.value;
        const amount = amountA.value;

        if (amount < 0){
            alert("No puedes introducir valores negativos");
            return //termina ejecución
        }
        try{
            //peticion a la api
            const response = await fetch(`https://v6.exchangerate-api.com/v6/69c87ab2cc0dd199bc00a0b2/latest/${baseCurrency}`)
            //comprobar estado de la respuesta de la api
            if(!response.ok){
                throw new Error("Error en al respuesta de la api: " + response.statusText);
            }

            //recoger la información de la api
            const data = await response.json();
            const rate = data.conversion_rates[targetCurrency.toUpperCase()];
            const convertedAmount = (amount * rate).toFixed(2);

            //mostrar los resultados
            amountB.value = convertedAmount;
            infoSwapAmount.textContent = amount + ' ' + baseCurrency + ' = ' + convertedAmount + ' ' + targetCurrency;
        }catch(error){
            console.log("Error", error);
        }
    }

    //ejecutar el cambio de divisas al cambiar los inputs
    divisaA.addEventListener('change', getExchangeRate);
    divisaB.addEventListener('change', getExchangeRate);
    amountA.addEventListener('input', getExchangeRate);

    //boton del swap
    //const swapButton = document.querySelector("button[type='submit'");
    const swapButton = document.querySelector("#swapButton");
    swapButton.addEventListener("click", function(e){
        e.preventDefault(); //evitar que se recargue la pagina
        const temp = divisaA.value;
        divisaA.value = divisaB.value;
        divisaB.value = temp;
        getExchangeRate();
    })
})