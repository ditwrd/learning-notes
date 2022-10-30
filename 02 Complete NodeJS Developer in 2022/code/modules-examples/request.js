function encrypt(data) {
  return `encrypted ${data}`;
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`${encryptedData} send to ${url}`);
}
module.exports = {
  send,
};
