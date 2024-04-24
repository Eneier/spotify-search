import React, {ChangeEvent, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from "../Card/Card";
import {searchTracksWithDelay} from './search';
import {Track} from "./ITrack";
import {useDebouncedEffect} from "../../hooks/useDebounce";
import {useToken} from "../../hooks/useToken";


export interface IToken {
    access_token: string | null;
}

export type Tracks = Track[];

const SearchInput: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [tracks, setTracks] = useState<Tracks | null | undefined>(null);

    const token = useToken()

    useDebouncedEffect(() => {
        searchTracksWithDelay(query, token).then(res => setTracks(res));
    }, 1000, [query]);


    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '100%'},
                marginTop: '40px'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                onChange={handleQueryChange}
                label="Search for a song"
                variant="outlined"
            />
            <Card tracks={tracks || []}/>
        </Box>
    );
};

export default SearchInput;
