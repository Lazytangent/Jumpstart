import React from 'react';
import Navigation from '../Navigation/navigation'


const DiscoverPage = ({ setAuthenticated }) => {
    return (
        <>
            <Navigation setAuthenticated={setAuthenticated} />
            <div className="discoverPage">
                <h1 className="discoverPage-header">Start helping those in need</h1>

            </div>
        </>
    )
}

export default DiscoverPage;
