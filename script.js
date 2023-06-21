//http://economia.awesomeapi.com.br/json/last/USD-BRL
//https://cep.awesomeapi.com.br/json/02460000
/*
let simbolos = {
    "AED":"Dirham dos Emirados",
    "AFN":"Afghani do Afeganistão",
    "ALL":"Lek Albanês",
    "AMD":"Dram Armênio",
    "ANG":"Guilder das Antilhas",
    "AOA":"Kwanza Angolano",
    "ARS":"Peso Argentino",
    "AUD":"Dólar Australiano",
    "AZN":"Manat Azeri",
    "BAM":"Marco Conversível",
    "BBD":"Dólar de Barbados",
    "BDT":"Taka de Bangladesh",
    "BGN":"Lev Búlgaro",
    "BHD":"Dinar do Bahrein",
    "BIF":"Franco Burundinense",
    "BND":"Dólar de Brunei",
    "BOB":"Boliviano",
    "BRL":"Real Brasileiro",
    "BRLT":"Real Brasileiro Turismo",
    "BSD":"Dólar das Bahamas",
    "BTC":"Bitcoin",
    "BWP":"Pula de Botswana",
    "BYN":"Rublo Bielorrusso",
    "BZD":"Dólar de Belize",
    "CAD":"Dólar Canadense",
    "CHF":"Franco Suíço",
    "CHFRTS":"Franco Suíço",
    "CLP":"Peso Chileno",
    "CNH":"Yuan chinês offshore",
    "CNY":"Yuan Chinês",
    "COP":"Peso Colombiano",
    "CRC":"Colón Costarriquenho",
    "CUP":"Peso Cubano",
    "CVE":"Escudo cabo-verdiano",
    "CZK":"Coroa Checa",
    "DJF":"Franco do Djubouti",
    "DKK":"Coroa Dinamarquesa",
    "DOGE":"Dogecoin",
    "DOP":"Peso Dominicano",
    "DZD":"Dinar Argelino",
    "EGP":"Libra Egípcia",
    "ETB":"Birr Etíope",
    "ETH":"Ethereum",
    "EUR":"Euro",
    "FJD":"Dólar de Fiji",
    "GBP":"Libra Esterlina",
    "GEL":"Lari Georgiano",
    "GHS":"Cedi Ganês",
    "GMD":"Dalasi da Gâmbia",
    "GNF":"Franco de Guiné",
    "GTQ":"Quetzal Guatemalteco",
    "HKD":"Dólar de Hong Kong",
    "HNL":"Lempira Hondurenha",
    "HRK":"Kuna Croata",
    "HTG":"Gourde Haitiano",
    "HUF":"Florim Húngaro",
    "IDR":"Rupia Indonésia",
    "ILS":"Novo Shekel Israelense",
    "INR":"Rúpia Indiana",
    "IQD":"Dinar Iraquiano",
    "IRR":"Rial Iraniano",
    "ISK":"Coroa Islandesa",
    "JMD":"Dólar Jamaicano",
    "JOD":"Dinar Jordaniano",
    "JPY":"Iene Japonês",
    "JPYRTS":"Iene Japonês",
    "KES":"Shilling Queniano",
    "KGS":"Som Quirguistanês",
    "KHR":"Riel Cambojano",
    "KMF":"Franco Comorense",
    "KRW":"Won Sul-Coreano",
    "KWD":"Dinar Kuwaitiano",
    "KYD":"Dólar das Ilhas Cayman",
    "KZT":"Tengue Cazaquistanês",
    "LAK":"Kip Laosiano",
    "LBP":"Libra Libanesa",
    "LKR":"Rúpia de Sri Lanka",
    "LSL":"Loti do Lesoto",
    "LTC":"Litecoin",
    "LYD":"Dinar Líbio",
    "MAD":"Dirham Marroquino",
    "MDL":"Leu Moldavo",
    "MGA":"Ariary Madagascarense",
    "MKD":"Denar Macedônio",
    "MMK":"Kyat de Mianmar",
    "MNT":"Mongolian Tugrik",
    "MOP":"Pataca de Macau",
    "MRO":"Ouguiya Mauritana",
    "MUR":"Rúpia Mauriciana",
    "MVR":"Rufiyaa Maldiva",
    "MWK":"Kwacha Malauiana",
    "MXN":"Peso Mexicano",
    "MYR":"Ringgit Malaio",
    "MZN":"Metical de Moçambique",
    "NAD":"Dólar Namíbio",
    "NGN":"Naira Nigeriana",
    "NGNI":"Naira Nigeriana",
    "NGNPARALLEL":"Naira Nigeriana",
    "NIO":"Córdoba Nicaraguense",
    "NOK":"Coroa Norueguesa",
    "NPR":"Rúpia Nepalesa",
    "NZD":"Dólar Neozelandês",
    "OMR":"Rial Omanense",
    "PAB":"Balboa Panamenho",
    "PEN":"Sol do Peru",
    "PGK":"Kina Papua-Nova Guiné",
    "PHP":"Peso Filipino",
    "PKR":"Rúpia Paquistanesa",
    "PLN":"Zlóti Polonês",
    "PYG":"Guarani Paraguaio",
    "QAR":"Rial Catarense",
    "RON":"Leu Romeno",
    "RSD":"Dinar Sérvio",
    "RUB":"Rublo Russo",
    "RUBTOD":"Rublo Russo",
    "RUBTOM":"Rublo Russo",
    "RWF":"Franco Ruandês",
    "SAR":"Riyal Saudita",
    "SCR":"Rúpias de Seicheles",
    "SDG":"Libra Sudanesa",
    "SDR":"DSE",
    "SEK":"Coroa Sueca",
    "SGD":"Dólar de Cingapura",
    "SOS":"Shilling Somaliano",
    "STD":"Dobra São Tomé/Príncipe",
    "SVC":"Colon de El Salvador",
    "SYP":"Libra Síria",
    "SZL":"Lilangeni Suazilandês",
    "THB":"Baht Tailandês",
    "TJS":"Somoni do Tajiquistão",
    "TMT":"TMT",
    "TND":"Dinar Tunisiano",
    "TRY":"Nova Lira Turca",
    "TTD":"Dólar de Trinidad",
    "TWD":"Dólar Taiuanês",
    "TZS":"Shilling Tanzaniano",
    "UAH":"Hryvinia Ucraniana",
    "UGX":"Shilling Ugandês",
    "USD":"Dólar Americano",
    "USDT":"Dólar Americano",
    "UYU":"Peso Uruguaio",
    "UZS":"Som Uzbequistanês",
    "VEF":"Bolívar Venezuelano",
    "VND":"Dong Vietnamita",
    "VUV":"Vatu de Vanuatu",
    "XAF":"Franco CFA Central",
    "XAGG":"Prata",
    "XBR":"Brent Spot",
    "XCD":"Dólar do Caribe Oriental",
    "XOF":"Franco CFA Ocidental",
    "XPF":"Franco CFP",
    "XRP":"XRP",
    "YER":"Riyal Iemenita",
    "ZAR":"Rand Sul-Africano",
    "ZMK":"Kwacha Zambiana",
    "ZWL":"Dólar Zimbabuense",
    "XAU":"Ouro"
}
*/
let simbolos = {
    "ARS":"Peso Argentino",
    "CAD":"Dólar Canadense",
    "CLP":"Peso Chileno",
    "CNY":"Yuan Chinês",
    "COP":"Peso Colombiano",
    "BTC":"Bitcoin",
    "DKK":"Coroa Dinamarquesa",
    "ETH":"Ethereum",
    "EUR":"Euro",
    "GBP":"Libra Esterlina",
    "LTC":"Litecoin",
    "MXN":"Peso Mexicano",
    "RUB":"Rublo Russo",
    "SEK":"Coroa Sueca",
    "USD":"Dólar Americano",
    "UYU":"Peso Uruguaio",
    "NOK":"Coroa Norueguesa",
}
let retorno = ''

