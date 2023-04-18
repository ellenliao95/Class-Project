// Use DOM to control html
const modal = document.getElementById("modal")
const closeBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("declineBtn")
const modalChoiceBtn = document.getElementById('modal-choice-btns')



// let min-browser show out by 1.5s later.
setTimeout(function(){
    modal.style.display = "inline"
}, 1500)

// let close Bottom work
closeBtn.addEventListener("click", function(){
    modal.style.display="none"
})

// when clicked Accept btn...
consentForm.addEventListener("submit", function(e){
    // connect formData and get the data
    const consentFormData = new FormData(consentForm)
    const name = consentFormData.get('fullName')

    // loading part
    e.preventDefault() 
    console.log("form submitted")
    modalText.innerHTML = `
    <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
    Uploading your data to the dark web...
    </p>
    </div>
    `
    // change the text part
    setTimeout(function(){
        document.getElementById("uploadText").innerText = "Making the sale..."
    }, 1500)
    // third part
    setTimeout(function(){
        document.getElementById("modal-inner").innerHTML =`
        <h2>
        Thanks <span class="modal-display-name">${name}</span>, you  sucker! 
        </h2>
        <p>
        We just sold the rights to your eternal soul.
        </p>
        <div class="idiot-gif">
        <img src="images/pirate.gif">
        </div>`
        closeBtn.disabled = false
    }, 3000)
})
    
 // reverse Btn
declineBtn.addEventListener("mouseenter", function(){
    modalChoiceBtn.classList.toggle('reverse')
})
    