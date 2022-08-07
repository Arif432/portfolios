const links = document.getElementsByClassName("links");
const nav = document.getElementById('nav_ul')
const header = document.getElementById('header')
const barBtn = document.getElementById('barBtn')
const logo = document.getElementById('logo')
const mode = document.getElementById('mode')
const rights = document.getElementById('copy-right')



function headerTrans() {
    header.style.transitionDuration = '2s'
}

mode.addEventListener('click', screenColor)

barBtn.addEventListener('click', () => {
    headerTrans();
    navFunc()
})

let show = true

function navFunc(params) {

    if (show) {
        nav.style.display = 'block'
        logo.style.display = 'none'
        header.style.width = 'fit-content'
        header.style.height = 100 + '%'
        document.body.style.backgroundColor = "white"
    }
    else {
        logo.style.display = 'block'
        header.style.width = 100 + '%'
        header.style.height = 82 + 'px'
        header.style.marginRight = 0 + 'px'
    }

    for (let i = 0; i < links.length; i++) {

        if (show) {
            links[i].style.display = "block"
            links[i].style.marginTop = 20 + "px"
            links[i].style.marginLeft = 20 + 'px'
        }
        else {
            links[i].style.display = "none"
        }
    }
    show = !show
}

function durations(params) {
    document.body.style.transitionDuration = "2s"
    header.style.transitionDuration = "2s"
    logo.style.transitionDuration = "2s"
}

function screenColor() {

    if (mode.innerHTML === "light-mode") {
        document.body.style.backgroundColor = "white"
        header.style.backgroundColor = '#FF0000'
        durations()
        mode.innerHTML = "dark-mode"
        logo.style.color = '#333333'
        rights.style.backgroundColor = '#FF0000'
    }
    else {
        document.body.style.backgroundColor = "#090B1B"
        header.style.backgroundColor = '#0D1128'
        durations()
        mode.innerHTML = "light-mode"
        logo.style.color = '#5F73D5'
        rights.style.backgroundColor = '#0D1128'
    }
}

