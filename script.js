var check = function() {
  if (document.getElementById('password').value ==
    document.getElementById('passConfirm').value) {
    document.getElementById('match').innerHTML = '';
    document.getElementById('password').classList = "";
    document.getElementById('passConfirm').classList = "";
  } else {
    document.getElementById('match').innerHTML = '*Passwords do not match';
    document.getElementById('password').classList = "invalid";
    document.getElementById('passConfirm').classList = "invalid";
  }
}