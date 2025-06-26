const musicCatalog = {
    singles: [
        {
            id: '1',
            title: 'OWA OWA',
            year: 2019,
            cover: './images/OWA OWA.jpeg',
            platforms: {
                spotify: 'https://open.spotify.com/track/1',
                apple: 'https://music.apple.com/us/album/ransom/1',
                youtube: 'https://youtube.com/watch?v=1'
            }
        },
        // Add more singles as needed
    ]
};

const renderSingles = () => {
    const singleList = document.getElementById('single-list');
    if (!singleList) return;
    singleList.innerHTML = ''; // Clear previous content if any
    musicCatalog.singles.forEach(single => {
        const singleCard = document.createElement('div');
        singleCard.className = 'music-card';
        singleCard.innerHTML = `
            <div class="artwork">
                <img src="${single.cover}" alt="${single.title}">
            </div>
            <div class="info">
                <h3>${single.title}</h3>
                <p>${single.year}</p>
                <div class="platforms">
                    <a href="${single.platforms.spotify}" target="_blank">Listen on Spotify</a>
                    <a href="${single.platforms.apple}" target="_blank">Listen on Apple Music</a>
                    <a href="${single.platforms.youtube}" target="_blank">Watch on YouTube</a>
                </div>
            </div>
        `;
        singleList.appendChild(singleCard);
    });
};

// Call the function to render singles on page load
document.addEventListener('DOMContentLoaded', renderSingles);
