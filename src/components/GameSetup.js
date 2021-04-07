import { useState } from 'react'
import PlayerCountForm from './forms/PlayerCountForm'
import UserForm from './forms/UserForm'

function GameSetup() {
    const [playerCount, setPlayerCount] = useState(0)

    return (
        <>
            {playerCount ?
                <UserForm playerCount={playerCount} />
                :
                <PlayerCountForm setPlayerCount={setPlayerCount} />
            }
        </>
    )
}

export default GameSetup
