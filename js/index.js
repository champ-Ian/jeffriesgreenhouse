// Get the modal and buttons
const triggerImage = document.getElementById("triggerImage");
const openPopupBtn = document.getElementById("openPopup");
const popupSection = document.getElementById("popupsection");
const backBtn = document.getElementById("backButton")

openPopupBtn.addEventListener("click", () => {
  popupSection.classList.add('show');
  document.body.style.overflow = 'hidden'; // Lock main page scroll
});
triggerImage.addEventListener("click", () => {
  popupSection.classList.add('show');
  document.body.style.overflow = 'hidden'; // Lock main page scroll
});
backBtn.addEventListener("click", () => {
  popupSection.classList.remove('show');
  document.body.style.overflow = ''; // Restore main page scroll
});



//Show More Button
const showMoreBtn = document.getElementById('showmorebutton');
const closeBtn = document.getElementById('closebutton');
const showMoreSection = document.getElementById('showmoresection');

showMoreBtn.addEventListener('click', () => {
  showMoreSection.classList.add('show');
  document.body.style.overflow = 'hidden'; // Lock main page scroll
});

closeBtn.addEventListener('click', () => {
  showMoreSection.classList.remove('show');
  document.body.style.overflow = ''; // Restore main page scroll
});
