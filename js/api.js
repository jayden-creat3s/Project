let cachedToken = "BQCIP3nKZ2PEB82ZbXVJrvkZ6EihjzuReYjY4lzFmk164kUBb7LFRqcWzSuYqWS5Mr8q_bMRm6BXftxvRm8ZDoSf2aoMhNvJXe_LxPLGkqeSUZ0LUT5OEzvF52UdKww9QY3YW2_t0_E";
let tokenExpiration = Date.now() + (3600 * 1000); 

async function getSpotifyToken(clientId, clientSecret) {
  if (cachedToken && tokenExpiration > Date.now()) {
    return cachedToken;
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
    },
    body: 'grant_type=client_credentials'
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error('Error fetching token:', errorData);
    throw new Error('Failed to fetch token');
  }

  const data = await response.json();
  cachedToken = data.access_token;
  tokenExpiration = Date.now() + (data.expires_in * 1000); 
  return cachedToken;
}

const clientId = 'b2da5dd90e714ca78b15f8cc011b118e';
const clientSecret = 'ae3f225d680d4271b4db1dcaf24e4dbd';

async function fetchArtistData(artistId) {
  try {
    const token = await getSpotifyToken(clientId, clientSecret);
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Error fetching artist data:', errorData);
      throw new Error('Failed to fetch artist data');
    }

    const data = await response.json();
    console.log('Artist Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

const artistId = '4Ga1P7PMIsmqEZqhYZQgDo';
fetchArtistData(artistId);
