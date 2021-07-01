var url = 'https://randomuser.me/api/'

var image = document.querySelector('#avatar')
var nameDiv = document.querySelector('#fullname')
var nickname = document.querySelector('#username')
var userEmail = document.querySelector('#email')
var userCity = document.querySelector('#city')
var btnNextUser = document.querySelector('#btn')

// fetch(url, {
//     method: 'POST',
//     body: 'this is a body'
// }).then((response)=>{
//     console.log(response);
//     return response.json()
// }).then((data)=>{
//     console.log(data);
// })

const fetchData = () =>{

fetch(url).then((response)=>{
    console.log(response);
    return response.json()
})
.then((data)=>{
    console.log(data);

    const {picture, name, email, location, id} = data.results[0];

    image.src = picture.large;
    nameDiv.innerHTML = name.first + ' ' + name.last;
    nickname.innerHTML = id.name;
    userEmail.innerHTML = email;
    userCity.innerHTML = location.city;
  
}).then((res)=>{
    if(!res.ok){
        console.log(res);
        throw Error(res.status)
    }

}).catch((error)=>{
    console.log(error);
})

}

fetchData();

btnNextUser.addEventListener('click', fetchData)


