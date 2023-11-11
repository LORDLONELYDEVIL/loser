
fetch('https://jsonplaceholder.typicode.com/comments')
.then(res=>res.json())
.then(res=>fetchShow(res));


function fetchShow(res){
    console.log(res);
    const fetchedContainer=document.getElementById('fetch');
    res.forEach((userinfo)=>{
        
        const card =document.createElement("div");
        const cardBody=`
        <div class="container">
        <div class="card d-flex ">
        <div class="card-body">
        <div class="card-titile"><h6><span>Name :</span> ${userinfo.name}</h6></div>
        <div class="card-titile"><h6><span>Email :</span>${userinfo.email}<h6></div>
        <p><span>Info :</span>${userinfo.body}</p>
        </div>
        </div>
        </div>
        
        
        

        </card>`
       
        card.innerHTML=cardBody;
        fetchedContainer.appendChild(card);

    });


    
}

/*

let cur=Object.entries(localStorage);

console.log(cur);
//let localuser1=JSON.parse(localStorage.getItem("localStorage"));
localStorage.setItem("cur",JSON.stringify(cur));
console.log(localStorage.getItem("cur"));

const username=localStorage.getItem("username");
console.log(localStorage.username);
const show=document.getElementById("fetch");


/*function fetchitem(local){
    const fetchShow=document.createElement('div')
    const username=document.createElement('h3');
    username.textContent=local.username;
    const userP=document.createElement('h3');
    userP.textContent=local.password;
    fetchShow.appendChild(username);
    fetchShow.appendChild(userP);
    return fetchShow;
}
const fetched=document.getElementById('fetch');
localuser.forEach((local)=>{
    const fetchShow=localuser(local);
    fetched.appendChild(fetchShow);
});*/