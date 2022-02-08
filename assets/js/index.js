// Сделать два инпута - для email и для password

// При потере фокуса инпутом валидировать его значение - если оно правильное, то сделать рамочку инпута зеленой, в противном случае - красной.
// Принцип валидации:
// 1. Email должен содержать '@' и '.' (Если можете проверить последовательность одного за другим - хоршо, если не можете - проверьте просто на содержание и того, и другого)
// 2. Пароль должен быть не меньше 5 символов и содежать что-либо из спец-символов:
// [`, !, @, #, $, %, ^, &, *, (, ]

const email = document.getElementById('email');
const password = document.getElementById('password');

email.addEventListener('blur', (event) => {
  const value = event.target.value;
  const isValid = value.includes('@') && value.includes('.');
  if (isValid) {
    event.target.style.borderColor = 'green';
  } else {
    event.target.style.borderColor = 'red';
  }
});
password.addEventListener('blur', (event) => {
  const specialChars = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '('];
  const value = event.target.value;
  const isValid = specialChars.some((char) => value.includes(char));
  if (isValid) {
    event.target.style.borderColor = 'green';
  } else {
    event.target.style.borderColor = 'red';
  }
});
