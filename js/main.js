"use strict";

// Use Xampp or some local servers. Because this app uses XHR.
// https://teratail.com/questions/245824
let el = document.getElementById("output");
const getJson = () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                el.innerText = xhr.responseText;
            } else {
                alert("status = " + status.status);
            }
        }
    }
    xhr.open("GET", "test.json");
    xhr.send();
}

const testJson = () => {
    getJson();
}