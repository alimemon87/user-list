import React from 'react';

import './UserInfo.css';

const UserInfo = (props) => {
   return(
        <div className="card card-body ">
        <div className="row">
            <div>
                <img src={props.user.avatar} alt="contacts"  />
            </div>
            <div>
                <h4 className="heading">{props.user.first_name} &#32; {props.user.last_name}</h4>
            </div>
        </div>
    </div>
    );
};

export default UserInfo;