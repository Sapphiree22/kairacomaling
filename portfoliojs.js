// Function to show the selected section
function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

let slideIndex = 1; 
document.addEventListener("DOMContentLoaded", () => showSlides(slideIndex)); 

// Function to show slides
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (slides.length === 0) return; 

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Auto-slide every 3 seconds
setInterval(() => {
    plusSlides(1);
}, 3000);

function currentSlide(n) {
    showSlides(slideIndex = n);
}


// Function to toggle the heart reaction
function toggleLike(element) {
    let heartImage = element.querySelector("img");

    if (heartImage.src.includes("heart-white.png")) {
        heartImage.src = "images/heart-red.png"; 
    } else {
        heartImage.src = "images/heart-white.png"; 
    }
}
// Function to toggle the heart reaction
        function toggleLike(button) {
            if (button.innerHTML === "🤍") {
                button.innerHTML = "❤️";
            } else {
                button.innerHTML = "🤍";
            }
        }

function closeWindow() {
    window.close();
}
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );


//temperature converter
function convertTemperature() {
    let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
    if (!isNaN(celsius)) {
        let fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
        alert(`${celsius.toFixed(2)}°C is equal to ${fahrenheit}°F`);
    } else {
        alert("Invalid input! Please enter a number.");
    }
}

//longer word
function findLongestWord() {
    let word1 = prompt("Enter the first word:");
    let word2 = prompt("Enter the second word:");

    if (!isNaN(word1) || !isNaN(word2)) {
        alert("Invalid input! Please enter words, not numbers.");
    } else if (!word1 || !word2) {
        alert("Please enter both words!");
    } else {
        if (word1.length > word2.length) {
            alert("The longer word is WORD 1: " + word1);
        } else if (word2.length > word1.length) {
            alert("The longer word is WORD 2: " + word2);
        } else {
            alert("Both words are the same length.");
        }
    }
}

// basic operations
function calculate() {
    let num1 = parseFloat(prompt("Enter the first number: ").trim());
    let num2 = parseFloat(prompt("Enter the second number: ").trim());
    let operator = prompt("Enter the operator (+, -, *, /):").trim();

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;
    switch (operator) {
        case "+":
		case "A":
		case "a":
            result = num1 + num2;
            break;
        case "-":
		case "S":
		case "s":
            result = num1 - num2;
            break;
        case "*":
		case "M":
		case "m":
            result = num1 * num2;
            break;
        case "/":
		case "D":
		case "d":
            result = num2 !== 0 ? num1 / num2 : "Division by zero is not allowed";
            break;
        default:
            result = "Invalid operator";
            break;
    }

    alert(`RESULT: ${result}`);
}

//birthstone
function showUserBirthstone() {
    let birthstoneInfo;
    let birthMonth = prompt("Enter your birth month: ").toLowerCase().trim();

    switch (birthMonth) {
        case "january":
            birthstoneInfo = "Garnet";
            break;
        case "february":
            birthstoneInfo = "Amethyst";
            break;
        case "march":
            birthstoneInfo = "Aquamarine";
            break;
        case "april":
            birthstoneInfo = "Diamond";
            break;
        case "may":
            birthstoneInfo = "Emerald";
            break;
        case "june":
            birthstoneInfo = "Alexandrite & Pearl";
            break;
        case "july":
            birthstoneInfo = "Ruby";
            break;
        case "august":
            birthstoneInfo = "Peridot";
            break;
        case "september":
            birthstoneInfo = "Sapphire";
            break;
        case "october":
            birthstoneInfo = "Opal & Tourmaline";
            break;
        case "november":
            birthstoneInfo = "Citrine & Topaz";
            break;
        case "december":
            birthstoneInfo = "Blue Zircon, Turquoise, & Tanzanite";
            break;
        default:
            birthstoneInfo = "Invalid month. Please enter a valid month.";
    }

    alert(`RESULT:\n\n${birthstoneInfo}`);
}

//Acceleration
function ComputeAcceleration() {
    let initialVelocity = parseFloat(prompt("Enter initial velocity (m/s):"));
    let finalVelocity = parseFloat(prompt("Enter final velocity (m/s):"));
    let changeInTime = parseFloat(prompt("Enter change in time (seconds):"));

    if (isNaN(initialVelocity) || isNaN(finalVelocity) || isNaN(changeInTime) || changeInTime === 0) {
        alert("Invalid input. Please enter valid numbers, and time should not be zero.");
    } else {
        let acceleration = (finalVelocity - initialVelocity) / changeInTime;
        alert("Acceleration: " + acceleration.toFixed(2) + " m/s²");
    }
}

//addcomment
function addComment(button) {
    let commentInput = button.previousElementSibling; 
    let commentText = commentInput.value.trim(); 

    if (commentText !== "") {
        let artwork = button.closest(".art-container").querySelector(".comment-overlay");
        artwork.innerText = commentText; 
        commentInput.value = "";
    }
}









