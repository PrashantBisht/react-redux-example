import React,{ Component } from "react";
import { connect } from 'react-redux';

class SongList extends Component {
    render () {
        console.log(this.props)
        return(<div>
            song list
        </div>)
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {songs: state.song};

}
export default connect(mapStateToProps)(SongList);