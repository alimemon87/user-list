import React from 'react';
import UserInfo from '../UserInfo/UserInfo';

import './UserList.css';

const UserList = (props) => {
    let newUsers = Array.prototype.concat.apply([],props.users);

    return(
        <ul className="user_list">
            {
                
                newUsers.map((user) => {
                    return (
                        <li key={user.id}>
                            <UserInfo user={user}/>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default UserList;