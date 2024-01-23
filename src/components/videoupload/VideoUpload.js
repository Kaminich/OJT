import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './VideoUpload.css'

const VideoUpload = () => {
    const [fileList, setFileList] = useState([]);
    const [videoSrc , setVideoSrc] = useState("");

    const handleChange = (info) => {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
        setFileList(info.fileList);
    }

    return (
        <div className='video-upload'>
            <Upload
                action={'https://www.mocky.io/v2/5cc8019d300000980a055e76'}
                accept='.mp4,.mov'
                onChange={handleChange}
                fileList={fileList}
                listType='picture'
                className='video-upload-section'
            >
                <Button icon={<UploadOutlined />}>Upload Video</Button>
            </Upload>
        </div>
    );
};

export default VideoUpload;
