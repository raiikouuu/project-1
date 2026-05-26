// Show/hide pages
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));

  // Show the target page
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.remove('hidden');
  }
}

// Step 1 validation (basic checks)
function validateStep1() {
  const name = document.getElementById("studentRegisterName")?.value;
  const studentNumber = document.getElementById("studentNumber")?.value;
  const yearLevel = document.getElementById("yearLevel")?.value;
  const department = document.getElementById("department")?.value;
  const course = document.getElementById("course")?.value;

  if (!name?.trim() || !studentNumber?.trim() || !yearLevel?.trim() || !department?.trim() || !course?.trim()) {
    alert("Please complete all fields.");
    return;
  }

  showPage("accountCreation2");
}

// Step 2 registration (frontend only)
function registerUser() {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("registerConfirmPassword").value;

  if (!email.endsWith("@rtu.edu.ph")) {
    alert("Only RTU institutional email allowed.");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Account created successfully!");
  showPage("accountSuccess");
}

document.addEventListener("DOMContentLoaded", () => {
  // Hide all pages first
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));

  // Show only the start page
  showPage("start");

  // Password toggle setup
  const toggleButtons = document.querySelectorAll(".toggle-password-btn");
  toggleButtons.forEach(button => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetInput = document.getElementById(targetId);
      if (targetInput) {
        targetInput.type = targetInput.type === "password" ? "text" : "password";
      }
    });
  });
});


// Demo login (optional)
function studentLogin() {
  const email = document.getElementById("studentEmail").value;
  const password = document.getElementById("studentPassword").value;

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Login successful!");
  showPage("studentHome");
}

function adminLogin() {
  const email = document.getElementById("adminEmail").value;
  const password = document.getElementById("adminPassword").value;

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Login successful!");
  showPage("adminHome");
}
