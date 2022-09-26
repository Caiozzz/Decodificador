const inputTexto = document.querySelector('#texto-entrada');
const resultado = document.querySelector('#texto-saida');

function btnCriptografar() {
    var textoCriptografado = criptografar(inputTexto.value); // Manda o texto digitado para ser criptografado.
    document.body.classList.add('ativo');
    resultado.innerHTML = textoCriptografado; // Exibe o texto criptografado na area de resultado.

    if(inputTexto.value == ""){  // Se o input estiver vazio quando o botão for clicado
        document.body.classList.remove('ativo'); // A imagem de 'sem texto' irá aparecer.
    }
}
function btnDescriptografar() {
    var textoDescriptografado = descriptografar(inputTexto.value); // Manda o texto para ser DEScriptografado.
    document.body.classList.add('ativo');
    resultado.innerHTML = textoDescriptografado;

    if(inputTexto.value == ""){
        document.body.classList.remove('ativo'); // Mesma coisa
    }
}

function criptografar(stringCriptografada) {

    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]; // Matriz com a codificação
    stringCriptografada = stringCriptografada.toLowerCase();   // Transforma o texto em minúsculo.

    for(var i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])) { // Se na string houver alguma das vogais (presentes na matriz)
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); // Faz a substituição
        }
    }

    return stringCriptografada; // Retorna o texto agora criptografado
}

function descriptografar(stringDescriptografada) {

    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(var i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {  // Agora faz a substituição inversa
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptografada;
}

function copiarTexto() {
    // resultado.select();
    navigator.clipboard.writeText(resultado.value);
}