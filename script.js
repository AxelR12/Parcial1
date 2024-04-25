var users = [
    { username: "pasajero1", password: "123", role: "pasajero" },
    { username: "conductor1", password: "456", role: "conductor" }
];

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem("SESION", JSON.stringify({ username: user.username, role: user.role }));

        if (user.role === "pasajero") {
            window.location.href = "dashboardpasajero.html";
        } else if (user.role === "conductor") {
            window.location.href = "dashboardconductor.html";
        }
    } else {
        document.getElementById("error-msg").innerText = "Usuario o contraseña incorrectos";
    }
}

function logout() {
    localStorage.removeItem("SESION");
    window.location.href = "usuario.html";
}

function loadLastTrips() {
}

function showAllTrips() {
}

function loadDriverData() {
}