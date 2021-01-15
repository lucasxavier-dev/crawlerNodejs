  //cherio - implementação do JQuery para servidores   
  //request - simplificação do metódo http nativo do node 
  var request = require('request');
  var cheerio = require('cheerio');

  var fs = require('fs'); //module file system
  // https://www.expressinformatica.net/
  
  request('https://www.imdb.com/chart/moviemeter/', function(err, res, body) {
  
  if(err) console.log('Erro: ' + err); //tratamento do erro - tratar melhor se estiver em produção
      //$ = símbolo usado pelo JQuery
    var $ = cheerio.load(body);
  
      //definindo itens a buscar
  
    $('.lister-list tr' ).each(function() {
      var title = $(this).find('.titleColumn a').text().trim();
      var year = $(this).find('.titleColumn span').text().trim();
      var rating = $(this).find('.imdbRating strong').text().trim();
  
    //   console.log('Título: ' + title);
        console.log('Titulo: + ' + title);
        //fs - modulo interno + rating
       fs.appendFile('imdb.txt', title + ' - ' + rating + '\n', function (err) {
           if (err) throw err;
       })
    });
  
  });
  