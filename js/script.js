/* toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*scroll selection active link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };
    });


/* sticky navbar*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window,scrollY > 100);

/* remove toggle icon and navbar when click navbar link (scroll)*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/* scroll reveal */
 ScrollReveal ({
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', {origin : 'top'});
 ScrollReveal().reveal('.home-img, .contact form', {origin : 'bottom'});
 ScrollReveal().reveal('.home-content h1', {origin : 'left'});
 ScrollReveal().reveal('.home-content p', {origin : 'right'});


 /* typed js*/

 const typed = new Typed('.multiple-text', {
    strings: ['Exploring AI & Big Data', 'Exploring AI & Big Data'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
 });


 function clearForm() {
    // Get a reference to the form
    var form = document.getElementById("contactForm");

    // Reset the form to clear the entered data
    form.reset();
}

function Send() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var emailsubject = document.getElementById("emailsubject").value;
    var message = document.getElementById("message").value;

    var body = "Name: " + name + "<br/> Email: " + email + "<br/> Mobile No: " + number + "<br/> Message: " + message;

    console.log(body); // Debugging

    Email.send({
        SecureToken: "90af19be-3f96-4819-b5e0-b9d1152480e9", // **Unsafe in client-side**
        To: "saiprasanth1926@gmail.com",
        From: "saiprasanth1926@gmail.com",
        Subject: emailsubject, // Fixed incorrect ID
        Body: body // Fixed incorrect ID
    }).then(message => {
        if (message === "OK") {
            swal("Successful!", "Your Data Successfully Received!", "success");
            clearForm();
        } else {
            swal("Something Went Wrong", "Your Data is not Received!", "error");
        }
    });

    function clearForm() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("emailsubject").value = "";
        document.getElementById("message").value = "";
    }
}

    
    function clearForm() {
        document.getElementById("emailSubject").value = "";
        document.getElementById("emailBody").value = "";
    }
    



            // Get all input elements and the button
            var inputElements = document.querySelectorAll('.input-box input, textarea');
        
            // Add event listeners for mouseover, mouseout, touchstart, and touchend
            inputElements.forEach(function (element) {
                element.addEventListener('mouseover', function () {
                    handleHover(element);
                });
        
                element.addEventListener('mouseout', function () {
                    handleUnhover(element);
                });
        
                element.addEventListener('touchstart', function () {
                    handleHover(element);
                });
        
                element.addEventListener('touchend', function () {
                    handleUnhover(element);
                });
            });