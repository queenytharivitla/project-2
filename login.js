document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Login successful! Redirecting...");
  window.location.href = "queue.html"; // redirect to queue page
});
