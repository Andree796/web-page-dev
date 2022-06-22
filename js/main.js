function iniciarModal(modalID){
  const modal = document.querySelector('#modal-sobreNos');
  if(modal){
    modal.classList.add('mostrar');
    modal.addEventListener('click', (evento) => {
      console.log(evento.target);
      if(evento.target.id === modalID || evento.target.className == 'fechar'){
        modal.classList.remove('mostrar');
      }
    });
  }
}

const btnThemeEscuro = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  //const btnThemeClaro = document.querySelector('#btn2');
  const cabecalho = document.querySelector('#cabecalho');
  const containerWallpaper = document.querySelector('#containerWallpaper');
  const conteudoPrimario = document.querySelector('#conteudoPrimario');
  const conteudoSecundario = document.querySelector('#containerSecundario')
  const corpo = document.querySelector('#corpoDark');
  const barraTexto = document.querySelector('#barraTexto');
  const containerFinal = document.querySelector('#containerFinal');

  function darkMode(){

    corpo.classList.toggle('corpoDark');
    corpo.classList.toggle('corpo');

    cabecalho.classList.toggle('cabecalho-dark');//adiciona o que nao tem e vice e versa
    cabecalho.classList.toggle('cabecalho');//remove o que ja tem e vice e versa

    containerWallpaper.classList.toggle('container-dark');
    containerWallpaper.classList.toggle('container-wallpaper');

    conteudoPrimario.classList.toggle('conteudo-principal-primario-dark');
    conteudoPrimario.classList.toggle('conteudo-principal-primario');

    conteudoSecundario.classList.toggle('conteudo-principal-secundario-dark');
    conteudoSecundario.classList.toggle('conteudo-principal-secundario');

    barraTexto.classList.toggle('barra-texto-escuro');
    barraTexto.classList.toggle('barra-texto');

    containerFinal.classList.toggle('conteudo-principal-final-escuro');
    containerFinal.classList.toggle('conteudo-principal-final');


    if(corpo.classList.contains('corpoDark') || cabecalho.classList.contains('cabecalho-dark') || containerWallpaper.classList.contains('container-dark') ||conteudoPrimario.classList.contains('conteudo-principal-primario-dark' || conteudoSecundario.contains('conteudo-principal-secundario-dark') || barraTexto.classList.contains('barra-texto-escuro') || containerFinal.classList.contains('conteudo-principal-final-escuro'))){
      btnThemeEscuro.innerHTML='Modo claro';
    }else{
      btnThemeEscuro.innerHTML='Modo escuro';
    }
  }
  darkMode();
});

const sobreNosBtn = document.querySelector('#sobreNosBtn');
sobreNosBtn.addEventListener('click', () => {
  iniciarModal('modal-sobreNos');
});

const container = document.body;
container.addEventListener('click', (evento) => {
  console.log(evento.target);
  const lupaMobile = document.querySelector('#lupa-pesquisa-mobile');
  if(lupaMobile){
    const barra = document.querySelector('.barra-pesquisa-mobile');
    barra.classList.toggle('barra-ativada');
    if(evento.target.id != 'lupa-pesquisa-mobile'){
      barra.classList.remove('barra-ativada');
      if(evento.target.id == 'barra-pesquisa-mobile'){
        barra.classList.add('barra-ativada');
      }
    }
  }
});

