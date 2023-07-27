function calculate(birthday) {
          // Get the current date
          var currentDate = new Date();
          // Get the user's birthday
          var birthday = new Date(birthday);
          // Set the year of the birthday to the current year
              birthday.setFullYear(currentDate.getFullYear());
 
          // If the birthday has already occurred this year, increment the year by 1
              if (birthday < currentDate) {
                  birthday.setFullYear(currentDate.getFullYear() + 1);
              }
 
          // Calculate the difference in milliseconds between the two dates
              var timeDiff = birthday.getTime() - currentDate.getTime();
              
          // Calculate the number of days left
            var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
           
              return daysLeft
}
export{calculate}



