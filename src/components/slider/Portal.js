import React from "react";

const Portal = ({ color }) => {
    return (
        <svg width="100" height="100" viewBox="0 0 160 161" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Portal" fillRule="evenodd" clipRule="evenodd" d="M80 160.5C79.84 116.372 44.0844 80.6483 0 80.6483C44.1828 80.6483 80 44.7642 80 0.5C80.1593 44.6284 115.916 80.3517 160 80.3517C115.817 80.3517 80 116.236 80 160.5Z" fill={color} />
        </svg>
    )
}

export default Portal;