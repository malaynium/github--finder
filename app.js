// search input
const searchUser = document.getElementById('searchUser');

// swarch input event lisentener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;
  console.log(userText);

});