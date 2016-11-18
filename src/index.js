console.log('hello');
function getCharacters() {
  $.ajax({
    url: 'https://gateway.marvel.com:443/v1/public/characters?apikey=05a3448298ed9a5694ebd41543a831cc'
  }).then(function(data){
    console.log(data)
  }).catch(function(err){
    console.error(err);
  })
}

getCharacters();
