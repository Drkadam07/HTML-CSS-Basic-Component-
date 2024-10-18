function addDevice() {
  const deviceNameInput = document.getElementById('deviceName');
  const deviceName = deviceNameInput.value.trim();

  if (deviceName !== '') {
    const deviceList = document.getElementById('device-list');
    const deviceItem = document.createElement('li');
    deviceItem.classList.add('device');
    deviceItem.innerHTML = `
      <span>${deviceName}</span>
      <button onclick="removeDevice(this)">Remove</button>
    `;
    deviceList.appendChild(deviceItem);
    deviceNameInput.value = '';
  }
}

function removeDevice(button) {
  const deviceItem = button.parentNode;
  deviceItem.remove();
}
