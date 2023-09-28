import React from 'react';

function HexagonContainer() {
    return (
        <div className="container">
            {/* Rows with hexagons */}
            {Array.from({ length: 6 }, (_, rowIdx) => (
                <div className="row" key={rowIdx}>
                    {Array.from({ length: 15 }, (_, hexagonIdx) => (
                        <div className="hexagon" key={hexagonIdx}></div>
                    ))}
                </div>
            ))}

            {/* Content div */}
            <div className="content-div">
                <h1 style={{ color: 'aliceblue' }}>Your Content Goes Here</h1>
                <p>This is where you can add your text, images, or other content.</p>
            </div>
        </div>
    );
}

export default HexagonContainer;
