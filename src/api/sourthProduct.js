import request from './index'


const sourthProductDetails={
    add(parmas){
        return request.post("./addSourthProduct",parmas)
    },
    getProduct(){
        return request.get("./checkProduct")
    },
    setLogin(parmas){
        return request.post("./login",parmas)
    }
}

export default sourthProductDetails