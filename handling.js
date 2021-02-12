   $('#container').hide();
        //start webar, hide button start and title, if click button modeshu, then button and title hide

        /*     $('#container2').hide();
               $('#container3').hide();
               let moveShu = document.querySelector('#myButton');

               moveShu.addEventListener("click", function (e) {
                   $('#container3').hide();
                   $('#container2').hide();
               });
       */

        AFRAME.registerComponent('markerhandler', {
            tick: function () {
                if (document.querySelector("a-marker").object3D.visible == true) {
                    // MARKER IS PRESENT, RUN video
                    let video = document.getElementById("vid");
                    video.play();

                } else {
                    // MARKER IS HIDDEN , pause video
                    // alert("マーカをカメラで向いてしてください！");
                }
            }
        });


        //Check video ended

        document.getElementsByTagName("video")[0].addEventListener("ended", yourFunction, false);

        function yourFunction(e) {
            $('#container').fadeIn('slow');

            //hide video when ended video after show image
            /*let myEl = document.querySelector("#aVideoHide");
             myEl.setAttribute("visible", "false");
             let imageendTrue = document.getElementsByTagName("a-image")[1];
             imageendTrue.setAttribute('visible', true);*/

            //Title : hide title when video ended include button start and title
            /*$('#container2').hide();
            $('#container3').hide();*/
        }

        //declare variables and initialize

        let audio = new Audio('captureSound.mp3');
        let sceneElement = document.querySelector("a-scene");
        let take_photo_btn = document.querySelector('#take-photo');
        let myPix = new Array("Assets/01.png", "Assets/02.png", "Assets/03.png");
        $('#container').hide();

        //video.play();

        //use check appear of ui by time if you want

        /*  setTimeout(function () {
              $('#container2').fadeIn('slow');
              $('#container3').fadeIn('slow');
          }, 4000);*/

        //Check video ended
        /*  document.getElementsByTagName("video")[0].addEventListener("play", yourFunction, true);
          function yourFunction(e) {
             alert("start roi");
          }*/

        //event click button capture
        take_photo_btn.addEventListener("click", function (e) {
            let imageTrue = document.getElementsByTagName("a-image")[0];
            let myEl = document.querySelector("#aVideoHide");

            //hide image when click button capture
            /*let imageendTrue = document.getElementsByTagName("a-image")[1];
             imageendTrue.setAttribute('visible', false);*/

            audio.play();
            imageTrue.setAttribute('visible', true);
            choosePic();
            //take_photo_btn.classList.add("disabled");
            sceneElement.classList.add("overlay");
            e.preventDefault();
            // $('#container').fadeOut();
            myEl.setAttribute("visible", "false");

            //remove dom
            /* var elem = document.querySelector('a-marker');
             elem.parentNode.removeChild(elem);*/

            var myobj = document.getElementById("container");
            myobj.remove();


        });

        function choosePic() {
            let randomNum = Math.floor(Math.random() * myPix.length);
            document.getElementById("my-image").src = myPix[randomNum];
        }
