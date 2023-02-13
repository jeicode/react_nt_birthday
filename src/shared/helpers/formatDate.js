import moment from "moment";

const formatDate = ({ date, timestamp, format = "MM/DD/YYYY" }) => {
    if (date) {
        let dateFormated;
        if (timestamp) dateFormated = moment.unix(date / 1000).format(format)
        else dateFormated = moment(date).format(format)
        return dateFormated
    }
    return ""
}


export {formatDate}