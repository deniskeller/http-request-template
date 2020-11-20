import createCard from "../utils/createCard";

const axiosRequest = () => {  
  const form = document.querySelector('form'); 

  //GET
  function get() {
    getResource("http://localhost:3000/people")    
      .then(data => createCard(data.data))
      .catch(error => console.log(error));

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

    axios({
      method: 'post',
      url: 'assets/server.php',
      data: formData
    })
    .then(data => console.log(data.data));
    
  }
  form.addEventListener('submit', (e) => post(e));
  
  
  //GET
  async function getResource(url) {
    const res = await axios.get(`${url}`);

    if(res.status !== 200) {
      throw new Error(`Could not fetch ${url}m status: ${res.status}`);
    }

    return res;
  }
  
};

export default axiosRequest;