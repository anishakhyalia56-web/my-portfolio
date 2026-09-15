// Page load hone par message
document.addEventListener("DOMContentLoaded", function () {

    console.log("My Portfolio is working!")

    const frames = document.querySelectorAll(".frame");

    frames.forEach(function (frame) {

        frame.addEventListener("click", function () {

            frame.classList.toggle("active");
    });

    });

    const profilePhoto = document.querySelector(".profile-photo");

    if (profilePhoto) {

        profilePhoto.addEventListener("click", function () {

            profilePhoto.classList.toggle("photo-active");

        });

    }

});
