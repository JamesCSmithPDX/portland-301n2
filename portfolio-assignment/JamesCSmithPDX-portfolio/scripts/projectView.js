var projectView = {};

// create tab views of content in #projects and #about
projectView.handleMainNav = function() {
  $('.mainNav').on('click', 'li', function() {
    $('.page-content').hide();
    //window.scrollTo;
    $('main').find('[id="'+$(this).attr('data-section')+'"]').toggle();
    $('html, body').animate({
      scrollTop: parseInt($(this).offset().top)
    }, 2000);
  });
  $('.topNav .tab:first').click();
};

// more and shrink function
projectView.createTeaser = function() {
  $('.projDescription *:nth-of-type(2n+1)').hide();
  $('.shrink').hide();
  $('.read-on').on('click', function(event) {
    event.preventDefault();
    $(this).prev().find('*:nth-of-type(2n+1)').show();
    $(this).hide();
    $(this).next().show();
  });
  $('.shrink').on('click', function(e) {
    event.preventDefault();
    $('.projDescription *:nth-of-type(2n+1)').hide();
    $(this).hide();
    $(this).prev().show();
  });
};

//call the functions
$(document).ready(function() {
  projectView.handleMainNav();
  projectView.createTeaser();
});
