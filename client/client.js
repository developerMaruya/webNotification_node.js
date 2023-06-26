const publicVapidKey = "BC2fDFNkRaVbdnplbDy5Q-oPh70eOFg7VWyL_yHrf9GT8B603d0MTd0hpxobxFu8gfzEACIBI-yUmrzENZy9Yac";

// const publicVapidKey = 'YOUR_PUBLIC_VAPID_KEY'; // Replace with your public VAPID key

if ('serviceWorker' in navigator) {
  send().catch(console.error);
}

async function send() {
  console.log('Registering service worker...');
  const registration = await navigator.serviceWorker.register('./worker.js', {
    scope: '/'
  });
  console.log('Service worker registered.');

  console.log('Registering push...');
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  console.log('Push registered.');

  console.log('Sending push...');
  const senderId = '517740023622';
const serverKey = 'AAAAeIu1z0Y:APA91bGb6yJGJ6xbbgIJNxm3wWuoJ2X2Nk04wnSrfPKy-UanPV7Om4obLtJYctfxUjoU6RY2vdnfe_PHDQsrK7XDRscxFLswCG4e239MW_3PPMyL2RxSCynJ5zpfzpe2wypuM7upKT5M';
const endpoint = 'https://fcm.googleapis.com/fcm/send/fj9i4U7c39c:APA91bHZuyAhAskemccJFtp5Q-5n9H5XkmSPpOoVkDz6XIwJJxZN31WqUSN-56rGmej3lsHF991gAkQyPzxNxbKnkCO3WBmZjbmMDqMCwrzhsuTPM_MRE8H-bdhtnVn_p86992WHt4CE';
  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      "Content-Type": "application/json",
      'Sender-ID': senderId,
      'Authorization': 'key=AAAAeIu1z0Y:APA91bGb6yJGJ6xbbgIJNxm3wWuoJ2X2Nk04wnSrfPKy-UanPV7Om4obLtJYctfxUjoU6RY2vdnfe_PHDQsrK7XDRscxFLswCG4e239MW_3PPMyL2RxSCynJ5zpfzpe2wypuM7upKT5M'
    }
  });
  console.log('Push sent.');
}

function urlBase64ToUint8Array(base64String) {
    console.log("enter in urlbase64...function")
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}
