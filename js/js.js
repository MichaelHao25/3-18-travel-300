define(['jquery'], function($) {
	var media = document.createElement('style')
	media.innerHTML = ".cp{cursor: pointer;}";
	document.getElementsByTagName('head')[0].appendChild(media);
	$('body *[href]').addClass('cp');
	$('body *[href]').on('click', function() {
		if ($(this).attr('target')) {
			window.open($(this).attr('href'));
		} else {
			window.location.href = $(this).attr('href');
		}
	});

	$('*[data-js-tabs]').children().on('click', function() {
		var tabs_obj = $(this).parent().attr('data-js-tabs');
		$(tabs_obj).children().eq($(this).index()).show().siblings().hide();
		$(this).addClass('active').siblings().removeClass('active');
	});
	$.each($('*[data-js-tabs]'), function(index, el) {
		var arg = window.location.search;
		if (arg != '') {
			arg = arg.split('?')[1].split('=')[1];
			console.log(arg);
			$(el).children().eq(arg - 1).trigger('click');

		} else {
			$(el).children().first().addClass('active');
			$($(el).attr('data-js-tabs')).children().eq(0).show().siblings().hide();;
		}
	});

})
