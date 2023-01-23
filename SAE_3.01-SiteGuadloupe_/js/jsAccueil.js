var BurgerMenu = $('#burger');
var NavMenu = $('.navUl');

var AccesRapide = $('#AccueilSectionHeadAccesRapide');

var EnSavoirPlusTrait = $('.EnSavoirPlusTrait');
var EnSavoirPlusAccueil = $('.EnSavoirPlusAccueil');

var UneActualitéAccueil = $('.ActualitéAccueil');
var flecheActualitéDroite = $('.flecheActualitéDroite');
var flecheActualitéGauche = $('.flecheActualitéGauche');
var compteur = 0;

function init(){
    // S'abonner a l'évenement scroll de fenêtre
    $(window).on('scroll', ScrollEvenement);
    // Defini la taille de l'image principale de l'accueil selon la taille de l'écran (avec un minimum de 300)
    if($(window).height() > 300)
        $('#AccueilSectionHead').css('height', $(window).height());
    // S'abonner a l'évenement de clic sur le Burger Menu
    BurgerMenu.on('click', SlideBurgerMenu);
    // S'abonner aux évennement de over sur l'accès rapide
    AccesRapide.on('mouseenter', slideAccesRapide);
    AccesRapide.on('mouseleave', slideAccesRapide);
    // S'abonner aux évennement de souris sur "en savoir plus" 
    EnSavoirPlusAccueil.on('mouseenter', hoverEnSavoirPlus);
    EnSavoirPlusAccueil.on('mouseleave', hoverEnSavoirPlus);
    // S'abonner aux évennement de click sur les fleches de slide
    flecheActualitéDroite.on('click', DetectionFlecheDroite);
    flecheActualitéGauche.on('click', DetectionFlecheGauche);
}

// Fonction pour slide le burger Menu
function SlideBurgerMenu(){
    NavMenu.toggleClass('navUlActive');
    if(NavMenu.hasClass('navUlActive')){ //Quand le menu s'ouvre
        $("#burger div:odd").css('display', 'none');
        $("#burger div:first").css('transform', 'rotate(45deg)');
        $("#burger div:last").css('transform', 'rotate(-45deg)');
        $("#burger div").css('margin', '-2px 3px 0px 0px');
        $('*').css('overflowY', 'hidden'); // empeche le scroll pendant le menu ouvert
        $('.navBarAColor').removeClass('navBarAColorProcheDuTop'); // met le texte en noir de la navBar
        $('#burger div').css('background-color', 'rgb(0, 0, 0)'); // met le burger menu en noir
        AccesRapide.addClass('AccesRapideDisable'); // désactive l'accès rapide
    }else{ // Quand le menu se ferme
        $("#burger div:first").css('transform', 'rotate(0deg)');
        $("#burger div:last").css('transform', 'rotate(0deg)');
        $("#burger div:odd").css('display', 'block');
        $("#burger div").css('margin', '6px');
        $('*').css('overflowY', 'visible'); // reactive le scroll
        if($(window).scrollTop() >= 200){
            $('.navBar').addClass('navBarProcheDuTop'); // rend le fond de la navbar transparent
            $('#burger div').css('background-color', 'rgb(255, 255, 255)'); // met le burger menu en blanc
            $('.navBarAColor').addClass('navBarAColorProcheDuTop'); // met le texte en blanc de la navBa
            AccesRapide.removeClass('AccesRapideDisable'); // active l'accès rapide
        }
    }

}
// Fonction navbar selon le scroll
function ScrollEvenement(){
    if($(window).scrollTop() >= 200){ // Si la page n'est PAS tout en haut
        $('.navBar').removeClass('navBarProcheDuTop'); // active le fond blanc de la navbar
        $('.navBarAColor').removeClass('navBarAColorProcheDuTop'); // met le texte en noir de la navBar
        $('#burger div').css('background-color', 'rgb(0, 0, 0)'); // met le burger menu en noir
        AccesRapide.removeClass('AccesRapideDisable'); // active l'accès rapide a gauche de l'écran
    }else{ // Si la page EST tout en haut
        $('.navBar').addClass('navBarProcheDuTop'); // rend le fond de la navbar transparent
        $('.navBarAColor').addClass('navBarAColorProcheDuTop'); // met le texte en blanc de la navBa
        $('#burger div').css('background-color', 'rgb(255, 255, 255)'); // met le burger menu en blanc
        AccesRapide.addClass('AccesRapideDisable'); // désactive l'accès rapide a gauche de l'écran
    }
}
// Fonction slide l'accès rapide
function slideAccesRapide(){
    AccesRapide.toggleClass('AccesRapideHover');
}
// Fonction aggrandir la barre sous "en savoir plus" 
function hoverEnSavoirPlus(){
    EnSavoirPlusTrait.toggleClass('EnsavoirPlusTraitHover');
}
// Fonction faire slide les actualités principales
function SlideActualitéAccueil(){
    var decal = -UneActualitéAccueil.width() * (((compteur % 3) + 3) % 3);
    UneActualitéAccueil.css('transform', 'translateX(' + decal + 'px)');
}
// Fonction qui décrémente le compteur pour aller a droite
function DetectionFlecheDroite(){
    compteur--;
    SlideActualitéAccueil();
}
// Fonction qui incrémente le compteur pour aller a droite
function DetectionFlecheGauche(){
    compteur++;
    SlideActualitéAccueil();
}

$(init);