const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let ixx = await promiseTheaterIXX();
  let vgc = await promiseTheaterVGC();
  let ixxVgc = ixx.concat(vgc);
  let totalMarahTidakMarah = 0;
  ixxVgc.map(ixx => ixx.hasil === emosi && (totalMarahTidakMarah += 1))
  return totalMarahTidakMarah
};

module.exports = {
  promiseOutput,
};
