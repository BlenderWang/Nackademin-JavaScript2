function load(url, callback) {

    const xhr = new XMLHttpRequest();

    console.log(xhr);

    // console.log(this.readyState);
    // console.log(this.status);

    xhr.onreadystatechange = function() {
        console.log(this.readyState);
        if(this.readyState === 4 && this.status === 200) {
            // console.log(this.responseText);

            callback(this);
        }
    }

    xhr.open('GET', url, true);  //true == asynchronous
    xhr.send();
}

function demo1(xhr) {
    const demo1 = document.getElementById('demo1');
    demo1.innerHTML = xhr.responseText;
}

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    load('demo1.txt', demo1);
});


