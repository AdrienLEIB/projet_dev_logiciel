import React, { Component } from 'react';


export class MCDjson extends Component {

    constructor() {
        super();

        this.state = {
            title1 : "Client",
            description1: {
                "name":"Leib",
                "firstname":"Adrien",
                "email":"Adrien3@test.fr",
                "password":"hugoleplusbo",
                "admin":true
              },
            title2 : "Produit",
            description2 : {
              "stock": 50,
              "price": 199,
              "idmotherproduct":"5ec2b6194f85c619406e3c9f"
            },
            title3: "Facture",
            description3: {
                "paid":true,
                "products":[{"id": "5eaae05b8a465626409884af", "price": 5, "qty": 5}],
                "price":199
              },
            title4 : "MotherProduit",
            description4 : {
                "name":"poire",
                "path":"c://Users//terra//Desktop//ProjetIng//Poire.png",
                "type":"fruit"
              }

      }
    }

    render() {
    return (
        <div>
            <h2>{this.state.title1}</h2>
            <pre>{JSON.stringify(this.state.description1, null, 1) }</pre>

            <h2>{this.state.title2}</h2>
            <pre>{JSON.stringify(this.state.description2, null, 1) }</pre>

            <h2>{this.state.title3}</h2>
            <pre>{JSON.stringify(this.state.description3, null, 1) }</pre>

            <h2>{this.state.title4}</h2>
            <pre>{JSON.stringify(this.state.description4, null, 1) }</pre>
            <br/>
        </div>
    );
  }
}

export default MCDjson;