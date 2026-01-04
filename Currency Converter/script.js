// https://v6.exchangerate-api.com/v6/28952c1179888d3f7a3a8499/latest/INR

const fromCurrency = document.querySelector("#fromCurrency")
const toCurrency = document.querySelector("#toCurrency")
const from = document.querySelector("#from")
const to = document.querySelector("#to")
const btn = document.querySelector("#btn")

let YOURAPIKEY = ""

async function main () {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${YOURAPIKEY}/latest/INR`)
    let value = await response.json()
    console.log(value);
    let conversion = value.conversion_rates;
    console.log(conversion);
    

    for(let key in conversion){
        let optionfrom = document.createElement("option")
        let optionto = document.createElement("option")
        optionfrom.vaule = key
        optionfrom.textContent = key
        optionfrom.classList = "lightgray"
        fromCurrency.appendChild(optionfrom)
        
        optionto.vaule = key
        optionto.textContent = key
        optionto.classList = "lightgray"
        toCurrency.appendChild(optionto)
    }

    from.addEventListener('input', async () => {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${YOURAPIKEY}/latest/${fromCurrency.value}`)
        let value = await response.json()
        console.log(value);
        let conversion = value.conversion_rates;

        to.value = from.value * conversion[toCurrency.value]
    })

    fromCurrency.addEventListener('input', async () => {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${YOURAPIKEY}/latest/${fromCurrency.value}`)
        let value = await response.json()
        console.log(value);
        let conversion = value.conversion_rates;

        to.value = from.value * conversion[toCurrency.value]
    })
    
    to.addEventListener('input', async () => {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${YOURAPIKEY}/latest/${toCurrency.value}`)
        let value = await response.json()
        console.log(value);
        let conversion = value.conversion_rates;

        from.value = to.value * conversion[fromCurrency.value]
    })
    
    toCurrency.addEventListener('input', async () => {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${YOURAPIKEY}/latest/${toCurrency.value}`)
        let value = await response.json()
        console.log(value);
        let conversion = value.conversion_rates;

        from.value = to.value * conversion[fromCurrency.value]
    })

    from.value = 1
    to.value = 1
}


main()