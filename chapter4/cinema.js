function init() {

	var movie1 = {
		title: "Plan 9 from Outer Sapce",
		genre: "Cult Classic",
		rating: 5,
		showtime: ["3:00pm", "7:00pm", "11:00pm"]

	};

	var movie2 = {
		title: "Forvidden Planet",
		genre: "Classic Sci-fi",
		rating: 5,
		showtime: ["5:00pm", "9:00pm"]
	};

	function getNextShowing(movie) {
		var now = new Date().getTime();
		for (var i = 0; i < movie.showtime.length; ++i) {
			var showTime = getTimeFromString(movie.showtime[i]);
			if ((showTime - now) > 0) {
				return "Next showing of " + movie.title + " is " + movie.showtime[i];
			}
		}
		return;
	}


	function getTimeFromString(timeString) {
		var theTime = new Date();
		var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
		theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
		theTime.setMinutes(parseInt(time[2]) || 0);
		return theTime.getTime();
	}

	function Movie(title, genre, rating, showtime) {
		this.title = title;
		this.genre = genre;
		this.rating = rating;
		this.showtime = showtime;
		this.getNextShow = function () {
			var now = new Date().getTime();
			for (var i = 0; i < this.showtime.length; ++i) {
				var showTime = getTimeFromString(this.showtime[i]);
				if ((showTime - now) > 0) {
					return "Next showing of " + this.title + " is " + this.showtime[i];
				}
			}
			return;
		}
	}

	var nextShowing = getNextShowing(movie1);
	alert(nextShowing);
	nextShowing = getNextShowing(movie2);
	alert(nextShowing);
	var movie3 = new Movie("417", "Cult Classic", 5, ["24:00pm"]);
	alert(movie3.getNextShow());
}

window.onload = init;