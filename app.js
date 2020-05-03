// Init Github
const github = new Github;

// Init UI
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

// swarch input event lisentener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  if(userText !== '') {
    // make http call
    github.getUser(userText)
    .then(data => {s
      if (data.profile.message === 'Not Found'){
        // Show alert

      } else {

        // Show Profile
        ui.showProfile(data.profile);

      }
    
    })
  } else {
   
    // clear profile<
  }

});