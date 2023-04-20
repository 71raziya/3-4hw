const url = "https://jsonplaceholder.typicode.com/users";


async function fetchTodos(){
    console.log("start");
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);

    const maxId =8;

    let usersdata = "";

    for(let i = 0; i< maxId; i++){

        usersdata += `
        <div class="users"> 
        <ul> 
        <li class="li"><b>${data[i].id}</b></li> 
        <li><b>Name:</b>${data[i].name}</li> 
        <li><b> Phone: </b>${data[i].phone}</li> 
        <li><b>username: </b>${data[i].username}</b></li> 
        <li><b>website: </b>${data[i].website}</b></li> 
        <li><b>email: </b>${data[i].email}</b></li> 
        </ul> 
        </div>`
    }
    document.getElementById('list').innerHTML = usersdata;

}
fetchTodos()