export const register = async (username, email, password) => {
    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const loginResponse = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const loginData = await loginResponse.json();
        if (!loginResponse.ok) {
            throw new Error(loginData.message);
        }

        const { token } = loginData;
        localStorage.setItem('token', token);

        const userResponse = await fetch(`http://localhost:5000/api/auth/user?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const userData = await userResponse.json();
        if (!userResponse.ok) {
            throw new Error(userData.message);
        }

        localStorage.setItem('user', JSON.stringify(userData));
        return userData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

const decodeJWT = (token) => {
    try {
        const payload = token.split('.')[1];
        const decodedPayload = JSON.parse(atob(payload));
        return decodedPayload;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    const decoded = decodeJWT(token);
    if (!decoded) return false;

    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
};
