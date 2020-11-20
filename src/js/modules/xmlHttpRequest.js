import createCard from "../utils/createCard";

const xmlHttpRequest = () => {
  const form = document.querySelector('form'); 

  //GET
  function get() {
    console.log('get');
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/people');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('load', () => {
      if(request.status == 200) {
        let data = JSON.parse(request.response);
        console.log('data: ', data);
        createCard(data);      
      } else {
        console.error("Что-то пошло не так!");
      }
    });

    this.remove();
  }  

  //POST
  function post(e) {
    e.preventDefault();
    console.log('post');
    
    let formData = new FormData(form);
    formData.append("id", Math.random());
    
    // let obj = {};
    // formData.forEach((value, key) => {
    //   obj[key] = value;
    // });

    // let json = JSON.stringify(obj);
    // console.log('json: ', json);

    const request = new XMLHttpRequest();
    request.open('POST', 'assets/server.php');
    // request.setRequestHeader('Content-type', 'multipart/form-data'); //если не formData
    request.send(formData);
    request.addEventListener('load', () => {
      if(request.status == 200) {
        // let data = JSON.parse(request.response);
        console.log('data: ', request.response);
      } else {
        console.error("Что-то пошло не так!");
      }
    });     
  }

  document.querySelector('button').addEventListener('click', get, {"once": true});
  form.addEventListener('submit', (e) => post(e));

};

export default xmlHttpRequest;

