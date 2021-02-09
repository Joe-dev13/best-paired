import React from 'react';

import { Redirect } from 'react-router-dom';


export default function Protect ({isLoggedIn, children})  {
    return !isLoggedIn ? <Redirect to='/' /> : (
        <>
        {children}
        </>
    )
}