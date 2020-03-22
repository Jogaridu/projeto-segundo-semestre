$(document).ready(function () {
     // Declaração de variáveis
     let numImages = 1;
     let marginPadding = 70;
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
    let width = (
        parseInt($(".itensCarroussel").outerWidth()) + 
        parseInt($(".itensCarroussel").css("margin-right")) + 
        parseInt($(".itensCarroussel").css("margin-left"))) * 
        $(".itensCarroussel").length;
    
    $("#carroussel").css("width", width);
    
    // Calculos somando todos os Margin e Padding dos itens do Carroussel
    let proximoSlide = (numImages + marginPadding) + $(".itensCarroussel").outerWidth();
    let slideFinalComeco = proximoSlide * ($(".itensCarroussel").length - 1);
    
    // Clique do usuário para avançar o Carroussel
    $(".next").click(() => mudaSlide("next"));

    // Clique do usuário para voltar o Carroussel
    $(".back").click(() => mudaSlide("back"));

    // Intervalo de mudança de slide
    setInterval(() => mudaSlide("next"), 4000);
});