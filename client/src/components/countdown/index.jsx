import React from 'react'
import { useTimer } from 'react-timer-hook';
import { 
    Container,
    CountdownItem,
    Colon
} from './countdown.elements'

function Countdown({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
            <Container>
                <CountdownItem>{hours}</CountdownItem><Colon>:</Colon>
                <CountdownItem>{minutes}</CountdownItem><Colon>:</Colon>
                <CountdownItem>{seconds}</CountdownItem>
            </Container>
    )
}

export default Countdown
