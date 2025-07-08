/*************************************************************************
 * CUSTOM.JS — COME BACK — It's Time to Pray
 *************************************************************************/

(function () {
  "use strict";

  var widgets;

  /**
   * Create the masonry items (if you’re using an image gallery)
   */
  function createMasonryItemHTML(caption, imageSrc, credit) {
    var html = '<figure style="display: none;">';
    if (edaplotjs.Util.isFirefox()) {
      html = '<figure style="display: inline-flex">';
    }
    var figCaptionElement = caption ? `<figcaption>${caption}</figcaption>` : "";
    var figCreditElement = credit ? `<div>${credit}</div>` : "";
    var figImageElement = imageSrc ? `<img src="${imageSrc}">` : "";
    html += figImageElement + figCreditElement + figCaptionElement + '</figure>';
    var $html = $(html);
    $html.find("img").one("load", function () {
      $(this).parent().show();
    });
    return $html;
  }

  function createMasonry() {
    var data = [/* Add your images here if needed */];
    var $container = $("#masonry");
    data.forEach((v, i) => {
      var $t = createMasonryItemHTML(v.caption, v.src, v.credit);
      $t.attr("id", "masonry-id-" + i);
      $container.append($t);
    });
  }

  /**
   * Example: Load user’s prayer requests dynamically
   */
  function loadPrayerRequests() {
    // Replace this with real AJAX/fetch in production
    var dummyRequests = [
      { id: 1, text: "Please pray for my family’s health." },
      { id: 2, text: "I need guidance in my studies and spiritual growth." }
    ];
    var $container = $("#prayer-requests");
    dummyRequests.forEach(req => {
      var $item = $('<div class="prayer-item"></div>').text(req.text);
      $container.append($item);
    });
  }

  /**
   * Init any custom dropdowns, dialogs, or tabs if needed.
   */
  function initCustomWidgets() {
    widgets = new edaplotjs.Widgets();

    // Example: If you use custom tabs
    widgets.createCustomTab({
      selector: "#custom-tab"
    });

    // If you want share dialogs or similar, define them here
    // Example:
    // createShareButtonAndDialog();
  }

  function init() {
    initCustomWidgets();
    createMasonry();
    loadPrayerRequests();
  }

  $(init);
})();
