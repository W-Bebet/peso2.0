function calcularPeso() {
    //faz refêrencia aos campos id da página
    var inNome = document.getElementById("inNome");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");
    var img = document.getElementById("img");

    //obter os conteúdos dos campos de edição da página
    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    var altura = altura / 100;
    //verifica se o nome foi preenchido e o sexo selecionado
    if(nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe Nome e Sexo...");
        inNome.focus() //retona o foco para o campo id nome
        return;
    }
    //se altura vazio (0) ou NaN
    if(altura == 0 || isNaN(altura)) {
        alert("Por Favor, infome a altura corretamente...");
        inAltura.focus();
        return;
    }

    //se masculino true
    if(masculino) {
        img.src = "ex3_2_peso_ideal3.jpg";
        var peso = 22 * Math.pow(altura, 2);
    } else {
        img.src = "ex3_2_peso_ideal2.jpg";
        var peso = 21 * Math.pow(altura, 2);
    }
    //apresenta a resposta e altera o conteudo de outResposta
    outResposta.textContent = nome + ": Seu Peso ideal é: " + peso.toFixed(2) + " Kg";


}
//cria referencia ao elemento btCalcular e associa ao evento
var btCalcular = document.getElementById("btCalcular");
btCalcular.onclick = calcularPeso;

//cria uma nova function limpar campos
function limparCampos() {
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outResposta").textContent = "";
    //posiciona e joga o foco no elemento inNome
    document.getElementById("inNome").focus();
    img.src = "img/peso_ideal1.jpg";
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener('click', limparCampos);

/*//cria uma nova function para alterar a imagem 
function alterarImagem() {
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino =  document.getElementById("rbFeminino");
    var img = document.getElementById("img");

    var masculino = rbMasculino.checked;
    var rbFeminino = rbFeminino.checked;
        if(masculino) {
             img.src = "js/ex3_2_peso_ideal2.jpg";
    } else {
        img.src = "js/ex3_2_peso_ideal3.jpg";
    }
}
// refencia ao botao btCalcular
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", alterarImagem);

*/
