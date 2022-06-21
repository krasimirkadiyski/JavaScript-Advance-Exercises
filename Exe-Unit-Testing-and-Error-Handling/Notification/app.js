function notify(message) {
  let notificationDiv = document.getElementById('notification');
  notificationDiv.addEventListener('click', hide);
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block'
 function hide (e) {
  e.currentTarget.style.display = 'none';
 };
}