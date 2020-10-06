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

// function hideMenuOnClickMobileOnly(width) {
// 	if (width.matches) { // If media query matches
// 		$('.magellan-link').on('click', function () {
// 			$(".top-bar").css({"display": "none"});
// 		});
// 	}
// }

// var width = window.matchMedia("(max-width: 39.99875em)")
// hideMenuOnClickMobileOnly(width) // Call listener function at run time
// width.addListener(hideMenuOnClickMobileOnly) // Attach listener function on state changes
