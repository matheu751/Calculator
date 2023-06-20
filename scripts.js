const inputValue = document.querySelector(".value")

const btnNumbers = document.getElementById("btn1")

const btnResult = document.querySelector("#btnEqual")

function getNumber(value) {
    inputValue.value += value
}

function cleanInput() {
    inputValue.value = ''
}

function getSinalNumbers() {
    let numbers = []
    let sinal = []
    let aux = 0
    let input = inputValue.value
    for(let i=0; i < input.length; i++) {
        if (isNaN(input[i])) {
            numbers.push(input.slice(aux, i))
            sinal = input[i]
            aux += i
        }
        else if (i+1 == input.length) {
            numbers.push(input.slice(aux+1, i+1))
        }
    }
    return {
        sinal,
        numbers
    }
}

calculateRes = () => {
    const {sinal, numbers} = getSinalNumbers()
    let number = numbers.map(Number)
    let result
    switch (sinal) {
        case '+':
            result = number[0] + number[1]
            break
        case '-':
            result = number[0] - number[1]
            break
        case '*':
            result = number[0] * number[1]
            break
        case '/':
            result = number[0] / number[1]
            break
    }
    inputValue.value = result
}

btnResult.addEventListener('click', calculateRes)