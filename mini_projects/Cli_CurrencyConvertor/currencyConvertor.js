import https from "https"
import readline from "readline"
import chalk from "chalk"

const apiKey = "bc7cd798bfb870b15eb76525"
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const currencyConvert = (amount, rate) => {
    return amount * rate
}

https.get(url, (response) => {

    let data = ""
    response.on('data', (chunk) => {
        data += chunk
    })

    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates;
        // console.log(rates);

        rl.question('Enter the amount in USD: ', (amount) => {
            rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (currency) => {
                const rate = rates[currency.toUpperCase()]

                if(rate){
                    console.log(chalk.bgRed(`${amount} is approximately ${currencyConvert(amount, rate)} ${currency}`));
                } 
                else{
                    console.log("Invalid Currency Code !");
                }

                rl.close()
            })
        })  
    })  
})