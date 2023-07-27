

import {auth, createUserWithEmailAndPassword} from './firebase.js'
import {db, ref, set} from './firebase.js'
//add event listener to button
$(document).ready(()=>{
    $('button').click (()=>{
        
        //get the value of form input
        const firstName = $($('.form-control')[0]).val()
        const lastName = $($('.form-control')[1]).val()
        const birthday = $($('.form-control')[2]).val()
        const email = $($('.form-control')[3]).val()
        const password = $($('.form-control')[4]).val()
       
       
        console.log(firstName)
        console.log(lastName)
        console.log(birthday)
        console.log(email)
            
            // create a new pattern for user
        const userData = { 
            FirstName: firstName,
            LastName: lastName,
            Birthday:birthday, 
            Email: email, 
            Password: password,
            }
            //creating authentication
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                console.log(userCredential.user)               

            //set data to Database
                const userKey = userCredential.user.uid
                set(ref(db, 'Users/' + userKey), userData)
                .then(()=>{
            //change the page to login page
                    window.location.href='loginPage.html'
                    
                })
                                
            })
        })
        
})
