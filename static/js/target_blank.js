<script type='text/javascript'>
	//https://osric.com/chris/javascript/javascript-anchor-target-blank.html
	// Get all the anchors in the entire document
	// (You can also use document.links to get the links)
	var anchors = document.getElementsByTagName('a');

	// Loop through the anchors and add the click handler if it includes the CSS class 'external'
	for ( var i in anchors ) 
		if ( anchors[i].className && anchors[i].className.indexOf('external') != -1 )
			anchors[i].onclick = function () { return !window.open(this); };
</script>