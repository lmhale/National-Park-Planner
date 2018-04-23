
module.exports = {

sendFavorites(req, res) {
  console.log('I send successful responses');
  res.render('favoritesList', {
    data:res.locals.favorites
  })

},



 sendOneFavorite(req, res) {
console.log('is it created')
   res.render('favoritesList', {

    data:res.locals.favorite
});

},


showDC(req, res) {
  res.render('states/DC', {
    data:res.locals.data

    });

},

ShowOnePark(req,res) {
   res.render('test', {
    data:res.locals.one[0],
    // note:[{name:'mynote',comment:'mycomment'}]
   note:res.locals.newNote,
   notes:res.locals.notes
    // notes:res.locals.notes,
    // note:res.locals.newNote

   });

},

ShowOneState(req,res) {
   res.render('state', {
    data:res.locals.oneState

   });

},

showCA(req, res) {
  res.render('states/California', {
    data:res.locals.cali

    });

},

showAK(req, res) {
  res.render('states/Alaska', {
    data:res.locals.ak

    });

},

showAL(req, res) {
  res.render('states/Alabama', {
    data:res.locals.al

    });

},
showAZ(req, res) {
  res.render('states/Arizona', {
    data:res.locals.az

    });

},

showAR(req, res) {
  res.render('states/Arkansas', {
    data:res.locals.ar

    });

},

showCO(req, res) {
  res.render('states/Colorado', {
    data:res.locals.co

    });

},
showCT(req, res) {
  res.render('states/Connecticut', {
    data:res.locals.ct

    });

},
showDE(req, res) {
  res.render('states/Delaware', {
    data:res.locals.de

    });

},
showFL(req, res) {
  res.render('states/Florida', {
    data:res.locals.fl

    });

},
showGA(req, res) {
  res.render('states/Georgia', {
    data:res.locals.ga

    });

},
showHI(req, res) {
  res.render('states/Hawaii', {
    data:res.locals.hi

    });

},
showID(req, res) {
  res.render('states/Idaho', {
    data:res.locals.id

    });

},
showIN(req, res) {
  res.render('states/Indiana', {
    data:res.locals.IN

    });

},

showIL(req, res) {
  res.render('states/Illinois', {
    data:res.locals.il

    });

},

showIA(req, res) {
  res.render('states/Iowa', {
    data:res.locals.ia

    });

},

showKS(req, res) {
  res.render('states/Kansas', {
    data:res.locals.ks

    });

},

showKY(req, res) {
  res.render('states/Kentucky', {
    data:res.locals.ky

    });

},

showLA(req, res) {
  res.render('states/Louisiana', {
    data:res.locals.la

    });

},
showME(req, res) {
  res.render('states/Maine', {
    data:res.locals.me

    });

},
showMD(req, res) {
  res.render('states/Maryland', {
    data:res.locals.md

    });

},
showMA(req, res) {
  res.render('states/Massachusetts', {
    data:res.locals.ma

    });

},
showMI(req, res) {
  res.render('states/Michigan', {
    data:res.locals.mi

    });

},
showMN(req, res) {
  res.render('states/Minnesota', {
    data:res.locals.mn

    });

},
showMS(req, res) {
  res.render('states/Mississipi', {
    data:res.locals.ms

    });

},
showMO(req, res) {
  res.render('states/Missouri', {
    data:res.locals.mo

    });

},
showMT(req, res) {
  res.render('states/Montana', {
    data:res.locals.mt

    });
},
showNE(req, res) {
  res.render('states/Nebraska', {
    data:res.locals.ne

    });
},
showNV(req, res) {
  res.render('states/Nevada', {
    data:res.locals.nv

    });
},
showNH(req, res) {
  res.render('states/NewHampshire', {
    data:res.locals.nh

    });
},
showNJ(req, res) {
  res.render('states/NewJersey', {
    data:res.locals.nj

    });
},
showNM(req, res) {
  res.render('states/NewMexico', {
    data:res.locals.nm

    });
},
showNY(req, res) {
  res.render('states/NewYork', {
    data:res.locals.ny

    });
},
showNC(req, res) {
  res.render('states/NorthCarolina', {
    data:res.locals.nc

    });
},
showND(req, res) {
  res.render('states/NorthDakota', {
    data:res.locals.nd

    });
},
showOH(req, res) {
  res.render('states/Ohio', {
    data:res.locals.oh

    });
},
showOK(req, res) {
  res.render('states/Oklahoma', {
    data:res.locals.ok

    });
},
showOR(req, res) {
  res.render('states/Oregon', {
    data:res.locals.or

    });
},
showPA(req, res) {
  res.render('states/Pennsylvania', {
    data:res.locals.pa

    });
},
showRI(req, res) {
  res.render('states/RhodeIsland', {
    data:res.locals.ri

    });
},
showSC(req, res) {
  res.render('states/SouthCarolina', {
    data:res.locals.sc

    });
},
showSD(req, res) {
  res.render('states/SouthDakota', {
    data:res.locals.sd

    });
},
showNC(req, res) {
  res.render('states/NorthCarolina', {
    data:res.locals.nc

    });
},
showTN(req, res) {
  res.render('states/Tennessee', {
    data:res.locals.tn

    });
},
showTX(req, res) {
  res.render('states/Texas', {
    data:res.locals.tx

    });
},
showUT(req, res) {
  res.render('states/Utah', {
    data:res.locals.ut

    });
},
showVT(req, res) {
  res.render('states/Vermont', {
    data:res.locals.vt

    });
},
showVA(req, res) {
  res.render('states/Virginia', {
    data:res.locals.va

    });
},
showWA(req, res) {
  res.render('states/Washington', {
    data:res.locals.wa

    });
},
showWV(req, res) {
  res.render('states/WestVirginia', {
    data:res.locals.wv

    });
},
showWI(req, res) {
  res.render('states/Wisconsin', {
    data:res.locals.wi

    });
},
showWY(req, res) {
  res.render('states/Wyoming', {
    data:res.locals.wy

    });
},
};



