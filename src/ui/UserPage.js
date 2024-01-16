import { useEffect, useState } from "react";
import './UserPage.css'
import Loading from "../components/loading/Loanding";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/searchbar/SearchBar";
import { Table } from "antd";

const UserPage = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)

    useEffect(() => {
        setLoading(true);
        fetch(`https://5f17e9887c06c900160dc5f7.mockapi.io/api/users?page=${page}`)
            .then(res => res.json())
            .then(user => {
                setUsers(user);
                setLoading(false);
            })
    }, [page])


    const handleSearch = (keyword) => {
        setLoading(true);
        fetch(`https://5f17e9887c06c900160dc5f7.mockapi.io/api/users?search=${keyword}`)
            .then(res => res.json())
            .then(user => {
                
                setUsers(user === 'Not found' ? [] : user);
                console.log(user)
                setLoading(false);
            })
            .catch(error => {
                console.error('Error searching for users:', error);
                setLoading(false);
            });
    };

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
            .then(data => {
                console.log('User deleted successfully', data);
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting resource:', error);
            });
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
            render: (text, record) => (
                <span className="flex">
                    <button className="task-button" onClick={() => handleUpdate(record.id)}>Update</button>
                    <button className="task-button" onClick={() => handleDelete(record.id)}>Delete</button>
                </span>
            ),
            align: 'center',
            className: 'border'
        }
    ]

    return (
        <div className="user-page">
            <SearchBar onSearch={handleSearch} />
            <button className="create-user-btn" onClick={handleCreate}>Create</button>
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
                <Table
                    dataSource={users}
                    columns={columns}
                    pagination={{
                        pageSize: 10,
                        current: page,
                        onChange: (page) => setPage(page),
                        showSizeChanger: false,
                    }}
                    style=
                    {{
                        margin: '0 5%'
                    }}
                />
            )}
        </div >
    )
}

export default UserPage;