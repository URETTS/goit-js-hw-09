const formData = {
  email: "",
  message: "",
};

document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem("feedback-form-state");

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    
    document.querySelector('[name="email"]').value = formData.email;
    document.querySelector('[name="message"]').value = formData.message;
  }
});

// Відстежуємо введення користувача у форму через делегування
document.querySelector(".feedback-form").addEventListener("input", (event) => {
  const { name, value } = event.target;

  if (name === "email" || name === "message") {
    formData[name] = value.trim();

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }
});

document.querySelector(".feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

 
  localStorage.removeItem("feedback-form-state");
  formData.email = "";
  formData.message = "";
  document.querySelector('[name="email"]').value = "";
  document.querySelector('[name="message"]').value = "";
});
