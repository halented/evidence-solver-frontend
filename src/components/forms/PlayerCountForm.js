import { Form, Button, InputNumber, Space } from 'antd'

function PlayerCountForm({ setPlayerCount }) {

    const [form] = Form.useForm()

    const updateForm = (e) => {
        form.setFieldsValue({
            username: e.target.value
        })
    }

    return (
        <>
            <div style={{ fontWeight: 'bold' }}>Including yourself, how many players will there be?</div>
            <div style={{ fontStyle: 'italic' }}>(3-6 players)</div>
            <Space>
                <Form
                    onFinish={(info) => setPlayerCount(info.players)}
                    form={form}>
                    <Form.Item
                        onChange={updateForm}
                        name='players'
                        label='Player Count'
                        rules={[
                            {
                                required: true,
                                message: 'At least 3 players required',
                            }
                        ]}>
                        <InputNumber min={3} max={6} />
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType='Submit'>Next</Button>
                    </Form.Item>
                </Form>
            </Space>
        </>
    )
}

export default PlayerCountForm
