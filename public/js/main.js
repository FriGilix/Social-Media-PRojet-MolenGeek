function animateCount(id, target){
    let element = document.getElementById(id)
    let count = 0
    let increment = Math.ceil(target / 300)
    let interval = setInterval (() => {
        count += increment
        if (count >= target){
            element.textContent = target
            clearInterval(interval)
        } else {
            element.textContent = count
        }
    }, 20)
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        animateCount("twitter-count", 12000)
        animateCount("youtube-count", 5000)
        animateCount("facebook-count", 7500)
    }, 900)
 
})