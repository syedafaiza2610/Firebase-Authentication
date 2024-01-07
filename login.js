import{auth , signInWithEmailAndPassword} from "./firebase.js";
const login = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    console.log(email.value, password.value);
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log("user", user)
            if(location.pathname == "/login.html"){
            window.location = 'home.html'}

        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are not registered, Register Yourself!",
              });
        });

}
let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', login)