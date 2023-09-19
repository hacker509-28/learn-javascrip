let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
//let decoutEl = document.getElementById("decrement-btn")
let count = 0

function increment() {
    if(count < 100){
        count += 1
       countEl.textContent = count
     }
     else if(count == 100){
         console.log("max cout")
     }
}

function decrement() {
    if (count !=0 ){
        count -= 1
        countEl.textContent = count
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
