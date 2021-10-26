const sendData = () => {
  await axios
    .get(`${DEV_URL}/users/${id}`, {
      headers,
    })
    .then((res) => {
      dataToSend = res.data;
      console.log(dataToSend);
    })
    .catch((e) => {
      console.log(e);
      dataToSend = null;
    });
};
