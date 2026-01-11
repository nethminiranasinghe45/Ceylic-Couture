window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow');
        nav.style.padding = "10px 0"; 
    } else {
        nav.classList.remove('shadow');
        nav.style.padding = "15px 0";
    }
};

document.querySelectorAll('.thumb-img').forEach(thumb => {
    thumb.addEventListener('click', function() {
        const mainImg = document.querySelector('.main-product-img');
        mainImg.src = this.src;
    });
});