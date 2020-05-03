// Git Hub Fetch HTTP Class
class Github {
  constructor() {
    this.client_id = 'e8a4aedf7de85914c316';
    this.client_secret = '2f6e108312b454c057f6a8252f2461819ce74244'; 

    // set repos count display
    this.repos_count = 5;
    // set repos sort by lates
    this.repos_sort = 'created: asc';
  }

  // GET request
  async getUser(user){
    // fetch user data from api
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // fetch user repos
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // set json data to variable
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    // return data
    return {
      profile,
      repos
    }

  }

} // class Github end