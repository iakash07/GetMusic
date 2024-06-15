/*document.addEventListener('DOMContentLoaded', (event) => {
    const audioElement = document.getElementById('audio-player');

    audioElement.addEventListener('play', () => {
        console.log('Audio started playing');
        
    });

    audioElement.addEventListener('pause', () => {
        console.log('Audio paused');
       
    });

    audioElement.addEventListener('ended', () => {
        console.log('Audio ended');
        
    });

    audioElement.addEventListener('timeupdate', () => {
        console.log('Current time: ' + audioElement.currentTime);
    
    });
});*/

/*document.addEventListener('DOMContentLoaded', (event) => {
    const audioElement = document.getElementById('myAudio');
    const playPauseButton = document.getElementById('playPauseButton');

    playPauseButton.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audioElement.pause();
            playPauseButton.textContent = 'Play';
        }
    });
});*/

document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.playPauseButton');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const audioId = button.getAttribute('data-audio-id');
            const audioElement = document.getElementById(audioId);

            if (audioElement.paused) {
                pauseAllAudios(); // Pause all other audios
                audioElement.play();
                button.textContent = 'Pause';
            } else {
                audioElement.pause();
                button.textContent = 'Play';
            }
        });
    });

    function pauseAllAudios() {
        buttons.forEach(button => {
            const audioId = button.getAttribute('data-audio-id');
            const audioElement = document.getElementById(audioId);
            audioElement.pause();
            button.textContent = 'Play';
        });
    }
});

