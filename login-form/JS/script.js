document.getElementById('passwordTypeChanger').addEventListener('click', function () {
   let passwordInput = document.getElementById('sign_in_password');
   if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
   } else {
      passwordInput.type = 'password';
   }
});
