const games = [
    {
        title: 'The Witcher 3: Wild Hunt',
        publisher: 'CD Projekt Red',
        genre: 'RPG',
        price: 39.99,
        tags: ['fantasy', 'open-world', 'story'],
        image: 'css/witcher-3.jpeg'
    },
    {
        title: 'Elden Ring',
        publisher: 'FromSoftware',
        genre: 'RPG',
        price: 59.99,
        tags: ['soulslike', 'exploration', 'challenging'],
        image: 'css/elden-ring.jpeg'
    },
    {
        title: 'Cyberpunk 2077',
        publisher: 'CD Projekt Red',
        genre: 'RPG',
        price: 49.99,
        tags: ['sci-fi', 'futuristic', 'story-driven'],
        image: 'css/cyberpunk.jpeg'
    },
    {
        title: 'Ghost of Tsushima',
        publisher: 'Sucker Punch',
        genre: 'RPG',
        price: 49.99,
        tags: ['samurai', 'historical', 'action'],
        image: 'css/ghost.jpeg'
    },
    {
        title: 'Assassin’s Creed Shadows',
        publisher: 'Ubisoft',
        genre: 'RPG',
        price: 69.99,
        tags: ['stealth', 'historical', 'adventure'],
        image: 'css/assassins-creed.jpeg'
    },
    {
        title: 'Crimson Desert',
        publisher: 'Pearl Abyss',
        genre: 'RPG',
        price: 59.99,
        tags: ['martial-arts', 'open-world', 'combat'],
        image: 'css/crimson.jpeg'
    },
    {
        title: 'Red Dead Redemption 2',
        publisher: 'Rockstar Games',
        genre: 'Action',
        price: 29.99,
        tags: ['western', 'open-world', 'story'],
        image: 'css/red.jpeg'
    },
    {
        title: 'The Last of Us: Part I',
        publisher: 'Naughty Dog',
        genre: 'Shooter',
        price: 39.99,
        tags: ['post-apocalyptic', 'survival', 'emotional'],
        image: 'css/last-of-us-part-1.jpeg'
    },
    {
        title: 'The Last of Us: Part II',
        publisher: 'Naughty Dog',
        genre: 'Shooter',
        price: 39.99,
        tags: ['action', 'story', 'survival'],
        image: 'css/last-of-us-part-2.jpeg'
    },
    {
        title: 'Resident Evil Requiem',
        publisher: 'Capcom',
        genre: 'Shooter',
        price: 59.99,
        tags: ['horror', 'zombies', 'co-op'],
        image: 'css/resident-evil-requiem.jpeg'
    },
    {
        title: 'Call of Duty: Modern Warfare 2– Remastered',
        publisher: 'Activision',
        genre: 'Shooter',
        price: 19.99,
        tags: ['military', 'multiplayer', 'campaign'],
        image: 'css/call-of-duty.jpeg'
    },
    {
        title: 'Battlefield 1',
        publisher: 'EA DICE',
        genre: 'Shooter',
        price: 39.99,
        tags: ['ww1', 'multiplayer', 'war'],
        image: 'css/battlefield-1.jpeg'
    },
    {
        title: 'Civilization VI',
        publisher: 'Firaxis Games',
        genre: 'Strategy',
        price: 29.99,
        tags: ['turn-based', 'civilization', 'historical'],
        image: 'css/civilization-vi.jpeg'
    },
    {
        title: 'Age of Empires IV',
        publisher: 'Microsoft',
        genre: 'Strategy',
        price: 49.99,
        tags: ['rts', 'historical', 'multiplayer'],
        image: 'css/age-of-empires-iv.jpeg'
    },
    {
        title: 'StarCraft II',
        publisher: 'Blizzard',
        genre: 'Strategy',
        price: 0,
        tags: ['rts', 'sci-fi', 'esports'],
        image: 'css/starcraft-2.jpeg'
    },
    {
        title: 'Total War: Warhammer III',
        publisher: 'Creative Assembly',
        genre: 'Strategy',
        price: 59.99,
        tags: ['fantasy', 'turn-based', 'war'],
        image: 'css/total-war-warhammer-3.jpeg'
    },
    {
        title: 'Stellaris',
        publisher: 'Paradox Interactive',
        genre: 'Strategy',
        price: 39.99,
        tags: ['space', '4x', 'grand-strategy'],
        image: 'css/st.jpeg'
    },
    {
        title: 'Frostpunk 2',
        publisher: '11 Bit Studios',
        genre: 'Strategy',
        price: 39.99,
        tags: ['survival', 'city-building', 'dystopian'],
        image: 'css/fp.jpeg'
    },
    {
        title: 'EA Sports FC 26',
        publisher: 'EA Sports',
        genre: 'Multiplayer',
        price: 69.99,
        tags: ['sports', 'football', 'online'],
        image: 'css/ea-sports-fc-26.jpeg'
    },
    {
        title: 'Counter-Strike 2',
        publisher: 'Valve',
        genre: 'Multiplayer',
        price: 0,
        tags: ['fps', 'competitive', 'team'],
        image: 'css/counter-strike-2.jpeg'
    },
    {
        title: 'Valorant',
        publisher: 'Riot Games',
        genre: 'Multiplayer',
        price: 0,
        tags: ['tactical', 'shooter', 'esports'],
        image: 'css/valorant.jpeg'
    },
    {
        title: 'PUBG: Battlegrounds',
        publisher: 'Krafton',
        genre: 'Multiplayer',
        price: 29.99,
        tags: ['battle-royale', 'survival', 'free-to-play'],
        image: 'css/pubg.jpeg '
    },
    {
        title: 'Rocket League',
        publisher: 'Psyonix',
        genre: 'Multiplayer',
        price: 19.99,
        tags: ['sports', 'cars', 'physics'],
        image: 'css/rocket-league.jpeg'
    },
    {
        title: 'ARC Raiders',
        publisher: 'Embark Studios',
        genre: 'Multiplayer',
        price: 0,
        tags: ['extraction', 'shooter', 'co-op'],
        image: 'css/arc-raiders.jpeg'
    }
];

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cardsGrid = document.getElementById('cardsGrid');
const genreButtons = document.querySelectorAll('.genre-buttons button');
const priceInputs = document.querySelectorAll('.price-form input[type="checkbox"]');

