import { auth, onAuthStateChanged,signOut } from "./firebase.js";
let name = document.getElementById('name');
let email = document.getElementById('email');
let main = document.getElementById('main');
let loader = document.getElementById('loader');

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user)
       
        if(location.pathname !== '/home.html'){
        window.location ='home.html'}
        loader.style.display="none"
        main.style.display = "flex"
        name.innerHTML = user.email.slice(0, user.email.indexOf('@'));
        email.innerHTML = user.email;

    } else {
        console.log('not login')
        if(location.pathname !== "/login.html"){
        Window.location = 'login.html'}
    }
});
let logOut = () => {
    signOut(auth).then(() => {
        console.log('Signout Successfully')
        window.location = "login.html"

    })
    .catch((error) => {
        console.log(error)
    
    })
  }

    let logoutBtn = document.getElementById('logoutBtn');
   logoutBtn && logoutBtn.addEventListener('click' ,logOut)