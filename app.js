var input=document.querySelector('#input');
var btn=document.querySelector('#btn');
var output=document.querySelector('#output');

function fetchUrl(str)
{
    return `https://lessonfourapi.a29omom.repl.co/translate/yoda.json?text=${str}`;
}
function fetchApi()
{
    fetch(fetchUrl(input.value))
    .then((response)=>response.json())
    .then((json)=>(output.value.innerText=json.contents.translated))
    .catch("error")

}
btn.addEventListener("click",fetchApi);