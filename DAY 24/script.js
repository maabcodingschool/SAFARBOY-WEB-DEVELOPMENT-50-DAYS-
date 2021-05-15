const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getDate, 2500)

function getDate() {
    header.innerHTML = '<img src="https://i.pinimg.com/originals/af/ab/c5/afabc5cae669184f7da6c0af59754814.jpg" alt="" > '
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, quo.'
    profile_img.innerHTML = '<img src="https://img.17qq.com/images/pmwnkfmny.jpeg" alt="">'
    name.innerHTML = 'Steve Jobs'
    date.innerHTML = 'May 07, 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}