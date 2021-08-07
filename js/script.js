const HOURS = document.querySelector(".jam");
const MINUTE = document.querySelector(".menit");

const waktuSekarang = function () {
  const date = new Date();
  let jam = 11;
  const menit = date.getMinutes();

  setTimeout(() => {
    if (jam >= 12) {
      jam -= 12;
      HOURS.textContent = `${jam} `;
      MINUTE.textContent = `${menit}`;
    } else {
      HOURS.textContent = `${jam} `;
      MINUTE.textContent = `${menit}`;
    }

    const colon = document.querySelector(".colon");
    colon.classList.toggle("kedip");

    waktuSekarang();
  }, 1000);
};

waktuSekarang();
