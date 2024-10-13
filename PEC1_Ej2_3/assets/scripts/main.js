const currencySelect = document.getElementById('currency');
const movieSelect = document.getElementById('movie');
let price = movieSelect.value;
const updatePrice = document.getElementById('price');
const updateSymbol = document.getElementById('currency-symbol');
const total_price = document.querySelector("#total-price")
const total_selected_seats = document.querySelector("#total-selected-seats")
const symbols = {
    'usd': '$',
    'eur': '€',
    'jpy': '¥',
    'gbp': '£',
    'aud': 'A$',
    'cad': 'C$',
    'chf': 'CHF',
    'cny': 'CN¥'
}

const getExchangeRate = async(fromCurrency, toCurrency) =>{
    try{
        
        var lowerCurrency = fromCurrency.toLowerCase();
        const response = await fetch(`https://v6.exchangerate-api.com/v6/0f8414e49b65638a6770bc71/latest/${lowerCurrency}`);
        const data = await response.json();
        return data.conversion_rates[toCurrency.toUpperCase()];
    }catch(error){
        console.log("Error", error);
    }
}

function updateTotalPrice(){
    const selectedSeats = document.querySelectorAll('.seat-selected').length;
    const total = (selectedSeats * parseFloat(price)).toFixed(2)
    //imprimir
    total_selected_seats.innerHTML = selectedSeats;
    return total
}

async function updatePrices(){
    const selectedCurrency = currencySelect.value;
    const rate = await getExchangeRate('USD', selectedCurrency);
    if(rate){
        const newPrice = (price * rate).toFixed(2);
        updatePrice.innerHTML = newPrice;
        updateSymbol.innerHTML = symbols[selectedCurrency];
        total_price.innerHTML = updateTotalPrice() + " " + symbols[selectedCurrency];
    }
}

function updateMovie(){
    price = movieSelect.value;
    updatePrices();
}

//manejar la seleccion de asientos
document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', function(){
        if(!seat.classList.contains('seat-occupied')){
            seat.classList.toggle('seat-selected');
            //actualiar el precio total
            total_price.innerHTML = updateTotalPrice() + " " + symbols[currencySelect.value];
            localStorage.setItem("total_price", total_price.innerHTML)
            localStorage.setItem("total_selected_seats", total_selected_seats.innerHTML);
        }
    })
})

//eventos para los selectores
currencySelect.addEventListener('change', updatePrices);
movieSelect.addEventListener('change', updateMovie);

//ejecutar el cambio de divisas al cambiar los inputs
updatePrices();
