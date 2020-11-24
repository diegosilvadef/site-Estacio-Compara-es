// Interatividade na Home - JS

window.onload = function(){

    // Abrir o menu responsivo
    let btnMenu = document.getElementById('btn-menu')

    btnMenu.onclick = function(){
        let containerMenu = document.querySelector('.container-menu')
        containerMenu.style.display = "block";
    }

    // Fechar Menu Responsivo
    let closeMenuResp = document.getElementById('close')

    closeMenuResp.onclick = function(){
        let containerMenu = document.querySelector('.container-menu')
        containerMenu.style.display = "none";
    }

    // Validar Pesquisa Inicial
    let btnSearchSimple = document.getElementById('btn-search-main')
    
    btnSearchSimple.onclick = function(){
        let searchSimple = document.getElementById('i-search-main').value 
        let resultSearchSimple = document.getElementById('resultSearchSimple')
        if(searchSimple == ''){
            const style = '<br />Resultado de sua pesquisa: <span style="color: red;font-weight: bolder;">'
            resultSearchSimple.innerHTML = `${style}Campo Obrigatório</span><br /><br />`
        }else{
            const style = '<br />Resultado de sua pesquisa: <span style="color: green;font-weight: bolder;">'
            resultSearchSimple.innerHTML = `${style}${searchSimple}</span><br /><br />`
        }
    }

    // Validar Pesquisa Cesta Básica
    let btnFC = document.getElementById('btn-f-c')

    btnFC.onclick = function(){
        let inputCesta01 = document.getElementById('input-cesta-01')
        let inputCesta02 = document.getElementById('input-cesta-02')
        let inputCesta03 = document.getElementById('input-cesta-03')

        let resultCesta = document.getElementById('resultCesta')

        
        if ( (inputCesta01.checked) && (inputCesta02.checked) && (inputCesta03.checked) ) {
            resultCesta.innerHTML = '<span style="color: green;">Você escolheu 3 opção</span><br><br><br>'
        }
        else if ((inputCesta01.checked) && (inputCesta02.checked)){
            resultCesta.innerHTML = '<span style="color: green;">Você escolheu 2 opção</span><br><br><br>'
        }
        else if ((inputCesta01.checked) && (inputCesta03.checked)){
            resultCesta.innerHTML = '<span style="color: green;">Você escolheu 2 opção</span><br><br><br>'
        }
        else if ((inputCesta02.checked) && (inputCesta03.checked)){
            resultCesta.innerHTML = '<span style="color: green;">Você escolheu 2 opção</span><br><br><br>'
        }else if ( (inputCesta01.checked) || (inputCesta02.checked) || (inputCesta03.checked) ){
            resultCesta.innerHTML = '<span style="color: green;">Você escolheu 1 opção</span><br><br><br>'
        }else{
            resultCesta.innerHTML = '<span style="color: red;">Por favor, marque um campo!</red><br><br><br>'
        }

    }


    // Validar Busca por Categoria
    let btnFiltroCat = document.getElementById('btn-filtro-cat')

    btnFiltroCat.onclick = function(){

        let filtroCat01 = document.getElementById('filtro-cat01')
        let filtroCat02 = document.getElementById('filtro-cat02')

        let msgCat01 = document.getElementById('cat01')

        if((filtroCat01.value != 'Categoria 1') || (filtroCat02.value != 'Categoria 2')){
            msgCat01.innerHTML = '✔'
        }else{
            msgCat01.innerHTML = '<span style="color: red;">Por favor, selecione uma categoria!</span>'
        }

        let inputFiltro01 = document.getElementById('input-filtro-01')
        let inputFiltro02 = document.getElementById('input-filtro-02') 
        let inputFiltro03 = document.getElementById('input-filtro-03')   

        let msgCat02 = document.getElementById('cat02')
        
        if ( (inputFiltro01.checked) && (inputFiltro02.checked) && (inputFiltro03.checked) ) {
            msgCat02.innerHTML = '<span style="color: green;">Você escolheu 3 opção</span><br><br>'
        }
        else if ( (inputFiltro01.checked) && (inputFiltro02.checked) ) {
            msgCat02.innerHTML = '<span style="color: green;">Você escolheu 2 opção</span><br><br>'
        }
        else if ( (inputFiltro02.checked) && (inputFiltro03.checked) ) {
            msgCat02.innerHTML = '<span style="color: green;">Você escolheu 2 opção</span><br><br>'
        }
        else if ( (inputFiltro01.checked) && (inputFiltro03.checked) ) {
            msgCat02.innerHTML = '<span style="color: green;">Você escolheu 2 opção</span><br><br>'
        }
        else if( (inputFiltro01.checked) || (inputFiltro02.checked) || (inputFiltro03.checked)){
            msgCat02.innerHTML = '<span style="color: green;">Você escolheu 1 opção</span><br><br>'
        }
        else{
            msgCat02.innerHTML = '<span style="color: red;">Por favor, marque um campo!</red><br><br>'
        }

    }


}