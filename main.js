let baseRoutePrice = 0;

const modal = document.getElementById('bookModal');
const routeInput = document.getElementById('modal-route');
const navLinks = document.getElementById('navLinks');
const bikeChecklist = document.getElementById('bikeChecklist');

function toggleMenu() { navLinks.classList.toggle('active'); }
function closeMenu() { navLinks.classList.remove('active'); }

// Відкриття модального вікна із передачею назви та вартості
function openModal(routeName, price) {
    routeInput.value = routeName;
    baseRoutePrice = price;
    modal.style.display = 'flex';
    handleBikeChange();
}

function closeModal() {
    modal.style.display = 'none';
}

// Обробка зміни вибору велосипеда
function handleBikeChange() {
    const bikeOption = document.querySelector('input[name="bike_option"]:checked').value;

    if (bikeOption === 'own') {
        bikeChecklist.style.display = 'block';
    } else {
        bikeChecklist.style.display = 'none';
    }

    updateModalTotal();
}

// Перерахунок загальної суми
function updateModalTotal() {
    let total = baseRoutePrice;

    const bikeOption = document.querySelector('input[name="bike_option"]:checked').value;
    const helmetOption = document.querySelector('input[name="helmet_option"]:checked').value;
    const mediaOption = document.getElementById('media_option').checked;

    if (bikeOption === 'rent') total += 700;
    if (helmetOption === 'rent') total += 150;
    if (mediaOption) total += 300;

    document.getElementById('modal-total-price').textContent = total;
}

window.onclick = function (event) {
    if (event.target == modal) closeModal();
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

function submitForm(event) {
    event.preventDefault();
    const total = document.getElementById('modal-total-price').textContent;
    const date = document.getElementById('tour-date').value;
    alert('🎉 Дякуємо! Вашу заявку на "' + routeInput.value + '" на дату ' + date + ' прийнято.\nЗагальна сума: ' + total + ' грн.\nНаш менеджер зв’яжеться з вами найближчим часом!');
    closeModal();
}

function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('span');
    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
    } else {
        answer.style.display = "block";
        icon.textContent = "-";
    }
}