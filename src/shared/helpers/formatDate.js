import moment from "moment";

const formatDatePicker = ({ date, timestamp, format = "MM/DD/YYYY" }) => {
    if (date) {
        let dateFormated;
        if (timestamp) dateFormated = moment.unix(date / 1000).format(format)
        else dateFormated = moment(date).format(format)
        return dateFormated
    }
    return ""
}


const formatDate = ({seconds})=> {
    let date = ''
    if (seconds){
        const timestamp = seconds * 1000
        const forDate = new Date(timestamp);
        console.log('%cformatDate.js line:19 forDate', 'color: #007acc;', forDate);
        return moment(forDate).format('LL');
    }
}

export {formatDatePicker, formatDate}