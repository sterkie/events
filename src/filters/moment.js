import moment from "moment";

export default value => {
  return moment(value).format("MMMM Do YYYY");
};
