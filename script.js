/*      OBJETIVOS

    1: Coletar dados.
    2: Configurar da maneira desejada.
    3: Calcular e exibir.
*/

// Coletando cada INPUT para que assim eu possa calcular.
let input0 = document.querySelector('input.son0')
let input1 = document.querySelector('input.son1')
let input2 = document.querySelector('input.son2')

// Coletando cada P para que assim eu configure.
let pSymbol0 = document.querySelector('p.symbol0')
let pSymbol1 = document.querySelector('p.symbol1')

// Coletando um P em branco para que mostre o resultado
let pResult = document.querySelector('p#result')

// Coletando o SELECT para mudar a configuração.
let select = document.querySelector('select')

// Nesta FUNCTION sua variável CHOICE tem o mesmo VALUE da variável SELECT
function choose(choice) {
    choice = select.value

    // Verificando e então configurando com base no VALUE da variável CHOICE.
    switch (choice) { 
        case 'average':
            pSymbol0.innerHTML = '+'
            pSymbol1.style.display = ''
            input2.style.display = ''
            break;

        case 'addition':
            pSymbol0.innerHTML = '+'
            pSymbol1.style.display = 'none'
            input2.style.display = 'none'
            break;

        case 'subtraction':
            pSymbol0.innerHTML = '-'
            pSymbol1.style.display = 'none'
            input2.style.display = 'none'
            break;

        case 'division':
            pSymbol0.innerHTML = '÷'
            pSymbol1.style.display = 'none'
            input2.style.display = 'none'
            break;

        case 'multiplication':
            pSymbol0.innerHTML = '×'
            pSymbol1.style.display = 'none'
            input2.style.display = 'none'
            break;

        default:
            break;
    }

    // Está FUCTION só funciona quando chamada pela FUNCTION CALCULATING() retornando então o VALUE de CHOICE destá para a FUNCTION CALCULATING().
    return choice

    // console.log(choice)
}

// Está FUNCTION funciona ao ato de 1 CLICK.
function calculating() {
    // Chama a FUNCTION assim que é lida pelo JS e no final do processo equivale ao VALUE da variável SELECT.
    let choice = choose()
    // Está vazio pois usaremos para mostrar o resultado da conta feita.
    let result

    // Verificando e calculando com base na variável CHOICE além de exibir o resultado na tela.
    switch (choice) {
        case 'average':
            result = Number(input0.value) + Number(input1.value) +  Number(input2.value) / 3
            pResult.innerHTML = parseInt(result)
            break;

        case 'addition':
            result = Number(input0.value) + Number(input1.value)
            pResult.innerHTML = parseInt(result)
            break;

        case 'subtraction':
            result = Number(input0.value) - Number(input1.value)
            pResult.innerHTML = parseInt(result)
            break;

        case 'division':
            result = Number(input0.value) / Number(input1.value)
            pResult.innerHTML = parseInt(result)
            break;

        case 'multiplication':
            result = Number(input0.value) * Number(input1.value)
            pResult.innerHTML = parseInt(result)
            break;

        default:
            
            break;
    }

    // console.log(result)
}