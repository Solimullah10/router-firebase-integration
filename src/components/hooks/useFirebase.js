import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from "../../firebase.init";


const auth = getAuth(app);
const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, []);

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful')
        }).catch((error) => {
            console.log(error)
        });
    }
    // return [user, setUser];
    return {
        user,
        signInWithGoogle,
        handleSignOut
    }
}

export default useFirebase;