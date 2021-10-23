import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt="img" />
            {props.message}
            <div>
                <span>like</span>
            </div>
            <div>
                <span>{props.likescount}</span>
            </div>
        </div>
    )
}

export default Post;