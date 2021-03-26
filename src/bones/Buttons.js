import { Button } from 'antd'
import { Link } from 'react-router-dom'

const flex = {
    display: 'flex',
    justifyContent: 'space-around'
}

function Buttons() {
    return (
        <div style={flex}>
            <Link to='/start'>
                <Button type='primary'>Start New Game</Button>
            </Link>
            <Button>How To Use</Button>
        </div>
    )
}

export default Buttons
