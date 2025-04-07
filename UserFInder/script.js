function getData(){
    const id = document.querySelector('input').value;
    const showdata = document.querySelector('.showdata');
    if(id<=0 || id>10){
        showdata.innerHTML = `<h2>Please enter correct ID Between (1 - 10)</h2>
         <button onclick="Clean()"  style="display:block; margin:20px auto;"> ok</button>
        `;
       
    } else{ 
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>res.json())
    .then(data=>
    {
        const {name,username,email,phone,website,company ,address} = data;
        const { street, suite, city, zipcode, geo } = address;
        const {catchPhrase,bs}=company

        
        if (!data.id) {   // if id doesn't exist in response
            showdata.innerHTML = `<h2>No user found with ID : ${id}</h2>`;
            return;
        }
            showdata.innerHTML =
            `
             <h3>Name : ${name}</h3>
              <h3>Username : ${username}</h3>
              <h3>Email: ${email}</h3>
              <h4>Phone: ${phone}</h4>
              <h4>Website: ${website}</h4>
              <h4>Company : ${company.name}</h4>
              <p>Catch Phrase: ${catchPhrase}</p>
              <p>BS: ${bs}</p>
              <h3>Address</h3>
              <p>${street}, ${suite}, ${city}, ${zipcode}</p>
              <p>Geo Location: Lat - ${geo.lat}, Lng - ${geo.lng}</p>
              <button onclick="Clean()"  style="display:block; margin:20px auto;"> ok</button>
            `
        
      
    }
    );
}
}
function Clean(){
    const id = document.querySelector('input');
    const showdata = document.querySelector('.showdata');
    showdata.innerHTML="";
    id.value="";
}