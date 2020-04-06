import jwtDecode from 'jwt-decode';

const url = 'http://localhost:3030/api/v1/';

export default class GolfService {

    getToken() {
        return localStorage.getItem('token');
    }

    getGolfProfil() {
        return jwtDecode(this.getToken());
    }

    CreateGolf(body) {
        return fetch(
            url + 'golf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token': this.getToken()
            },
            body: JSON.stringify(body)
        }).then(res => {
            console.log(res);
            return res.json();
        })
    }

    ReadGolf() {
        return fetch(
            url + 'golf', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'x-access-token': this.getToken()
            }
        }).then(res => {
            console.log(res);
            return res.json();
        })
    }

    GetGolfDetail(id) {
        return fetch(url + `golf/${id}`, {
                method: 'GET', 
                headers: {'x-access-token': this.getToken()}
            })
            .then(res => {
                return res.json();
            })
    }

    UpdateGolf(id, body) {
        return fetch(url + `golf/${id}`, {
            method: "PATCH",
            headers: { "x-access-token": this.getToken(),"Content-Type":"application/json" },
            body: JSON.stringify(body),
          }).then(function(res) {
            console.log(res);
            return res.json();
          });
    }

    DeleteGolf(id) {
        return fetch(url + `golf/${id}`, {
            method: "DELETE",
            headers: { "x-access-token": this.getToken() }
          }).then(function(res) {
            console.log(res);
            return res.json();
          });
    }
}