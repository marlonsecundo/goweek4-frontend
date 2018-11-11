import React, { Component } from 'react'

import './Tweet.css';
import like from '../like.svg';
import api from '../services/api';

export default class Tweet extends Component {

    handleLike = async () => {
        const { _id } = this.props.tweet;
        await api.post('likes/'+_id);
    }

    render() {

        const { author, content, likes } = this.props.tweet;

        return (
            <li className='tweet'>
                <strong>{author}</strong>
                <p>{content}</p>
                <button type='button' onClick={this.handleLike}>
                    <img src={like} alt='Like' />
                    {likes}
                </button>
            </li>
        )
    }
}
