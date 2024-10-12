function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("visible"); // Menambah kelas visible untuk menampilkan menu
}

// Event listeners untuk form registrasi dan login tetap sama

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    alert(`Pendaftaran berhasil!\nNama: ${name}\nEmail: ${email}`);
    document.getElementById("registerForm").reset();
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    alert(`Login berhasil!\nEmail: ${email}`);
    document.getElementById("loginForm").reset();
    showDashboard(email);
});

function showDashboard(email) {
    // Mengarahkan pengguna ke halaman dashboard
    window.location.href = `dashboard.html?email=${encodeURIComponent(email)}`;
}

function logout() {
    document.getElementById("dashboard").classList.add("hidden");
    alert("Anda telah keluar.");
}
localStorage.setItem('users', JSON.stringify(users));
