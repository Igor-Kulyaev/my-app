import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you', likescount: 23 },
        { id: 2, message: 'It\'s my first post', likescount: 25 },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Work' },
        { id: 5, message: 'Weather' }
    ]
}

it('new post should be added', () => {
    let action = addPostActionCreator('some text');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(6);

});

it('message of new post should be correct', () => {
    let action = addPostActionCreator('some text');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(6);
    expect(newState.posts[5].message).toBe('some text');
});

it('length after deleting should be decremented', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

it('length should not be decremented after deleting if id is incorrect', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});


