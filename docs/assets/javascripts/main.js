$(document).foundation();

// Hack for sticky images inside of tab-content panels that are
// initially hidden.
$('#authenticity-tabs').on('change.zf.tabs', function() {
  sticky_image = $("div[data-tabs-content='authenticity-tabs'] div.tabs-panel.is-active div.sticky")
  sticky_image.foundation('_calc', true);
  sticky_image.css('top', 0);
});
