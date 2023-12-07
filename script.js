console.log("Hello world");

// Conditional statements / Betingelse uttrykk

// if else statement

// = setting value
// == checking value
// === checking value and datatype

const userName = "Silje";

if(userName === "Silje") {
    console.log("Your name is Silje");
} else {
    console.log("Your name is not Silje");
}

// Sjekke datatype
console.log(typeof userName);
console.log(typeof "Silje");

const userAge = 26;

// Sjekke om user age er over/samme som eller under 18 år
// < less than > greater than
if(userAge >= 18) {
    console.log("You are over 18 years old.");
} else {
    console.log("You are under 18 years old.");
}

// >= Større enn eller samme som

// Boolske operatorer - && betyr AND - || betyr OR

if (userName === "Silje" && userAge >= 18) {
    console.log("Your name is Silje and you are over 18 years old");
} else {
    console.log("Your name is not Silje and you are under 18 years old");
}

if (userName === "Silje" || userAge >= 18) {
    console.log("Your name is Silje or you are over 18 years old");
} else {
    console.log("Your name is not Silje or you are under 18 years old");
}

// Make an if / else statement that signs into a page

const theName = "Silje"
const age = 26
const isBlocked = false;
let isLoggedIn = false;
const isAdmin = false;
let page;


if (theName === "Silje" && age >= 18 && isBlocked === false ) {
    isLoggedIn = true;
    page = "/homepage";
    console.log("You are logged in to homepage");
    console.log(`Welcome back ${theName}! You have logged in to ${page}`);

    const display = document.getElementById("display");
    display.textContent = `Welcome back ${theName}! You have logged in to ${page}`;
} else {
    console.log("You are not logged in");
}
