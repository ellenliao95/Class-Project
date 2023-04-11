// Click button then change h4 text to activity from API
document.getElementById("Btn").addEventListener("click", function(){
  // replace the h4 with the activity from the API
  fetch("https://apis.scrimba.com/bored/api/activity")
  .then( response => response.json())
  .then( data => {
    document.getElementById("h4").textContent = data.activity
    document.getElementById("h1").textContent = "😆 Fun Bot 😆"
    document.body.classList.add("fun")
  })
})
/* 
Why I need getElementById()? 
Can I only use addEventListener()?

  getElementById() it's because only click button will be change, if without getElementById() then you click anywhere will be trigger this function.
*/
