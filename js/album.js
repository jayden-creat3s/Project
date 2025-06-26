const musicCatalog = {
    albums: [
        {
            id: '1',
            title: 'Dopamine',
            year: 2025,
            cover: './images/WhatsApp Image 2025-06-26 at 05.00.54.jpeg',
            tracks: 17,
            platforms: {
                spotify: 'https://open.spotify.com/album/0CLqdKIh14TmKqLZCs9dml?si=lGIOCLKmT_KqRSariwsVQA',
                apple: 'https://music.apple.com/us/album/dopamine/1819101379',
                youtube: 'https://youtube.com/playlist?list=OLAK5uy_kg13ASK8_JW6H5Dakpa03exHhpTKuPggA&si=_6Jl8QrMUYXAnu7m'
            }
        },
        {
            id: '2',
            title: 'Plan A',
            year: 2024,
            cover: './images/Plan A.jpeg',
            tracks: 18,
            platforms: {
                spotify: 'https://open.spotify.com/album/6uWva3kfeqqVIsNAJ2MmeL?si=Zg8SSCt3TB-IAF1uKvn8qg',
                apple: 'https://music.apple.com/us/album/plan-a/1767063070',
                youtube: 'https://youtube.com/playlist?list=OLAK5uy_kpjyvWs2f2dU2YR_LfYNNjRXxP_n8fc2o&si=6ADDuvOAQuDXRFgZ'
            }
        },
        {
            id: '3',
            title: 'TEC (Bonus)',
            year: 2024,
            cover: './images/a8a6344b-940a-479c-829f-200d326befd4.jpeg',
            tracks: 17,
            platforms: {
                spotify: 'https://open.spotify.com/album/0pVQ3KO4jjqdeWJUrrkkWp?si=OPPuu6UrQgS390Glp-A7ZQ',
                apple: 'https://music.apple.com/us/album/tec-bonus/1726099730',
                youtube: 'https://youtube.com/playlist?list=OLAK5uy_krsSDWLBi-9WBftrJ_4TnomcBug8al8rQ&si=32-vFgkXCtzuNlhA'
            }
        },
        {
          id: '4',
          title: 'TEC',
          year: 2023,
          cover: './images/a8a6344b-940a-479c-829f-200d326befd4.jpeg',
          tracks: 16,
          platforms: {
              spotify: 'https://open.spotify.com/album/4EURMuWFiLLRmQYoH5cgiE?si=c2FVAsHMSJqXrTrdq3t1FA',
              apple: 'https://music.apple.com/us/album/tec/1706351062',
              youtube: 'https://youtube.com/playlist?list=OLAK5uy_krsSDWLBi-9WBftrJ_4TnomcBug8al8rQ&si=32-vFgkXCtzuNlhA'
          }
        },
        {
            id: '5',
            title: 'We Love You Tecca 2 (Deluxe)',
            year: 2021,
            cover: './images/_.jpeg',
            tracks: 25,
            platforms: {
                spotify: 'https://open.spotify.com/album/2ybRB5pXB2XCjLbvRQMrw9?si=dtSUyl2BQEWRthm6Pfha6Q',
                apple: 'https://music.apple.com/us/album/we-love-you-tecca-2-deluxe/1583882161',
                youtube: 'https://youtube.com/playlist?list=OLAK5uy_ltPdRYZjKj84VR7h27bsU89aEU0WU8JgA&si=7RGq2ANwqTByfpbo'

            }
        },
        {
            id: '6',
            title: 'We Love You Tecca 2',
            year: 2021,
            cover: './images/_.jpeg',
            tracks: 20,
            platforms: {
                spotify: 'https://open.spotify.com/album/7nTvm6EgmFWPLMLxj6aksS?si=k1BGTnP3Q-KYAbqUg41MQA',
                apple: 'https://music.apple.com/us/album/we-love-you-tecca-2/1582496839',
                youtube: 'https://youtube.com/playlist?list=OLAK5uy_ltPdRYZjKj84VR7h27bsU89aEU0WU8JgA&si=7RGq2ANwqTByfpbo'
            }
          },
          {
            id: '7',
            title: 'Virgo World',
            year: 2020,
            cover: './images/Virgo World.jpeg',
            tracks: 19,
            platforms: {
                spotify: 'https://open.spotify.com/album/389zGArsMlwuPorS4Cw7IX?si=jPtpadO7RI6kvLxcUrQXBg',
                apple: 'https://music.apple.com/us/album/virgo-world/1531786369',
                youtube: 'https://youtube.com/playlist?list=OLAK5uy_kGUFyAXEdSI9DZwRI4CKQMr_QFJR1kT2o&si=KYKEGXGdra0h128C'
          }
        },
      {
            id: '8',
            title: 'We Love You Tecca',
            year: 2019,
            cover: './images/images/d07a0fc2-030b-40a3-808b-491d31ca2098.jpeg',
            tracks: 18,
            platforms: {
                spotify: 'https://open.spotify.com/album/1I6FpscJIfwf4T56VxGVsB?si=sVjPLoGwR56nkcxstN6EZA',
                apple: 'https://music.apple.com/us/album/we-love-you-tecca/1472441234',
                youtube: 'https://youtube.com/playlist?list=OLAK5uy_n-HO4olRWoYjs0xZK_84o_SILW-035UyE&si=zwL6w5qQ19f0HZAd'
            }
      }

    ]
};

const renderAlbums = () => {
    const albumList = document.getElementById('album-list');
    if (!albumList) return;
    albumList.innerHTML = ''; // Clear previous content if any
    musicCatalog.albums.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'music-card';
        albumCard.innerHTML = `
            <div class="artwork">
                <img src="${album.cover}" alt="${album.title}">
            </div>
            <div class="info">
                <h3>${album.title}</h3>
                <p>${album.year} • ${album.tracks} Tracks</p>
                <div class="platforms">
                    <a href="${album.platforms.spotify}" target="_blank">Listen on Spotify</a>
                    <a href="${album.platforms.apple}" target="_blank">Listen on Apple Music</a>
                    <a href="${album.platforms.youtube}" target="_blank">Watch on YouTube</a>
                </div>
            </div>
        `;
        albumList.appendChild(albumCard);
    });
};

// Call the function to render albums on page load
document.addEventListener('DOMContentLoaded', renderAlbums);