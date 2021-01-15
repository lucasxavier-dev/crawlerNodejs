//cherio - implementação do JQuery para servidores   
//request - simplificação do metódo http nativo do node 

var request = require('request');
var cheerio = require('cheerio');

var fs = require('fs'); //module file system
// https://www.expressinformatica.net/

request('https://www.expressinformatica.net/hardware/processadores', function (err, res, body) {

  if (err) console.log('Erro: ' + err); //tratamento do erro - tratar melhor se estiver em produção
  //$ = símbolo usado pelo JQuery
  var $ = cheerio.load(body);

  //definindo itens a buscar
  
  $('.catalog-content li').each(function () {
    // .catalog-content ul
    // var title = $(this).find('.product .info-product').text().trim();
    var title = $(this).find('.product .product-name, .produto .product-name').text().trim();
    var price = $(this).find('.product .product-payment .preco-avista').text();

    // var price = $(this).find('.box-price price-off ').text().trim();
    // var price = $(this).find('.box-price price-off ').text().trim();
    // var rating = $(this).find('.imdbRating strong').text().trim();

    //   console.log('Título: ' + title);expressPrices.xlsx
    console.log('Titulo: + ' + title);
    //fs - modulo interno + rating + price 
    // fs.appendFile('expressPrices.txt', title + price + '\n', function (err) {
    //   if (err) throw err;

    fs.appendFile('expressPrices.txt',title + ' - ' + price  + '\n', function (err) {
      if (err) throw err;

      fs.appendFile('expressPrices.xlsx',title + ' - ' + price  + '\n', function (err) {
        if (err) throw err;
    })
  
  });


  });

});
