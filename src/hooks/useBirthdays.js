import { useCallback, useContext, useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { AuthUserContext } from 'src/context/AuthUserContext';
import { db } from 'src/firebase/config';

export default function useBirthdays() {
    const { user } = useContext(AuthUserContext)
    const [listBirthday, setListBirthday] = useState([]);
    const [pastBirthdays, setPastBirthdays] = useState([]);
    const [getBirtdays, setGetBirthdays] = useState(true)

    const orderBirthdays = useCallback( (timenow, birthdayDate, birthday) =>{
        const bdMonth = birthdayDate.getMonth()
        const currMonth = timenow.getMonth()
        const bdDate = birthdayDate.getDate()
        const currDate = timenow.getDate()
    
        const diffTime = birthdayDate.getTime() - timenow.getTime()
        const diffDays = Number((diffTime / (1000 * 3600 * 24)).toFixed())
    
        birthday['remaining_days'] = diffDays
        if ((bdMonth >= currMonth) && bdDate >= currDate) setListBirthday(last => last.concat(birthday))
        else setPastBirthdays(last => last.concat(birthday))

    },[])

    
    useEffect(() => {
        if (getBirtdays) {
            const docRef = collection(db, `birthday_${user.uid}`);
            const q = query(docRef, orderBy('birthdayDate', 'asc'))
            const currDate = new Date()
            currDate.setYear(2000); // set the same year to birthday list
            getDocs(q).then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    const timestamp = doc.data().birthdayDate.seconds * 1000
                    orderBirthdays(currDate, new Date(timestamp), { id: doc.id, ...doc.data() })
                })
    
            });
            setGetBirthdays(false);
        }
    }, [getBirtdays])


    return {listBirthday, pastBirthdays, setGetBirthdays}

}