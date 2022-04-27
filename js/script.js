
const name = prompt("Enter your name:");
const surname = prompt("Enter your surname:");
const favoriteColor = prompt("Enter your favorite color:");

//generates a random number from 0 to 99
const randomNumber = Math.floor(Math.random() * 100);

document.getElementById('container').classList.remove("hidden");
document.getElementById('pwd').innerHTML = name + surname + favoriteColor + randomNumber;

console.log(name + surname + favoriteColor + randomNumber);
