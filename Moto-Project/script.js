const toggleMenu = () => {
  const body = document.body;
  const openIcon = document.getElementById("open");
  const closeIcon = document.getElementById("close");

  if (body.classList.contains("open")) {
    // Ako je mobile-menu otvoren, zatvori ga
    body.classList.remove("open");

    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    // Ako je mobile-menu zatvoren, otvori ga
    body.classList.add("open");

    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
};

function validateForm() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;

  let fnameMessage = document.getElementById("fnameMessage");
  let lnameMessage = document.getElementById("lnameMessage");
  let emailMessage = document.getElementById("emailMessage");

  fnameMessage.innerText = "";
  lnameMessage.innerText = "";
  emailMessage.innerText = "";

  if (fname === "") {
    fnameMessage.innerText = "First Name is required";
    return false;
  }

  if (lname === "") {
    lnameMessage.innerText = "Last Name is required";
    return false;
  }

  if (email === "") {
    emailMessage.innerText = "E-mail is required";
    return false;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    emailMessage.innerText = "Please enter a valid email address";
    return false;
  }

  return true;
}


// popup
let currentImageIndex = 0;

function openPopup(element) {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popup-image");
  const image = element.querySelector("img");

  popupImage.src = image.src;
  popup.style.display = "flex";
  currentImageIndex = Array.from(document.querySelectorAll('.image-container')).indexOf(element);
}

function changeImage(offset) {
  // Promjena slike na sljedeću ili prethodnu
  currentImageIndex += offset;

  const totalImages = document.querySelectorAll('.image-container').length;
  if (currentImageIndex < 0) {
    currentImageIndex = totalImages - 1;
  } else if (currentImageIndex >= totalImages) {
    currentImageIndex = 0;
  }

  // Prikaz nove slike
  const newImageSrc = document.querySelectorAll('.image-container')[currentImageIndex].querySelector('img').src;
  document.getElementById('popup-image').src = newImageSrc;
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}