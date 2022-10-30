function decrypt(data) {
  return `decrypted ${data}`;
}
function read(data) {
  const decryptedData = decrypt(data);
  return decryptedData;
}

module.exports = {
  read,
};
