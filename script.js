// Dark Mode with Persistence using localStorage
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const icon = darkModeToggle.querySelector('i');

// تحميل الوضع المحفوظ
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    navbar.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// تبديل الوضع الليلي
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Language Toggle
const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('click', () => {
    const elements = document.querySelectorAll('[data-ar]');
    
    elements.forEach(el => {
        const newText = el.getAttribute(document.documentElement.lang === 'ar' ? 'data-en' : 'data-ar');
        el.innerHTML = newText;
    });

    if (document.documentElement.lang === 'ar') {
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        langToggle.textContent = 'عربي';
    } else {
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
        langToggle.textContent = 'English';
    }
});