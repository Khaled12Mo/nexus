function showError(id, show) {
    const el = document.getElementById(id);
    if (!el) return;
    if (show) { el.classList.remove('hidden'); el.classList.add('flex'); }
    else       { el.classList.add('hidden');   el.classList.remove('flex'); }
  }

  function setInvalid(inputId, errorId, invalid) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (invalid) {
      input.classList.add('border-error', 'bg-error-container/10');
      input.classList.remove('border-white/10');
    } else {
      input.classList.remove('border-error', 'bg-error-container/10');
      input.classList.add('border-white/10');
    }
    showError(errorId, invalid);
  }

  // Real-time clear errors on input
  ['callsign','commlink','message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => setInvalid(id, id+'-err', false));
  });
  const cat = document.getElementById('category');
  if (cat) cat.addEventListener('change', () => setInvalid('category', 'category-err', false));

  const btn = document.getElementById('transmitBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      const callsign = document.getElementById('callsign')?.value?.trim();
      const commlink  = document.getElementById('commlink')?.value?.trim();
      const category  = document.getElementById('category')?.value;
      const message   = document.getElementById('message')?.value?.trim();

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let hasError = false;

      if (!callsign) { setInvalid('callsign', 'callsign-err', true); hasError = true; }
      else            { setInvalid('callsign', 'callsign-err', false); }

      if (!commlink) {
        document.getElementById('commlink-err-text').textContent = 'COMM LINK REQUIRED — SIGNAL LOST';
        setInvalid('commlink', 'commlink-err', true); hasError = true;
      } else if (!emailRegex.test(commlink)) {
        document.getElementById('commlink-err-text').textContent = 'INVALID FORMAT — USE: user@domain.com';
        setInvalid('commlink', 'commlink-err', true); hasError = true;
      } else {
        setInvalid('commlink', 'commlink-err', false);
      }

      if (!category) { setInvalid('category', 'category-err', true); hasError = true; }
      else            { setInvalid('category', 'category-err', false); }

      if (!message) { setInvalid('message', 'message-err', true); hasError = true; }
      else           { setInvalid('message', 'message-err', false); }

      if (hasError) return;

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
        ['callsign','commlink','category','message'].forEach(id => setInvalid(id, id+'-err', false));
        btn.innerHTML = 'TRANSMIT <span class="material-symbols-outlined text-[18px]">send</span>';
        btn.disabled = false;
      }, 2000);
    });
  }