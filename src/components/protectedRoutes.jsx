import React from 'react';

import { Redirect } from 'react-router-dom';


export default ({isLoggedIn, children}) => {
    return !isLoggedIn ? <Redirect to='/' /> : (
        <>
        {children}
        </>
    )
}