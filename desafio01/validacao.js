function mensagem(field){
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+1, field.value.length);
    let email = document.getElementById("email").value;
    let nome = document.getElementById("name").value;

if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1) &&
    (dominio.lastIndexOf(".") < dominio.length -1)) {
        document.getElementById("msgEmail").innerHTML="E-mail válido!";
        alert("Seja bem-vindo(a)! " + nome + " Seu email " + email + " foi cadastrado com sucesso!");
    }
    else {
        document.getElementById("msgEmail").innerHTML="E-mail inválido";
        alert("Por favor," + nome + "confira o seu email!" + email);
    }
};