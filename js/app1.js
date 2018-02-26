var client = algoliasearch("L5J3IKHT56", "050d04fdcad718ac513bdbb856415a42")
var index = client.initIndex('productos');
var myAutocomplete = autocomplete('#search-input', {hint: false, debug: true}, [
  {
    source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
    displayKey: 'name',
    templates: {
      suggestion: function(suggestion) {
        var sugTemplate = "<img src='"+ suggestion.image +"'/><span>"+ suggestion._highlightResult.name.value +"</span>"
        return sugTemplate;
      }
    }
  }
]).on('autocomplete:selected', function(event, suggestion, dataset) {
  console.log(suggestion, dataset);
});

document.querySelector(".searchbox [type='reset']").addEventListener("click", function() {
  document.querySelector(".aa-input").focus();
  this.classList.add("hide");
  myAutocomplete.autocomplete.setVal("");
});

document.querySelector("#search-input").addEventListener("keyup", function() {
  var searchbox = document.querySelector(".aa-input");
  var reset = document.querySelector(".searchbox [type='reset']");
  if (searchbox.value.length === 0){
    reset.classList.add("hide");
  } else {
    reset.classList.remove('hide');
  }
});