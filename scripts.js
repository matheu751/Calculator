const inputValue = document.querySelector(".value")

const btnResult = document.querySelector("#btnEqual")

function getBtnValue(value) {
    inputValue.value += value
    inputValue.dispatchEvent(new Event('change'))
    inputValue.focus()
}

function cleanInput() {
    inputValue.value = ''
    inputValue.dispatchEvent(new Event('change'))
    inputValue.focus()
}

function getSinalNumbers() {
    let numbers = []
    let sinal = []
    let aux = 0
    let input = inputValue.value
    for(let i=0; i < input.length; i++) {
        if (isNaN(input[i]) && input[i] != '.') {
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

function changeBtn() {
    let content = inputValue.value
    const {sinal, numbers} = getSinalNumbers()
    if (content.length > 2 && sinal.length >= 1 && numbers.length >= 2) {
        btnResult.disabled = false
    }
    else {
        btnResult.disabled = true
    }
}

calculateRes = () => {
    const {sinal, numbers} = getSinalNumbers()
    let number = numbers.map(Number)
    let result
    if (numbers.length < 3) {
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
            result = (number[0] / number[1])
            if (!Number.isInteger(result)) {
                result = result.toFixed(1)
            }
            break
        }
    }
    if (isNaN(result)) {
        result = 'Invalid calculation'
    }
    inputValue.value = result
    changeBtn()
}

btnResult.addEventListener('click', calculateRes)

inputValue.addEventListener('input', changeBtn)