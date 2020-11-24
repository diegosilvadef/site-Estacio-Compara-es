// Adicionar Usuário

window.onload = function(){
    let btnAdd = document.getElementById('btn_add')

    btnAdd.onclick = function(){
        
        let id = document.getElementById('id').value
        let nome = document.getElementById('nome').value
        let email = document.getElementById('email').value
        let senha = document.getElementById('senha').value

        let resultAadd = document.getElementById('resultAadd')

        let idUser = Number.isInteger(parseInt(id))

        if( (idUser != '') && (nome != '') && (email != '') && (senha != '') ){
            
            if((email.indexOf('@') != -1) && (email.indexOf('.') != -1)){
                resultAadd.innerHTML = '<span style="color: green;">Usuário inserido com sucesso!</span>'
            }else{
                resultAadd.innerHTML = '<span style="color: orange;">Insira um e-mail válido!</span>'
            }
            
        }else {
            resultAadd.innerHTML = '<span style="color: red;">Preencha todos os campos corretamente!</span>'
        }

    }

}