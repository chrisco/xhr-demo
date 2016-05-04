var request = new XMLHttpRequest();

// Create a function that is called when the request status has changed
request.onreadystatechange = function() {

	// When the readyState is 4 that means the request has completed
	if (request.readyState == 4 && request.status == 200) {
		var jsObject = JSON.parse(request.responseText);
		var title;
		for (index in jsObject.data.children) {
			title = jsObject.data.children[index].data.title;
			$("div").append(title);
			$("div").append("<br><br>")
		}
	}
}

// Tell the XMLHttpRequest where you want it to go and how
request.open('GET', 'https://www.reddit.com/r/starwars.json');

// Send it off! Good luck little XMLHttpRequest! :D
request.send();
