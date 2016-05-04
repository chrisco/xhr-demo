var request = new XMLHttpRequest();

// Create a function that is called when the request status has changed
request.onreadystatechange = function() {

	// When the readyState is 4 that means the request has completed
	if (request.readyState == 4 && request.status == 200) {
		//    console.log(request.responseText);
		var stuff = JSON.parse(request.responseText);
		var title;
		var arrayOfTitles = [];
		for (keys in stuff.data.children) {
			// console.log(stuff.data.children[keys].data.title);
			title = stuff.data.children[keys].data.title;
			// arrayOfTitles.push(title);
			$("div").append(title);
			$("div").append("<br><br>")
		}


		// console.log(output);

	}
}

// Tell the XMLHttpRequest where you want it to go and how
request.open('GET', 'https://www.reddit.com/r/starwars.json');

// Send it off! Good luck little XMLHttpRequest! :D
request.send();
