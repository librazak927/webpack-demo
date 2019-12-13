function padLeft(value) {
        return value < 10 ? "0" + value : value;
}

export function futureTime() {
        let date = new Date();
        let year = date.getFullYear();
        let month = padLeft(date.getMonth() + 1)
        let day = padLeft(date.getDate()+1);//明天
        let hour = padLeft(date.getHours());

        hour = Number(hour);
        
        if (hour > 6 && hour < 18) {
                hour = "06";
        } else if (hour > 18 && hour < 23) {
                hour = "18";
        } else {
                hour = "06";
        }

        return year + "-" + month + "-" + day + "T" + hour + ":00:00";
}

