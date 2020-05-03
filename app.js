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
    .then(data => {
      if (data.profile.message === 'Not Found'){
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
 
      } else {

        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);

      }
    
    })
  } else {
   
    // clear profile<
    ui.clearProfile();
  }

});