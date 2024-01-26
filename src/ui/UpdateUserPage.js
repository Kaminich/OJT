import { useEffect, useState } from 'react';
import Loading from "../components/loading/Loanding";
import './UpdateUserPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Form, Input, Button } from 'antd';
import CustomModal from '../components/modal/Modal';
import CustomAlert from '../components/alert/Alert';
import AvatarUpload from '../components/avatar/Avatar';

const UpdateUserPage = () => {
    const { mode } = useTheme();
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [body, setBody] = useState();
    const [confirmVisibleUpdateFail, setConfirmVisibleUpdateFail] = useState(false);
    const [user, setUser] = useState([]);

    const handleModal = (values) => {
        setVisible(true);
        setBody(JSON.stringify({
            firstname: values.firstname,
            lastname: values.lastname,
            age: values.age,
            address: values.address,
        }))
    }

    const handleClose = () => {
        setVisible(false);
        setConfirmVisibleUpdateFail(false);
    }

    useEffect(() => {
        fetch(`https://5f17e9887c06c900160dc5f7.mockapi.io/api/users/${id}`)
            .then(res => res.json())
            .then(user => {
                setUser(user);
            })
            .catch(error => {
                console.log('Cannot update this user: ', error);
            })
    }, [id])

    const onFinish = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://5f17e9887c06c900160dc5f7.mockapi.io/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body,
            });

            if (response.ok) {
                setVisible(false);
                navigate('/users', { state: { status: 'update success' } });
            } else {
                setVisible(false);
                setConfirmVisibleUpdateFail(true)
                console.error('Failed to update user');
            }
        } catch (error) {
            setVisible(false);
            setConfirmVisibleUpdateFail(true)
            console.error('Failed to update user', error);
        } finally {
            setLoading(false);
        }
    };

    const validateName = (_, value) => {
        if (value && !/^[a-zA-Z]*$/.test(value)) {
            return Promise.reject('Please input alphabet characters only!');
        }
        return Promise.resolve();
    };

    if (loading) {
        return <Loading />
    }

    return (
        <div className="update-user">
            <h1 className="update-user-title">Update User</h1>
            <CustomModal type={'update confirm'} visible={visible} onClose={handleClose} onConfirm={onFinish} />
            <CustomAlert type={'update fail'} onClose={handleClose} visible={confirmVisibleUpdateFail} />
            <div className='flex' style={{gap: '8%'}}>
                <AvatarUpload />
                <Form
                    name="updateUserForm"
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
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
}

export default UpdateUserPage;