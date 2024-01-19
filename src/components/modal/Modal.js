import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const CustomModal = ({ type, visible, onClose, onConfirm }) => {

    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    let modalTitle, modalContent, modalFooter;

    switch (type) {
        case 'delete fail':
            modalTitle = 'Fail';
            modalContent = 'Delete failed.';
            modalFooter = (
                <Button type="primary" onClick={onClose}>
                    OK
                </Button>
            );
            break;
        case 'delete success':
            modalTitle = 'Success';
            modalContent = 'Delete successful.';
            modalFooter = (
                <Button type="primary" onClick={onClose}>
                    OK
                </Button>
            );
            break;
        case 'delete confirm':
            modalTitle = 'Confirm';
            modalContent = 'Do you want to delete?';
            modalFooter = (
                <>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" onClick={handleConfirm}>
                        Confirm
                    </Button>
                </>
            );
            break;
        case 'update fail':
            modalTitle = 'Fail';
            modalContent = 'Update failed.';
            modalFooter = (
                <Button type="primary" onClick={onClose}>
                    OK
                </Button>
            );
            break;
        case 'update success':
            modalTitle = 'Success';
            modalContent = 'Update successful.';
            modalFooter = (
                <Button type="primary" onClick={onClose}>
                    OK
                </Button>
            );
            break;
        case 'update confirm':
            modalTitle = 'Confirm';
            modalContent = 'Do you want to update?';
            modalFooter = (
                <>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" onClick={handleConfirm}>
                        Confirm
                    </Button>
                </>
            );
            break;
        case 'create fail':
            modalTitle = 'Fail';
            modalContent = 'Create failed.';
            modalFooter = (
                <Button type="primary" onClick={onClose}>
                    OK
                </Button>
            );
            break;
        case 'create success':
            modalTitle = 'Success';
            modalContent = 'Create successful.';
            modalFooter = (
                <Button type="primary" onClick={onClose}>
                    OK
                </Button>
            );
            break;
        case 'create confirm':
            modalTitle = 'Confirm';
            modalContent = 'Do you want to create?';
            modalFooter = (
                <>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" onClick={handleConfirm}>
                        Confirm
                    </Button>
                </>
            );
            break;
        default:
            modalTitle = '';
            modalContent = '';
            modalFooter = null;
    }

    return (
        <Modal
            title={modalTitle}
            open={visible}
            centered={true}
            onOk={onClose}
            onCancel={onClose}
            footer={modalFooter}
        >
            <p>{modalContent}</p>
        </Modal>
    );
};

export default CustomModal;
