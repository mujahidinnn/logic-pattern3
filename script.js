/* Saat pengguna mengklik tombol,
beralih antara menyembunyikan dan menampilkan konten dropdown*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Tutup menu dropdown jika pengguna mengeklik di luarnya
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
