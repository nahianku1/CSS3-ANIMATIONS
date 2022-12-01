let signup=document.getElementById('signupspan')
let login=document.getElementById('loginspan')
let wrapper=document.getElementById('wrapper')


signup.addEventListener('click',()=>{
    wrapper.style.transform= ``
})

login.addEventListener('click',()=>{
    wrapper.style.transform= `rotateY(-90deg) translateX(-175px)`
})

