import jwtDecode from 'jwt-decode';

const url = 'http://localhost:3030/api/v1/'

export default class ManagerService {

    getToken() {
        return localStorage.getItem('token');
    }

    getManagerProfil() {
        return jwtDecode(this.getToken());
    }

    CreateManager(body) {
        return fetch(
            url + 'manager', {
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

    ReadManager() {
        return fetch(
            url + 'manager', {
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

    GetManagerDetail(id) {
        return fetch(url + `manager/${id}`, {
                method: 'GET', 
                headers: {'x-access-token': this.getToken()}
            })
            .then(res => {
                return res.json();
            })
    }

    UpdateManager(id, body) {
        return fetch(url + `manager/${id}`, {
            method: "PATCH",
            headers: { "x-access-token": this.getToken(),"Content-Type":"application/json" },
            body: JSON.stringify(body),
          }).then(function(res) {
            console.log(res);
            return res.json();
          });
    }

    DeleteManager(id) {
        return fetch(url + `manager/${id}`, {
            method: "DELETE",
            headers: { "x-access-token": this.getToken() }
          }).then(function(res) {
            return res.json();
          });
    }
}