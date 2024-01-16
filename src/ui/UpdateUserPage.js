import { useState } from 'react';
import Loading from "../components/loading/Loanding";
import './UpdateUserPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const UpdateUserPage = () => {
    const { mode } = useTheme();

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState();
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`https://5f17e9887c06c900160dc5f7.mockapi.io/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    age: age,
                    address: address,
                }),
            });

            if (response.ok) {
                navigate('/users');
            } else {
                console.error('Failed to update user');
            }
        } catch (error) {
            console.error('Failed to update user', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />
    }

    return (
        <div className="update-user">
            <h1 className="update-user-title">Update User</h1>
            <form onSubmit={handleSubmit} className={`update-user-form ${mode}`}>
                <div className="update-user-info">
                    <label className="update-user-label">First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        className="update-user-input"
                        placeholder="Enter your firstname..."
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="update-user-info">
                    <label className="update-user-label">Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        className="update-user-input"
                        placeholder="Enter your lastname..."
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                </div>
                <div className="update-user-info">
                    <label className="update-user-label">Age</label>
                    <input
                        type="number"
                        name="age"
                        className="update-user-input"
                        placeholder="Enter your age..."
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div className="update-user-info">
                    <label className="update-user-label">Address</label>
                    <input
                        type="text"
                        name="address"
                        className="update-user-input"
                        placeholder="Enter your address..."
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="update-user-button"
                >
                    Update
                </button>
            </form>

        </div>
    );
}

export default UpdateUserPage;