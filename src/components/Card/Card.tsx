import React from 'react';
import Box from "@mui/material/Box";
import CardItem from "../CardItem/CardItem";
import {Track} from "../Search/ITrack";
import {SpotifyTrackData} from "../Search/ISearch";


export type Tracks = Track[];

const Card: React.FC<{ tracks: Tracks }> = ({tracks}) => {
    return (
        <Box sx={{
            maxHeight: '400px',
            overflowY: 'auto',
            padding: '10px',
        }}>
            {tracks?.map((track) => (
                <CardItem key={track.id} track={track}/>
            ))}
        </Box>
    );
};

export default Card;