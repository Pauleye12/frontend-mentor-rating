const rateEl = document.querySelectorAll(".rate")
const submitEl = document.querySelector(".submit-btn")
const outputEl = document.querySelector(".choice")
const firstEl = document.getElementById("first")
const secondEl = document.getElementById("second")
let num = 0
let rate =0
console.log(rateEl)


Array.from(rateEl).forEach(rates => {
    rates.addEventListener("click", (e) =>{
        num = (e.target.innerText)
        addActive(num)
        console.log(num)
        outputEl.textContent = `you selected ${num} out of 5`
    })
})

submitEl.addEventListener("click", (e)=>{
    firstEl.classList.add("display");
    secondEl.classList.replace("display", "thank-you")

})

function addActive(ratess){
    Array.from(rateEl).forEach(rates => {
        if(rates.innerText === (ratess)){
            console.log("me")
            rates.classList.add("active")
        } else {
            rates.classList.remove("active")
        }
    })
}