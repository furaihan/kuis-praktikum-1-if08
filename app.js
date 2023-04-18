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
  
/**
 * toggleLightMode - A recursive function to toggle the "light" class on a list of elements.
 *
 * @param {number} index - The current index of the class to be processed in the classes array.
 *                        Defaults to 0.
 *
 * @returns {void}
 */  
function toggleLightMode(index = 0) {
  const classes = [
    ".body",
    ".displayInput",
    ".calculator",
    ".btnBackground",
    ".toggleBtn",
    ".toggleBtn .fa-sun",
    ".toggleBtn .fa-moon",
    ".jam",
    ".utility",
    ".numBtn",
    ".cyanBtn",
    ".opBtn"
  ];

  if (index === classes.length) {
    return; // Base case: exit when all classes have been processed
  }

  const elements = document.querySelectorAll(classes[index]);

  elements.forEach(element => {
    if (element.classList.contains("light")) {
      element.classList.remove("light");
    } else {
      element.classList.add("light");
    }
  });

  toggleLightMode(index + 1); // Recursive call to process next class
}


