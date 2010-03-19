/*jslint browser: true, indent: 2 */
/*global $ */

function toggleBody(title) {
  title.siblings('.body').toggle();
}

function toggleHandler(evt) {
  toggleBody($(evt.target));
}

function init() {
  $('.expandable .body').hide();
  $('.expandable .title').click(toggleHandler);
}

$(document).ready(function () {
  init();
});






