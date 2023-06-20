# Calculator
const input = inputValue.value.split('')
    input.forEach(element => {
        if (Number.isNaN(Number(element))) {
            let aux = input.indexOf(element)
            sinal.push(element)
            numbers.push(input.slice(0, aux))
            console.log(numbers.join(""))
        }
    }) 