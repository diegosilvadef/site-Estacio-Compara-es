// Validação de Cadastro de Produto

window.onload = function(){

    let btnAddP = document.getElementById('btn_add_p')
    
    btnAddP.onclick = function(){

        let nome = document.getElementById('nome').value
        let id = document.getElementById('id_p').value
        let filtroCat = document.getElementById('filtro-cat')
        let code = document.getElementById('code').value
        let preco = document.getElementById('preco').value

        let idCatP = Number.isInteger(parseInt(id))
        let codeCatP = Number.isInteger(parseInt(code))
        let precoCatP = parseFloat(preco)

        let resultAddP = document.getElementById('resultAddP')

        if ( (nome != '') && (idCatP != '') && (filtroCat.value != 'Categoria') 
        && (codeCatP) && (precoCatP) ){
            resultAddP.innerHTML = '<span style="color: green;">Produto inserido com sucesso!</span><br><br>'
        }else{
            resultAddP.innerHTML = '<span style="color: red;">Preencha os campos corretamente!</span><br><br>'
        }

        
    }

}