const switchSection = sectionId => {
    document.querySelectorAll('.section')
            .forEach(e => e.classList.add('hide'))
    document.querySelector('#' + sectionId).classList.remove('hide')
    document.querySelector('#main').scrollIntoView()
}

switchSection('about')

const hideCourses = semesterId =>
    document.querySelectorAll('.' + semesterId)
            .forEach(e => e.classList.toggle('hide'))

hideCourses('s22')
hideCourses('f21')
hideCourses('s21')
hideCourses('f20')

names = [
    'Matthew Nazari',
    'ܡܬܝ ܢܙܪܝ̣',
    'متیو نظری',
    'Մեթյու Նազարյան',
]

fontSizes = [2.5, 5, 3.5, 2.25]

const nameElem = document.querySelector('#side #name')

const deleteName = async _ => {
    let intervalId = null
    intervalId = setInterval(_ => {
        if (nameElem.innerText) {
            nameElem.innerText = nameElem.innerText.slice(0, -1)
        } else {
            clearInterval(intervalId)
        }
    }, 50)
}

const typeName = async name => {
    let intervalId = null
    intervalId = setInterval(_ => {
        if (name) {
            let toAppend = ''
            while (toAppend === ' ' || toAppend === '') {
                toAppend = toAppend + name.charAt(0)
                name = name.slice(1)
            }
            nameElem.innerText = nameElem.innerText + toAppend
        } else {
            clearInterval(intervalId)
        }
    }, 50)
}

let iteration = 0

setTimeout(_ => {
    nameElem.style.fontSize = fontSizes[0] + 'em'
    typeName(names[0])
}, 500)

setInterval(_ => {
    iteration = (iteration + 1) % names.length
    deleteName()
    setTimeout(_ => {
            nameElem.style.fontSize = fontSizes[iteration] + 'em'
            typeName(names[iteration])
        }, 1000)
}, 7000)
