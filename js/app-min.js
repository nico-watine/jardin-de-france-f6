$(document).foundation();

// Create a media condition that targets viewports at most 640px wide
const mediaQuery = window.matchMedia('(max-width: 39.99875em)')
 
function handleNavChange(width) {
	// Check if the media query is true
	if (width.matches) {
		$('.magellan-link').on('click', function () {
			$(".top-bar").css({"display": "none"});
		});
	} else {
		$('.magellan-link').on('click', function () {
			$(".top-bar").css({"display": "flex"});
		});
	}
}
 
// Register event listener
mediaQuery.addListener(handleNavChange)
// Initial check
handleNavChange(mediaQuery)
