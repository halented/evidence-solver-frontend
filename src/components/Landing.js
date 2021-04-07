import magnifyingGlass from '../images/mag.png'
import Buttons from '../bones/Buttons'
import { Card } from 'antd'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import GameSetup from './GameSetup'

const extraSpace = {
    margin: '5%',
    padding: '5%',
    textAlign: 'center'
}

function Landing() {

    useEffect(() => {
        if (showNewGameForm) { return }
        gsap.to('.mag', { duration: 2, maxWidth: '80%', rotation: 360, ease: "back" })
    })

    const [showNewGameForm, setShowNewGameForm] = useState(false)
    const [title, setTitle] = useState("I Can't Believe It's Not Clue")

    return (
        <Card
            title={title}
            style={extraSpace}
            hoverable>
            {showNewGameForm ?
                <GameSetup />
                :
                <>
                    <img src={magnifyingGlass} alt='magnifying glass' className='mag' />
                    <Buttons setShowNewGameForm={setShowNewGameForm} setTitle={setTitle} />
                </>
            }
        </Card>
    )
}

export default Landing
