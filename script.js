let users = [];
function showLogin() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
}

function showPosts(id) {
  let str = "";
  fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data &&
        data.map((val) => {
          str += `<div>
            <b>${val.title}</b>
            <p>${val.body}</p>
           </div>`;
        });
      content.innerHTML = str;
    })
    .catch((err) => console.log(err));
}

function showAlbum(userId) {
  let str = "";
  fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => {
      data &&
        data.map((val) => {
          str += `<div>
                    <p>Post No:${val.id}</p>
                    <b>${val.title}</b> 
                    <hr>
                  </div>`;
        });
      content.innerHTML = str;
    })
    .catch((err) => console.log(err));
}

function showHome() {
  let userId = selUser.value;
  let str = `
    <div class='container-fluid  '>
      <div class='row bg-dark text-light'>
        <div class='d-flex justify-content-between'>
          <div><h1>MySocialMedia</h1></div>
          <div class='p-2 mt-1' id='username'></div>
        </div>
      </div>
      <div class='row'>
        <div class='d-flex'>
          <div class='p-2'>
          <p onclick='showPosts(${userId})' style='cursor:pointer;'> Home</p>
          <p onclick='showAlbum(${userId})' style='cursor:pointer;'>Album</p>
          <p onclick='showLogin()' style='cursor:pointer;'>Logout</p>
          </div>
          <div class='p-2' id='content'></div>
        </div>
      </div>

      <div class='row'>
        <div class='bg-dark text-light p-5 text-center'>
          <p>@Copyright 2025. All rights reserved.</p>
        </div>
      </div>

    </div>
  `;
  root.innerHTML = str;
  showPosts(userId);
}

function displayUsers(data) {
  let str = `<div class='d-flex justify-content-center p-5'>
  <div class='p-5'>
  <h2>My Social Media App</h2>
  <p>This is the caption</p></div>
  <div class='p-5 '><select class='form-control m-3' id='selUser'><option value='0'>--Select User--</option>`;
  data.map((value) => {
    str += `<option value=${value.id}>${value.name}</option>`;
  });
  str += `</select><p><button class='form-control m-3 btn btn-primary' onclick='showHome()'>Log In</button></p></div>`;
  root.innerHTML = str;
}
