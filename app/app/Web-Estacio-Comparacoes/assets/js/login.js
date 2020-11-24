// Validação de Login

window.onload = function(){

    let btnLogin = document.getElementById('btn_login')

    btnLogin.onclick = function(){
        
        let id = document.getElementById('id_user').value
        let senha = document.getElementById('senha').value

        let resultLogin = document.getElementById('resultLogin')

        let idUser = Number.isInteger(parseInt(id))

        if ( (idUser != '') && (senha != '') ) {
            resultLogin.innerHTML = '<span style="color: green;">Logado com sucesso!</span>'
        }else{
            resultLogin.innerHTML = '<span style="color: red;">Preencha os campos corretamente!</span>'
        }

    }

}