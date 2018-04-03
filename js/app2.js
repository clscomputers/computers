var client = algoliasearch('L5J3IKHT56', '050d04fdcad718ac513bdbb856415a42');
var producto = client.initIndex('productos');

autocomplete(
  '#aa-search-input',
  {
    debug: true,
    templates: {
      dropdownMenu:
        '<div class="aa-dataset-team"></div>'
    },
  },
  
    
    {
      source: autocomplete.sources.hits(producto, {hitsPerPage: 5}),
      displayKey: 'name',
      name: 'brand',
      templates: {
        header: '<div class="aa-suggestions-category">Cls Computers Service</div>',
        suggestion: function(suggestion) {
          return (
            '<img src="' +
            suggestion.image +
            '">' +
            '<div><span>' +
            suggestion._highlightResult.name.value +
            '</span><span></br>' +
            suggestion._highlightResult.brand.value +
            '</span></div>'
          );
        },
        empty: '<div class="aa-empty">No se encontro el producto</div>',
      },
    },
);
