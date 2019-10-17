/* eslint-env browser */

require(['gitbook'], function (gitbook) {
  var adInsertPoint = '.page-inner section'
    , adPosition = 'bottom'
    , ad;

  gitbook.events.bind('start', function (e, cnf) {
    const config = cnf.adsense;

    // Use custom insert point if defined
    if (config.element) {
      adInsertPoint = config.element;
    }

    // Use custom position if defined
    if (config.position) {
      adPosition = config.position;
    }

    // Inject script to head.
    var adsByGoogleScript = document.createElement('script');
    adsByGoogleScript.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    adsByGoogleScript.setAttribute('async', true);
    document.body.appendChild(adsByGoogleScript);

    // Generate <ins> (ad)
    ad = document.createElement('ins');
    ad.style = 'display: block';
    ad.className = 'adsbygoogle';

    ad.setAttribute('data-ad-client', config.client);
    ad.setAttribute('data-ad-slot', config.slot);
    ad.setAttribute('data-ad-format', config.format);

    // Add the ad to the DOM
    var element = document.querySelector(adInsertPoint);

    if (adPosition === 'top') {
      element.insertBefore(ad, element.firstChild);
    } else {
      element.appendChild(ad);
    }

    (adsbygoogle = window.adsbygoogle || []).push({}); // eslint-disable-line
  });

  // I insert ad again when switching pages
  gitbook.events.bind('page.change', function () {
    if (ad) {
      var element = document.querySelector(adInsertPoint);

      if (adPosition === 'top') {
        element.insertBefore(ad, element.firstChild);
      } else {
        element.appendChild(ad);
      }
    }
  });
});
