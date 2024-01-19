import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import CustomModal from '../components/modal/Modal';
import { useState } from 'react';
import CustomAlert from '../components/alert/Alert';

const CreateUserPage = () => {
    const { mode } = useTheme();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [body, setBody] = useState();
    const [confirmVisibleCreateFail, setConfirmVisibleCreateFail] = useState(false);

    const handleModal = (values) => {
        setVisible(true);
        setBody(JSON.stringify({
            id: Math.floor(Math.random() * 30) + 1,
            firstname: values.firstname,
            lastname: values.lastname,
            age: values.age,
            address: values.address,
        }))
    }

    const handleClose = () => {
        setVisible(false);
        setConfirmVisibleCreateFail(false);
    }

    const onFinish = async () => {
        try {
            const response = await fetch(`https://5f17e9887c06c900160dc5f7.mockapi.io/api/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body
            });

            if (response.ok) {
                setVisible(false);
                navigate('/users', { state: { status: 'create success' } });
            } else {
                setVisible(false);
                setConfirmVisibleCreateFail(true);
                console.error('Failed to create user');
            }
        } catch (error) {
            setConfirmVisibleCreateFail(true);
            console.error('Failed to create user', error);
        }
    };

    const validateName = (_, value) => {
        if (value && !/^[a-zA-Z]*$/.test(value)) {
            return Promise.reject('Please input alphabet characters only!');
        }
        return Promise.resolve();
    };

    return (
        <div className="update-user">
            <h1 className="update-user-title">Create User</h1>
            <CustomModal type={'create confirm'} visible={visible} onClose={handleClose} onConfirm={onFinish} />
            <CustomAlert type={'create fail'} onClose={handleClose} visible={confirmVisibleCreateFail} />
            <Form
                name="createUserForm"
                onFinish={handleModal}
                layout='vertical'
                className={`update-user-form ${mode}`}
            >
                <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[
                        { required: true, message: 'Please input your first name!' },
                        { validator: validateName }
                    ]}
                >
                    <Input className='update-user-input' placeholder="Enter your firstname..." />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[
                        { required: true, message: 'Please input your last name!' },
                        { validator: validateName }
                    ]}
                >
                    <Input className='update-user-input' placeholder="Enter your lastname..." />
                </Form.Item>
                <Form.Item
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: 'Please input your age!' }]}
                >
                    <Input className='update-user-input' type="number" placeholder="Enter your age..." />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Please input your address!' }]}
                >
                    <Input className='update-user-input' placeholder="Enter your address..." />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className='update-user-button flex'>
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CreateUserPage;
