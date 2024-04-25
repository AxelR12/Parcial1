var trips = [
    { duracion: "2 horas", fecha: "2024-04-20", origen: "Lima", destino: "Tumbes", conductor: "Conductor 1" },
    { duracion: "1.5 horas", fecha: "2024-04-19", origen: "Lima", destino: "Lambayeque", conductor: "Conductor 2" },
    { duracion: "3 horas", fecha: "2024-04-18", origen: "Lima", destino: "Piura", conductor: "Conductor 1" },
    { duracion: "2.5 horas", fecha: "2024-04-17", origen: "Lima", destino: "Cuzco", conductor: "Conductor 2" },
    { duracion: "2 horas", fecha: "2024-04-16", origen: "Lima", destino: "Loreto", conductor: "Conductor 1" },
    { duracion: "1.5 horas", fecha: "2024-04-15", origen: "Lima", destino: "San Martín", conductor: "Conductor 2" },
    { duracion: "3 horas", fecha: "2024-04-14", origen: "Lima", destino: "Ica", conductor: "Conductor 1" },
    { duracion: "2.5 horas", fecha: "2024-04-13", origen: "Lima", destino: "Cajamarca", conductor: "Conductor 2" },
    { duracion: "2 horas", fecha: "2024-04-12", origen: "Lima", destino: "La Libertad", conductor: "Conductor 1" },
    { duracion: "1.5 horas", fecha: "2024-04-11", origen: "Lima", destino: "Ayacucho", conductor: "Conductor 2" }
];

function loadLastTrips() {
    var lastTrips = trips.slice(0, 4);
    var tripsList = document.getElementById("trips-list");

    tripsList.innerHTML = "";

    lastTrips.forEach(function(trip) {
        var listItem = document.createElement("li");
        listItem.textContent = `Fecha: ${trip.fecha}, Duración: ${trip.duracion}, Origen: ${trip.origen}, Destino: ${trip.destino}, Conductor: ${trip.conductor}`;
        tripsList.appendChild(listItem);
    });
}

function loadMoreTrips() {
    var tripsList = document.getElementById("trips-list");

    for (var i = 4; i < trips.length; i++) {
        var trip = trips[i];
        var listItem = document.createElement("li");
        listItem.textContent = `Fecha: ${trip.fecha}, Duración: ${trip.duracion}, Origen: ${trip.origen}, Destino: ${trip.destino}, Conductor: ${trip.conductor}`;
        tripsList.appendChild(listItem);
    }

    var loadMoreBtn = document.getElementById("load-more-btn");
    loadMoreBtn.style.display = "none";
}

function logout() {
    localStorage.removeItem("SESION");
    window.location.href = "usuario.html";
}

window.onload = function() {
    loadLastTrips();
};
