
import React from "react";
import { Col, Row, Card, Image, Button, ListGroup, ProgressBar } from '@themesberg/react-bootstrap';

import { Player, ControlBar, PlaybackRateMenuButton, ForwardControl, ReplayControl, BigPlayButton } from 'video-react';

export const Knight = () => {
    return (
        <span>♘</span>
    );
};
export const Square = ({ black, children }) => {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'
    }}
    >{children}</div>
};
function renderSquare(i, [knightX, knightY], squareCount) {
    const x = i % squareCount
    const y = Math.floor(i / squareCount)
    const isKnightHere = x === knightX && y === knightY
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight /> : null
    const persent = `${(100 / squareCount)}%`
    return (
        <div key={i} style={{ width: persent, height: persent }}>
            <Square black={black}>{piece}</Square>
        </div>
    )
}

function Board({ squareCount, knightPosition }) {
    const squares = []
    for (let i = 0; i < squareCount * squareCount; i++) {
        squares.push(renderSquare(i, knightPosition, squareCount))
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >
            {squares}
        </div>
    )
}

export const BaseDrag = () => {
    return (
        <Card border="light" className="shadow-sm">
            <Card.Body>
                <Board squareCount={4} knightPosition={[0, 0]} />

            </Card.Body>
        </Card>
    );
};
