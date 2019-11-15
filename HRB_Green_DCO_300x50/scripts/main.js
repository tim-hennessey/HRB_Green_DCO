(function () {

	var banner = document.getElementById('banner');
	var footer = document.getElementById('footer');
	var textEl = document.getElementById('text-plugin');

	var textStr = "";
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax();

	textEl.innerHTML = textStr;

	myFT.on('instantads',function(){
		
		var textPlugin=myFT.$("#text-plugin");
		textPlugin[0].innerHTML=myFT.instantAds.dynamicText;
		textPlugin[0].style.fontSize=myFT.instantAds.fontSize;

	});

	

	// --------------------------------------------------------------------------------------
	function start() {
		t.set(banner, {opacity:1});
		
		var mySplitText = new SplitText(textEl, {type:"lines"});

		// tl1.staggerFrom(mySplitText.lines, .8, {delay:.5, y:"-=25", ease: Sine.easeOut}, .4);
		// tl2.staggerFrom(mySplitText.lines, .2, {delay:.7, opacity:0}, .4);
	}

	// --------------------------------------------------------------------------------------
	window.addEventListener("load", function() {
		

		t.delayedCall(0.5, start);
	});
})();
