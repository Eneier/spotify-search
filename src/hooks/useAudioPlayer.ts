import {useState, useRef} from "react";

type playerType = {
    isPlaying: boolean;
    togglePlay: () => void;
};

export const useAudioPlayer = (audioUrl: string | undefined | null): playerType => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    if (!audioRef.current) {
        audioRef.current = new Audio(audioUrl || undefined);
    }

    console.log(audioRef)

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return {isPlaying, togglePlay};
};
