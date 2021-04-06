import { Form, Input, Button } from 'antd'

function GameSetup() {
    const [form] = Form.useForm()

    const updateForm = (e) => {
        form.setFieldsValue({
            username: e.target.value
        })
    }

    return (
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
                        message: 'Your name is required',
                    }
                ]}>
                <Input />
            </Form.Item>
            <Form.Item>
                Dynamic field for other players
            </Form.Item>
            <Form.Item>

            </Form.Item>
            <Form.Item>
                <Button htmlType='Submit'>Begin!</Button>
            </Form.Item>
        </Form>
    )
}

export default GameSetup
