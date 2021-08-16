"use strict";

// https://teratail.com/questions/245824
let el = document.getElementById("output");
const getJson = () => {
    console.log("hello world from getJson");
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
    // console.log("hello world from testJson");
}

// alert("hello world");

function test() {
    console.log("Hello World from test()");
}