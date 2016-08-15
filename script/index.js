$(function() {
	$('.nav li').click(function(e) {
		$('.nav li.active').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
    		e.preventDefault();
		var url = "../rutorrent-" + $this.find("a").text().split(" ")[1];
		$("#rutorrent").attr("src", url);
	});
});
