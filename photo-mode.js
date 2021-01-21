AFRAME.registerComponent('photo-mode', {
    init: function () {
        const container = document.getElementById('photoModeContainer')
        const image = document.getElementById('photoModeImage')
        const shutterButton = document.getElementById('shutterButton')
        const closeButton = document.getElementById('closeButton')

       
            }

            // e.detail is the base64 representation of the JPEG screenshot
            image.src = 'data:image/jpeg;base64,' + e.detail

            // Show the photo
            container.classList.add('photo')
        })
    }
})