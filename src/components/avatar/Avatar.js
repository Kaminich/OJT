import React, { useEffect, useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Upload, message } from 'antd';
import './Avatar.css'
import ProgressBar from '../progressbar/ProgressBar';

const AvatarUpload = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [imageUrlAvatar, setImageUrlAvatar] = useState();
    const [status, setStatus] = useState('');
    const [progress, setProgress] = useState(0);
    const [progressVisible, setProgressVisible] = useState(false);
    const [modal, setModal] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setProgressVisible(true);
            setStatus('active');
            setProgress(Math.round(info.file.percent, 2));
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, (url) => {
                setProgressVisible(true);
                setLoading(false);
                setStatus('success');
                setImageUrl(url);
            });
        }
        if (info.file.status === 'error') {
            setProgressVisible(true);
            setLoading(false);
            setImageUrl(null)
            setStatus('exception')
            console.error();
        }
    };

    const handleCancel = () => {
        setModal(false);
    }

    const handleModal = () => {
        setModal(true);
    }

    const handleReset = () => {
        setImageUrl(null);
    }

    const handleConfirm = () => {
        setImageUrlAvatar(imageUrl);
        setModal(false);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgressVisible(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    const beforeUpload = (file) => {
        const isLt2M = file.size / 1024 / 1024 < 1;
        if (!isLt2M) {
            messageApi.open({
                type: 'error',
                content: 'Image must smaller than 1MB',
            });
        }
        return isLt2M;
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <div className="avatar">
            {contextHolder}
            <div className='avatar-circle flex'>
                {imageUrlAvatar
                    ?
                    <img src={imageUrlAvatar} alt="avatar" onClick={handleModal} />
                    :
                    <p className='avatar-upload-text' onClick={handleModal}>Click to upload</p>
                }
            </div>
            <Modal
                open={modal}
                footer={
                    <>
                        <Button onClick={handleReset}>Reset</Button>
                        <Button type="primary" onClick={handleConfirm}>
                            Confirm
                        </Button>
                    </>
                }
                onCancel={handleCancel}
                centered={true}
                style={{
                    textAlign: 'center',
                }}
                width={'70vw'}
            >
                <Upload
                    name="avatar"
                    listType="picture-circle"
                    showUploadList={false}
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    onChange={handleChange}
                    accept="image/*"
                    beforeUpload={beforeUpload}
                    className='avatar-upload'
                >
                    {imageUrl ?
                        <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                        : uploadButton
                    }
                </Upload>
                {progressVisible ? <ProgressBar status={status} percent={progress} style={{ width: '60%' }} /> : ""}
            </Modal>
        </div>
    );
};

export default AvatarUpload;
