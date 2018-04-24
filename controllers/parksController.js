
const config = require('../config/dbConfig');
let myKey = config.My_KEY;


const dcUrl = `https://developer.nps.gov/api/v1/parks/?stateCode=DC&api_key=${myKey}`
const caUrl =`https://developer.nps.gov/api/v1/parks/?stateCode=CA&api_key=${myKey}`
const alUrl =`https://developer.nps.gov/api/v1/parks/?stateCode=Al&fields=images&api_key=${myKey}`
const akUrl= `https://developer.nps.gov/api/v1/parks/?stateCode=Ak&api_key=${myKey}`
const arUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=AR&api_key=${myKey}`
const azUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=Az&api_key=${myKey}`
const coUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=CO&api_key=${myKey}`
const ctUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=CT&api_key=${myKey}`
const deUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=DE&api_key={myKey}`
const flUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=fl&api_key=${myKey}`
const gaUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=ga&api_key=${myKey}`
const hiUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=hi&api_key=${myKey}`
const idUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=ID&api_key=${myKey}`
const inUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=IN&api_key=${myKey}`
const ilUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=IL&api_key=${myKey}`
const iaUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=IA&api_key=${myKey}`
const ksUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=KS&api_key=${myKey}`
const kyUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=KY&api_key=${myKey}`
const laUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=LA&api_key=${myKey}`
const meUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=ME&api_key=${myKey}`
const mdUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=MD&api_key=${myKey}`
const maUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=MA&api_key=${myKey}`
const miUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=MI&api_key=${myKey}`
const mnUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=MN&api_key=${myKey}`
const msUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=MS&api_key=${myKey}`
const moUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=MO&api_key=${myKey}`
const mtUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=MT&api_key=${myKey}`
const neUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=NE&api_key=${myKey}`
const nvUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=NV&api_key=${myKey}`
const nhUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=NH&api_key=${myKey}`
const njUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=NJ&api_key=${myKey}`
const nmUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=NM&api_key=${myKey}`
const nyUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=NY&api_key=${myKey}`
const ncUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=NC&api_key=${myKey}`
const ndUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=ND&api_key=${myKey}`
const ohUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=OH&api_key=${myKey}`
const okUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=OK&api_key=${myKey}`
const orUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=OR&api_key=${myKey}`
const paUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=PA&api_key=${myKey}`
const riUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=RI&api_key=${myKey}`
const scUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=SC&api_key=${myKey}`
const sdUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=SD&api_key=${myKey}`
const tnUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=TN&api_key=${myKey}`
const txUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=TX&api_key=${myKey}`
const utUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=UT&api_key=${myKey}`
const vtUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=VT&api_key=${myKey}`
const vaUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=VA&api_key=${myKey}`
const waUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=WA&api_key=${myKey}`
const wvUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=WV&api_key=${myKey}`
const wiUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=WI&api_key=${myKey}`
const wyUrl=`https://developer.nps.gov/api/v1/parks/?stateCode=WY&api_key=${myKey}`



const fetch = require("node-fetch");



const notesDB = require('../models/notes');


