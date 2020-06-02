import jwtDecode from 'jwt-decode';

const url = 'http://localhost:3030/api/v1/'

export default class Panier {


    getToken() {
        return localStorage.getItem('token');
    }

    setPanier(id){
        localStorage.setItem("panier", id);
        return localStorage.getItem("panier");
    }

    getPanier(){
        return localStorage.getItem('panier');
    }

    getProductProfil() {
        return jwtDecode(this.getToken());
    }



    getProductsOnPanier(){
        let products = this.getPanier();
        if(products){
            products = products.split(",");
        }
        //var productsDetail = []
        // for(const [index, value] of products.entries()){ 
        //     var detail = this.GetProductDetail(products[index]);
        //     productsDetail.push(detail);
        // }
        return products;
    }

    getQuantity(){
        return localStorage.getItem("quantity");
    }


    getQuantityProductOnPanier(){
        let quantity = this.getQuantity();
        if(quantity){
            quantity   = quantity.split(",");
        }
        return quantity;
    }

    getLengthOnPanier(){
        let products = this.getProductsOnPanier();
        if (products !== null) {
            return products.length;
        } else {
            return 0;
        }
    }

    GetProductDetail(id) {
        return fetch(url + `product/${id}`, {
                method: 'GET', 
                headers: {'x-access-token': this.getToken()}
            })
            .then(res => {
                return res.json();
            })
    }

    ResetPanier(){
        localStorage.removeItem("quantity");
    }


    setQuantity(quantity){
        localStorage.setItem("quantity", quantity);
        return localStorage.getItem("quantity");
    }

    AddPanier(id, q){
        let products = this.getPanier();
        if(products==null){
            products = this.setPanier(id);

        }
        else{
            products = products.split(",");
            products.push(id);
            localStorage.setItem("panier", products);

        }
        let productquantity = this.getQuantity();
        if(productquantity==null){
            productquantity = this.setQuantity(q);

        }
        else{
            productquantity = productquantity.split(",");
            productquantity.push(q);
            localStorage.setItem("quantity", productquantity);
        }

        //console.log(products);
        console.log(productquantity);
        
    

    }
    deletePanier(id){
        let products = this.getPanier();
        products = products.split(",");
        for (var i = products.length - 1; i >= 0; i--) {
            if(products[i] === id){
                //delete products[i]
                products.splice(i,i+1);
                break
            }
        }
        localStorage.setItem("panier", products);

    }
    deleteALL(){
        localStorage.removeItem("quantity")
        localStorage.removeItem("panier")
    }


}


// function createItem() {
//   sessionStorage.setItem("test1", ["Lorem ipsum", "toto"]);
// }

// function readValue() {
//   var x = sessionStorage.getItem("test1");
//   x = x.split(",");
//   for(xx in x){
//    document.getElementById("demo").innerHTML = x[xx];
//   }
//   //document.getElementById("demo").innerHTML = x;
// }