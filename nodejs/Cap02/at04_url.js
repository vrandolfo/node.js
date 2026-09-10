const url = require('url')
let uri = 'https://www.google.com/search?q=nodejs&sca_esv=138a023d6c844220&hl=pt_BR&source=hp&ei=U945areVI9u45OUP-7y8iA4&iflsig=ABILxe8AAAAAajnsY8b8vvMxkpskZuS_gLnHJ4gaoLXl&ved=0ahUKEwj3iruFmJyVAxVbHLkGHXseD-EQ4dUDCCs&uact=5&oq=nodejs&gs_lp=Egdnd3Mtd2l6IgZub2RlanMyCBAAGIAEGLEDMgsQABiABBixAxiDATIOEAAYgAQYigUYsQMYgwEyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESL4LUABYngdwAHgAkAEAmAFboAGQBKoBATa4AQPIAQD4AQGYAgagAp8EwgILEC4YgAQYsQMYgwHCAg4QLhiABBiKBRixAxiDAcICDhAuGIAEGLEDGMcBGNEDwgILEC4YgAQYxwEY0QPCAgUQLhiABMICBxAAGIAEGAqYAwCSBwE2oAe-KbIHATa4B58EwgcFMS40LjHIBwqACAE&sclient=gws-wiz'

let partUrl = new url.URL(uri)

//partUrl: é um grande objt com as caracteristicas da minha uri

console.log('Domínio: ', partUrl.host)
console.log('Caminho ou Rota: ', partUrl.pathname)
console.log('Query String: ', partUrl.search)
console.log('Apenas parâmetro: ', partUrl.searchParams) 
console.log('Valor do parâmetro q: ', partUrl.searchParams.get('q'))
console.log('Valor do parâmetro rlz: ', partUrl.searchParams.get('rlz'))
