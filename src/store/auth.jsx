import { createContext, useContext, useEffect, useState } from 'react';
import { BASE_URL } from './helper';

export const AuthContext = createContext();
// -- [The value prop of the Provider is crucial because it's where you define the data that you want to make accessible to components that consume the cotext.]

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // -- STORING THE TOKEN IN A STATE VARIABLE .....
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [authUser, setUser] = useState('');

  // -- isLoading 
  const [isLoading, setIsLoading] = useState(true);

  // -- storing the data from the serives function 
  const [authServies , setServices] = useState([])

  //:: -- define the localstorage token function .....
  const storeTokenInLocalStorage = (serverToken) => {
    // -- Add this line of code for user login after logout showing 
    setToken(serverToken);
    return localStorage.setItem('token', serverToken);
  };

  let isLoggedIn = !!token;

  //:: --- Initializing the LogOut Methods
  const LogoutUser = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  //::-- JWT authetication .to get the currently loggedIN user data
  const authorizationToken = `Bearer ${token}`;
  const userAuthentication = async () => {
    try {
      //-- First set true
      setIsLoading(true);

      // removing the http://localhost:8000/
      const response = await fetch(`${BASE_URL}/api/auth/users`, {
        method: 'GET',
        headers: {
          // Authorization: `Bearer ${token}`,
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log('user data AuthorizationToken : ', data.userData);
        setUser(data.userData);

        // :: Defining the method for isAdmin = true 
        /* Create a isLoading Stata */ 
        /* After the data getting */
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  //:: ==~==~==~==~[SERVICES]~==~==~==~== :://
  // -- to fetch the sevices data from the database
  async function getServices(){
    try {
      const response = await fetch(`${BASE_URL}/api/data/service`, {
        method : 'GET',
      });
      if(response.ok){
        const data = await response.json();
        // console.log(data.serviceMsg);
        setServices(data.serviceMsg)
      }

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    // console.log(authServies);
    getServices();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLocalStorage, LogoutUser, authUser, authServies, authorizationToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// --- Creating Custome Hooks
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error('useAuth used outside of the provider');
  }
  return authContextValue;
};

// this is new change for comment check
// ne cmmetn 