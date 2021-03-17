/*eslint-env es6*/

const requestURL = 'http://localhost:8080/user/';

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.error(xhr.response);
            } else {
                document.write(xhr.response);
            }
        }

        xhr.onerror = () => {
            document.write("ERROR: " + xhr.response)
        }

        xhr.send(body);
    })
}

sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err));