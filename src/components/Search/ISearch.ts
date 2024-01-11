export interface SpotifyTrackData {
    id: string;
    name: string;
    external_urls: {
        spotify: string;
    };
    duration_ms: number;
    artists: {
        name: string;
        external_urls: {
            spotify: string;
        };
    }[];
    album: {
        name: string;
        images: {
            url: string;
        }[];
        release_date: string;
    };
    preview_url: string | null;
}