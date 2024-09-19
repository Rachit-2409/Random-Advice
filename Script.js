let advice = document.getElementById('advice');
let btn = document.getElementById('btn');

let fetch_advie = async ()=>{
    let data =  await fetch('https://api.adviceslip.com/advice');
    let response = await data.json();
    return response;
}
let adviceUpdater =  () => {
    fetch_advie().then( (data)=>{
        advice.innerText = data.slip.advice;
    } )
   
}


btn.addEventListener('click', adviceUpdater);

adviceUpdater();