window.onload = function(){

    const sel1 = document.getElementById('select1')
    const mostrar = document.getElementById('show')
    const divRet = document.getElementById('retorno')

    function mostrarCotacao(cot1,cot2){

        divRet.style.opacity = 1;

        if(cot1 != cot2){
            let endereco = 'http://economia.awesomeapi.com.br/json/last/' + cot1 + '-' + cot2
            var xhr = new XMLHttpRequest()
            xhr.onload = function(){

                retorno = ''

                var texto1 = sel1.children[sel1.selectedIndex].textContent;

                objRet = JSON.parse(this.responseText);
                retorno += 'Compra: ' + objRet[cot1+cot2]['bid'].replace('.',',') + " / Venda: " + objRet[cot1+cot2]['ask'].replace('.',',')
                retorno += '<br>1 ' + texto1 + " = " + objRet[cot1+cot2]['ask'].replace('.',',') + " Real Brasileiro"
                divRet.innerHTML = retorno
            }
            xhr.open('get',endereco,true)
            xhr.send(null)
        } else {
            divRet.innerHTML = "ERRO: As moedas selecionadas devem ser diferentes!"
        }
    }

    for(simbolo in simbolos){

        sel1.options[sel1.options.length] = 
            new Option(simbolos[simbolo], simbolo); //('My option', 'My value')
    }

    mostrar.addEventListener('click',function(){
        mostrarCotacao(sel1.value,'BRL')
    })

    let busca     = document.getElementById('busca')    
    let divRetCep = document.getElementById('retornoCep')
    busca.addEventListener('click',function(){

        let cep   = document.getElementById('cep').value.replace('-','')
        divRetCep.style.opacity = 1; 

        if(cep != ''){
       
            let endereco = 'https://cep.awesomeapi.com.br/json/' + cep
            
            var xhr = new XMLHttpRequest()
            xhr.onload = function(){

                objRet = JSON.parse(this.responseText);
                divRetCep.innerHTML = ` 
                
                    ${objRet.address_type}: ${objRet.address}<br>
                    Bairro:    ${objRet.district}<br>
                    Cidade:    ${objRet.city}<br>
                    Estado:    ${objRet.state}<br>
                    DDD:       ${objRet.ddd}<br>
                    Latitude:  ${objRet.lat}<br>
                    Longitude: ${objRet.lng}<br>

                `;
            }
            xhr.open('get',endereco,true)
            xhr.send(null)
        } else {
            divRetCep.innerHTML = 'ERRO: Preencha o campo CEP!'
        }
    })
}
