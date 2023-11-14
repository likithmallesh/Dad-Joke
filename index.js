const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "K/8t9Y/W2uPFwkU0Etl5bw==apdsMROgLpeD31mg";
const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke(){
    try {
        jokeEl.innerText = "Wait Dad is thinking..;)"
    btnEl.disabled = true;
    btnEl.innerText = "Loading...."
    const response = await fetch(apiURL, options)
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me another"
    jokeEl.innerText = data[0].joke
    } catch (error) {
        jokeEl.innerText = "Error,Try Again"
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke";
        console.log(error);
    }
    
}


    

btnEl.addEventListener("click", getJoke);


