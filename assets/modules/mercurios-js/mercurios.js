
jQuery.fn.bgRandom = function(settings){
	// Background randomico

	var parametros = {
		urls: [],
		repetir: 'no-repeat'
	};

	parametros.urls = ["http://www.portaldoholanda.com.br/userfiles/corpo.JPG"];
	bgs = [];

	if (settings) {
		$.extend(parametros, settings);
	}

	return this.each(function(){
			
		// Sorteia o BG
		var sorteia = function() {
			var numeroImg = parametros.urls.length;

			this.bgs.push({
				url: parametros.urls[Math.floor(numeroImg * Math.random())]
			});
		}();

		// Insere no body
		var insere = function() {
			for (var i = 0, tam = this.bgs.length; i < tam; i++) {
				bg = this.bgs[i];
			}
		}();

		$(this).css({
			'background': "url("+ bg.url +")",
			'background-repeat': parametros.repetir
		});
	});
};
