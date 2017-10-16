console.log("[app]: Loading all modules...");
import Request from "./xhr.js";

var r = new Request('GET', 'https://httpbin.org/get')
r.setParams("Hello World");
r.send()
.then((response) => {
    console.log("[app]: Success")
    document.getElementById("element").innerHTML = response.params
})
.catch((error) => {
    console.log("[app]: Error")
    document.getElementById("element").innerHTML = error       
})



