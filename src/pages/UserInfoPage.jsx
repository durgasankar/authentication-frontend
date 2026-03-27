import { useState, useEffect } from 'react';
import useUser from '../hooks/useUser';
import useToken from '../hooks/useToken';
import axios from 'axios';

export const UserInfoPage = () => {
    const user = useUser();
    const [token, setToken] = useToken();
    const { id: userId, email, info } = user;
    console.log(user)


    const [favoriteFood, setFavoriteFood] = useState(info.favoriteFood || '');
    const [hairColor, setHairColor] = useState(info.hairColor || '');
    const [bio, setBio] = useState(info.bio || '');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);


    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);

    const saveChanges = async () => {
        // Send a request to the server to
        // update the user's info with any changes we've
        // made to the text input values
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/users/${userId}`, {
                favoriteFood,
                hairColor,
                bio
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const { token: newToken } = response.data;
            setToken(newToken);
            setShowSuccessMessage(true);
        } catch (error) {
            console.log(error)
            setShowErrorMessage(true);
        }
    }

    const logOut = () => {
        // We'll want to log the user out here
        // and send them to the "login page"
        alert('Log out functionality not implemented yet');
    }

    const resetValues = () => {
        setFavoriteFood(info.favoriteFood);
        setBio(info.bio);
        setHairColor(info.hairColor);
    }

    // And here we have the JSX for our component. It's pretty straightforward
    return (
        <div className="content-container">
            <h1>Info for { email }</h1>
            { showSuccessMessage && <div className="success">Successfully saved user data!</div> }
            { showErrorMessage && <div className="fail">Uh oh... something went wrong and we couldn't save changes</div> }
            <label>
                Favorite Food:
                <input
                    onChange={ e => setFavoriteFood(e.target.value) }
                    value={ favoriteFood } />
            </label>
            <label>
                Hair Color:
                <input
                    onChange={ e => setHairColor(e.target.value) }
                    value={ hairColor } />
            </label>
            <label>
                Bio:
                <input
                    onChange={ e => setBio(e.target.value) }
                    value={ bio } />
            </label>
            <hr />
            <button onClick={ saveChanges }>Save Changes</button>
            <button onClick={ resetValues }>Reset Values</button>
            <button onClick={ logOut }>Log Out</button>
        </div>
    );
}