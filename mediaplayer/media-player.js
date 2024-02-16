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
        playAudioFromFile(audioFileInput.files[0]);
    });

    audioUrlButton.addEventListener('click', function () {
        const audioUrl = prompt("Enter the URL for the audio file:");
        if (audioUrl) {
            playAudioFromUrl(audioUrl);
        }
    });

    videoFileInput.addEventListener('change', function () {
        playVideoFromFile(videoFileInput.files[0]);
    });

    videoUrlButton.addEventListener('click', function () {
        const videoUrl = prompt("Enter the URL for the video file:");
        if (videoUrl) {
            playVideoFromUrl(videoUrl);
        }
    });

    youtubeButton.addEventListener('click', function () {
        const youtubeUrl = videoUrlInput.value;
        if (youtubeUrl) {
            playYouTubeVideo(youtubeUrl);
        }
    });

    function playAudioFromFile(file) {
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        audioPlayer.play();
    }

    function playAudioFromUrl(audioUrl) {
        audioPlayer.src = audioUrl;
        audioPlayer.play();
    }

    function playVideoFromFile(file) {
        const objectURL = URL.createObjectURL(file);
        videoPlayer.src = objectURL;
        videoPlayer.play();
    }

    function playVideoFromUrl(videoUrl) {
        videoPlayer.src = videoUrl;
        videoPlayer.play();
    }

    function playYouTubeVideo(youtubeUrl) {
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
