document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById('auto-type');
    const subText = document.getElementById('sub-text');
    const redirectBtn = document.getElementById('redirect-btn');
    const text = "0Avxlian0";
    const typingSpeed = 300;
    const delayBeforeFade = 1000;

    const sequence = [1,7,2,6,3,5,4];

    function typeText() {
        let index = 0;
        textContainer.innerHTML = ''; 

        // Buat elemen span untuk setiap huruf
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.className = 'letter';
            span.textContent = char;
            textContainer.appendChild(span);
        });

        function animateLetters() {
            const letters = textContainer.querySelectorAll('.letter');
            let currentIndex = 0;

            function highlightLetter() {
                if (currentIndex < sequence.length) {
                    letters.forEach((letter, i) => {
                        letter.classList.remove('active');
                    });

                    letters[sequence[currentIndex]].classList.add('active');
                    setTimeout(() => {
                        letters[sequence[currentIndex]].classList.remove('active');
                        currentIndex++;
                        highlightLetter();
                    }, typingSpeed);
                } else {
                    subText.classList.add('visible');
                }
            }

            highlightLetter();
        }

        animateLetters();
    }

    // Mulai animasi segera
    typeText();

    redirectBtn.addEventListener('click', function() {
        window.location.href = 'index1.html';
    });
});
