$(document).ready(function() {
  $('#simulation-forms').css('display', 'none');

  //added slideToggle to new recipe form
  $('#form-toggle').click(function(e){
    e.preventDefault();

    $('#simulation-forms').slideToggle('slow');
  })

  $('#close-btn').click(function(e){
    e.preventDefault();

    $('#simulation-forms').slideToggle('slow');
  })

  // $('#welcome-modal.close-reveal-modal').trigger('click');
  $('#welcome-modal').foundation('reveal', 'close');

});
