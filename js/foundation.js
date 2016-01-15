/**
 * @file
 * A JavaScript file to initialize foundation..
 */

(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.foundation = {
    attach: function(context, settings) {
      $(document).foundation();
    }
  }


})(jQuery, Drupal, this, this.document);
