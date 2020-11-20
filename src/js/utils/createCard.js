const createCard = (data) => {
  data.forEach(item => {
    let card = document.createElement('div');          
    card.classList.add('card');

    let icon;
    if(item.sex == 'male') {
      icon = '<img src="./assets/img/mars.png" alt="male" />'
    } else {
      icon = '<img src="./assets/img/female.png" alt="female" />'
    }

    card.innerHTML = `
      <img src="${item.photo || 'https://via.placeholder.com/150'}" alt="photo" />
      <div class="name">${item.name} ${item.surname}</div>
      <div class="sex">
        ${icon}
      </div>
      <div class="age">${item.age}</div>
    `

    document.querySelector('.app').appendChild(card);
  });
}

export default createCard;