
const hitungLuasArea = (sisi) => {
    return sisi * sisi;
  };
  
const hitungKelilingArea = (sisi) => {
    return 4 * sisi;
  };
  
  const hitungLuasPersegi = (panjang, lebar) => {
    return panjang * lebar;
  };
  
  const hitungKelilingPersegi = (panjang, lebar) => {
    return 2 * (panjang + lebar);
  };
  
  module.exports = {
    hitungLuasArea,
    hitungKelilingArea,
    hitungLuasPersegi,
   hitungKelilingPersegi,
  };
  