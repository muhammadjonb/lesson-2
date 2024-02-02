const userName = document.getElementById("username");

let gitHubApi = 'https://api.github.com/users/muhammadjonb'


fetch(gitHubApi)
.then((res) => res.json())
.then((data) => {
    userName.innerText = data.login
})


// async function getGitHubAPI() {
//   try {
//     let res = await fetch(`https://api.github.com/users/muhammadjonb`);
//     let data = await res.json();
//     pushApi(data)
//   } catch (error) {
//     console.log(error);
//   }
// }

// function pushApi(user) {
//   user.map((item) => {
//     let userItem = `${item.login}`;
//     userName.innerText = userItem;
//   });
// }
