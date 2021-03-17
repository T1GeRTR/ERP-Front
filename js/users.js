/*eslint-env es6*/

const requestURL = 'http://localhost:8080/user/';

var getUsers;

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json();
    })
}

sendRequest('GET', requestURL)
    .then(data => getUsers = data)
    .catch(err => console.log(err));

$(document).ready(function () {
    $.each(getUsers, function (index, i) {
        $('#htList').append("<li>*" + " TEST " + i.id + ", " + i.firstname + ", " + i.lastname + ", " + i.email + " " + "</li>");
    })
}());