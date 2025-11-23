const character = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","\\","|",";",":","'","\"",
",","<",".",">","/","?"]


let leftGeneratedPassword = document.getElementById("btn1-pw")
let rightGeneratedPassword = document.getElementById("btn2-pw")
let generatePasswordButton = document.getElementById("btn-gp")
let inputLength = document.getElementById("input-length")

let leftCopy = document.getElementById("btn1-pw")
let rightCopy = document.getElementById("btn2-pw")

let pwStrength = document.getElementById("btn1-cp")


leftCopy.addEventListener("click", function() {
  navigator.clipboard.writeText(leftGeneratedPassword.textContent)
  alert("Left Password Copied")
})

rightCopy.addEventListener("click", function() {
  navigator.clipboard.writeText(rightGeneratedPassword)
  alert("Right Password Copied")
})

generatePasswordButton.addEventListener("click", function() {
  
  let leftSidePassword = ""
  let rightSidePasswoed = ""
  
  let pwLength = parseInt(inputLength.value)
  for ( let i = 0; i < pwLength; i++) {
    leftRandomIndex = Math.floor(Math.random() * character.length)
    
    rightRandomIndex = Math.floor(Math.random() * character.length)
    
    leftSidePassword += character[leftRandomIndex]
    
    rightSidePasswoed += character[rightRandomIndex]
  
  }
  
  
  leftGeneratedPassword.textContent = leftSidePassword
  
  rightGeneratedPassword.textContent = rightSidePasswoed
})