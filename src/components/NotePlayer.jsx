import React, { Component } from 'react';
import PropTypes from "prop-types";
import './ChordPlayer.css';
import {Button} from "semantic-ui-react";

class NotePlayer extends Component {
    render() {
        return (
            <Button onClick={() => this.props.playNote(this.props.note)}>{this.props.text}</Button>
        );
    }
}

export default NotePlayer;

NotePlayer.propTypes = {
    note: PropTypes.number.isRequired, // 60 is a C
    text: PropTypes.string.isRequired,
    playNote: PropTypes.func.isRequired
};
