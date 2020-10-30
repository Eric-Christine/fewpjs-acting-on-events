// Your code here

let dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#FF69B4"

console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); // "0px"


dodger.style.bottom = "100px";
dodger.style.bottom = "0px";


function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers)
    dodger.style.left = `${left - 20}px`
}

function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "")
    let right = parseInt(rightNumbers)
    dodger.style.left = `${right + 20}px`
}

function moveDodgerDown() {
    let downNumbers = dodger.style.bottom.replace("px", "")
    let down = parseInt(downNumbers)
    dodger.style.bottom = `${down - 20}px`
}

function moveDodgerUp() {
    let upNumbers = dodger.style.bottom.replace("px", "")
    let up = parseInt(upNumbers)
    dodger.style.bottom = `${up + 20}px`
}

document.addEventListener("keydown", function (e) {
    console.log(e.key)

    if (e.key === "ArrowLeft") {
        moveDodgerLeft()

    }

    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }

    if (e.key === "ArrowDown") {
        moveDodgerDown()
    }

    if (e.key === "ArrowUp") {
    }
})