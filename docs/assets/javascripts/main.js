$(document).foundation();

// Hack for sticky images inside of tab-content panels that are
// initially hidden.
$('#authenticity-tabs').on('change.zf.tabs', function() {
  sticky_image = $("div[data-tabs-content='authenticity-tabs'] div.tabs-panel.is-active div.sticky")
  sticky_image.foundation('_calc', true);
  sticky_image.css('top', 0);
});

function openAuthenticityTab(tab) {
  $("#authenticity-tabs").foundation("selectTab", tab);
  window.scrollTo(0, 0);
}

$('table#limited-edition-prints-register tbody td a.x-pigment-link').on('click', function() {
 $('div#pigmentModal img#pigmentImg').attr('src', 'assets/images/pigment_marks/'+this.dataset.serial+'.jpg')
 $('div#pigmentModal a#pigmentImgLink').attr('href', 'assets/images/pigment_marks/'+this.dataset.serial+'.jpg')
 $('div#pigmentModal span#printTitle').text(this.dataset.title)
 $('div#pigmentModal span#printSerial').text(this.dataset.serial)
});
