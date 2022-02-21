const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
let numberStarts = document.querySelector('#numberStars')

const buildStars = (amount) => {
    for (let i = 0; i < amount; i++){
        let star = document.createElement('div')
        let newLeft = generateLeft(10, (container.clientWidth - 10))
        let newTop = generateTop(10, (container.clientHeight - 10))
        star.classList.add('star')        
        star.style.left = newLeft + 'px'
        star.style.top = newTop + 'px'    
        star.id = (newLeft + newTop)    
        container.appendChild(star)        
    }
}

const generateLeft = (min, max) =>{
    return Math.floor(Math.random() * (max - min)) + min
}

const generateTop = (min, max) =>{
    return Math.floor(Math.random() * (max - min)) + min
}

btn.addEventListener('click', () => {
    let warning = document.querySelector('.warning')
    if (numberStarts.value > 1000){
        warning.style.visibility = 'visible'
        warning.textContent = 'Hola, ' + numberStarts.value + ' estrellas son demasiadas y este pobre navegador sufrirá mucho renderizando tanto. ¿Qué tal si generamos solo 1000?'
        container.appendChild(warning)
        numberStarts.value = 1000
    }else{
        const stars = document.querySelectorAll('.star')
        for(let i = 0; i < stars.length; i++){        
            container.removeChild(stars[i])
        }        
        warning.style.visibility = 'hidden'
        buildStars(numberStarts.value)   
        
    }    
})

document.addEventListener('click', () => {
    const stars = document.querySelectorAll('.star')
    for (let i = 0; i < stars.length; i++){
        stars[i].addEventListener('mouseenter', () => {             
            let info = document.createElement('div')
            info.classList.add('star-info')
            info.textContent = 'ID de Estrella: ' + stars[i].id
            stars[i].appendChild(info)
        })
    }
    for (let i = 0; i < stars.length; i++){
        stars[i].addEventListener('mouseleave', () => {                         
            stars[i].removeChild(document.querySelector('.star-info'))
        })
    }
})