const selectedGenres = new Set();

function createCard(game) {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('div');
    image.className = 'card-image';

    if (game.image) {
        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.title;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        img.style.borderRadius = '18px';
        image.appendChild(img);
        image.style.padding = '0'; 
    } else {
        image.textContent = game.title;
    }

    const content = document.createElement('div');
    content.className = 'card-content';

    const title = document.createElement('h4');
    title.textContent = game.title;

    const publisher = document.createElement('p');
    publisher.textContent = game.publisher;

    const meta = document.createElement('div');
    meta.className = 'card-meta';

    const price = document.createElement('span');
    price.textContent = game.price === 0 ? 'Free' : `$${game.price.toFixed(2)}`;

    const genre = document.createElement('span');
    genre.textContent = game.genre;

    meta.append(price, genre);
    content.append(title, publisher, meta);
    card.append(image, content);

    return card;
}

function renderCards(list) {
    cardsGrid.innerHTML = '';

    if (list.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'no-results';
        empty.textContent = 'No games match your search and filter settings. Try a different keyword or filter combination.';
        cardsGrid.appendChild(empty);
        return;
    }

    list.forEach(game => cardsGrid.appendChild(createCard(game)));
}

function priceMatches(price, filter) {
    if (filter === 'free') return price === 0;
    if (filter === 'under20') return price > 0 && price <= 20;
    if (filter === 'over20') return price > 20;
    return true;
}

function applyFilters() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const activePrices = Array.from(priceInputs)
        .filter(input => input.checked)
        .map(input => input.value);

    const filtered = games.filter(game => {
        const searchable = [game.title, game.publisher, ...game.tags]
            .join(' ')
            .toLowerCase();

        const matchesSearch = searchTerm === '' || searchable.includes(searchTerm);
        const matchesGenre = selectedGenres.size === 0 || selectedGenres.has(game.genre);
        const matchesPrice = activePrices.length === 0 || activePrices.some(filter => priceMatches(game.price, filter));

        return matchesSearch && matchesGenre && matchesPrice;
    });

    renderCards(filtered);
}

genreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const genre = button.dataset.genre;

        if (selectedGenres.has(genre)) {
            selectedGenres.delete(genre);
            button.classList.remove('active');
        } else {
            selectedGenres.add(genre);
            button.classList.add('active');
        }
        
        applyFilters();
    });
});

priceInputs.forEach(input => input.addEventListener('change', applyFilters));
searchInput.addEventListener('input', applyFilters);
searchButton.addEventListener('click', applyFilters);

renderCards(games);
