const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const arrticles = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {
        btns.forEach(function(btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        arrticles.forEach(function(article) {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    } 
});