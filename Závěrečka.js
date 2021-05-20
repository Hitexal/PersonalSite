let lclick = document.getElementById("left")
let lanimate = document.getElementById("lslide")
let rclick = document.getElementById("right")
let ranimate = document.getElementById("rslide")
let bclick = document.getElementById("bottom")
let banimate = document.getElementById("bslide")
let welcome = document.getElementById("welcome")

lclick.addEventListener("click", function() {
    lanimate.classList.toggle("lefttrue")
    lclick.classList.toggle("lefton")
    ranimate.classList.remove("righttrue")
    rclick.classList.remove("righton")
    banimate.classList.remove("bottomtrue")
    bclick.classList.remove("bottomon")
    if (lclick.classList.contains("lefton") || rclick.classList.contains("righton") || bclick.classList.contains("bottomon")) {
        welcome.classList.add("twelcome")
    } else {
        welcome.classList.remove("twelcome")
    }
})
rclick.addEventListener("click", function() {
    ranimate.classList.toggle("righttrue")
    rclick.classList.toggle("righton")
    lanimate.classList.remove("lefttrue")
    lclick.classList.remove("lefton")
    banimate.classList.remove("bottomtrue")
    bclick.classList.remove("bottomon")
    if (lclick.classList.contains("lefton") || rclick.classList.contains("righton") || bclick.classList.contains("bottomon")) {
        welcome.classList.add("twelcome")
    } else {
        welcome.classList.remove("twelcome")
    }
})
bclick.addEventListener("click", function() {
    banimate.classList.toggle("bottomtrue")
    bclick.classList.toggle("bottomon")
    lanimate.classList.remove("lefttrue")
    lclick.classList.remove("lefton")
    ranimate.classList.remove("righttrue")
    rclick.classList.remove("righton")
    if (rclick.classList.contains("righton") || lclick.classList.contains("lefton") || bclick.classList.contains("bottomon")) {
        welcome.classList.add("twelcome")
    } else {
        welcome.classList.remove("twelcome")
    }
})