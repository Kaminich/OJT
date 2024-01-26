import { useEffect, useState } from "react";
import './UserPage.css'
import Loading from "../components/loading/Loanding";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../components/searchbar/SearchBar";
import { Button, Table } from "antd";
import CustomModal from '../components/modal/Modal'
import CustomAlert from "../components/alert/Alert";

const UserPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const status = location.state && location.state.status;
    const [users, setUsers] = useState([]);
    const [checkedRows, setCheckedRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [visible, setVisible] = useState(false);
    const [confirmVisibleDeleteSuccess, setConfirmVisibleDeleteSuccess] = useState(false);
    const [confirmVisibleDeleteFail, setConfirmVisibleDeleteFail] = useState(false);
    const [confirmVisibleUpdateSuccess, setConfirmVisibleUpdateSuccess] = useState(false);
    const [confirmVisibleCreateSuccess, setConfirmVisibleCreateSuccess] = useState(false);
    const [id, setId] = useState(null);

    const getAllUser = (page) => {
        setLoading(true);
        fetch(`https://5f17e9887c06c900160dc5f7.mockapi.io/api/users?page=${page}`)
            .then(res => res.json())
            .then(user => {
                setUsers(user);
                setLoading(false);
            })
    }
    useEffect(() => {
        getAllUser(page);
    }, [page])

    const handleSearch = (keyword) => {
        setLoading(true);
        fetch(`https://5f17e9887c06c900160dc5f7.mockapi.io/api/users?search=${keyword}`)
            .then(res => res.json())
            .then(user => {
                setUsers(user === 'Not found' ? [] : user);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error searching for users:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (status === 'update success') {
            setConfirmVisibleUpdateSuccess(true);
        } else if (status === 'create success') {
            setConfirmVisibleCreateSuccess(true);
        }
    }, [status]);

    useEffect(() => {
        if (location.state && location.state.status) {
            navigate(location.pathname, { state: { ...location.state, status: null } });
        }
    }, [navigate, location.pathname, location.state]);

    const handleCreate = () => {
        navigate('/users/create');
    }

    const handleUpdate = (id) => {
        navigate(`/users/update/${id}`);
    }

    const handleDelete = (id) => {
        setLoading(true);
        fetch(`https://5f17e9887c06c900160dc5f7.mockapi.io/api/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.ok) {
                    setLoading(false);
                    return response.json();

                } else {
                    setLoading(false);
                    throw new Error('Failed to delete resource');
                }
            })
            .then(() => {
                setConfirmVisibleDeleteSuccess(true);
                getAllUser(page);
            })
            .catch(() => {
                setConfirmVisibleDeleteFail(true);
            });

    }

    const handleMultipleDelete = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            handleDelete(arr[i]);
        }
    }

    const handleModal = (id) => {
        setVisible(true);
        setId(id);
    }

    const handleClose = () => {
        setVisible(false);
        setConfirmVisibleDeleteSuccess(false);
        setConfirmVisibleDeleteFail(false);
        setConfirmVisibleUpdateSuccess(false);
        setConfirmVisibleCreateSuccess(false);
    }

    if (loading) {
        return <Loading />
    }

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstname',
            key: 'firstname',
            align: 'center',
            className: 'border'
        },
        {
            title: 'Last Name',
            dataIndex: 'lastname',
            key: 'lastname',
            align: 'center',
            className: 'border'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            align: 'center',
            className: 'border'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            align: 'center',
            className: 'border'
        },
        {
            title: 'Task',
            key: 'action',
            render: (record) => (
                <span className="flex">
                    <button className="task-button" onClick={() => handleUpdate(record.id)}>Update</button>
                    <button className="task-button" onClick={() => handleModal(record.id)}>Delete</button>
                </span>
            ),
            align: 'center',
            className: 'border'
        }
    ]

    const rowSelection = {
        onChange: (selectedRowKeys) => {
            setCheckedRows(selectedRowKeys);
        },
        getCheckboxProps: (record) => ({
            name: record.name,
        }),
    };

    return (
        <div className="user-page">
            <SearchBar onSearch={handleSearch} />
            <button className="create-user-btn" onClick={handleCreate}>Create</button>
            <Link to={'/video-upload'}>Video</Link>
            <Button onClick={() => handleMultipleDelete(checkedRows)} disabled={checkedRows.length === 0}>
                Delete Selected
            </Button>
            {/* <table className="user-table">
                <thead>
                    <tr>
                        <th className="table-heading border">First Name</th>
                        <th className="table-heading border">Last Name</th>
                        <th className="table-heading border">Age</th>
                        <th className="table-heading border">Address</th>
                        <th className="table-heading border">Tác vụ</th>
                    </tr >
                </thead >
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="table-content border">{user.firstname}</td>
                            <td className="table-content border">{user.lastname}</td>
                            <td className="table-content border">{user.age}</td>
                            <td className="table-content border">{user.address}</td>
                            <td className="table-content border flex">
                                <button className="task-button" onClick={() => handleUpdate(user.id)}>Update</button>
                                <button className="task-button" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table > */}

            {users.length === 0 ? (
                <h1 className="user-table-not-found">User not found</h1>
            ) : (
                <div>
                    <CustomModal type={'delete confirm'} visible={visible} onClose={handleClose} onConfirm={() => handleDelete(id)} />
                    <CustomAlert type={'delete success'} onClose={handleClose} visible={confirmVisibleDeleteSuccess} />
                    <CustomAlert type={'delete fail'} onClose={handleClose} visible={confirmVisibleDeleteFail} />
                    <CustomAlert type={'update success'} onClose={handleClose} visible={confirmVisibleUpdateSuccess} />
                    <CustomAlert type={'create success'} onClose={handleClose} visible={confirmVisibleCreateSuccess} />
                    <Table
                        dataSource={users}
                        columns={columns}
                        pagination={{
                            pageSize: 10,
                            current: page,
                            onChange: (page) => setPage(page),
                            showSizeChanger: false,
                        }}
                        rowKey={(record) => record.id}
                        rowSelection={{
                            type: 'checkbox',
                            ...rowSelection
                        }}
                        style=
                        {{
                            margin: '0 5%'
                        }}
                    />
                </div>

            )}
        </div >
    )
}

export default UserPage;