const spotifyConfig = {
  clientId: 'b2da5dd90e714ca78b15f8cc011b118e',
  clientSecret: 'ae3f225d680d4271b4db1dcaf24e4dbd'
};

export const fetchSpotifyToken = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${spotifyConfig.clientId}:${spotifyConfig.clientSecret}`)
    },
    body: 'grant_type=client_credentials'
  });
  const data = await response.json();
  return data.access_token;
};

export const fetchSpotifyAlbums = async () => {
  const token = await fetchSpotifyToken();
  const response = await fetch(`https://api.spotify.com/v1/artists/4Ga1P7PMIsmqEZqhYZQgDo/albums`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error('Network response was not ok: ' + response.statusText);
  }
  const data = await response.json();
  return data.items;
};
