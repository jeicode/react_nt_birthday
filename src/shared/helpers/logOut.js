const { signOut } = require("firebase/auth")
const { auth } = require("src/firebase/config")


export default function logOut() {
    signOut(auth).then(res => console.log("LOGOUT")).catch(error => console.log("error to logout"))
}


