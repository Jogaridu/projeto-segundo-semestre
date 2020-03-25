$(document).ready(function() {
    // MUDANÇA DE CONTEUDO
    const $menu = document.querySelectorAll(".menuCuriosidade li");
    console.log($menu);
    const $conteudo = document.querySelectorAll("#curiosidades>section");
    console.log($conteudo);
    const exibir = (div) => {
        $conteudo.forEach(div => div.classList.remove("mostrarConteudo"));
        div.classList.add("mostrarConteudo");
    }

    for (let i=0; i <= 4; i++) {
        $menu[i].addEventListener("click", () => {
            exibir ($conteudo[i]);
            $menu.forEach(Element => Element.classList.remove("selecionado"));
            $menu[i].classList.add("selecionado");
            });
    }

    // CARROUSSEL
    // Declaração de variáveis CARROUSSEL
    let numImages = 1;
    let ident = 0;
    let count = $(".itensCarroussel").length - 1;
    
   // Funções
   
   // Função que muda de slide. Parâmetros são "next" ou "back"
   const mudaSlide = (option) => {

       switch(option) {
           case "next":
               if (ident < count) {
                   ident++;
                   $("#carroussel").animate({'marginLeft':"-=" + proximoSlide + 'px'}, 500)
       
               } else {
                   ident = 0;
                   $("#carroussel").animate({'marginLeft':"+=" + slideFinalComeco + 'px'}, 500)
               }
               break;
           
           case "back":
               if (ident > 0) {
                   ident--;
                   $("#carroussel").animate({'marginLeft':"+=" + proximoSlide + 'px'}, 500)
       
               } else {
                   ident = ($(".itensCarroussel").length - 1);
                   $("#carroussel").animate({'marginLeft':"-=" + slideFinalComeco + 'px'}, 500)
       
               }
               break;

           default:
               alert("Parametros INCORRETOS");
               break;
       }
   }

   // Ajuste do tamanho do Carroussel em largura
   let width = parseInt($(".itensCarroussel").outerWidth() * $(".itensCarroussel").length);
   
   $("#carroussel").css("width", width);

   // Calculos somando todos os Margin e Padding dos itens do Carroussel
   let proximoSlide = numImages + $(".itensCarroussel").outerWidth();
   let slideFinalComeco = proximoSlide * ($(".itensCarroussel").length - 1);
   
   // Clique do usuário para avançar o Carroussel
   $(".next").click(() => mudaSlide("next"));

   // Clique do usuário para voltar o Carroussel
   $(".back").click(() => mudaSlide("back"));

   // Intervalo de mudança de slide
   setInterval(() => mudaSlide("next"), 10000);

});