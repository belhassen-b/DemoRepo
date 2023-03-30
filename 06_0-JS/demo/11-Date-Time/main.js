const madate = new Date();
console.log(madate)

//  setInterval(() => {
//     console.log(new Date());
//   },1000)

setTimeout(() => {
    console.log("3 secondes plus tard");
    console.log(new Date());
     
  },3000)

  //Réaliser un timer
 const timer = document.querySelector("#timer")
 const btnIn = document.querySelector("#entrer")
 const btnOut = document.querySelector("#sortir")
 let intTime, outTime
 let temps = 0

 btnIn.addEventListener('click', (e) => {
    intTime = new Date()
})

btnOut.addEventListener('click', (e) => {
    outTime = new Date()
    console.log(intTime)
    console.log(outTime)
    alert((outTime-intTime)/1000)
})