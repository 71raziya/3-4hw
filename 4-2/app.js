const searchInput = document.getElementById("searchInput") 
const searchBtn = document.getElementById("searchBtn") 
const result = document.getElementById("result") 
 
searchBtn.addEventListener("click", ()=>{ 
    const searchInputVal = searchInput.value.trim() 
    
    if(Number(searchInputVal) && searchInputVal <= 8){ 
        fetch(`https://jsonplaceholder.typicode.com/users/${searchInputVal}`) 
        .then((response)=>{ 
            if(!response.ok){ 
                throw new Error(response.statusText) 
            } 
            return response.json() 
        }) 
        .then((data)=>{ 
            result.innerHTML = ` 
            <h2>USER:${data.id}</h2> 
            <p>ID: ${data.id}</p> 
            <p>NAME: ${data.name}</p> 
            <p>Phone Number: ${data.phone}</p> 
            <p>UserName: ${data.username}</p> 
            <p>Website: ${data.website}</p> 
            <p>Email: ${data.email}</p> 
            `; 
        }) 
        .catch((error)=>{ 
            result.innerHTML = ` 
            <h2>Ошибка</h2> 
            <p>${error.message}</p> 
            ` 
        }) 
    }else{ 
        result.innerHTML = ` 
        <h2>ОШИБКА</h2> 
        ` 
    } 
 
 
})