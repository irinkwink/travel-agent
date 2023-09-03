import ScrollReveal from "scrollreveal";

function scrollRevealFunc() {

  ScrollReveal({
    distance: '60px',
    duration: 2800,
  });

  ScrollReveal().reveal(`.discover__form, .discover__pictire-img`, {
    origin: 'bottom',
  });

  ScrollReveal().reveal(`.header, .popular__title`, {
    origin: 'top',
  });

  ScrollReveal().reveal(`.discover__picture-hint, ,discover__title`, {
    origin: 'left',
  });

  ScrollReveal().reveal(`.discover__text, .popular__controls`, {
    origin: 'right',
  });


}

export default scrollRevealFunc;