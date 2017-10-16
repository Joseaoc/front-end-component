export default class Request {
    constructor(method, url){
        this.xhr = new XMLHttpRequest()
        this.xhr.open(method, url)
    }    

    setParams(params){
         this.params = params
    }
    getParams(){
         return this.params
    }

    setRequestHeader(header, value){
        this.xhr.setRequestHeader(header, value)
    }
    getRequestHeader(){
        return this.xhr.requestHeader
    }

    set responseType(type){
        this.xhr.responseType = type
    }
    get responseType(){
        return this.xhr.responseType
    }

    get allResponseHeaders(){
        return this.xhr.getAllResponseHeaders();
    }
    getResponseHeader(header){
        return this.xhr.getResponseHeader(header)
    }

    send(){
        if(this.params != null){
            console.log("[Request]: Params in request. Sending... ")
            return new Promise((resolve, reject) => {
                this.xhr.onreadystatechange = () => {
                    if(this.xhr.status == 200 && this.xhr.readyState == 4){
                        console.log("[Request]: Response received")
                        resolve(this);
                    }
                }
                this.xhr.send(this.params)
            })
        } else {
            console.log("[Request]: No params in request. Sending... ")
            return new Promise((resolve, reject) => {
                this.xhr.onreadystatechange = () => {
                    if(this.xhr.status == 200 && this.xhr.readyState == 4){
                        console.log("[Request]: Response received")
                        resolve(this.xhr)
                    }
                }
                this.xhr.send()
            })   
        }
    }   
}