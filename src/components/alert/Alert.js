import React, { useState, useEffect } from 'react';
import Alert from "antd/es/alert/Alert";

const CustomAlert = ({ type, onClose, visible }) => {
    const [visibleAlert, setVisibleAlert] = useState(visible);

    let messageAlert, typeAlert, descriptionAlert;

    switch (type) {
        case 'delete success':
            messageAlert = 'Delete Successfully';
            typeAlert = 'success';
            descriptionAlert = "The user has been deleted successfully";
            break;
        case 'delete fail':
            messageAlert = 'Delete Failed';
            typeAlert = 'error';
            descriptionAlert = "The user has been deleted failed";
            break;
        case 'update success':
            messageAlert = 'Update Successfully';
            typeAlert = 'success';
            descriptionAlert = "The user has been updated successfully";
            break;
        case 'update fail':
            messageAlert = 'Update Failed';
            typeAlert = 'error';
            descriptionAlert = "The user has been deleted failed";
            break;
        case 'create success':
            messageAlert = 'Create Successfully';
            typeAlert = 'success';
            descriptionAlert = "The user has been created successfully";
            break;
        case 'create fail':
            messageAlert = 'Create Failed';
            typeAlert = 'error';
            descriptionAlert = "The user has been deleted failed";
            break;
        case 'upload fail':
            messageAlert = 'Upload Failed';
            typeAlert = 'error';
            descriptionAlert = "Image must smaller than 1MB!";
            break;
        default:
            messageAlert = "";
            typeAlert = "";
            descriptionAlert = "";
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisibleAlert(false);
            onClose();
        }, 5000);

        return () => clearTimeout(timeout);
    }, [onClose]);

    console.log(visible, visibleAlert);

    return (
        <Alert
            type={typeAlert}
            message={messageAlert}
            description={descriptionAlert}
            showIcon
            onClose={() => {
                setVisibleAlert(false);
                onClose();
            }}
            closable
            style={{
                display: visibleAlert ? 'flex' : 'none',
                width: '90%',
                margin: '10px auto',
                fontSize: '17px'
            }}
        />
    );
};

export default CustomAlert;
