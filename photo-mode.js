AFRAME.registerComponent('photo-mode', {
    init: function () {
        var myPix = new Array("ass/1.png", "ass/2.jpg", "ass/3.png");
        var take_photo_btn = document.querySelector('#take-phot');
        take_photo_btn.addEventListener("click", function (e) {
            choosePic();
        });
        function choosePic() {
            var randomNum = Math.floor(Math.random() * myPix.length);
            document.getElementById("my-image").src = myPix[randomNum];
            take_photo_btn.classList.add("disabled");
        }
    }
})