window.onload = chooseAnimationVid;

        var animationVid = new Array("videos/IMG_3886.MOV","videos/IMG_3891.MOV", "videos/IMG_3898.MOV", "videos/IMG_3906.mp4", "videos/IMG_3925.MOV", "videos/IMG_3926.MOV");

        
        
        function chooseAnimationVid() {
            var random = Math.floor(Math.random() * animationVid.length);
            

            
            document.getElementById("animationVid").src = animationVid[random];
        }