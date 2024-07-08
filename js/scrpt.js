document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById('auto-type');
    const subText = document.getElementById('sub-text');
    const redirectBtn = document.getElementById('redirect-btn');
    const text = "Avxlian"; // Ganti dengan nama yang Anda inginkan
    const typingSpeed = 100; // Kecepatan penulisan dalam milidetik
    const delayBeforeFade = 1; // Waktu sebelum memulai efek fade dalam milidetik

    let index = 0;

    function typeText() {
        if (index < text.length) {
            textContainer.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(() => {
                textContainer.classList.add('faded');
                subText.classList.add('visible'); // Tampilkan teks tambahan setelah nama orang menghilang
            }, delayBeforeFade);
        }
    }

    redirectBtn.addEventListener('click', function() {
        window.location.href = 'index1.html'; // Mengarahkan ke index.html saat tombol diklik
    });

    typeText();
});
