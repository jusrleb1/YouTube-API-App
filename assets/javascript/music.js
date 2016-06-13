$(document).ready(function(){
	var ytAPIKey = "AIzaSyDIQB1GaunklYrD3IYiI5h_J2bTDTR8NgY";
	// gapi.client.setApiKey(ytAPIKey);
	// gapi.client.load('youtube', 'v3').then(function() { console.log('loaded.'); });
	var keyword = '';
	var videoArray = [];
	var allVideoArray = [];
	var channelIdArray = [];
	var playlistIdArray = [];



	function searchSongs(){
		keyword = keyword.replace(/ /g,"+");
		console.log(keyword);
		var queryURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=' + keyword + '&key=' + ytAPIKey;
		
		// Creates AJAX call for the specific movie being 
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			var results = response.items;
        	console.log(queryURL);
        	console.log(response);
        	console.log(results);

        	
        	Object.keys(results).forEach(function(key,index) {

        		videoArray = [];
	        	var num = parseInt(key)+1;
	        	var videoDiv = $('<div>').attr('class', 'video' + num);

	        	var title = results[key].snippet.title;
	        	videoArray.push(title);
	        	var pOne = $('<p>').text(num + ". Title: " + title).css({'font-size': '18px',  'font-weight':'bold', 'margin-top':'10px','margin-bottom':'1px'});
	        	videoDiv.append(pOne);

	        	var image = results[key].snippet.thumbnails.default.url;
	        	videoArray.push(image);
	        	var pTwo = $('<p>').text("Image: " + image).css('margin','1px');
	        	videoDiv.append(pTwo);

	        	var thumbnail = $('<img>');
					thumbnail.attr('id', 'thumbnails');
					thumbnail.attr('src', results[key].snippet.thumbnails.default.url);
				videoDiv.append(thumbnail);

				if(results[key].id.videoId){
					console.log("videoID");
					var videoId = results[key].id.videoId;
		        	videoArray.push(videoId);
		        	var pThree = $('<p>').text("VideoId: " + videoId).css('margin','1px');
		        	videoDiv.append(pThree);
		        	var link = $('<p>');
		        	link.attr('id', videoId);
		        	link.on('click',onClick);
		        	//link.text("[Play Video]").css('font-weight', 'bold');;
		        	//link.html('<a href="https://www.youtube.com/watch?v=' + videoId + '" target="_blank">Play Video</a>');
		        	//link.html('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>');
		        	link.html('<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' + videoId + '?rel=0&"&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
		        	videoDiv.append(link);
				} else if (results[key].id.channelId) {
					console.log("channelId");
		        	var channelId = results[key].id.channelId;
					videoArray.push(channelId);
		        	channelIdArray.push(channelId);
		        	var pThree = $('<p>').text("ChannelId: " + channelId).css({'margin':'1px','background-color':'yellow', 'width':'400px'});
		        	videoDiv.append(pThree);
		        } else {
		        	console.log("playlistId");
		        	var playlistId = results[key].id.playlistId;
					videoArray.push(playlistId);
		        	playlistIdArray.push(playlistId);
		        	var pThree = $('<p>').text("PlaylistId: " + playlistId).css({'margin':'1px','background-color':'yellow', 'width':'400px'});
		        	videoDiv.append(pThree);
	        	};

	        	$('#results').append(videoDiv);

	        	console.log(videoArray);
	        	allVideoArray.push(videoArray);
        	});
        	console.log("==============================");
        	console.log(allVideoArray);
        	console.log(channelIdArray);
        	console.log(playlistIdArray);

        	return false;
		});
	};

	$('#addKeyword').on('click', function(){
		keyword = $("#keyword-input").val().trim();
		searchSongs();
		$("#keyword-input").val('');
		
		return false;
	});

' + vidId + '

	function onClick(){
		console.log("clicked");
    	vidId = $(this).attr('id');
        console.log(vidId);
        $('#'+vidId).html('<object type="application/x-shockwave-flash" width="262" height="25" data="https://www.youtube.com/v/' + vidId + '?version=2&autoplay=1&theme=dark"><param name="movie" value="https://www.youtube.com/v/' + vidId + '?version=2&autoplay=1&theme=dark" /><param name="wmode" value="transparent" /></object>');

	 //  	// 2. This code loads the IFrame Player API code asynchronously.
		// var tag = document.createElement('script');
		// tag.src = "https://www.youtube.com/iframe_api";
	 //    var firstScriptTag = document.getElementsByTagName('script')[0];
	 //    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	 //     var player;
	     
	 //      // 3. This function creates an <iframe> (and YouTube player)
	 //      //    after the API code downloads.
	 //      function onYouTubeIframeAPIReady() {
			  
		// 	  player = new YT.Player('player', {
		// 	    videoId: vidId,
		// 	    playerVars: { 'autoplay': 1, 'controls': 0 },
		// 	    events: {
		// 	      'onReady': onPlayerReady,
		// 	      'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
		// 	      'onStateChange': onPlayerStateChange,
		// 	      'onError': onPlayerError
		// 	    }
		// 	  });
		// 	}

	 //      // 4. The API will call this function when the video player is ready.
	 //      function onPlayerReady(event) {
	 //        event.target.playVideo();
	 //      }

	 //      // 5. The API calls this function when the player's state changes.
	 //      //    The function indicates that when playing a video (state=1),
	 //      //    the player should play for six seconds and then stop.
	 //      var done = false;
	 //      function onPlayerStateChange(event) {
	 //        if (event.data == YT.PlayerState.PLAYING && !done) {
	 //          setTimeout(stopVideo, 600000);
	 //          done = true;
	 //        }
	 //      }
	 //      function stopVideo() {
	 //        player.stopVideo();
	 //      }


     };
     //
     //<div style="background:url('http://keepvid.com/images/downloadbar/ajax-loader.gif') no-repeat center;width:700px;">
     //<iframe src="http://keepvid.com/webmasters/iframe-downloadbar.php" width="700" height="34" scrolling="no" frameBorder="0"></iframe></div>
     //
     //<object type="application/x-shockwave-flash" width="1" height="1" data="https://www.youtube.com/v/IdneKLhsWOQ?version=2&enablejsapi=1&theme=dark" style="visibility:hidden;display:inline;"><param name="movie" value="https://www.youtube.com/v/IdneKLhsWOQ?version=2&enablejsapi=1&theme=dark"/><param name="wmode" value="transparent"/></object>

});