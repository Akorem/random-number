const generateBtn = document.getElementById('generate-Btn')

const number = document.getElementById('number')

const randomNumberGenerator = () =>{
    let randomNumber = Math.floor(Math.random() * 10 + 1)

    number.innerText = randomNumber
}

generateBtn.addEventListener('click', randomNumberGenerator)