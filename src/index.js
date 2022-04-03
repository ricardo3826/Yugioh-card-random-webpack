import generateJoke from './generateJoke'   
import './styles/main.scss'
import imgSmiling from './assets/SmilingFriendsTitleCard.png'


const imgS = document.getElementById('imgS')
imgS.src=  imgSmiling


const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)


generateJoke()