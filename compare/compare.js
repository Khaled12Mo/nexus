window.onload =function(){ if(localStorage.mode != null){
if (localStorage.mode === 'light'){
document.body.classList.add('light');
}else{
localStorage.setItem('mode','dark');
}
}};
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
const image = name => `./assist/images/${name}`;;

const games = [
  { id:  1, name: "Call of Duty: MW3",          genre: "FPS",            platform: "PC / PS5 / Xbox",      developer: "Sledgehammer Games",  year: 2023, rating: 7.8, price: 69.99, multiplayer: "Yes",  img: image("mw3.jpg")},
  { id:  2, name: "Celeste",                     genre: "Platformer",     platform: "PC / Switch / PS4",    developer: "Extremely OK Games",  year: 2018, rating: 9.3, price: 19.99, multiplayer: "No",   img: image("celeste.jpg")},
  { id:  3, name: "Civilization VI",             genre: "Strategy",       platform: "PC / Mac / iOS",       developer: "Firaxis Games",       year: 2016, rating: 8.8, price: 29.99, multiplayer: "Yes", img: image("civilization-6.jpg")},
  { id: 4, name: "Clair Obscur: Expedition 33", genre: "RPG",            platform: "PC / PS5 / Xbox",      developer: "Sandfall Interactive",year: 2025, rating: 9.0, price: 59.99, multiplayer: "No",   img: image("clair-obscur-33.jpg")},
  { id: 5, name: "Crimson Desert",              genre: "Action-Adventure",platform: "PC / PS5 / Xbox",      developer: "Pearl Abyss",         year: 2025, rating: 9.0, price: 69.99, multiplayer: "Yes",  img: image("crimson.jpg")},
  { id:  6, name: "Cyberpunk 2077",              genre: "RPG",            platform: "PC / PS5 / Xbox",      developer: "CD Projekt Red",      year: 2020, rating: 8.6, price: 39.99, multiplayer: "No",   img: image("cyberpunk-2077.jpg")},
  { id:  7, name: "Dead Cells",                  genre: "Roguelike",      platform: "PC / Switch / PS4",    developer: "Motion Twin",         year: 2018, rating: 8.9, price: 24.99, multiplayer: "No",  img: image("dead-cells.jpg")   },
  { id:  8, name: "Demon's Souls",               genre: "RPG",            platform: "PS5 Exclusive",        developer: "Bluepoint Games",     year: 2020, rating: 8.9, price: 69.99, multiplayer: "No",   img: image("ds.jpg")},
  { id:  9, name: "Elden Ring",                  genre: "RPG",            platform: "PC / PS5 / Xbox",      developer: "FromSoftware",        year: 2022, rating: 9.5, price: 59.99, multiplayer: "No",   img: image("elden-ring.jpg")  },
  { id:  10, name: "FIFA 24",                     genre: "Sports",         platform: "PC / PS5 / Xbox",      developer: "EA Sports",           year: 2023, rating: 7.2, price: 59.99, multiplayer: "Yes",  img: image("fifa-24.jpg")     },
  { id:  11, name: "Forza Horizon 5",             genre: "Racing",         platform: "Xbox / PC Exclusive",  developer: "Playground Games",    year: 2021, rating: 9.2, price: 59.99, multiplayer: "Yes", img: image("forza-horizon-5.jpg")  },
  { id: 12, name: "God of War Ragnarök",         genre: "Action",         platform: "PS4 / PS5 / PC",       developer: "Santa Monica Studio", year: 2022, rating: 9.4, price: 49.99, multiplayer: "No",   img: image("gow-ragnarok.jpg")},
  { id: 13, name: "GTA IV",                      genre: "Action",         platform: "PC / PS3 / Xbox",      developer: "Rockstar North",      year: 2008, rating: 9.0, price: 19.99, multiplayer: "Yes",  img: image("gta-4.jpg")  },
  { id: 14, name: "GTA V",                       genre: "Action",         platform: "PC / PS5 / Xbox",      developer: "Rockstar Games",      year: 2013, rating: 9.7, price: 29.99, multiplayer: "Yes",  img: image("gta-v.jpg")  },
  { id: 15, name: "GTA: San Andreas",            genre: "Action",         platform: "PC / PS4 / Xbox",      developer: "Rockstar Games",      year: 2004, rating: 9.4, price: 14.99, multiplayer: "No",  img: image("gtasa.jpg") },
  { id: 16, name: "GTA: Vice City",              genre: "Action",         platform: "PC / PS4 / Xbox",      developer: "Rockstar Games",      year: 2002, rating: 9.2, price: 14.99, multiplayer: "No",   img: image("gtavc.jpg")},
  { id: 17, name: "Hades",                       genre: "Roguelike",      platform: "PC / Switch / PS5",    developer: "Supergiant Games",    year: 2020, rating: 9.3, price: 24.99, multiplayer: "No",   img:image("hades.jpg")},
  { id: 18, name: "Halo Infinite",               genre: "FPS",            platform: "Xbox / PC Exclusive",  developer: "343 Industries",      year: 2021, rating: 8.2, price: 59.99, multiplayer: "Yes",  img:image("halo-infinite.jpg")},
  { id: 19, name: "Hollow Knight",               genre: "Adventure",      platform: "PC / Switch / PS4",    developer: "Team Cherry",         year: 2017, rating: 9.0, price: 14.99, multiplayer: "No",   img: image("hollow-knight.jpg")},
  { id: 20, name: "Hollow Knight: Silksong",     genre: "Adventure",      platform: "PC / Switch / PS5",    developer: "Team Cherry",         year: 2025, rating: 9.0, price: 14.99, multiplayer: "No",   img: image("hollow-knight-silksong.jpg")},
  { id: 21, name: "Mario Kart 8 Deluxe",         genre: "Racing",         platform: "Nintendo Exclusive",   developer: "Nintendo",            year: 2017, rating: 9.2, price: 59.99, multiplayer: "Yes",  img: image("mc8d.jpg") },
  { id: 22, name: "Ratchet & Clank: Rift Apart", genre: "Action",         platform: "PS5 Exclusive",        developer: "Insomniac Games",     year: 2021, rating: 9.0, price: 69.99, multiplayer: "No",   img: image("ratchet-clank.jpg")           },
  { id: 23, name: "Red Dead Redemption 2",       genre: "Action-Adventure",platform: "PC / PS4 / Xbox",   developer: "Rockstar Games",      year: 2018, rating: 9.7, price: 59.99, multiplayer: "Yes",  img: image("rdr2.jpg")        },
  { id: 24, name: "Resident Evil 2 Remake",      genre: "Survival Horror",platform: "PC / PS4 / Xbox",      developer: "Capcom",              year: 2019, rating: 9.1, price: 39.99, multiplayer: "No",   img:   image("re2-remake.jpg")},
  { id: 25, name: "Resident Evil 4 Remake",      genre: "Survival Horror",platform: "PC / PS5 / Xbox",      developer: "Capcom",              year: 2023, rating: 9.3, price: 59.99, multiplayer: "No",   img: image("re4-remake.jpg")  },
  { id: 26, name: "Resident Evil 7",             genre: "Survival Horror",platform: "PC / PS4 / Xbox",      developer: "Capcom",              year: 2017, rating: 8.5, price: 29.99, multiplayer: "No",   img: image("re7.jpg")            },
  { id: 27, name: "Resident Evil 9: Requiem",    genre: "Survival Horror",platform: "PC / PS5 / Xbox",      developer: "Capcom",              year: 2025, rating: 9.0, price: 69.99, multiplayer: "No",   img: image("re9.jpg")                       },
  { id: 28, name: "Resident Evil Village",       genre: "Survival Horror",platform: "PC / PS5 / Xbox",      developer: "Capcom",              year: 2021, rating: 8.8, price: 39.99, multiplayer: "No",  img:image("re-village.jpg")},
  { id: 29, name: "Returnal",                    genre: "Action",         platform: "PS5 / PC",             developer: "Housemarque",         year: 2021, rating: 8.7, price: 59.99, multiplayer: "No",   img: image("returnal.jpg")     },
  { id: 30, name: "Spider-Man 2",                genre: "Action",         platform: "PS5 Exclusive",        developer: "Insomniac Games",     year: 2023, rating: 9.2, price: 69.99, multiplayer: "No",  img: image("spiderman2.jpg")},
  { id: 31, name: "Stardew Valley",              genre: "Simulation",     platform: "PC / Switch / PS4",    developer: "ConcernedApe",        year: 2016, rating: 9.5, price: 14.99, multiplayer: "Yes",  img:image("stardew-valley.jpg")},
  { id: 32, name: "Starfield",                   genre: "RPG",            platform: "Xbox / PC Exclusive",  developer: "Bethesda",            year: 2023, rating: 7.9, price: 69.99, multiplayer: "No",   img: image("starfield.jpg")},
  { id: 33, name: "Super Mario Odyssey",         genre: "Adventure",      platform: "Nintendo Exclusive",   developer: "Nintendo",            year: 2017, rating: 9.7, price: 59.99, multiplayer: "No",   img: image("mario-odyssey.jpg")},
  { id: 34, name: "Terraria",                    genre: "Sandbox",        platform: "PC / Switch / Mobile", developer: "Re-Logic",            year: 2011, rating: 9.0, price: 9.99,  multiplayer: "Yes",  img: image("terraria.jpg")},
  { id: 35, name: "The Last of Us Part II",      genre: "Action",         platform: "PS4 / PS5 / PC",       developer: "Naughty Dog",         year: 2020, rating: 9.2, price: 49.99, multiplayer: "No",   img: image("tlou2.jpg")       },
  { id: 36, name: "Zelda: Tears of the Kingdom", genre: "Adventure",      platform: "Nintendo Exclusive",   developer: "Nintendo",            year: 2023, rating: 9.8, price: 69.99, multiplayer: "No",  img: image("zelda.jpg")  },
];
const content = document.getElementById('containt');
const sidebar = document.getElementById('sidebar');
const body = document.body;
const comptable = document.getElementById('comptable');
const search = document.getElementById('search');
const select = document.getElementsByTagName('select');
function selectcontent(gamesArray) {
  for(i = 0; i < gamesArray.length; i++){
    for(j = 0; j < select.length; j++){
      select[j].innerHTML += `<option value="${gamesArray[i].name}">${gamesArray[i].name}</option>`;
    }
  }
};
selectcontent(games);

