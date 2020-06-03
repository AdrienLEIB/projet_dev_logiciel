import React, { Component } from 'react';


export class MCDjson extends Component {

    constructor() {
        super();

        this.state = {
            jsonfile : {
                "Client": {
                    "_id" : "1",
                    "name":"Leib",
                    "firstname":"Adrien",
                    "email":"Adrien3@test.fr",
                    "password":"hugoleplusbo",
                    "admin":true
                  },
            
                "Product" : [
                    {
                        "_id" : "01",
                        "name":"Pomme",
                        "stock": 50,
                        "path":"c://image.png",
                        "price": 199,
                        "idMotherProduct": "001",
                        "idClient": "1",
                        "invoices":[]
                    },
                    {
                        "_id" : "02",
                        "name":"Poire",
                        "stock": 50,
                        "path":"c://Users//terra//Documents//Ingesup//b2//YDAYS//Oral//kcus_pub_banniere/pub.png",
                        "price": 199,
                        "idMotherProduct": "001",
                        "idClient": "1",
                        "invoices":[]
                  }
                ],
            
                "Invoice" : {
                    "_id" : "0001",
                    "idclient":"1",
                    "stock": 50,
                    "paid":true,
                    "pay_date": "1999-01-31",
                    "products":["01", "02"],
                    "price":199
                },
            
                "MotherProduct" : {
                    "_id" : "001",
                    "name":"poire",
                    "path":"c://Users//terra//Desktop//ProjetIng//Poire.png",
                    "type":"fruit"
                }
            }
         }

        
      }

    render() {
        const data = this.state.jsonfile;
    return (
        <div><pre>{JSON.stringify(data, null, 100) }</pre></div>
    );
  }
}

export default MCDjson;