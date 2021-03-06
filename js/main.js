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
  const menuCabecalho = document.querySelector('#navMenu');
  const cabecalho = document.querySelector('#cabecalho');
  const containerWallpaper = document.querySelector('#containerWallpaper');
  const conteudoPrimario = document.querySelector('#conteudoPrimario');
  const conteudoSecundario = document.querySelector('#containerSecundario')
  const corpo = document.querySelector('#corpoDark');
  const barraTexto = document.querySelector('#barraTexto');
  const containerFinal = document.querySelector('#containerFinal');
  const funcionarioContainer = document.querySelectorAll('#funcionario');
  const rodape  = document.querySelector('#rodape');
  const tituloRodape = document.querySelector('#tituloRodape');

  function darkMode(){

    menuCabecalho.classList.toggle('menuCabecalho-dark');
    menuCabecalho.classList.toggle('menuCabecalho');

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

    funcionarioContainer.forEach((item)  => {
      item.classList.toggle('funcionario-primario-dark');
    });

    rodape.classList.toggle('footer-bg-dark');

    tituloRodape.classList.toggle('titulo-footer-dark');

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
  //console.log(evento.target);
  const lupaMobile = document.querySelector('#lupa-pesquisa-mobile');
  if(lupaMobile){
    const barra = document.querySelector('.barra-pesquisa-mobile');
    barra.classList.toggle('barra-ativada');
    if(evento.target.id !== 'lupa-pesquisa-mobile'){
      barra.classList.remove('barra-ativada');
      if(evento.target.id == 'barra-pesquisa-mobile'){
        barra.classList.add('barra-ativada');
      }
    }
  }
});

const btnMobile = document.querySelector('#imagemMenu');
function toggleMenu(){
  const nav = document.querySelector('#navMenu');
  nav.classList.toggle('nav-ativada');
}

btnMobile.addEventListener('click', () => {
  toggleMenu()
});

const btnMobileTema = document.querySelector('#btnMobile');
btnMobileTema.addEventListener('click', () => {
  const menuCabecalho = document.querySelector('#navMenu');
  const cabecalho = document.querySelector('#cabecalho');
  const containerWallpaper = document.querySelector('#containerWallpaper');
  const conteudoPrimario = document.querySelector('#conteudoPrimario');
  const conteudoSecundario = document.querySelector('#containerSecundario')
  const corpo = document.querySelector('#corpoDark');
  const barraTexto = document.querySelector('#barraTexto');
  const containerFinal = document.querySelector('#containerFinal');
  const funcionarioContainer = document.querySelectorAll('#funcionario');
  const rodape  = document.querySelector('#rodape');
  const tituloRodape = document.querySelector('#tituloRodape');

  function darkMode(){
    menuCabecalho.classList.toggle('menuCabecalho-dark');
    menuCabecalho.classList.toggle('menuCabecalho');

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

    funcionarioContainer.forEach((item)  => {
      item.classList.toggle('funcionario-primario-dark');
    });

    rodape.classList.toggle('footer-bg-dark');

    tituloRodape.classList.toggle('titulo-footer-dark');

    if(corpo.classList.contains('corpoDark') || cabecalho.classList.contains('cabecalho-dark') || containerWallpaper.classList.contains('container-dark') ||conteudoPrimario.classList.contains('conteudo-principal-primario-dark' || conteudoSecundario.contains('conteudo-principal-secundario-dark') || barraTexto.classList.contains('barra-texto-escuro') || containerFinal.classList.contains('conteudo-principal-final-escuro'))){
      btnMobileTema.innerHTML='Modo claro';
    }else{
      btnMobileTema.innerHTML='Modo escuro';
    }
  }
  darkMode();
});


const sobreNosBtnMobile = document.querySelector('#sobreNosMobile');
function sobreNosModalMobile(modalID){
  const modal = document.querySelector('#modalSobreNosMobile');
  if(modal){
    modal.classList.add('mostrar');
    modal.addEventListener('click', (evento) => {
      if(evento.target.id === modalID || evento.target.className == 'fechar'){
        modal.classList.remove('mostrar');
      }
    })
  }
}

sobreNosBtnMobile.addEventListener('click', () => {
  sobreNosModalMobile('modalSobreNosMobile');
});