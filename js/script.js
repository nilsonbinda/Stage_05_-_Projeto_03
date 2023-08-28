import {Modal} from './modal.js'
import {AlertError} from "./alert-error.js"
import {calculateIMC, notNumber} from "./util.js"

//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = function(event){
    event.preventDefault() // Desabilitar o submit do form

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(height) || notNumber(weight)

    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