module.exports = {
showFavorites(req, res, next) {
  notesDB.getAllFavorites()
    .then(favorites => {
      res.locals.favorites = favorites;
      next();
    })
    .catch(err=> {
      next(err);
    })
},


Create(req, res, next) {
notesDB.createFavorite(req.body)
    .then(favorite => {
      res.locals.favorite = favorite;
      next();
    })
    .catch(err=> {
      next(err);
    })
},


DC(req,res,next) {

  fetch(dcUrl)
   .then((data) => {
    return data.json()
      })
    .then(data => {
      res.locals.data = data.data
    next();
    })
    .catch(err => next(err));
  },

// oneState(req,res,next) {
// console.log(req.body)
//   fetch(`https://developer.nps.gov/api/v1/parks/?stateCode=${req.body.stateCode}&api_key=LTbejI0NltNTgkxg4CRNGkRSLpLc6E1Jch2ZLyGS`)
//    .then((oneState) => {
//     return oneState.json()
//       })
//     .then(oneState => {
//       res.locals.oneState = oneState.data
//     next();
//     })
//     .catch(err => next(err));
//   },




  onePark (req,res,next) {
   console.log('inside onePark: ', req.body)

   fetch(`https://developer.nps.gov/api/v1/parks/?parkCode=${req.body.parkCode}&api_key=${myKey}`)
    .then((one) => {
     return one.json()
    })
     .then(one => {
      console.log('this is one.data: ', one.data)
       res.locals.one = one.data
       next();
     })
      .catch(err => next(err));
  },

CA(req,res,next) {
  fetch(caUrl)
   .then((cali) => {
    return cali.json()
      })
    .then(cali => {
      res.locals.cali = cali.data
    next();
    })
    .catch(err => next(err));
  },

  AK(req,res,next) {
  fetch(akUrl)
   .then((ak) => {
    return ak.json()
      })
    .then(ak => {
      res.locals.ak = ak.data
    next();
    })
    .catch(err => next(err));
  },


AL(req,res,next) {
  fetch(alUrl)
   .then((al) => {
    return al.json()
      })
    .then(al => {
      res.locals.al = al.data
    next();
    })
    .catch(err => next(err));
  },

AZ(req,res,next) {
  fetch(azUrl)
   .then((az) => {
    return az.json()
      })
    .then(az => {
      res.locals.az = az.data
    next();
    })
    .catch(err => next(err));
  },




AR(req,res,next) {
  fetch(arUrl)
   .then((ar) => {
    return ar.json()
      })
    .then(ar => {
      res.locals.ar = ar.data
    next();
    })
    .catch(err => next(err));
  },

  CO(req,res,next) {
    console.log(req.body)
  fetch(coUrl)
   .then((co) => {
    return co.json()
      })
    .then(co => {
      res.locals.co = co.data
    next();
    })
    .catch(err => next(err));
  },

CT(req,res,next) {
  fetch(ctUrl)
   .then((ct) => {
    return ct.json()
      })
    .then(ct => {
      res.locals.ct = ct.data
    next();
    })
    .catch(err => next(err));
  },

  DE(req,res,next) {
  fetch(deUrl)
   .then((de) => {
    return de.json()
      })
    .then(de => {
      res.locals.de = de.data
    next();
    })
    .catch(err => next(err));
  },

FL(req,res,next) {
  fetch(flUrl)
   .then((fl) => {
    return fl.json()
      })
    .then(fl => {
      res.locals.fl = fl.data
    next();
    })
    .catch(err => next(err));
  },

GA(req,res,next) {
  fetch(gaUrl)
   .then((ga) => {
    return ga.json()
      })
    .then(ga => {
      res.locals.ga = ga.data
    next();
    })
    .catch(err => next(err));
  },

HI(req,res,next) {
  fetch(hiUrl)
   .then((hi) => {
    return hi.json()
      })
    .then(hi => {
      res.locals.hi = hi.data
    next();
    })
    .catch(err => next(err));
  },

ID(req,res,next) {
  fetch(idUrl)
   .then((id) => {
    return id.json()
      })
    .then(id => {
      res.locals.id = id.data
    next();
    })
    .catch(err => next(err));
  },

IN(req,res,next) {
  fetch(inUrl)
   .then((IN) => {
    return IN.json()
      })
    .then(IN => {
      res.locals.IN= IN.data
    next();
    })
    .catch(err => next(err));
  },

  IL(req,res,next) {
  fetch(ilUrl)
   .then((il) => {
    return il.json()
      })
    .then(il => {
      res.locals.il= il.data
    next();
    })
    .catch(err => next(err));
  },

  IA(req,res,next) {
  fetch(iaUrl)
   .then((ia) => {
    return ia.json()
      })
    .then(ia => {
      res.locals.ia= ia.data
    next();
    })
    .catch(err => next(err));
  },
  KS(req,res,next) {
  fetch(ksUrl)
   .then((ks) => {
    return ks.json()
      })
    .then(ks => {
      res.locals.ks= ks.data
    next();
    })
    .catch(err => next(err));
  },
  LA(req,res,next) {
  fetch(laUrl)
   .then((la) => {
    return la.json()
      })
    .then(la => {
      res.locals.la= la.data
    next();
    })
    .catch(err => next(err));
  },
  KY(req,res,next) {
  fetch(kyUrl)
   .then((ky) => {
    return ky.json()
      })
    .then(ky => {
      res.locals.ky= ky.data
    next();
    })
    .catch(err => next(err));
  },
  ME(req,res,next) {
  fetch(meUrl)
   .then((me) => {
    return me.json()
      })
    .then(me => {
      res.locals.me= me.data
    next();
    })
    .catch(err => next(err));
  },
MD(req,res,next) {
  fetch(mdUrl)
   .then((md) => {
    return md.json()
      })
    .then(md => {
      res.locals.md= md.data
    next();
    })
    .catch(err => next(err));
  },
  MA(req,res,next) {
  fetch(maUrl)
   .then((ma) => {
    return ma.json()
      })
    .then(ma => {
      res.locals.ma= ma.data
    next();
    })
    .catch(err => next(err));
  },
MI(req,res,next) {
  fetch(miUrl)
   .then((mi) => {
    return mi.json()
      })
    .then(mi => {
      res.locals.mi= mi.data
    next();
    })
    .catch(err => next(err));
  },
  MN(req,res,next) {
  fetch(mnUrl)
   .then((mn) => {
    return mn.json()
      })
    .then(mn => {
      res.locals.mn= mn.data
    next();
    })
    .catch(err => next(err));
  },
  MS(req,res,next) {
  fetch(msUrl)
   .then((ms) => {
    return ms.json()
      })
    .then(ms => {
      res.locals.ms= ms.data
    next();
    })
    .catch(err => next(err));
  },
MO(req,res,next) {
  fetch(moUrl)
   .then((mo) => {
    return mo.json()
      })
    .then(mo => {
      res.locals.mo= mo.data
    next();
    })
    .catch(err => next(err));
  },

MT(req,res,next) {
  fetch(mtUrl)
   .then((mt) => {
    return mt.json()
      })
    .then(mt => {
      res.locals.mt= mt.data
    next();
    })
    .catch(err => next(err));
  },
  NE(req,res,next) {
  fetch(neUrl)
   .then((ne) => {
    return ne.json()
      })
    .then(ne => {
      res.locals.ne= ne.data
    next();
    })
    .catch(err => next(err));
  },
  NV(req,res,next) {
  fetch(nvUrl)
   .then((nv) => {
    return nv.json()
      })
    .then(nv => {
      res.locals.nv= nv.data
    next();
    })
    .catch(err => next(err));
  },
  NH(req,res,next) {
  fetch(nhUrl)
   .then((nh) => {
    return nh.json()
      })
    .then(nh => {
      res.locals.nh= nh.data
    next();
    })
    .catch(err => next(err));
  },
NJ(req,res,next) {
  fetch(njUrl)
   .then((nj) => {
    return nj.json()
      })
    .then(nj => {
      res.locals.nj= nj.data
    next();
    })
    .catch(err => next(err));
  },

NM(req,res,next) {
  fetch(nmUrl)
   .then((nm) => {
    return nm.json()
      })
    .then(nm => {
      res.locals.nm= nm.data
    next();
    })
    .catch(err => next(err));
  },
  NY(req,res,next) {
  fetch(nyUrl)
   .then((ny) => {
    return ny.json()
      })
    .then(ny => {
      res.locals.ny= ny.data
    next();
    })
    .catch(err => next(err));
  },
NC(req,res,next) {
  fetch(mtUrl)
   .then((nc) => {
    return nc.json()
      })
    .then(nc => {
      res.locals.nc= nc.data
    next();
    })
    .catch(err => next(err));
  },
ND(req,res,next) {
  fetch(ndUrl)
   .then((nd) => {
    return nd.json()
      })
    .then(nd => {
      res.locals.nd= nd.data
    next();
    })
    .catch(err => next(err));
  },
  OH(req,res,next) {
  fetch(ohUrl)
   .then((oh) => {
    return oh.json()
      })
    .then(oh => {
      res.locals.oh= oh.data
    next();
    })
    .catch(err => next(err));
  },
  OK(req,res,next) {
  fetch(okUrl)
   .then((ok) => {
    return ok.json()
      })
    .then(ok => {
      res.locals.ok= ok.data
    next();
    })
    .catch(err => next(err));
  },
  OR(req,res,next) {
  fetch(orUrl)
   .then((or) => {
    return or.json()
      })
    .then(or => {
      res.locals.or= or.data
    next();
    })
    .catch(err => next(err));
  },
  PA(req,res,next) {
  fetch(paUrl)
   .then((pa) => {
    return pa.json()
      })
    .then(pa => {
      res.locals.pa= pa.data
    next();
    })
    .catch(err => next(err));
  },
  RI(req,res,next) {
  fetch(riUrl)
   .then((ri) => {
    return ri.json()
      })
    .then(ri => {
      res.locals.ri= ri.data
    next();
    })
    .catch(err => next(err));
  },
  SC(req,res,next) {
  fetch(scUrl)
   .then((sc) => {
    return sc.json()
      })
    .then(sc => {
      res.locals.sc= sc.data
    next();
    })
    .catch(err => next(err));
  },
  SD(req,res,next) {
  fetch(sdUrl)
   .then((sd) => {
    return sd.json()
      })
    .then(sd => {
      res.locals.sd= sd.data
    next();
    })
    .catch(err => next(err));
  },
  TN(req,res,next) {
  fetch(tnUrl)
   .then((tn) => {
    return tn.json()
      })
    .then(tn => {
      res.locals.tn= tn.data
    next();
    })
    .catch(err => next(err));
  },
  TX(req,res,next) {
  fetch(txUrl)
   .then((tx) => {
    return tx.json()
      })
    .then(tx => {
      res.locals.tx= tx.data
    next();
    })
    .catch(err => next(err));
  },
  UT(req,res,next) {
  fetch(utUrl)
   .then((ut) => {
    return ut.json()
      })
    .then(ut => {
      res.locals.ut= ut.data
    next();
    })
    .catch(err => next(err));
  },
  VT(req,res,next) {
  fetch(vtUrl)
   .then((vt) => {
    return vt.json()
      })
    .then(vt => {
      res.locals.vt= vt.data
    next();
    })
    .catch(err => next(err));
  },
  VA(req,res,next) {
  fetch(vaUrl)
   .then((va) => {
    return va.json()
      })
    .then(va => {
      res.locals.va= va.data
    next();
    })
    .catch(err => next(err));
  },
  WA(req,res,next) {
  fetch(waUrl)
   .then((wa) => {
    return wa.json()
      })
    .then(wa => {
      res.locals.wa= wa.data
    next();
    })
    .catch(err => next(err));
  },
  WV(req,res,next) {
  fetch(wvUrl)
   .then((wv) => {
    return wv.json()
      })
    .then(wv => {
      res.locals.wv= wv.data
    next();
    })
    .catch(err => next(err));
  },
  WI(req,res,next) {
  fetch(wiUrl)
   .then((wi) => {
    return wi.json()
      })
    .then(wi => {
      res.locals.wi= wi.data
    next();
    })
    .catch(err => next(err));
  },
  WY(req,res,next) {
  fetch(wyUrl)
   .then((wy) => {
    return wy.json()
      })
    .then(wy => {
      res.locals.wy= wy.data
    next();
    })
    .catch(err => next(err));
  },
};
