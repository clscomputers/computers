const search = instantsearch({
  appId: 'L5J3IKHT56',
  indexName: 'productos',
  apiKey: '050d04fdcad718ac513bdbb856415a42',
  urlSync:true
});

 search.on('render', function() {
  $('.product-picture img').addClass('transparent');
  $('.product-picture img').one('load', function() {
      $(this).removeClass('transparent');
  }).each(function() {
      if(this.complete) $(this).load();
  });
});

search.addWidget({
  render: function(opts) {
    const results = opts.results;
    // read the hits from the results and transform them into HTML.
    document.querySelector('#hits').innerHTML = results.hits.map(function(h) {
      return '<p>' + h._highlightResult.name.value + '</p>';
    }).join('');
  }
});

search.addWidget({
  init: function(opts) {
    const helper = opts.helper;
    const input = document.querySelector('#searchBox');
    input.addEventListener('input', function(e) {
      helper.setQuery(e.currentTarget.value) // update the parameters
            .search(); // launch the query
    });
  }
});
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 50,
    // default is to scroll to 'body', here we disable this behavior
    scrollTo: false
  })
);


  search.start();