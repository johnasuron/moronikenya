document.addEventListener('DOMContentLoaded', function () {
    // Define the playlist
    let playlist = [
        "audio//the-spirit-of-god.mp3",
        "audio/nearer-my-god-to-thee.mp3",
        "audio/i-need-thee.mp3",
        "audio/come-come-ye-saints.mp3",
        "audio/did-you-think-to-pray.mp3",
        "audio/abide-with-me.mp3",
        "audio/god-be-with-you.mp3"
    ];

    // Shuffle the playlist using Fisher-Yates algorithm
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(playlist); // Shuffle before playback starts

    let currentTrack = 0;
    const player = document.getElementById("audio-player");

    // Load and play the current track
    function loadTrack(index) {
        player.src = playlist[index];
        player.load();
        player.play();
    }

    // Play next track on end
    player.addEventListener('ended', function () {
        currentTrack = (currentTrack + 1) % playlist.length;

        // If we looped through the full playlist, shuffle again
        if (currentTrack === 0) {
            shuffle(playlist);
        }

        loadTrack(currentTrack);
    });

    // Controls
    window.playMusic = () => player.play();

    window.pauseMusic = () => player.pause();

    window.stopMusic = () => {
        player.pause();
        player.currentTime = 0;
    };

    window.setVolume = (value) => {
        player.volume = value;
    };

    // Start with the first track
    loadTrack(currentTrack);
});
