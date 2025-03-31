document.getElementById('LoginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;
  
  if(username && password === ''){
    Swal.fire({
      icon: 'error',
      title: 'Field in the blanks!'
    })
  }
})