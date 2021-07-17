const wrapper = document.querySelector('.wrapper');

function createContent(data) {
  const content = `
    <h1>facts about ${data.username}!</h1>
    <p>
    ${data.username} joined ${data.joined} 
    <br><br>
    ${data.username} lives in the ${data.country}
    <br><br>
    ${data.username} has a status of ${data.status}
    <br><br>
    ${data.username} has ${data.followers} followers
    <br><br>
    ${data.username} is following ${data.following} people
    <br><br>
    ${data.username}'s about me is <span class="red">${data.bio}</span>
    <br><br>
    ${data.username}'s what im working on is <span class="red">${data.work}</span>
    <br><br>
    ${data.username}'s profile picture is <br> <img src="https://cdn2.scratch.mit.edu/get_image/user/${data.id}_60x60.png">
    <br><br>
    ${data.username}'s views are <span class="red">${data.statistics.views}</span>
    <br><br>
    ${data.username}'s loves are <span class="red">${data.statistics.loves}</span>
    <br><br>
    ${data.username}'s favorites are <span class="red">${data.statistics.favorites}</span>
    <br><br>
    ${data.username}'s comments are <span class="red">${data.statistics.comments}</span>
    <br><br>
    it took ${data.query_time} milliseconds to get this data.
    </p>
  `;
  wrapper.insertAdjacentHTML('beforeend', content);
}

fetch('https://scratchdb.lefty.one/v2/user/info/griffpatch')
  .then(response => response.json())
  .then(data => createContent(data))
  .catch(error => console.log(error));