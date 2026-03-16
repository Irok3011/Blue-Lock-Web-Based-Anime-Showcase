document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let email=document.getElementById("email").value

if(name=="" || email==""){

alert("Please fill all fields")

return

}

document.getElementById("msg").innerHTML=
"Welcome to Blue Lock, "+name+"!"

})