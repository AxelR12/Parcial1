var trips = [
    { username: "usuario1", duracion: 2, monto: 20 },
    { username: "usuario1", duracion: 3, monto: 15 },
    { username: "usuario1", duracion: 2, monto: 30 },
    { username: "usuario1", duracion: 3, monto: 20 },
    { username: "usuario1", duracion: 2, monto: 15 },
];

var exchangeRate = 3.8;

function calculateTripAmountInPEN(trip) {
    return trip.monto * exchangeRate;
}

function calculateTotalAmountInPEN() {
    var totalAmountPEN = 0;
    trips.forEach(function(trip) {
        totalAmountPEN += calculateTripAmountInPEN(trip);
    });
    return totalAmountPEN;
}

function showData() {
    var tripAmountsList = document.getElementById("trip-amounts-list");
    var totalAmountElement = document.getElementById("total-amount");

    tripAmountsList.innerHTML = "";

    trips.forEach(function(trip) {
        var listItem = document.createElement("li");
        var tripAmountPEN = calculateTripAmountInPEN(trip);
        listItem.textContent = `Usuario: ${trip.username}, Duración: ${trip.duracion} horas, Monto (en soles): S/ ${tripAmountPEN.toFixed(2)}`;
        tripAmountsList.appendChild(listItem);
    });

    var totalAmountPEN = calculateTotalAmountInPEN();
    totalAmountElement.textContent = `Monto total de los viajes (en soles): S/ ${totalAmountPEN.toFixed(2)}`;
}

function logout() {
    localStorage.removeItem("SESION");
    window.location.href = "usuario.html";
}

window.onload = function() {
    showData();
};
