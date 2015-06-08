
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
	};

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

jQuery.fn.Affix = function(settings){
	var w = window;
	var scrollX = pageXOffset;
	var scrollY = pageYOffset;
	var $this = $(this);
	var height = $this.outerHeight(true);
	var width = $this.outerWidth(true);

	var parametros = {
		marginTop: "0",
		marginLeft: "0",
		marginBottom: "0",
		marginRight: "0"
	};

	var p = parametros;

	if (settings) {
		$.extend(parametros, settings);
	};

	return this.each(function(){
		var affix = function() {
			if (w.scrollY -= w.scrollY - height) {
				$this.parent().prepend('<div class="sustain"></div>');
				$(".sustain").css({"height": height,"width": width, "float": "left"});
				$this.css({
					"position": "fixed",
					"z-index": "1000",
					"margin-left": p.marginLeft,
					"margin-top": p.marginTop,
					"margin-right": p.marginRight,
					"margin-bottom": p.marginBottom
				});
			};
		}();
	});
};