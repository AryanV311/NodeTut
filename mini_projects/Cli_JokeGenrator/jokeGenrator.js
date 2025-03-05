import https from "https"

const jokeGenrate = () => {
    const URL = "https://official-joke-api.appspot.com/random_joke"

    https.get(URL, (response) => {
        let data = ""
        response.on('data', (chunk) => {
            data += chunk
        })

        response.on('end', () => {
            const joke = JSON.parse(data);

            console.log(`Here is random ${joke.type} joke.`);
            console.log(`${joke.setup}`);
            console.log(`${joke.punchline}`);
        })
    })
}

jokeGenrate()