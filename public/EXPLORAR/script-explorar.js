var modal = '';
function abrirModal(modalSelecionado){
    modal = modalSelecionado;
    modal.style.display = 'flex';
}

function fecharModal(){
    modal.style.display = 'none';
}