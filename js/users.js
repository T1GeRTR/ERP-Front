/*eslint-env es6*/

const requestURL = 'http://localhost:8080/user/';

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json();
    })
}

sendRequest('GET', requestURL)
    .then(data => viewUsers(data))
    .catch(err => console.log(err));

// function viewUsers (array){
//     $.each(array, function (index, i) {
//         $('#htList').append("<li>" + " " + i.id + ", " + i.firstname + ", " + i.lastname + ", " + i.email + " " + "</li>");
//     })
// };

function viewUsers(array) {
    $.each(array, function (index, i) {
        $('.users-row').append(
            '<div class="col-3">' +
            '<div class="user">' +
            '<div class="id">Ид: ' + i.id + '</div>' +
            '<div class="fname">Имя: ' + i.firstname + '</div>' +
            '<div class="lname">Фамилия: ' + i.lastname + '</div>' +
            '<div class="email">E-mail: ' + i.email + '</div>' +
            '</div>' +
            '</div>');
    })
};