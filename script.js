// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Custom Modal Functions
const successModal = document.getElementById('successModal');
const successMessage = document.getElementById('successMessage');

function openModal(name) {
    if(name) {
        successMessage.innerText = `Halo ${name}! Pesanan jemputan Anda telah kami terima. Tim kami akan segera menghubungi Anda via WhatsApp dalam 15 menit. Terimakasih!`;
    }
    successModal.style.display = 'flex';
}

function closeModal() {
    successModal.style.display = 'none';
}

// Error Feedback Function
function showError(inputElement, message) {
    const errorMsg = inputElement.parentElement.querySelector('.error-msg');
    inputElement.classList.add('input-error');
    errorMsg.innerText = message;
    
    setTimeout(() => {
        inputElement.classList.remove('input-error');
        errorMsg.innerText = '';
    }, 3000);
}

// Form Submission & Validation
const orderForm = document.querySelector('.order-form');
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = orderForm.querySelector('input[type="text"]');
    const phoneInput = orderForm.querySelector('input[type="tel"]');
    const addressInput = orderForm.querySelector('textarea');
    
    let isValid = true;

    if(!nameInput.value.trim()) {
        showError(nameInput, 'Nama lengkap wajib diisi');
        isValid = false;
    }
    
    if(!phoneInput.value.trim()) {
        showError(phoneInput, 'Nomor WhatsApp wajib diisi');
        isValid = false;
    }

    if(!addressInput.value.trim()) {
        showError(addressInput, 'Alamat penjemputan wajib diisi');
        isValid = false;
    }
    
    if(isValid) {
        openModal(nameInput.value);
        orderForm.reset();
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
