import axios from 'axios'

function generateCard(){
    const config ={
        headers:{
            Accept:'application/json'
        }
    }
    axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php', config).then((res) =>{
            const nameY = document.getElementById('name')
            const descY = document.getElementById('desc')
            const imgYu = document.getElementById('imgY')

            nameY.textContent = res.data.name
            descY.textContent = res.data.desc
            imgYu.src = res.data.card_images[0].image_url
    })
}


export default generateCard