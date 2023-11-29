alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random()* numeroMaximo +1);
console.log(numeroSecreto);
let chute;
// Contador de tentativas
let tentativas = 1;

// Enquanto o chute nao for igual ao numero secreto.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute for igual ao número secreto faça...
    if (chute == numeroSecreto) {
        break; //Para o while e inicia a estrutura foro da bloco do while.

        // Se o chute for diferente ao número secreto faça...
    } else {
        if (chute > numeroSecreto) {
            // alert(`O número secreto é menor que ${chute}`);
            alert('O número secreto é menor que ' + chute);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

// Esta variavel verifica se a tentativa é maior que 1 entao adicionar a palavra "tentativas" o sinal ":" é um "senao" ou similar o else.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)

// // Esta condição esta fora do bloco do while, pois quando acerta o numero secreto o break para o while.
// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//     // Essas são outras formas de concatenar variaveis  -> 
//     //alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto); e 
//     //alert('Isso ai! Você descobriu o número secreto', numeroSecreto);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }