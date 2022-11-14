const list = document.querySelector('#list');

const createElement = (type, contents) => {
  const element = document.createElement(type);
  element.innerText = contents;
  return element;
}

async function getUsers() {
  let url = 'https://randomuser.me/api/?results=4&nat=BR';
  try {
    let result = await fetch(url);
    return await result.json();
  } catch (e) {
    console.log(e);
  }
}

async function renderUsers() {
  let object = await getUsers();
  console.log(object.results);

  object.results.forEach(person => {
    const li = document.createElement('li');
    const container = document.createElement('div');
    const info = document.createElement('div');

    container.classList.add('container');
    info.classList.add('info');

    let name = createElement(
      'p',
      `${person.name.title} ${person.name.first} ${person.name.last}`
    );

    let email = createElement(
      'p',
      `${person.email}`
    );

    let adress = createElement(
      'p',
      `${person.location.street.name} ${person.location.street.number} ${person.location.city} ${person.location.state} ${person.location.country}`
    )

    let photo = document.createElement('img');

    photo.src = person.picture.large;

    info.appendChild(name);
    info.appendChild(email);
    info.appendChild(adress);
    container.appendChild(photo);
    container.appendChild(info);
    li.appendChild(container);
    list.appendChild(li);
  })

}

renderUsers();