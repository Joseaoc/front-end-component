console.log("[app]: Loading all modules...");
import Request from "./xhr.js";

var r = new Request('GET', 'https://httpbin.org/get')
r.send()
.then((response) => {
    console.log("[app]: Success")
    document.getElementById("element").innerHTML = response.response
})
.catch((error) => {
    console.log("[app]: error")
    document.getElementById("element").innerHTML = error       
})



