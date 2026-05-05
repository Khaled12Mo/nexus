function generateGameItems() {
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';
    
    games.forEach(game => {
        const item = document.createElement('div');
        item.className = `item ${getCategoryClass(game)}`;
        item.innerHTML = `
            <img src="${game.mainImage}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        item.style.cursor = 'pointer';
        item.onclick = function() {
            window.location.href = `game-details.html?id=${game.id}`;
        };
        grid.appendChild(item);
    });
}

function getCategoryClass(game) {
    // Map games to their categories based on genre
    const categories = {
        'witcher3': 'rpg',
        'eldenring': 'rpg',
        'cyberpunk': 'rpg',
        'ghostoftsushima': 'rpg',
        'acshadows': 'rpg',
        'crimsondesert': 'rpg',
        'rdr2': 'shooter',
        'tlou1': 'shooter',
        'tlou2': 'shooter',
        're4r': 'shooter',
        'codmw2': 'shooter',
        'battlefield1': 'shooter',
        'civ6': 'strategy',
        'aoe4': 'strategy',
        'starcraft2': 'strategy',
        'totalwar3': 'strategy',
        'stellaris': 'strategy'
    };
    return categories[game.id] || 'all';
}

// Initialize game items when page loads
window.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.grid')) {
        generateGameItems();
    }
});

function search(){
    var input = document.getElementById("find");
    var word = input.value.toUpperCase();
    var all = document.getElementsByClassName("item");

    for(var i=0; i<all.length; i++){
        var h3 = all[i].getElementsByTagName("h3")[0];
        if(h3.innerHTML.toUpperCase().indexOf(word) > -1){
            all[i].style.display = "inline-block";
        }else{
            all[i].style.display = "none";
        }
    }
}

function filt(t){
    var all = document.getElementsByClassName("item");

    for(var i=0; i<all.length; i++){
        if(t == "all"){
            all[i].style.display = "inline-block";
        }else{
            if(all[i].classList.contains(t)){
                all[i].style.display = "inline-block";
            }else{
                all[i].style.display = "none";
            }
        }
    }
}
