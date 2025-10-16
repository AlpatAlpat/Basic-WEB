const tombol = document.querySelectorAll(".filterbtn");
const gambar = document.querySelectorAll(".gambar");


// gunakan perulangan karena button bisa di klik

tombol.forEach((tombolsatu) => {
    tombolsatu.addEventListener("click", () => {

        tombol.forEach((btn) => btn.classList.remove("active"));
        tombolsatu.classList.add("active");

// #1 tambah class aktive pada button yang di klik
    tombolsatu.classList.add("active");
// #2 ambil data filter dari button yang di klik
    const filter = tombolsatu.getAttribute("data-filter");
// #3tampilkan gambar sesuai filter
    gambar.forEach((gambarsatu) => {
        if (filter === "All" || gambarsatu.classList.contains(filter)) {
            gambarsatu.style.display = "block";
        }else {
            gambarsatu.style.display = "none";
        }
    })



    });
});