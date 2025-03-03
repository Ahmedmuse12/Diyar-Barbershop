document.getElementById('kontaktskjema').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Takk for din melding! Vi tar kontakt med deg snart.');
    this.reset();
});
