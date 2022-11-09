const p1 = document.querySelector('.container1')
const p2 = document.querySelector('.container2')
const sub = document.querySelector('.go')
const homme = document.querySelector('.male')
const femme = document.querySelector('.female')
const hm_name = document.querySelector('.hm h1')
const fm_name = document.querySelector('.fm h1')
const valeur = document.querySelector('.value-love')
const test = document.querySelector('.test')
const heart = document.querySelector('.heart-left')
let info = []
const image = [['3_1.jpeg','3_2.jpeg'], ['4_1.jpeg','4_2.jpeg'], ['5_1.jpeg','5_2.jpeg'], ['6_1.jpeg','6_2.jpeg']]
sub.addEventListener("click", ()=>{
    info.push(homme.value)
    info.push(femme.value)
    p1.classList.add("hidde")
    p2.classList.remove("hidde")
    hm_name.innerHTML = homme.value
    fm_name.innerHTML = femme.value
    let nbr = Math.floor(Math.random()*3)
    let a = image[nbr][0]
    let b = image[nbr][1]
    let res_h = 'url("./coupleImage/'+a+'")'
    let res_f = 'url("./coupleImage/'+b+'")'
    document.documentElement.style.setProperty("--bg", (res_h))
    document.documentElement.style.setProperty("--bg2", (res_f))
}) 
let n = 0
function loop(){
    setTimeout(()=>{
        if (n<30){
            valeur.innerHTML = Math.floor(Math.random()*100)
            n++
            loop()
        }
    },80)
}

function heartLeft(){
    hrt = document.createElement('i')
    hrt.classList.add('fa-solid')
    hrt.classList.add('fa-heart')
    hrt.style.top = Math.floor(Math.random()*100)+"%"
    heart.appendChild(hrt)
    setTimeout(()=>{
        
        hrt.remove()
    },5000)
}
setInterval(heartLeft,100)

test.addEventListener('click', (e)=>{
    loop()
})