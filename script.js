// Input Elements
const nameInput = document.getElementById("name");
const designationInput = document.getElementById("designation");
const companyInput = document.getElementById("company");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const websiteInput = document.getElementById("website");

const linkedinInput = document.getElementById("linkedin");
const githubInput = document.getElementById("github");
const instagramInput = document.getElementById("instagram");
const twitterInput = document.getElementById("twitter");

const imageUpload = document.getElementById("imageUpload");
const template = document.getElementById("template");

const card = document.getElementById("businessCard");

// Preview Elements
const previewName = document.getElementById("previewName");
const previewDesignation = document.getElementById("previewDesignation");
const previewCompany = document.getElementById("previewCompany");

const previewEmail = document.getElementById("previewEmail");
const previewPhone = document.getElementById("previewPhone");
const previewWebsite = document.getElementById("previewWebsite");

const previewImage = document.getElementById("previewImage");

const linkedinLink = document.getElementById("linkedinLink");
const githubLink = document.getElementById("githubLink");
const instagramLink = document.getElementById("instagramLink");
const twitterLink = document.getElementById("twitterLink");

// Live Update Function
function updateCard() {
  previewName.textContent = nameInput.value || "John Doe";
  previewDesignation.textContent =
    designationInput.value || "Software Engineer";
  previewCompany.textContent = companyInput.value || "ABC Pvt Ltd";

  previewEmail.textContent = emailInput.value || "example@email.com";
  previewPhone.textContent = phoneInput.value || "9876543210";
  previewWebsite.textContent = websiteInput.value || "website.com";

  linkedinLink.href = linkedinInput.value || "#";
  githubLink.href = githubInput.value || "#";
  instagramLink.href = instagramInput.value || "#";
  twitterLink.href = twitterInput.value || "#";
}

// Attach listeners
[
  nameInput,
  designationInput,
  companyInput,
  emailInput,
  phoneInput,
  websiteInput,
  linkedinInput,
  githubInput,
  instagramInput,
  twitterInput,
].forEach((input) => {
  input.addEventListener("input", updateCard);
});

// Image Upload
imageUpload.addEventListener("change", function () {
  const file = this.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    previewImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

// Template Switch
template.addEventListener("change", function () {
  card.className = "card";
  card.classList.add(this.value);
});

// Download PNG
document
  .getElementById("downloadPNG")
  .addEventListener("click", function () {
    html2canvas(card).then((canvas) => {
      const link = document.createElement("a");

      link.download = "BusinessCard.png";

      link.href = canvas.toDataURL();

      link.click();
    });
  });

// Download PDF
document
  .getElementById("downloadPDF")
  .addEventListener("click", function () {
    html2canvas(card).then((canvas) => {
      const img = canvas.toDataURL("image/png");

      const { jsPDF } = window.jspdf;

      const pdf = new jsPDF("p", "mm", "a4");

      const width = 170;
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(img, "PNG", 20, 20, width, height);

      pdf.save("BusinessCard.pdf");
    });
  });

// Initialize
updateCard();
