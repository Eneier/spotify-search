import {Track} from "./ITrack";
import {SpotifyTrackData} from "./ISearch";
import {IToken} from "./SearchInput";

type Tracks = Track[];

export const searchTracksWithDelay = async (
    query: string,
    token: IToken | null,
): Promise<Tracks | undefined> => {
    if (token) {
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&include_external=audio`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token.access_token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                const items = data.tracks.items;

                const tracks: Tracks = items.map((item: SpotifyTrackData) => ({
                    id: item.id,
                    name: item.name,
                    trackUrl: item.external_urls.spotify,
                    duration: item.duration_ms,
                    artist: item.artists[0].name,
                    artistUrl: item.artists[0].external_urls.spotify,
                    album: item.album.name,
                    image: item.album.images[0].url,
                    releaseDate: item.album.release_date,
                    previewUrl: item.preview_url,
                }));
                return tracks
            } else {
                console.error('Error when making a request to the Spotify API:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error when making a request to the Spotify API:', error);
        }
    }

};
