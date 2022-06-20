const rateEl = document.querySelectorAll(".rate");
const submitEl = document.querySelector(".submit-btn");
const outputEl = document.querySelector(".choice");
const firstEl = document.getElementById("first");
const secondEl = document.getElementById("second");
const wrapper = document.querySelector(".wrapper");
let num = 0;
let rate = 0;
// console.log(rateEl);

rateEl.forEach((rates) => {
    rates.addEventListener("click", function (e) {
        num = e.target.innerText;
        // addActive(num);

        // You can do this intead of your addActive function
        // what i did here is to kuku remove active from all
        // of them
        rateEl.forEach((rate) => {
            rate.classList.remove("active");
        });
        // then add the active class to the one that is
        //currently clicked
        this.classList.add("active");
        console.log(num);
        outputEl.textContent = `You selected ${num} out of 5`;
    });
});

submitEl.addEventListener("click", (e) => {
    // if user didnt select anything,
    // do nothing
    if (num == 0) return;
    // else, add a class that would rotate the card
    wrapper.classList.add("feedback");
});

// function addActive(ratess) {
//     // no need to make a normal array from the rateEl elemenets
//     // they are already in an array by default
//     rateEl.forEach((rates) => {
//         if (rates.innerText === ratess) {
//             console.log("me");
//             rates.classList.add("active");
//         } else {
//             rates.classList.remove("active");
//         }
//     });
// }
