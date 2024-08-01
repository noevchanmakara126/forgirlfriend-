let title = document.querySelector("#title");
let description = document.querySelector("#des");
let click = document.querySelector("#click");
let main = document.querySelector("#main");
let picture = document.querySelector("#picture");
let back = document.querySelector("#background");
let kiminato = new Audio("./kiminato.mp3");
let flower = document.querySelector("#flower");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let text1 = document.querySelector("#text1");
click.innerHTML = "Click Here";
title.innerHTML = "For My Girl Reaksmey 😍🥰";
picture.src = "photo_2024-07-30_00-34-17.jpg";
description.innerHTML = "ចង់ប្រាប់ថាមានសង្សារសិស្សអាយធីគេSurprise ចឹងឯង";

click.addEventListener("click", () => {
  title.innerHTML = "Happy National Girlfreind Day😍🥰😻";
  picture.src = "Untitled design.gif";

  description.innerHTML =
    "បងជូនពរអោយស្នេហាយើងកាន់តែផ្អែម ដូចស្ករ ហើយអោយបានចូលរោងការជាមួយគ្នា I Love you Much😻 My Girl Ro ReakSmey❤️❤️";
  description.style.color = "red";
  back.style.backgroundColor = "transparent";
  kiminato.play();
  kiminato.loop = true;
  text1.innerHTML =
    " សូមអោយសង្សារបងកាន់តែស្អាត រៀនកាន់តែពូកែ ស្រលាញ់បងច្រើនៗ និងមានលុយច្រើនប៉ាវបងញ៉ាំអី😍💖😘 ";
  p1.src = "photo_2024-07-23_23-30-09.jpg";
  p2.src = "photo_2024-07-20_01-50-36.jpg";
});
