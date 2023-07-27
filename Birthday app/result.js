
import { auth, signOut, db, ref, get, child, remove, set } from './firebase.js'
import { calculate } from './calculate.js'

const quoteURL = "https://type.fit/api/quotes"

//getting name and birthday from local storage
let name = localStorage.getItem('name')
let userbirthday = localStorage.getItem('birthday')
console.log(name);
console.log(userbirthday);



$(document).ready(() => {

    //Calculating the user's birthday
    let remainingDays = calculate(userbirthday)
     //if today is not the birthday and 
    if (remainingDays !== 366 && remainingDays >1) {
       
        $('#greeting').append(`${remainingDays} days left untill your birthday ${name}`);
    } else if (remainingDays <= 1) {

        $('#greeting').append(`just One day left untill your birthday ${name}`);
    } else {
        //if today is birthday
        $('#greeting').append(`Happy Birthday ${name}`)
        //get the quote from Url
        fetch(quoteURL)
            .then((response) => {
                return response.json()
            }).then((response) => {

                let quote = response;
                //choosing a random quote
                let randomNumber = Math.floor(Math.random() * quote.length)
                let randomQuote = quote[randomNumber]
                console.log(randomQuote);
                //appending the quote to the DOM
                $('#quote').append(`${randomQuote.text} `)
                $('#author').append(`${randomQuote.author}`)


            })
    }
    //adding event listener to logout button
    $($('#logOutButton')).on('click', () => {

        signOut(auth)
            .then(() => {
                // Sign-out successful
                localStorage.removeItem('name')
                localStorage.removeItem('birthday')
                window.location.href = "loginPage.html"
            })
            // Sign-out unsuccessful
            .catch((error) => {
                console.log(error)
            });
    })

})
