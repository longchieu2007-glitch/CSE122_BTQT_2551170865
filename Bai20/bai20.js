const roseImg = document.getElementById('rose-img');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));

        this.classList.add('active');

        roseImg.className = '';
        let effectName = this.innerText.toLowerCase().replace(' ', '');
        roseImg.classList.add('filter-' + effectName);
    });
});