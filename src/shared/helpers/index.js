

const getAgePerson = ({seconds}) => {
    if (seconds){
        let age = ''
        const timestamp = seconds * 1000;
        const birthDate = new Date(timestamp);
        let today = new Date();
        age = today.getFullYear() - birthDate.getFullYear();
        if (age > 0) return `${age} Years`

        age = (birthDate.getMonth() - today.getMonth());
        if (age != 0) return `${age} Months`

        age = today.getDate() - birthDate.getDate()
        return `${age} Days`
    }
}

export {getAgePerson}