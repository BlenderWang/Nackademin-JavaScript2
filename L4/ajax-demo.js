function load(url , callback){

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if(this.readyState === 4  && this.status === 200 ) {
            callback(this);
        }
    }
    xhr.open('GET' , url , true);
    xhr.send();
}

const btn = document.getElementById('btn');
btn.addEventListener('click' , function () {
    load('https://cors.io/?http://api.namnapi.se/v2/names.json?limit=10' , demoCallback);
})

function demoCallback(xhr){

    const demoDIV = document.getElementById('demo');

    // convert json string to json obj
    const users = JSON.parse(xhr.responseText);
    console.log(users);

    // user names === array
    console.log(users.names);

    // log the first name in the array
    console.log(users.names[0]);

    const user = users.names[0];

    const firstName = user.firstname;

    const lastName = user.surname;

    demoDIV.innerHTML = `${firstName} ${lastName}`;

    console.log(user);

    // convert json obj back to json string
    const jsonStr = JSON.stringify(user);
    console.log(jsonStr);
}
