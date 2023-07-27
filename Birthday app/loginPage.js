import {auth, signInWithEmailAndPassword, db, ref, get, child} from './firebase.js'
//add the event listener to button
$(document).ready(()=>{
    $('button').click (()=>{
        const Email = $($('.form-control')[0]).val()
        const Password = $($('.form-control')[1]).val()
       
//using authenticaiton to let the user login
        signInWithEmailAndPassword(auth, Email, Password)
        .then((userCredential)=>{
            console.log(userCredential.user)
            const userKey = userCredential.user.uid
            //get the data from Database
            const dbRef = ref(db)
            get(child(dbRef, `Users/${userKey}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
                let birthday=snapshot.val().Birthday
                let name = snapshot.val().FirstName
                console.log(name)
                console.log(birthday)
            //set the data to local storage
                localStorage.setItem('name', name)
                localStorage.setItem('birthday', birthday)
            //change the page to result page
                window.location.href='result.html'
            }else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
           
        })
        })
                   
            })
   

   
