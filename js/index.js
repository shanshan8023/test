$(function(){
	$('ul li').hover(function(){
		$(this).find('.intro').hide();
		$(this).stop(true).animate({width:400}).siblings().stop(true).animate({width: 160});
	},function(){
		$(this).find('.intro').show();
		$('ul li').stop(true).animate({width:200},200);  //消失时以200的速度
	})
})
