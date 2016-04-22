/* Some vars, outside the scoop */

  var gallerygrid__sizes = [];
  var gallerygrid__debuging = 0;

/* Main function, triggered when the "field" is loaded */

;$.fn.gallerygridfield = function() {

/* Set some vars */

  var gallerygrid__debuging;
  var gallerygrid__keyword = "/content/";
  var gallerygrid__image_source = "ul.nav.nav-list.sidebar-list > li > a.draggable.ui-draggable.ui-draggable-handle";
  var gallerygrid__image_wrapper = ".nav-list.sidebar-list:last-of-type > li";
  var gallerygrid__image_holder = ".nav-list.sidebar-list li a.draggable";
  var gallerygrid__size = /=75/g;

  gallerygrid__sizes["s"] = 50;
  gallerygrid__sizes["m"] = 75;
  gallerygrid__sizes["l"] = 100;

/* Show some debug-info in the console */

  function gallerygrid__debug(msg) {
    if(window.console && gallerygrid__debuging) {
      console.log("[gallerygrid] " + msg);
    }
  }

/* Remove the field; it's only a function wrapper */

  $("div.field-gallerygrid").remove();

/* Initialize the timer; check if desired elements do exist */

  var gallerygrid__timer = setInterval(function() {
    gallerygrid__checker();
  }, 1000);

  function gallerygrid__checker() {

    if($(gallerygrid__image_source).length) {
      clearInterval(gallerygrid__timer);
      gallerygrid__get_image_src();
      gallerygrid__debug("all routines stopped");
    }

    gallerygrid__debug("checking for context menu");
  }

/* Get and set all image sources */

  function gallerygrid__get_image_src() {

    $(gallerygrid__image_wrapper).addClass("gallerygrid gallerygrid_size_" + kirbyGalleryGrid);

/* Get the source for every images in the list */

    $(gallerygrid__image_holder).each(function(index) {

      gallerygrid__image_source = $(this).data("url");

/* When no thumbnail exist */

      if(gallerygrid__image_source == null) {
        $("i", this).addClass("gallerygrid__no_image_source");

      } else {

/* Resize the preview image */

        gallerygrid__image_source = gallerygrid__image_source.replace(gallerygrid__size, "=" + gallerygrid__sizes[kirbyGalleryGrid]);

/* Place the thumbnail inside the element */

        $("i", this).css({"background-image" : "url('" + gallerygrid__image_source + "')"});
      }

      gallerygrid__debug("image : " + gallerygrid__image_source );
    });
  }

  gallerygrid__debug("initialized")

};