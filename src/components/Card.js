import React from 'react';

const Card = ({username, email, id }) => {
    return (
        <div className='tc bg-light-green dib br4 pa3 ma3 grow bw2 shadow-5 '>
            <img alt='robots' src={`https://robohash.org//${id}?200x200`} />
            <div>
                <h2> {username}</h2>
                <p>{email}</p>
            </div>
        </div>

    );

}
 
export default Card;