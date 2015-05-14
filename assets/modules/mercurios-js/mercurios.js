$(document).ready(function(){

	// Background randomico
	background = {
		_bg: [],
		urls: ["url('assets/img/bg1.jpg') no-repeat",
		"url('assets/img/bg2.jpg') no-repeat",
		"url('assets/img/bg3.jpg') no-repeat",
		"url('assets/img/bg4.jpg') no-repeat"],

		// Sorteia o BG
		sorteia: function() {
			this._bg.push({
				url: this.urls[Math.floor(4 * Math.random())]
			});
		},
		// Insere no body
		insere: function() {
			for (var i = 0, tam = this._bg.length; i < tam; i++) {
				var bg = this._bg[i];
				$('.bg-random').css("background",bg.url);
			}
		}
	}

	background.sorteia();
	background.insere();

});