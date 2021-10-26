import axios from "axios";
const headers = {
  "Content-Type": "application/json",
};
export const sendData = (
  noOfStudents,
  totalClasses,
  expense,
  revenue,
  profit
) => {
  const data = JSON.stringify({
    noOfStudents: noOfStudents,
    totalClasses: totalClasses,
    expense: expense,
    revenue: revenue,
    profit: profit,
  });
  let dataToSend;
  axios
    .post(`${process.env.REACT_APP_DEV_URL}/add/`, data, {
      headers,
    })
    .then((res) => {
      let dataToSend = res.data;
      console.log(dataToSend);
    })
    .catch((e) => {
      console.log(e);
      dataToSend = null;
    });
};
export const getData = async () => {
  let dataToSend;
  await axios
    .get(`${process.env.REACT_APP_DEV_URL}/fetch/`, {
      headers,
    })
    .then((res) => {
      dataToSend = res.data[0];
      return dataToSend;
    })
    .catch((e) => {
      console.log(e);
      dataToSend = null;
    });
  return dataToSend;
};
