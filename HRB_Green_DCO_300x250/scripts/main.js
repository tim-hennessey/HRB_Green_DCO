(function () {

	var banner = document.getElementById('banner');
	var footer = document.getElementById('footer');
	var cta = document.getElementById('cta');
	var textEl = document.getElementById('text-plugin');
	var ctaEl = document.getElementById('cta_txt');

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
	function handleOver() {
		t.to(cta, .25, {backgroundColor: "#3bc0f8"});
	}

	// --------------------------------------------------------------------------------------
	function handleOut() {
		t.to(cta, .25, {backgroundColor: "#f5cc02"});
	}

	// --------------------------------------------------------------------------------------
	function start() {
		t.set(banner, {opacity:1});
		
		var mySplitText = new SplitText(textEl, {type:"lines"});

		tl1.staggerFrom(mySplitText.lines, .8, {delay:.5, y:"-=50", ease: Sine.easeOut}, .4);
		tl2.staggerFrom(mySplitText.lines, .2, {delay:.7, opacity:0}, .4);
	}

	// --------------------------------------------------------------------------------------
	window.addEventListener("load", function() {
		banner.addEventListener('mouseover', handleOver, false);
		banner.addEventListener('mouseout', handleOut, false);

		t.delayedCall(0.5, start);
	});
})();
