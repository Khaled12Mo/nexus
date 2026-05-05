  const btn = document.getElementById('transmitBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      const callsign = document.getElementById('callsign')?.value?.trim();
      const commlink  = document.getElementById('commlink')?.value?.trim();
      const message   = document.getElementById('message')?.value?.trim();

      if (!callsign || !commlink || !message) {
        alert('⚠️ CRITICAL ERROR: Incomplete Data Packet. Please fill all fields.');
        return;
      }

      btn.innerHTML = 'TRANSMITTING... <span class="material-symbols-outlined text-[18px]">sync</span>';
      btn.disabled = true;

      setTimeout(() => {
        const ticketID = 'NX-' + Math.floor(Math.random() * 1000000);
        alert(`✅ TRANSMISSION SUCCESSFUL!\n\nTicket ID: ${ticketID}\nStatus: Encrypted & Queued for Sector 7.`);
        document.getElementById('callsign').value = '';
        document.getElementById('commlink').value  = '';
        document.getElementById('category').selectedIndex = 0;
        document.getElementById('message').value   = '';
        document.getElementById('urgent').checked  = false;
        btn.innerHTML = 'TRANSMIT <span class="material-symbols-outlined text-[18px]">send</span>';
        btn.disabled = false;
      }, 2000);
    });
  }