export interface Track {
    id: string;
    name: string;
    trackUrl: string;
    duration: number;
    artist: string;
    artistUrl: string;
    album: string;
    image: string;
    releaseDate: string;
    previewUrl: string | null;
}