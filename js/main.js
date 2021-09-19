//show links when click on toggle menu 
let links = document.querySelector('ul')
let toggleMenu = document.querySelector('.toggle')
let list = document.querySelectorAll('ul li')

toggleMenu.addEventListener('click', show)

function show () {
    links.classList.toggle('show')
}

//close links when click on any links
let a = document.querySelectorAll('a')

a.forEach(n => n.addEventListener('click', remove) )

function remove () {
    links.classList.remove('show')
}


//landing slider
let slider = document.querySelectorAll('.slider span')
let sliderArray = Array.from(slider)

let content = document.querySelectorAll('.slider-container')
let contentArray = Array.from(content)

sliderArray.forEach((ele) => {
    ele.addEventListener('click' , function (e) {
        sliderArray.forEach((ele) => {
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add('active')
        contentArray.forEach((cont) => {
            cont.classList.remove('show')
        });
        document.querySelector(e.currentTarget.dataset.con).classList.add('show')
        

    })
})



// let h3 = document.querySelector('.info h3')
// let mask = document.querySelector(".mask")
// let box = document.querySelector('.box')
// // mask.innerHTML.match.style.display = 'block'


// box.innerHTML.hover(function () {
//     h3.css('color','black')
// },function () {
//     h3.style.color = '#FECE1A'
// })



//effect when scroll on card on about section 
//scroll top button
let scrollTop = document.querySelector('.scroll-top')
let box = document.querySelectorAll('.about .box')
let porBox = document.querySelectorAll('.portfolio .box')
let cliBox =document.querySelectorAll('.client .box')
let priPlan =document.querySelector('.price .plans')
let sp = document.querySelectorAll('.about span')


window.onscroll = function () {
    console.log(window.scrollY)
    if (this.scrollY >= 600) {
        scrollTop.classList.add('show')
    }else {
        scrollTop.classList.remove('show')
    }
    if (this.scrollY >= 940) {
        porBox.forEach(p => p.classList.add('show'))
    }else {
        porBox.forEach(p => p.classList.remove('show'))
    }
    if (this.scrollY >=2100 && scrollY <=3400) {
        box.forEach(b => b.classList.add('plus'))
    }else {
        box.forEach(b => b.classList.remove('plus'))
    }
    if (this.scrollY >= 2500 && scrollY >= 2800) {
        sp.forEach(s => s.classList.add('show'))
    } else {
        sp.forEach(s => s.classList.remove('show'))
    }
    if (this.scrollY >=3700) {
        cliBox.forEach(c => c.classList.add('show'))
    }else {
        cliBox.forEach(c => c.classList.remove('show'))
    }
    if (this.scrollY >= 4500 && scrollY <= 5800) {
        priPlan.classList.add('show')
    }else {
        priPlan.classList.remove('show')
    }
}

scrollTop.onclick = function () {
        window.scrollTo({
            top: 0
        })    
}


//ourclient
let right = document.querySelector('.our-clients .head .arrow .right')
let left = document.querySelector('.our-clients .head .arrow .left')
let caImage = document.querySelector('.our-clients .image-card')
count = 0
right.onclick = function () {
    count -= 210 
    if (count < -5040) {
        count = 0
        caImage.style.transform = 'translateX(' + count + 'px)'
    }else {
        caImage.style.transform = 'translateX(' + count + 'px)'
    }
}

left.onclick = function () {
    count += 210 
    if (count > 0) {
        count = -5040
        caImage.style.transform = 'translateX(' + count + 'px)'
    } else {
        caImage.style.transform = 'translateX(' + count + 'px)'
    }
}


//portfolio card
let card = document.querySelector('.portfolio .card ')
let plus = document.querySelectorAll('.portfolio .box .plus')
let icon = document.querySelector('.portfolio .card i')
plus.forEach(p => p.addEventListener('click', function () {
    card.classList.add('show')
}))

icon.onclick = function () {
    card.classList.remove('show')
}




// setTimeout(function() {
//     let box = document.querySelectorAll('.about .box');
//     box.forEach(b => b.style.transform = 'scale(1)')
//     box.forEac  h(b => b.style.opacity = '1')
// }, 100)




