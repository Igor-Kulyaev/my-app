import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {

    let newElem = React.createRef();

    let replyNotif = () => {
        alert(newElem.current.value);
        props.updateNewReplyText('');
    }

    let onReplyChange = () => {
        let text = newElem.current.value;
        props.updateNewReplyText(text);
    }
    return (
        <>
            <div className={s.message}>{props.message}</div>
        </>
    )
}

export default Message;