let display = document.getElementById("display");

/*

Fungsi untuk menambahkan nilai ke dalam tampilan kalkulator.
Jika nilai tampilan saat ini adalah "0", maka nilai tersebut akan dihapus sebelum menambahkan nilai baru.
@param {string} value - Nilai yang akan ditambahkan ke tampilan.
*/
function addToDisplay(value) {
  if (display.value === "0") {
    display.value = "";
  }
    display.value += value;
  }
  /*
  
  Fungsi untuk menghapus nilai di tampilan kalkulator.
  */
  function clearDisplay() {
    display.value = "";
  }
  /*
  
  Fungsi untuk menghapus karakter terakhir di tampilan kalkulator.
  */
  function backspace() {
    display.value = display.value.slice(0, -1);
  }
  /*
  
  Fungsi untuk mengubah nilai di tampilan kalkulator menjadi nilai yang berlawanan (negatif menjadi positif dan sebaliknya).
  */
  function negate() {
    display.value = display.value * -1;
  }
  /*
  
  Fungsi untuk menghitung nilai yang ada di tampilan kalkulator menggunakan fungsi eval() bawaan JavaScript.
  Jika terjadi kesalahan dalam perhitungan, maka akan ditampilkan pesan "Error" di tampilan.
  */
  function calculate() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error: " + error.message;
    }
  }
  
  
/*

Fungsi untuk mengganti mode tampilan menjadi mode terang atau mode gelap pada suatu kalkulator.

Jika body memiliki kelas CSS "light", maka kelas-kelas CSS yang terkait dengan mode terang akan dihapus,

dan sebaliknya jika tidak memiliki kelas "light", maka kelas-kelas CSS yang terkait dengan mode gelap akan ditambahkan.

Selain itu, kelas-kelas CSS untuk elemen-elemen seperti tombol, input, ikon, dan lainnya juga akan ditambahkan atau dihapus sesuai dengan mode yang dipilih.

Pada akhirnya, fungsi ini akan mencetak kelas-kelas CSS yang ada pada elemen body ke dalam konsol.
*/
function toggleLightMode() {
  if (document.body.classList.contains("light")) {
    // Hapus kelas CSS "light" dari body
    document.body.classList.remove("light");
    document.querySelector(".displayInput").classList.remove("light");
    document.querySelector(".calculator").classList.remove("light");
    document.querySelector(".btnBackground").classList.remove("light");
    document.querySelector(".toggleBtn").classList.remove("light");
    document.querySelector(".toggleBtn .fa-sun").classList.remove("light");
    document.querySelector(".toggleBtn .fa-moon").classList.remove("light");
    document.querySelector(".jam").classList.remove("light");
    document.querySelector(".utility").classList.remove("light");
    // Hapus kelas CSS "light" dari semua tombol
    document.querySelectorAll(".numBtn").forEach((item) => {
      item.classList.remove("light");
    });
    document.querySelectorAll(".cyanBtn").forEach((item) => {
      item.classList.remove("light");
    });
    document.querySelectorAll(".opBtn").forEach((item) => {
      item.classList.remove("light");
    });
  } else {
    // Tambahkan kelas CSS "light" ke body
    document.body.classList.add("light");
    document.querySelector(".displayInput").classList.add("light");
    document.querySelector(".calculator").classList.add("light");
    document.querySelector(".btnBackground").classList.add("light");
    document.querySelector(".toggleBtn").classList.add("light");
    document.querySelector(".fa-sun").classList.add("light");
    document.querySelector(".fa-moon").classList.add("light");
    document.querySelector(".jam").classList.add("light");
    document.querySelector(".utility").classList.add("light");
    // Tambahkan kelas CSS "light" ke semua tombol
    document.querySelectorAll(".numBtn").forEach((item) => {
      item.classList.add("light");
    });
    document.querySelectorAll(".cyanBtn").forEach((item) => {
      item.classList.add("light");
    });
    document.querySelectorAll(".opBtn").forEach((item) => {
      item.classList.add("light");
    });
  }
}
