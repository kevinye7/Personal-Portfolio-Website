const texts = ["Web Developer", "Game Developer"];
let index = 0;
let textIndex = 0;
let isDeleting = false;

function type() {
    const typingElement = document.getElementById("typing");
    const currentText = texts[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, index - 1);
        index--;
        if (index <= 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Move to next text
            setTimeout(type, 250); // Pause before starting to type
        } else {
            setTimeout(type, 150); // Speed of deleting
        }
    } else {
        typingElement.textContent = currentText.substring(0, index + 1);
        index++;
        if (index === currentText.length) {
            isDeleting = true;
        }
        setTimeout(type, 250); // Speed of typing
    }
}

window.onload = type;

let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.top = "-99px"; // Adjust this value based on your navbar height
    } else {
        // Scrolling up
        header.style.top = "0";
    }
    
    lastScrollTop = scrollTop;
});

if (window.location.pathname === '/about.html') {
    document.getElementById('languagesBtn').addEventListener('click', function() {
        document.getElementById('languages').style.display = 'flex';
        document.getElementById('tools').style.display = 'none';
        document.getElementById('languagesBtn').style.backgroundColor = '#121212';
        document.getElementById('toolsBtn').style.backgroundColor = 'transparent';
        document.getElementById('languagesBtn').style.color = 'white';
        document.getElementById('toolsBtn').style.color = '#121212';
    });

    document.getElementById('toolsBtn').addEventListener('click', function() {
        document.getElementById('languages').style.display = 'none';
        document.getElementById('tools').style.display = 'flex';
        document.getElementById('languagesBtn').style.backgroundColor = 'transparent';
        document.getElementById('toolsBtn').style.backgroundColor = '#121212';
        document.getElementById('languagesBtn').style.color = '#121212';
        document.getElementById('toolsBtn').style.color = 'white';
    });
}

if (window.location.pathname === '/contact.html') {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const responseMessage = document.getElementById('responseMessage');
        responseMessage.classList.remove('hidden');
        responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;

        document.getElementById('contactForm').reset();
    });
}