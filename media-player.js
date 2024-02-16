document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const audioFileInput = document.getElementById('audio-file-input');
    const audioUrlButton = document.getElementById('audio-url-button');

    const videoPlayer = document.getElementById('video-player');
    const videoFileInput = document.getElementById('video-file-input');
    const videoUrlButton = document.getElementById('video-url-button');
    const videoUrlInput = document.getElementById('video-url-input');
    const youtubeButton = document.getElementById('youtube-button');

    audioFileInput.addEventListener('change', function () {
        const file = audioFileInput.files[0];
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        audioPlayer.play();
    });

    audioUrlButton.addEventListener('click', function () {
        const audioUrl = prompt("Enter the URL for the audio file:");
        if (audioUrl) {
            audioPlayer.src = audioUrl;
            audioPlayer.play();
        }
    });

    videoFileInput.addEventListener('change', function () {
        const file = videoFileInput.files[0];
        const objectURL = URL.createObjectURL(file);
        videoPlayer.src = objectURL;
        videoPlayer.play();
    });

    videoUrlButton.addEventListener('click', function () {
        const videoUrl = prompt("Enter the URL for the video file:");
        if (videoUrl) {
            videoPlayer.src = videoUrl;
            videoPlayer.play();
        }
    });

    youtubeButton.addEventListener('click', function () {
        const youtubeUrl = videoUrlInput.value;
        if (youtubeUrl) {
            // You may need to integrate a library or API for YouTube video playback.
            // For simplicity, this example assumes that a library like youtube-iframe-api is included.
            // Please include the library before using this functionality.
            playYouTubeVideo(youtubeUrl);
        }
    });

    function playYouTubeVideo(youtubeUrl) {
        // Example using youtube-iframe-api
        // Make sure to include the library script in your HTML
        // <script src="https://www.youtube.com/iframe_api"></script>

        const videoId = getYouTubeVideoId(youtubeUrl);

        if (videoId) {
            new YT.Player('video-player', {
                videoId: videoId,
                events: {
                    'onReady': function (event) {
                        event.target.playVideo();
                    }
                }
            });
        }
    }

    function getYouTubeVideoId(url) {
        const match = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : null;
    }
});
