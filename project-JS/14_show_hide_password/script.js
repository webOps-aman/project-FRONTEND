let eyeBtnState = false;

function showHidePassword() {
  const passwordInput = document.getElementById('passwordInput');
  const closeEyeIcon = document.querySelector('.close-eye');
  const openEyeIcon = document.querySelector('.open-eye');

  eyeBtnState = !eyeBtnState;

  if (eyeBtnState) {
    passwordInput.type = 'text'; 
    closeEyeIcon.style.display = 'none'; 
    openEyeIcon.style.display = 'inline'; 
    console.log('Password is now visible');
  } else {
    passwordInput.type = 'password'; 
    closeEyeIcon.style.display = 'inline'; 
    openEyeIcon.style.display = 'none';
    console.log('Password is now hidden');
  }
}
