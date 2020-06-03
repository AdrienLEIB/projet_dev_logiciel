import jwtDecode from 'jwt-decode';

const url = 'http://localhost:3030/api/v1/'

export default class Panier {


    getToken() {
        return localStorage.getItem('token');
    }

    setPanier(id){
        localStorage.setItem("panier", id);
        // return localStorage.getItem("panier");
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
            quantity = quantity.split(",");
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
        // return localStorage.getItem("quantity");
    }

    AddPanier(id, q){
        let products = this.getPanier();
        let productquantity = this.getQuantity();

        if(products===null && productquantity === null){
            products = this.setPanier(id);
            productquantity = this.setQuantity(q);

        }
        else{
            products = products.split(",");
            products.push(id);
            localStorage.setItem("panier", products);

            productquantity = productquantity.split(",");
            productquantity.push(q);
            localStorage.setItem("quantity", productquantity);
        }   
    }

    updateQuantity(index, value ){
        let listquantity = this.getQuantity();
        listquantity = listquantity.split(",");
        listquantity[index] = value;
        localStorage.setItem("quantity", listquantity);
    }

    deleteindexPanier(index){
        let products = this.getPanier();
        products = products.split(",");

        if(index===0){
            products.splice(0, 1);
        }
        else{
            products.splice(index,index);
        }

        let listquantity = this.getQuantity();
        listquantity = listquantity.split(",");

        if(index===0){
            listquantity.splice(0,1);
        }
        else{
            listquantity.splice(index,index);
        }
        localStorage.setItem("panier", products);
        localStorage.setItem("quantity", listquantity);

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