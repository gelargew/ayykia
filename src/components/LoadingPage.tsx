import React from 'react'

export default function LoadingPage({isLoading=false}) {


    return (
        <div id='loading-page' style={{ opacity: isLoading ? 1 : 0}}>
            <img src='/logo.svg' />
        </div>
    )
}