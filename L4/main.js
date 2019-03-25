function load(url, callback) {

    const xhr = new XMLHttpRequest();

    console.log(xhr);

    console.log(this.readyState);
    console.log(this.status);

    xhr.onreadystatechange = function() {
        console.log(this.readyState);
        if(this.readyState === 4 && this.status === 200) {
            // console.log(this.responseText);

            // const demo1 = document.getElementById('demo1');
            // demo1.innerHTML = this.responseText;
            callback(this);
        }
    }

    xhr.open('GET', url, true);  //true == asynchronous
    xhr.send();1
}

load(demo1);