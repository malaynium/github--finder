// Init Github
const github = new Github;

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
      console.log(data);
    })
  }

});