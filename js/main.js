const btnThemeEscuro = document.querySelector('#btn1');
//const btnThemeClaro = document.querySelector('#btn2');
const cabecalho = document.querySelector('#cabecalho');
const containerWallpaper = document.querySelector('#containerWallpaper');
const conteudoPrimario = document.querySelector('#conteudoPrimario')


btn1.addEventListener('click', () => {
  function darkMode(){
    cabecalho.classList.toggle('cabecalho-dark');//adiciona o que nao tem e vice e versa
    cabecalho.classList.toggle('cabecalho');//remove o que ja tem e vice e versa

    containerWallpaper.classList.toggle('container-dark');
    containerWallpaper.classList.toggle('container-wallpaper');

    conteudoPrimario.classList.toggle('conteudo-principal-primario-dark');
    conteudoPrimario.classList.toggle('conteudo-principal-primario');

    if(cabecalho.classList.contains('cabecalho-dark')){
      btnThemeEscuro.innerHTML='Modo claro';
    }else{
      btnThemeEscuro.innerHTML='Modo escuro';
    }
  }
  darkMode();
});


















//Negocio de hora, nada a ver com o site atual;
// const data = new Date();
// const hora = data.getHours();
// const teste = document.querySelector('.teste');

// teste.innerHTML=`${hora}`;