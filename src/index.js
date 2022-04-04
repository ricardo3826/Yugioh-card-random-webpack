import generateCard from "./generateCard";
import "./styles/main.scss";
//import imgSmiling from './assets/SmilingFriendsTitleCard.png'

const CardBtn = document.getElementById("Cardbtn");
CardBtn.addEventListener("click", generateCard);

generateCard();
