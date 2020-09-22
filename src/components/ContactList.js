import React from "react";
import Contact from "./Contact";

const users = [
    {
        id: 1,
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false
    },
    {
        id: 2,
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true
    },
    {
        id: 3,
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true
    },
    {
        id: 4,
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false
    },
    {
        id:5,
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true
    }
];





const ContactList = () => {
    return <div>
        {users.map(user => (
            <Contact name={user.name} avatar={user.avatar} isOnline={user.online} />
        ))}
    </div>
}

export default ContactList