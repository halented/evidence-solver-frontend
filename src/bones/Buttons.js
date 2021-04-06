import { Button } from 'antd'

const flex = {
    display: 'flex',
    justifyContent: 'space-around'
}

function Buttons({ setShowNewGameForm, setTitle }) {

    const changeTitleAndShowForm = () => {
        setTitle("Enter New Game Info Below")
        setShowNewGameForm(true)
    }

    return (
        <div style={flex}>
            <Button type='primary' onClick={changeTitleAndShowForm}>Start New Game</Button>
            <Button>How To Use</Button>
        </div>
    )
}

export default Buttons
