
// let age  = prompt("Enter your Age")

// if(age > 18){
// console.log("Eligible for Driving licence")
// }else if(age  == 18){
//     console.log("Getting into the zone of licence🎊🎊🎊")
// }
// else{
//     console.log("not eligible")
// }


const box  = document.querySelector('.box')

box.textContent = "This is Box"

box.addEventListener('mouseover' , () => {
    box.style.color  = "white"
})