function table_inject()
{
   let images = ``;let names =``; let genres = ``; let platforms = ``; let developers = ``; let years = ``; let ratingrs = ``; let prices = ``; let multiplayers = `` ;let libs = `` ;comptable.innerHTML = ``;; 
  if(table_arr.length >= 2){
    comptable.style.display = "flex";
  for(let i = 0; i < table_arr.length; i++){
   
    images+= `<td><img src="${table_arr[i].img}" alt="${table_arr[i].name}"></td>`;
    names+= `<td>${table_arr[i].name}</td>`;
    genres+= `<td>${table_arr[i].genre}</td>`;
    platforms+= `<td>${table_arr[i].platform}</td>`;
    developers+= `<td>${table_arr[i].developer}</td>`;
    years+= `<td>${table_arr[i].year}</td>`;
    ratingrs+= `<td>${table_arr[i].rating}</td>`;
    prices+= `<td>$${table_arr[i].price}</td>`;
    multiplayers+= `<td>${table_arr[i].multiplayer }</td>`   ;
    
   
  }
comptable.innerHTML += `
    <tr><td class="row-title">Images</td>${images}</tr>
    <tr><td class="row-title">Name</td>${names}</tr>
    <tr><td class="row-title">Genre</td>${genres}</tr>
    <tr><td class="row-title">Platform</td>${platforms}</tr>
    <tr><td class="row-title">Developer</td>${developers}</tr>
    <tr><td class="row-title">Year</td>${years}</tr>
    <tr><td class="row-title">Rating</td>${ratingrs}</tr>
    <tr><td class="row-title">Price</td>${prices}</tr>
    <tr><td class="row-title">Multiplayer</td>${multiplayers}</tr>

`;
}else{
  comptable.style.display = "none";
}
};



function fullsize(){
  sidebar.classList.toggle('hidden');
  content.classList.toggle('full');
};
function light(){
if (localStorage.mode === 'light'){
  body.classList.remove('light');
  localStorage.setItem('mode','dark');
}
else{
  body.classList.add('light');
  localStorage.setItem('mode','light');}
};


function filtergames(){
if (search.value != ""){
const filterd = games.filter(game => game.name.toLowerCase().includes(search.value.toLowerCase()));
for(j = 0; j < select.length; j++){
  if(select[j].value == "")
{ select[j].innerHTML = `<option value="">Select a game</option>`;
}else{
  
  select[j].innerHTML = `<option value="${select[j].value}">${select[j].value}</option>`;
}
    }
selectcontent(filterd);

}else{
  selectcontent(games);
}
};
const selset = new Set();
let table_arr = [] ;
function addtoset(){
  selset.clear();
  table_arr = [];
  

for(i = 0; i < select.length; i++){
 if(select[i].value != ""){
  selset.add(select[i].value);

}

}

for(let sel of selset){
  for(let j = 0; j < games.length; j++){
    if(games[j].name.toLowerCase().includes(sel.toLowerCase())){
      table_arr.push(games[j]);

    }
}
}

 table_inject(); 
} ;



