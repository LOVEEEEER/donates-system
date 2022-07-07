import moment from "moment";

const changeDateFormat = (date) => {
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
};

export default changeDateFormat;
