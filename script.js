// Doctors data (replace with actual data)
const doctors = [
  {
    id: 1,
    name: "dr. Ariyundi Yunita",
    specialty: "Dokter Umum",
    schedule: [
      { day: "Senin", time: "09.00 s.d. 12:00 WIB" },
      { day: "Rabu", time: "14.00 s.d. 17.00 WIB" },
    ],
  },
  {
    id: 2,
    name: "dr. Avy Susanti",
    specialty: "Dokter Anak",
    schedule: [
      { day: "Selasa", time: "09.00 s.d. 12:00 WIB" },
      { day: "Kamis", time: "14.00 s.d. 17.00 WIB" },
    ],
  },
  {
    id: 3,
    name: "dr. Abdul Latief",
    specialty: "Bedah Dalam",
    schedule: [
      { day: "Senin", time: "14.00 s.d. 17.00 WIB" },
      { day: "Jumat", time: "09.00 s.d. 12:00 WIB" },
    ],
  },
]; 


// Generate doctors list on doctors.html page
document.addEventListener("DOMContentLoaded", function () {
  const doctorsList = document.getElementById("doctors-list");
  doctors.forEach((doctor) => {
    const doctorListItem = document.createElement("li");
    doctorListItem.textContent = `${doctor.name} - ${doctor.specialty}`;
    doctorsList.appendChild(doctorListItem);
    const scheduleList = document.createElement("ul");
    doctor.schedule.forEach((schedule) => {
      const scheduleListItem = document.createElement("li");
      scheduleListItem.textContent = `${schedule.day} - ${schedule.time}`;
      scheduleList.appendChild(scheduleListItem);
    });
    doctorListItem.appendChild(scheduleList);
  });
}); 


// Generate doctor options on book-appointment.html page
document.addEventListener("DOMContentLoaded", function () {
  const doctorSelect = document.getElementById("doctor");
  doctors.forEach((doctor) => {
    const doctorOption = document.createElement("option");
    doctorOption.value = doctor.id;
    doctorOption.textContent = doctor.name;
    doctorSelect.appendChild(doctorOption);
  });
}); 

// Handle book appointment form submission
document.getElementById("appointment-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const nama = formData.get("nama");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const alamat = formData.get("alamat");
  const service = formData.get("service");
  const doctorId = formData.get("doctor");
  const date = formData.get("date");
  const time = formData.get("time");
  const appointmentData = `Nama: ${nama}, Alamat: ${alamat}, Email: ${email}, No. HP: ${phone}, Layanan: ${service}, ID Dokter: ${doctorId}, Tanggal: ${date}, Waktu: ${time}\n`;
  // Store appointment data in a text file (using PHP)
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "store-appointment.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(`appointmentData=${appointmentData}`);
  alert("Pembuatan Janji Berhasil!");
});

