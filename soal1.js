
const { 
    hitungLuasArea,
    hitungKelilingArea,
    hitungLuasPersegi,
    hitungKelilingPersegi, 
  } = require('./shape');
  
  
  const sisiKotak = 4;
  const luasArea = hitungLuasArea(sisiKotak);
  const kelilingArea = hitungKelilingArea(sisiKotak);
  console.log(`Persegi dengan sisi ${sisiKotak} memiliki luas ${luasArea} dan keliling ${kelilingArea}.`);
  
  const panjangPersegi = 5;
  const lebarPersegi = 6;
  const luasPersegi = hitungLuasPersegi(panjangPersegi, lebarPersegi);
  const kelilingPersegi = hitungKelilingPersegi(panjangPersegi, lebarPersegi);
  console.log(`Persegi panjang dengan panjang ${panjangPersegi} dan lebar ${lebarPersegi} memiliki luas ${luasPersegi} dan keliling ${kelilingPersegi}.`);
  