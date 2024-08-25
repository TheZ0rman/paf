function revealInvitation() {
    document.querySelector('.initial-screen').style.display = 'none'; // Oculta la pantalla inicial
    document.querySelector('.welcome-component').style.display = 'none'; // Oculta la pantalla inicial
    document.getElementById('invitation').style.display = 'block'; // Muestra el contenido de la invitación
}

function showMessage() {
    document.getElementById('message').style.display = 'block';
    document.getElementById('gallery').style.display = 'none';
}

function showGallery() {
    document.getElementById('gallery').style.display = 'block';
    document.getElementById('message').style.display = 'none';
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Efecto de desplazamiento suave
    });
}

function openMapLocation() {
    // Reemplaza la URL con la ubicación deseada en Google Maps
    window.open('https://maps.app.goo.gl/qQzWgGRUe6au3phKA');
}

function openEventMapLocation() {
    // Reemplaza la URL con la ubicación del evento en Google Maps
    window.open('https://maps.app.goo.gl/NexonEHNarHqYHts5');
}

// Mostrar el botón cuando se hace scroll
window.onscroll = function() {
    const button = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = 'block'; // Muestra el botón
    } else {
        button.style.display = 'none'; // Oculta el botón
    }
};

function openAttendanceForm() {
    // Reemplaza la URL con la dirección de tu formulario de asistencia
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeoLTjCbdfqQi7afm6dWETAvPd4OndgnUfVsbQh9BPNtUSNNA/viewform?usp=sf_link', '_blank');
}
function countdownTimer() {
    const countdownDate = new Date("September 14, 2024 18:00:00").getTime();

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "¡Evento en curso!";
        }
    }, 1000);
}

countdownTimer();
