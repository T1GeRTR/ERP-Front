/*eslint-env es6*/

const requestURL = 'http://localhost:8080/user/3';

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json();
    })
}

sendRequest('GET', requestURL)
    .then(data => viewHours(data))
    .catch(err => console.log(err));


function viewHours(array) {
    $.each(array, function (index, i) {
        $('.hours-row').append(
            '<div class="col-12">' +
            '<div class="hours-item">' +
            '<div class="lname">Фамилия: ' + i.lastname + '</div>' +
            '<div class="lname">Массив: ' + i.json + '</div>' +
            '<div class="hours-list row">' +
            '</div>' +
            '</div>' +
            '</div>');
            // console.log(i.lastname)
            // console.log(i.hours)
            //viewHoursItem(i.hours);
            console.log(i.hours)
            $.each(i.hours, function (index, j) {
                $('.hours-list').append(
                    '<div class="hour col">' +
                    '<div class="h">' + j.hours + '</div>' +
                    '</div>'  
                )
            });
        });
        
};

function viewHoursItem(array) {
    $.each(array, function (index, i) {
        $('.hours-list').append(
            '<div class="hour col">' +
            '<div class="h">' + i.hours + '</div>' +
            '</div>'  
        )
    });
};