import magnifyingGlass from '../images/mag.png'
import Buttons from '../bones/Buttons'
import { Card } from 'antd'
import gsap from 'gsap'
import { useEffect } from 'react'

const extraSpace = {
    margin: '5%',
    padding: '5%',
    textAlign: 'center'
}

function Landing() {

    useEffect(() => {
        gsap.to('.mag', { duration: 2, maxWidth: '80%', rotation: 360, ease: "back" })
    })

    return (
        <Card
            title="I Can't Believe It's Not Clue"
            style={extraSpace}
            hoverable
            onClick={() => console.log("just checking")}>
            <img src={magnifyingGlass} alt='magnifying glass' className='mag' />
            <Buttons />
        </Card>
    )
}

export default Landing
