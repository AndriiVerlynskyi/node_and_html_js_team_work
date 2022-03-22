const getUsersButton = document.getElementById('getUsersId');
const userList = document.getElementById('users-containers-list');

let users = [];

const xhr = new XMLHttpRequest();

getUsersButton.addEventListener("click", () => {
    // userList.innerHTML = ''

    xhr.open("GET", 'http://localhost:3000/allusers', false);
    
    // xhr.responseType = 'json';
    try {
        xhr.send()

        if (xhr.status != 200) {
            console.error(`Error ${xhr.status}: ${xhr.statusText}`)
        } else {
            users = JSON.parse(xhr.response)
        }
    } catch (err) {
        console.error(err)
    }
    
    console.log(users)
    if (!!users.length){
     users.forEach( user => {
        const usersListElement = document.createElement('li');
    
        const userCard = createNewUserCard(user)
    
        usersListElement.appendChild(userCard);
        userList.appendChild(usersListElement);
    })
    }
})


// Functions that works with DOM
function createNewUserCard (user) {
    const userCardContainer = document.createElement('div');

    const userId = document.createElement('h1');
    userId.innerHTML = `User id: ${user.id}`

    const userName = document.createElement('p');
    userName.innerHTML = `Name: ${user.first_name}`;

    const useLastname = document.createElement('p');
    useLastname.innerHTML = `Lastname: ${user.last_name}`;

    const useEmail = document.createElement('p');
    useEmail.innerHTML = `Lastname: ${user.email}`;

    const userPhoto = document.createElement('img');
    userPhoto.src = user.photo;

    userCardContainer.appendChild(userId);
    userCardContainer.appendChild(userName);
    userCardContainer.appendChild(useLastname);
    userCardContainer.appendChild(useEmail);
    userCardContainer.appendChild(userPhoto);

    return userCardContainer
}
