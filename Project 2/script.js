function Alert() {
    alert("You must br 18+ For visiting this website." );
}
setTimeout(Alert,4000);


function age() {
    let Age = prompt("What is your age")
    if(Age >=18){
        alert("Ok so you are 18+, Welcome to my website")
    }
    else if(Age <18){
        alert("Sorry! You are too young for this website...")
    }
}
setTimeout(age,6000);


function dispayTime() {
    let time = new Date();
    console.log(time);
    document.getElementById("time").innerHTML = time;
}
setInterval(dispayTime, 1000)

