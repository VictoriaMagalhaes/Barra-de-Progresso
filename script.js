// Theme Dark

const changeThemeBtn = document.querySelector("#change-theme");

changeThemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("dark");
});

// Progress Steps

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() 
{
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    console.log('Valor do circle: ' + circles.length)
    console.log('Valor do current active: ' + currentActive)
    console.log("Percentual da barra de progresso: " + (actives.length - 1) / (circles.length - 1) * 100 + '%')
    
    if(currentActive === 1) 
    {
        prev.disabled = true
        console.log("current active = 1")
    } else if(currentActive === circles.length) 
    {
        next.disabled = true
        console.log("current active = tamanho do circulo")
    } else 
    {
        prev.disabled = false
        next.disabled = false
        console.log("diferente de todos")
    }
}