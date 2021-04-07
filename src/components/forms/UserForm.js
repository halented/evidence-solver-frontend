import { Form, Button, Input } from 'antd'

function UserForm({ playerCount }) {
    const [form] = Form.useForm()
    const updateForm = (e) => {
        form.setFieldsValue({
            username: e.target.value
        })
    }

    const createPlayerInputs = () => {
        console.log("yello")
        let formElements = new Array(playerCount - 1).fill(undefined).map((val, idx) => {
            console.log("inside map")
            let name = `player ${idx + 1}`
            return (
                <Form.Item
                    onChange={updateForm}
                    name={name}
                    label='Player Name'
                    rules={[
                        {
                            required: true,
                            message: 'Player names required',
                        }
                    ]}>
                    <Input />
                </Form.Item>
            )
        })
        return formElements
    }

    return (
        <>
            <div>What are everyone's names?</div>
            <p></p>
            <Form
                onFinish={(info) => console.log(info)}
                form={form}>
                <Form.Item
                    onChange={updateForm}
                    name='user'
                    label='Your Name'
                    rules={[
                        {
                            required: true,
                            message: 'Your name required',
                        }
                    ]}>
                    <Input />
                </Form.Item>
                {createPlayerInputs()}
                <Form.Item>
                    <Button htmlType='Submit'>Begin!</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default UserForm
