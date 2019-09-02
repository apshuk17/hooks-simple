import React from 'react'

const Resource = ({type, title, name}) => {

    const postUser = () => {
        switch(type){
            case 'posttodo':
                return title;
            case 'user':
                return name;
            default:
                return null;
        }
    }
    return (
        <li>
            {postUser()}
        </li>
    )
}

export default Resource;
