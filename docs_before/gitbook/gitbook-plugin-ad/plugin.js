require([
  "gitbook",
  "jQuery"
], function(gitbook, $) {
  var conf = {}

  function insert() {
    var ad = conf.ad || {}

    $.each(['Top', 'Bottom'], function(i, position) {
      var content = ad['content' + position]

      if(content) {
        var append = position === 'Top' ? 'prependTo' : 'appendTo',
            positionLower = position.toLowerCase()
            container = $('.book-body .page-inner .page-inner-' + positionLower)

        if(!container.length) {
          container = $('<div class="page-inner-' + positionLower + '"></div>')[append]($(".book-body .page-inner"))
        }

        container.html(unescape(content))
      }
    })
  }

  gitbook.events.bind("start", function(e, config) {
    conf = config || {}
  })
  gitbook.events.bind("page.change", insert)
})
