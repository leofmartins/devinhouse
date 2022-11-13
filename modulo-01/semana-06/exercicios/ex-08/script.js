const list = document.getElementById('list');

async function getUsers() {
  let url = 'https://randomuser.me/api/?results=4&nat=BR';
  try {
    let result = fetch(url);
    return (await result).json();
  } catch (e) {
    console.log(e);
  }
}

const users = await getUsers();

const results = users.results;

console.log(results);

results.forEach( item => {
  console.log(item);
} );