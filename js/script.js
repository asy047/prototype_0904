$(function(){
	$('h1:eq(0)').stop().animate({
		top: 5,
		opacity: 1
	},400,function(){
		$('h1:eq(1)').stop().animate({
		top: 5,
		opacity: 1
	},400);
});
	var $rigid = $('#rigid');
	var $offset = 300;
	var $rigidOST = $rigid.offset().top - $offset;
	
	$(window).scroll(function(){
		if($(this).scrollTop() > $rigidOST) {
			$rigid.find('.text-area02').addClass('animate');
		}
	});
	
	var $two_pic = $('#two-pic');
	var $two_picOST = $two_pic.offset().top - $offset;
	
	$(window).scroll(function() {
		if($(this).scrollTop() > $two_picOST) {
			$two_pic.find('img:eq(0)').addClass('animate'),
			$two_pic.find('img:eq(1)').delay(500).queue(function(next){
				$(this).addClass('animate');
			})
		}
	})
	
	var $the_year = $('#the-year')
	var $the_yearOST = $the_year.offset().top - $offset;
	
	$(window).scroll(function(){
		if($(this).scrollTop() > $the_yearOST) {
			$the_year.find('img:eq(1)').addClass('animate');
		}
	})
	
	});
