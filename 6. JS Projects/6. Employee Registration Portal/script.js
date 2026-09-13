const form = document.getElementById("employeeForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //Getting Elements
  const empId = document.getElementById("empId").value.trim();
  const fname = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();

  const department = document.getElementById("department").value;
  const designation = document.getElementById("designation").value.trim();
  const doj = document.getElementById("doj").value;
  const salary = document.getElementById("salary").value;

  const password = document.getElementById("pass").value.trim();
  const confirmPass = document.getElementById("confirmPass").value.trim();

  const profile = document.getElementById("profile").files[0];
  const resume = document.getElementById("resume").files[0];

  const terms = document.getElementById("terms").checked;
  const success = document.getElementById("success");

  //Error Values
  const empIdError = document.getElementById("empIdError");
  const fnameError = document.getElementById("fnameError");
  const emailError = document.getElementById("emailError");
  const mobileError = document.getElementById("mobileError");

  const deptError = document.getElementById("deptError");
  const designationError = document.getElementById("designationError");
  const dojError = document.getElementById("dojError");
  const salaryError = document.getElementById("salaryError");

  const passError = document.getElementById("passError");
  const confirmPassError = document.getElementById("confirmPassError");

  const profileError = document.getElementById("profileError");
  const resumeError = document.getElementById("resumeError");

  const termsError = document.getElementById("termsError");

  //clear previous errors
  empIdError.textContent = "";
  fnameError.textContent = "";
  emailError.textContent = "";
  mobileError.textContent = "";
  deptError.textContent = "";
  designationError.textContent = "";
  dojError.textContent = "";
  salaryError.textContent = "";
  passError.textContent = "";
  confirmPassError.textContent = "";
  profileError.textContent = "";
  resumeError.textContent = "";
  termsError.textContent = "";
  success.textContent = "";

  let isValid = true;

  //1.Employee ID
  const EmpIDRegex = /^EMP-\d{4}$/;
  if (empId === "") {
    empIdError.textContent = "Employee ID is required";
    isValid = false;
  } else if (!EmpIDRegex.test(empId)) {
    empIdError.textContent = "Use format: EMP-1234";
    isValid = false;
  }

  //2.Full Name
  const fnameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;
  if (fname === "") {
    fnameError.textContent = "Name is Required";
    isValid = false;
  } else if (!fnameRegex.test(fname)) {
    fnameError.textContent =
      "Name must start with a capital letter and contain at least 3 characters";
    isValid = false;
  }

  //3.Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "E-mail is Required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address ";
    isValid = false;
  }

  //4.Mobile Number
  const mobileRegex = /^\d{10}$/;
  if (mobile === "") {
    mobileError.textContent = "Mobile Number is Required";
    isValid = false;
  } else if (!mobileRegex.test(mobile)) {
    mobileError.textContent = "Mobile number must contain exactly 10 digits ";
    isValid = false;
  }

  //5.Department
  if (department === "") {
    deptError.textContent = "Please select a department";
    isValid = false;
  }

  //6.Designation
  if (designation === "") {
    designationError.textContent = "Designation is required ";
    isValid = false;
  }

  //7.Date of Joining
  if (doj === "") {
    dojError.textContent = "Please Enter a Date";
    isValid = false;
  }

  //8.Salary
  if (salary === "") {
    salaryError.textContent = "Enter Salary";
    isValid = false;
  } else if (Number(salary) <= 0) {
    salaryError.textContent = "Enter a valid Salary Amount";
    isValid = false;
  }

  //9.Password
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!passwordRegex.test(password)) {
    passError.textContent =
      "Password must contain 8+ characters, uppercase, lowercase, number and special character";
    isValid = false;
  }

  // 10. Confirm Password
  if (confirmPass !== password) {
    confirmPassError.textContent = "Passwords do not match";
    isValid = false;
  }

  //11.Profile
  if (!profile) {
    profileError.textContent = "Please upload a profile photo";
    isValid = false;
  } else {
    const allowedProfile = ["image/jpeg", "image/png"];
    if (!allowedProfile.includes(profile.type)) {
      profileError.textContent = "Only JPG or PNG files are allowed";
      isValid = false;
    }
    if (profile.size > 2 * 1024 * 1024) {
      profileError.textContent = "Photo size must not exceed 2 MB";
      isValid = false;
    }
  }

  //12. Resume
  if (!resume) {
    resumeError.textContent = "Please upload your resume";
    isValid = false;
  } else if (resume.type !== "application/pdf") {
    resumeError.textContent = "Only PDF files are allowed";
    isValid = false;
  }

  //13. Terms and Conditions
  if (!terms) {
    termsError.textContent = "You must accept the Terms & Conditions";
    isValid = false;
  }

  //Success
  if (isValid) {
    success.textContent = "Employee registered successfully!";
    success.style.display = "block";
    form.reset();
  }
});
