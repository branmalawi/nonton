const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('browser tidak mendukung service worker');
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('service worker registered');
  } catch (error) {
    console.log('failed to registered service worker');
  }
};

export default swRegister;
