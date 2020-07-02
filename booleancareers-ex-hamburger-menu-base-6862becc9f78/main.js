//Se faccio click sull'icona i.fas.fabars deve aggiungere la classe
//active alla div con l'hamburger menu
//Se invece faccio il click su i.fas.fabars devo togliere la classe active

var menuHidden = true;

$('i.fas.fa-bars').click(
  function(){
    if(menuHidden == true){
      $('div:last-child').addClass('active');
      menuHidden = false;
    } else {
      $('div:last-child').removeClass('active');
      menuHidden = true;
    }
  }
);

$('i.fas.fa-times').click(
  function(){
    var active = $('div:last-child').hasClass('active');
    if(active == true){
      $('div:last-child').removeClass('active');
    } else {
      $('div:last-child').addClass('active');
    }
  }
);
