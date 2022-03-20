let generateBtn = document.getElementById("generate-btn")
let resetBtn = document.getElementById("reset-btn")
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let password3 = document.getElementById("password-3")
let password4 = document.getElementById("password-4")
let showHidden = document.querySelectorAll(".show")


let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyx!@#$%&*()-_+?><:{}[]"
let passwordlength = 16
let password = " "





function randomPassword() {
    showHidden[0].classList.add("hidden")
    for (let i = 0; i < passwordlength; i++ ){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1)
        password1.value = password
    }
    password = " "
    showHidden[1].classList.add("hidden")
    for (let i = 0; i < passwordlength; i++ ){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1)
        password2.value = password
    }
    password = " "
    showHidden[2].classList.add("hidden")
    for (let i = 0; i < passwordlength; i++ ){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1)
        password3.value = password
    }
    password = " "
    showHidden[3].classList.add("hidden")
    for (let i = 0; i < passwordlength; i++ ){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1)
        password4.value = password
    }
    password = " "
}

function resetPassword(){
    password = " "
    password1.value = password
    password2.value = password
    password3.value = password
    password4.value = password
    
    showHidden[0].classList.remove("hidden")
    showHidden[1].classList.remove("hidden")
    showHidden[2].classList.remove("hidden")
    showHidden[3].classList.remove("hidden")
}

