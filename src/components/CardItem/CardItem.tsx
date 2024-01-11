import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import {Link} from "@mui/material";
import {formatDuration} from "../../helpers/durationFormat";
import {useAudioPlayer} from "../../hooks/useAudioPlayer";
import {Track} from "../Search/ITrack";


interface ICardItemProps {
    track: Track;
}

const CardItem: React.FC<ICardItemProps> = ({track}) => {

    const audioPlayer = useAudioPlayer(track.previewUrl);

    return (
        <Card sx={{
            display: 'flex',
            marginTop: '30px',
            justifyContent: 'space-between',
            padding: '10px',
            border: '3px solid #1976d2',
            borderRadius: '10px'
        }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        <Link href={track.trackUrl} target="_blank">{track.name}</Link>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <Link href={track.artistUrl} target="_blank">{track.artist}</Link>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <strong>Album: </strong>{track.album}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <strong>Release date: </strong>{track.releaseDate}
                    </Typography>
                </CardContent>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', pl: 1, pb: 1}}>
                    {track.previewUrl ?
                        (<IconButton aria-label="play/pause" onClick={audioPlayer.togglePlay}>
                            {audioPlayer.isPlaying ? <PauseIcon sx={{height: 38, width: 38}}/> :
                                <PlayArrowIcon sx={{height: 38, width: 38}}/>}
                        </IconButton>) : (
                            <Typography variant="subtitle2" color="#ab003c" component="div">
                                There is no demo
                            </Typography>)}
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        Duration: {formatDuration(track.duration)}
                    </Typography>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{width: 151, borderRadius: '10px'}}
                image={track.image}
                alt={track.album}
            />
        </Card>
    );
}

export default CardItem;