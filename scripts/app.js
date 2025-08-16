
function hello() {
    console.log("Hello There!");
    goodbye();
}

function goodbye() {
    console.log("Bye!");
}

function init() {
    console.log("Hello im the init");
    hello();
}




window.onload = hello;// it waits until the html and css finish to run the logic 