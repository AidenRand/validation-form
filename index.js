const form = document.getElementById('formContainer');
const submitBtn = document.querySelector('.submitBtn');

function validateEmail() {
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');

  form.addEventListener('submit', (e) => {
    if (!email.value.includes('@')) {
      emailError.textContent = 'Enter a valid email address';
      email.style.border = '2px solid brown';
      e.preventDefault();
    } else {
      emailError.textContent = '';
      email.style.border = '0px solid brown';
    }
  });
}
validateEmail();

function validateCountry() {
  const country = document.getElementById('country');
  const countryError = document.getElementById('countryError');

  form.addEventListener('submit', (e) => {
    if (country.value === '') {
      countryError.textContent = 'Enter valid country';
      country.style.border = '2px solid brown';
      e.preventDefault();
    } else if (country.value.length < 4) {
      countryError.textContent = 'The limit is 4';
      e.preventDefault();
    } else {
      countryError.textContent = '';
      country.style.border = '0px solid brown';
    }
  });
}
validateCountry();

function validateZipcode() {
  const zipcode = document.getElementById('zipcode');
  const zipcodeError = document.getElementById('zipcodeError');

  form.addEventListener('submit', (e) => {
    if (zipcode.value === '' || isNaN(zipcode.value)) {
      zipcodeError.textContent = 'Enter valid zipcode';
      zipcode.style.border = '2px solid brown';
      e.preventDefault();
    } else if (zipcode.value.length < 5) {
      zipcodeError.textContent = 'must be 5 digits';
      e.preventDefault();
    } else {
      zipcodeError.textContent = '';
      zipcode.style.border = '0px solid brown';
    }
  });
}
validateZipcode();

function validatePassword() {
  const password = document.getElementById('password');
  const passwordError = document.getElementById('passwordError');

  form.addEventListener('submit', (e) => {
    if (password.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters long';
      password.style.border = '2px solid brown';
      e.preventDefault();
    } else {
      passwordError.textContent = '';
      password.style.border = '0px solid brown';
    }
  });
}
validatePassword();

function validateConfirmPassword() {
  const confirmPassword = document.getElementById('confirmPassword');
  const confirmPasswordError = document.getElementById('confirmPasswordError');

  form.addEventListener('submit', (e) => {
    if (confirmPassword.value !== password.value || confirmPassword.value == '') {
      confirmPasswordError.textContent = 'passwords much match';
      confirmPassword.style.border = '2px solid brown';
      e.preventDefault();
    } else {
      confirmPasswordError.textContent = '';
      confirmPassword.style.border = '0px solid brown';
    }
  });
}
validateConfirmPassword();
