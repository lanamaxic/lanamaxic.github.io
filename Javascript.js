
$('#navbar a,.navbar-main, #atp,#wta ,#grand, #calendar, #contact').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 70
      },
      900
    );
  }
});