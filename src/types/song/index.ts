export interface SongItem {
    id: number;
    image: string;
    name: string;
    singer: string;
    source: string;
    description: string;
    isFavorite?: boolean;
}