async function generar(){
    const contentDiv = document.getElementById('content')
    const data = await fetch('https://randomuser.me/api/');
    const dataResult = await data.json();
    let str = ''
    dataResult.results.forEach(element => {              

        str += `<img src="${element.picture.medium}" id="imageProfile" class="rounded-circle shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        </br>
        <h3>Fullname: ${element.name.first} ${element.name.last}</h3>
        <div class="input-group flex-nowrap me-auto ms-auto w-75" style="max-width:40%">
        <span class="input-group-text" id="addon-wrapping">@</span>
        <input type="text" class="form-control" placeholder="${element.email}" aria-label="Username" aria-describedby="addon-wrapping">
        </div>
        </br>
        <div class="input-group me-auto ms-auto w-50">
        <span class="input-group-text">User</span>
        <input type="text" aria-label="UserName" placeholder="${element.login.username}" class="form-control">
        <span class="input-group-text">Password</span>
        <input type="text" aria-label="$Password" placeholder="${element.login.password}" class="form-control">
        </div>

        <h3>Phone: ${element.phone}</h3>
        <h3>Age: ${element.dob.age}</h3>
        <h3>Location State: ${element.location.state}</h3>
        `
    });
    contentDiv.innerHTML = str;
}