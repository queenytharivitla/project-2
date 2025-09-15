document.getElementById('staffLoginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Staff login successful! Redirecting to dashboard...");
  window.location.href = "queue.html"; // or use "staff-dashboard.html" if different
});
