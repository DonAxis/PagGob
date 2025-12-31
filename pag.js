const puestos = [
    {
        imagen: "persona.png",
        puesto: "Secretaría de Seguridad Ciudadana de la CDMX",
        titular: "Comisario General Licenciado Pablo Vázquez Camacho",
        contacto: "pvazquez@ssc.cdmx.gob.mx",
        telefono: "55 5242 5100",
        direccion: "Calle Liverpool 136, Col. Juárez, C.P. 06600, Alcaldía Cuauhtémoc, CDMX"
    },
    {
        imagen: "persona.png",
        puesto: "Subsecretaría de Inteligencia e Investigación Policial",
        titular: "Comisario Jefe Hermenegildo Lugo Lara",
        contacto: "hlugo@ssc.cdmx.gob.mx",
        telefono: "55 5242 5100 ext. 5089, 5330 y 5358",
        direccion: "Calle Liverpool 136, Col. Juárez, C.P. 06600, Alcaldía Cuauhtémoc, CDMX"
    },
    {
        imagen: "persona.png",
        puesto: "Subsecretaría de Control de Tránsito",
        titular: "Comisario Cristian Raymundo Sumano Salazar",
        contacto: "—",
        telefono: "55 5242 5100 ext. 8217",
        direccion: "Av. Obrero Mundial y Cuauhtémoc, Col. Narvarte Poniente, C.P. 03020, Alcaldía Benito Juárez, CDMX"
    }
];// Función para pintar las tarjetas
const container = document.getElementById('directory-list');

function render() {
    container.innerHTML = puestos.map(p => `
        <div class="card">
            <img src="${p.imagen}">
            <div class="card-info">
                <h2>${p.puesto}</h2>
                <div class="info-row"><span class="label">Titular:</span><span>${p.titular}</span></div>
                <div class="info-row"><span class="label">Contacto:</span><span>${p.contacto}</span></div>
                <div class="info-row"><span class="label">Teléfono:</span><span>${p.telefono}</span></div>
                <div class="info-row"><span class="label">Dirección:</span><span>${p.direccion}</span></div>
            </div>
        </div>
    `).join('');
}

// Función para los alerts de "Próximamente"
function setupAlerts() {
    const btns = document.querySelectorAll('.alert-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Próximamente");
        });
    });
}

// Ejecutar todo al cargar
render();
setupAlerts();