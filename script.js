const tree=document.getElementById('tree')
const animal=document.getElementById('animals')
const flower=document.getElementById('flowers')
const seaview=document.getElementById('seaviews')
const submit = document.getElementById('submit')
 tree.addEventListener('click',()=>{
    window.location.href="./tree.html"
})
animal.addEventListener('click',()=>{
    window.location.href="./animal.html"
})
flower.addEventListener('click',()=>{
    window.location.href="./flowers.html"
})
seaview.addEventListener('click',()=>{
    window.location.href="./seaview.html"
})

if (submit) {
    submit.addEventListener('click', () => {
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
    })

}
