const form = document.getElementById("employeeForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Getting values
  const employeeId = document.getElementById("employeeId").value.trim();
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const department = document.getElementById("department").value;
  const salary = document.getElementById("salary").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const profilePhoto = document.getElementById("profilePhoto").files[0];

  const resume = document.getElementById("resume").files[0];

  const terms = document.getElementById("terms").checked;

  // Error elements
  const employeeIdError = document.getElementById("employeeIdError");

  const nameError = document.getElementById("nameError");

  const emailError = document.getElementById("emailError");

  const mobileError = document.getElementById("mobileError");

  const departmentError = document.getElementById("departmentError");

  const salaryError = document.getElementById("salaryError");

  const passwordError = document.getElementById("passwordError");

  const confirmPasswordError = document.getElementById("confirmPasswordError");

  const photoError = document.getElementById("photoError");

  const resumeError = document.getElementById("resumeError");

  const termsError = document.getElementById("termsError");

  const successMessage = document.getElementById("successMessage");

  // Clear previous errors
  employeeIdError.textContent = "";
  nameError.textContent = "";
  emailError.textContent = "";
  mobileError.textContent = "";
  departmentError.textContent = "";
  salaryError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  photoError.textContent = "";
  resumeError.textContent = "";
  termsError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  // =========================
  // 1. Employee ID Validation
  // Format: EMP-1234
  // =========================

  const employeeIdRegex = /^EMP-\d{4}$/;

  if (employeeId === "") {
    employeeIdError.textContent = "Employee ID is required";

    isValid = false;
  } else if (!employeeIdRegex.test(employeeId)) {
    employeeIdError.textContent = "Use format: EMP-1234";

    isValid = false;
  }

  // =========================
  // 2. Name Validation
  // Minimum 3 characters
  // Starts with capital letter
  // =========================

  const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;

  if (!nameRegex.test(fullName)) {
    nameError.textContent =
      "Name must start with a capital letter and contain at least 3 characters";

    isValid = false;
  }

  // =========================
  // 3. Email Validation
  // =========================

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address";

    isValid = false;
  }

  // =========================
  // 4. Mobile Validation
  // Exactly 10 digits
  // =========================

  const mobileRegex = /^\d{10}$/;

  if (!mobileRegex.test(mobile)) {
    mobileError.textContent = "Mobile number must contain exactly 10 digits";

    isValid = false;
  }

  // =========================
  // 5. Department Validation
  // =========================

  if (department === "") {
    departmentError.textContent = "Please select a department";

    isValid = false;
  }

  // =========================
  // 6. Salary Validation
  // Positive number
  // =========================

  if (salary === "" || Number(salary) <= 0) {
    salaryError.textContent = "Salary must be a positive number";

    isValid = false;
  }

  // =========================
  // 7. Strong Password
  // At least 8 characters
  // Uppercase
  // Lowercase
  // Number
  // Special character
  // =========================

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!passwordRegex.test(password)) {
    passwordError.textContent =
      "Password must contain 8+ characters, uppercase, lowercase, number and special character";

    isValid = false;
  }

  // =========================
  // 8. Confirm Password
  // =========================

  if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match";

    isValid = false;
  }

  // =========================
  // 9. Profile Photo
  // JPG / PNG only
  // Maximum 2 MB
  // =========================

  if (!profilePhoto) {
    photoError.textContent = "Please upload a profile photo";

    isValid = false;
  } else {
    const allowedPhotoTypes = ["image/jpeg", "image/png"];

    if (!allowedPhotoTypes.includes(profilePhoto.type)) {
      photoError.textContent = "Only JPG or PNG files are allowed";

      isValid = false;
    }

    if (profilePhoto.size > 2 * 1024 * 1024) {
      photoError.textContent = "Photo size must not exceed 2 MB";

      isValid = false;
    }
  }

  // =========================
  // 10. Resume
  // PDF only
  // =========================

  if (!resume) {
    resumeError.textContent = "Please upload your resume";

    isValid = false;
  } else if (resume.type !== "application/pdf") {
    resumeError.textContent = "Only PDF files are allowed";

    isValid = false;
  }

  // =========================
  // 11. Terms & Conditions
  // =========================

  if (!terms) {
    termsError.textContent = "You must accept the Terms & Conditions";

    isValid = false;
  }

  // =========================
  // Final Result
  // =========================

  if (isValid) {
    successMessage.textContent = "Employee registered successfully!";

    form.reset();
  }
});
