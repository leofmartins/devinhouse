async function getUsers() {
  let url = 'https://randomuser.me/api/?results=4&nat=BR';
  try {
    let res = fetch(url);
    return (await res).json();
  } catch (e) {
    console.log(e);
  }
}

let users = await getUsers()

console.log(users);