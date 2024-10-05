$(document).ready(function () {
    const projects = [
        {
            name: "Quotes Generator",
            description: "The Quotes Generator is an Android app that offers a collection of quotes across four categories: Love, Inspirational, Motivational, and Favorites. Designed for daily inspiration, the app allows users to browse, save, and share quotes easily.",
            link: "https://github.com/jyzldmrct/Navigation-Drawer",
            image: "quotes-generator.png"
        },
        {
            name: "Margot Database System",
            description: "A robust database management system built to handle large-scale data storage, retrieval, and manipulation. The system supports complex queries, data indexing, and user-friendly interfaces for managing vast datasets.",
            link: "https://github.com/jayzeld/Margot_System",
            image: "margot-database.png"
        },
        {
            name: "RPG Turn-based Game",
            description: "A text-based RPG game that immerses players in a fantasy world, featuring engaging storylines, character development, and strategic gameplay. The game includes multiple quests, combat mechanics, and options for player choices",
            link: "https://github.com/jyzldmrct/Activity_2",
            image: "rpg-game.png"
        }
    ];

    projects.forEach(project => {
        $('#projects-container').append(`
            <div class="project">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
                <img src="${project.image}" class="project-image" alt="${project.name} preview">
            </div>
        `);
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate inputs
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create data object
    const formData = new URLSearchParams();
    formData.append("name", name); 
    formData.append("email", email);
    formData.append("message", message);

    // Send data to Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbx-x_VdBigXlAGHU4SRGO_W_AFFLmzw0QKJXyLFkOkucyu9Lpef_18r1dhAE5J4k2JQ/exec", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            // Show modals based on success or error
            if (data.result === "success") {
                showModal('successModal');
                document.getElementById("contactForm").reset(); // Reset form
            } else {
                showModal('errorModal');
            }
        })
        .catch((error) => {
            showModal('errorModal');
            console.error("Error:", error);
        });
});

// Function to show modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block"; // Show the modal

    // When the user clicks on <span> (x), close the modal
    const closeBtn = modal.querySelector(".close");
    closeBtn.onclick = function () {
        modal.style.display = "none"; // Close the modal
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Close the modal
        }
    }
}

$(document).ready(function() {
    $('#profile-pic').hover(
        function() {
            $(this).attr('src', 'portfolio_pic_2.jpg');
        },
        function() {
            $(this).attr('src', 'portfolio_pic.jpg');
        }
    );
});


