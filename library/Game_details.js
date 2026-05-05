
function changeMain(element) {
    var allThumbs = document.querySelectorAll('.photo > *');
    allThumbs.forEach(function(item) {
        item.classList.remove('active-slide');
    });
    element.classList.add('active-slide');
    var mainBox = document.querySelector('.gallary .main');
    mainBox.innerHTML = '';
    if (element.tagName === 'VIDEO') {
       
        var newVideo = document.createElement('video');
        newVideo.src = element.src;          
        newVideo.loop = true;
        newVideo.autoplay = true;             
        newVideo.muted = true;                
        newVideo.controls = true;             
        newVideo.classList.add('main-slide');
        mainBox.appendChild(newVideo);        
    } else {
       
        var newImg = document.createElement('img');
        newImg.src = element.src;
        newImg.classList.add('main-slide');
        mainBox.appendChild(newImg);
    }
}

window.addEventListener('DOMContentLoaded', function() {
    var firstThumb = document.querySelector('.photo > *:first-child');
    if (firstThumb) {
        changeMain(firstThumb);
    }
});

// تبديل الثيم 

function toggleTheme() {
    var body = document.body;
    var icon = document.getElementById('theme-icon');

   
    body.classList.toggle('light');

    if (body.classList.contains('light')) {
       
        localStorage.setItem('theme', 'light');
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
    } else {
        
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
    }
}


window.addEventListener('DOMContentLoaded', function() {
    var savedTheme = localStorage.getItem('theme');
    var body = document.body;
    var icon = document.getElementById('theme-icon');

    if (savedTheme === 'light') {
        body.classList.add('light');
        if (icon) {
            icon.classList.remove('bi-moon-fill');
            icon.classList.add('bi-sun-fill');
        }
    } else {
      
        body.classList.remove('light');
        if (icon) {
            icon.classList.remove('bi-sun-fill');
            icon.classList.add('bi-moon-fill');
        }
    }

   
    var firstThumb = document.querySelector('.photo > *:first-child');
    if (firstThumb) {
        changeMain(firstThumb);
    }
});

function getGameIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}


function loadGameDetails() {
    const gameId = getGameIdFromURL();
    
    if (!gameId) {
        
        return;
    }

    const game = games.find(g => g.id === gameId);
    if (!game) {
        alert('Game not found');
        return;
    }


    document.getElementById('game-main-image').src = game.mainImage;
    document.getElementById('game-title').textContent = game.title;
    document.getElementById('game-rating').textContent = game.rating;
    document.getElementById('game-release').textContent = game.releaseDate;
    document.getElementById('game-studio').textContent = game.studio;
    document.querySelector('.price').textContent = game.price;

    
    document.querySelector('.about-content p').innerHTML = game.about;

   
    const mainBox = document.querySelector('.gallary .main');
    mainBox.innerHTML = '';
    const firstMedia = game.screenshots[0];
    const img = document.createElement('img');
    img.src = firstMedia;
    img.className = 'main-slide';
    mainBox.appendChild(img);

   
    const thumbDiv = document.querySelector('.gallary .photo');
    thumbDiv.innerHTML = '';
    
    if (game.trailer) {
        const videoThumb = document.createElement('video');
        videoThumb.src = game.trailer;
        videoThumb.muted = true;
        videoThumb.setAttribute('onclick', 'changeMain(this)');
        thumbDiv.appendChild(videoThumb);
    }
  
    game.screenshots.forEach(src => {
        const imgThumb = document.createElement('img');
        imgThumb.src = src;
        imgThumb.setAttribute('onclick', 'changeMain(this)');
        thumbDiv.appendChild(imgThumb);
    });
    
    if (thumbDiv.firstChild) {
        thumbDiv.firstChild.classList.add('active-slide');
    }

    
    const reqDiv = document.querySelector('.req-list');
    reqDiv.innerHTML = `
        <div class="req-item"><span class="req-label">OS</span><p class="req-value">${game.systemRequirements.os}</p></div>
        <div class="req-item"><span class="req-label">PROCESSOR</span><p class="req-value">${game.systemRequirements.processor}</p></div>
        <div class="req-item"><span class="req-label">MEMORY</span><p class="req-value">${game.systemRequirements.memory}</p></div>
        <div class="req-item"><span class="req-label">GRAPHICS</span><p class="req-value">${game.systemRequirements.graphics}</p></div>
        <div class="req-item"><span class="req-label">STORAGE</span><p class="req-value">${game.systemRequirements.storage}</p></div>
    `;

   
    document.querySelector('.stat-value').textContent = game.stats.avgPlaytime; // الأول
    document.querySelectorAll('.stat-value')[1].textContent = game.stats.achievements; // الثاني
    document.querySelector('.player-count').textContent = game.stats.currentPlayers;
}


window.addEventListener('DOMContentLoaded', function() {
    loadGameDetails();
    
    var firstThumb = document.querySelector('.photo > *:first-child');
    if (firstThumb) {
        changeMain(firstThumb);
    }
});