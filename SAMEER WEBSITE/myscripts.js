function onload(){document.body.classList.toggle('dark-mode',localStorage.getItem('darkmode') === 'true');}function myFunction() {const wasDarkmode = localStorage.getItem('darkmode') === 'true';localStorage.setItem('darkmode', !wasDarkmode);const element = document.body;element.classList.toggle('dark-mode', !wasDarkmode);}

