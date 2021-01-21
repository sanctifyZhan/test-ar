AFRAME.registerComponent('photo-mode', {
    init: function () {
        const container = document.getElementById('photoModeContainer')
        const image = document.getElementById('photoModeImage')
        const shutterButton = document.getElementById('shutterButton')
        const closeButton = document.getElementById('closeButton')

        // Container starts hidden so it isn't visible when the page is still loading
        container.style.display = 'block'

        closeButton.addEventListener('click', () => {
            container.classList.remove('photo')
        })

        take_photo_btn.addEventListener("click", function (e) {

            e.preventDefault();
            var video = document.querySelector('video')
            var snap = takeSnapshot(video);

            // Show image. 
            image.setAttribute('src', snap);
            image.classList.add("visible");

            // Enable delete and save buttons
            delete_photo_btn.classList.remove("disabled");
            download_photo_btn.classList.remove("disabled");

            // Set the href attribute of the download button to the snap url.
            download_photo_btn.href = snap;

            // Pause video playback of stream.
            //video.pause();

        });


        this.el.sceneEl.addEventListener('screenshotready', e => {
            // Hide the flash
            container.classList.remove('flash')

            // If an error occurs while trying to take the screenshot, e.detail will be empty.
            // We could either retry or return control to the user
            if (!e.detail) {
                return
            }

            // e.detail is the base64 representation of the JPEG screenshot
            image.src = 'data:image/jpeg;base64,' + e.detail

            // Show the photo
            container.classList.add('photo')
        })
    }
})