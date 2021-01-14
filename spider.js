  //cherio request - implementação do JQuery para servidores 

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
      var rating = $(this).find('.ratingColumn strong').text().trim();
  
    //   console.log('Título: ' + title);
        console.log('Titulo: + ' + title);
        //fs - modulo interno
       fs.appendFile('imdb.txt', title + ' - ' + rating + '\n', function (err) {
           if (err) throw err;
       })
    });
  
  });
  