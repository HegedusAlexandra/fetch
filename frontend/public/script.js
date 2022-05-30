// async            csak a második megoldáshoz kell

const loadEvent = async function (){

    const rootElement = document.getElementById("root")

    /* I.   MEGOLDÁS
    // then kifejezés megvárja a fetch végét
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    // ez a function tölti fel a kifejezést
    .then(function (response){
        console.log(response);
        return response.json()
    })
    .then(function (json){
        console.log(json.date);
        rootElement.insertAdjacentHTML("beforeend",
        `<h1>${json.title}</h1>
        <h2>${json.explanation}</h2>
        <img src="${json.hdurl}">`);
    })*/

    /*II.   MEGOLDÁS*/
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    const responseJson = await response.json()
    rootElement.insertAdjacentHTML("beforeend",
        `<h1>${responseJson.title}</h1>
        <h2>${responseJson.explanation}</h2>
        <img src="${responseJson.hdurl}">`)
}

window.addEventListener("load",loadEvent)