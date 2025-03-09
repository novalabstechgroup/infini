import { useEffect, useState } from "react"
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google"
import axios from "axios"
import './App.css'
import Cookies from "js-cookie";

interface User {
  name: string;
  email: string;
  picture: string;
}

function App() {
  
  const [user, setUser] = useState<User | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const token = Cookies.get("idToken");
    if (token) {
      try{
      axios.post("http://localhost:8080/api/auth/login",{}, { withCredentials: true })
        .then((res) => setUser(res.data))
        .catch((err) => console.error("Failed to fetch user after refresh:", err))
        .finally(() => {
          setLoading(false);
        });;
      } catch (err) {
        console.error("Failed to authenticate:", err);
        Cookies.remove("idToken");
      }
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="text-center mt-6"></div>;
  }

  const setCookie = (name: string, value: string, expires: number) => {
    Cookies.set(name, value, {expires})
  }

  const handleSuccess = async (response: any) => {
    console.log("Google OAuth success:", response);
    const token = response.credential;
    console.log("Token:", token);
    setIdToken(token);
    setCookie("idToken", token, 1);
    try {
      const loginRes = await axios.post("http://localhost:8080/api/auth/login", {}, { withCredentials: true });
      console.log("Login response:", loginRes.data);
      setUser(loginRes.data);
    } catch (err) {
      console.error("Failed to authenticate:", err);
    }
  };

  const handleFailure = (error: void) => {
    console.error("Google OAuth error:", error);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    setIdToken(null);
    Cookies.remove("idToken");
  };



  return (
    <>
    <GoogleOAuthProvider clientId="533686596568-mcqjo6uu5i66il8scbptkutfmo271lb4.apps.googleusercontent.com">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-6">Google OAuth2 Login with React + TS (Vite)</h1>

        {user ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img src={user.picture} alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-700 mb-4">{user.email}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
    </>
  )
}

export default App
