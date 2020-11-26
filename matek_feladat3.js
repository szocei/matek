// Írj egy függvényt, ami a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, 
//nyolcas, és tizenhatos számrendszerbe is! 
//Ezeket az értékeket pedig egy objectbe adja vissza! A property-k neve legyen: binary, octal, hexa.

function konvert (decnum) {
  console.log( {
     binary:
     binarynum = '0b'+ Number(decnum).toString(2),
     octal: 
     octalnum= '0o' + Number(decnum).toString(8),
     hexa: 
     hexnum = '0x'+ Number(decnum).toString(16)
        });
}
konvert (100);