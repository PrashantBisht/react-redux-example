import {combineReducers} from 'redux';

const songReducer = () => {
    return [
        {title:'ABC',duration:'1:3'},
        {title:'ABCD',duration:'1:3'},
        {title:'ABCE',duration:'1:3'},
        {title:'ABCF',duration:'1:3'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    song: songReducer,
    selectedSong: selectedSongReducer
})