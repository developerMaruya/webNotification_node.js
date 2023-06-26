console.log('Service worker loaded...');

self.addEventListener('push', function(event) {
  const data = event.data.json();
  console.log('Push received:', data);

  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon
  });
});
