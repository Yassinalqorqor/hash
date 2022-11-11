const { json } = require("express");

var password=document.getElementById('password')
var email=document.getElementById('email')
var email=document.getElementById('username')
var regester= document.getElementById('regester')

regester.onclick=()=>{

    var userdata ={'password':password.value,'username':username.value,'email':email.value};
fetch('http://locallhost:2090/regeister',{

method:'post',
headers:{ 'contant-type':'application/json'},
body: JSON.stringify(userdata)
})

}