/**
 * @file
 * A JavaScript file to initialize foundation..
 */

(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.foundation = {
    reflow: false,
    attach: function(context, settings) {
      $(document).foundation();

      if (Drupal.behaviors.foundation.reflow) {
        $(document).foundation('reflow');
      }

      Drupal.behaviors.foundation.reflow = true;
    }
  }


})(jQuery, Drupal, this, this.document);
