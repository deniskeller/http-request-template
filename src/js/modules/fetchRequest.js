import createCard from "../utils/createCard";

const fetchRequest = () => {
 
  const form = document.querySelector('form'); 

  //GET
  function get() {
    getResource("http://localhost:3000/people")    
    .then(data => createCard(data))
    .catch(error => console.log(error))

    this.remove();
  }
  document.querySelector('button').addEventListener('click', get, {"once": true});

  //POST
  function post(e) {
    e.preventDefault();
    
    let formData = new FormData(form);
    formData.append("id", Math.random());
    
    // let obj = {};
    // formData.forEach((value, key) => {
    //   obj[key] = value;
    // });    

    // метод Fetch
    getResource('assets/server.php', formData)
      .then(data => console.log(data))
      .catch(error => console.log(error))      
    
  }
  form.addEventListener('submit', (e) => post(e));
  
  
  //GET
  async function getResource(url) {
    const res = await fetch(`${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url} status: ${res.status}`);
    }

    return await res.json();
  }
  

  //POST
  async function getResource(url, data) {
    const res = await fetch(`${url}`, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data' //если не formData
      // }, 
      body: data
    });

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.text();
  }
  
};

export default fetchRequest;