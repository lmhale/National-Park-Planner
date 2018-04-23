const express = require('express');
const mainController = require('../controllers/parksController');
const views = require('../controllers/viewsController');
const notesDB = require('../models/notes');
const parksRouter = express.Router();


parksRouter.route('/states/DC')
.get(mainController.DC, views.showDC);

parksRouter.route('/states/California')
.get(mainController.CA, views.showCA);

parksRouter.route('/states/Alaska')
.get(mainController.AK, views.showAK);

parksRouter.route('/states/Alabama')
.get(mainController.AL, views.showAL);

parksRouter.route('/states/Arizona')
.get(mainController.AZ, views.showAZ);

parksRouter.route('/states/Arkansas')
.get(mainController.AR, views.showAR);

parksRouter.route('/states/Colorado')
.get(mainController.CO, views.showCO);

parksRouter.route('/states/Connecticut')
.get(mainController.CT, views.showCT);

parksRouter.route('/states/Delaware')
.get(mainController.DE, views.showDE);

parksRouter.route('/states/Florida')
.get(mainController.FL, views.showFL);

parksRouter.route('/states/Georgia')
.get(mainController.GA, views.showGA);

parksRouter.route('/states/Hawaii')
.get(mainController.HI, views.showHI);

parksRouter.route('/states/Idaho')
.get(mainController.ID, views.showID);

parksRouter.route('/states/Indiana')
.get(mainController.IN, views.showIN);

parksRouter.route('/states/Illinois')
.get(mainController.IL, views.showIL);

parksRouter.route('/states/Iowa')
.get(mainController.IA, views.showIA);

parksRouter.route('/states/Kansas')
.get(mainController.KS, views.showKS);

parksRouter.route('/states/Kentucky')
.get(mainController.KY, views.showKY);

parksRouter.route('/states/Louisiana')
.get(mainController.LA, views.showLA);

parksRouter.route('/states/Maine')
.get(mainController.ME, views.showME);

parksRouter.route('/states/Maryland')
.get(mainController.MD, views.showMD);

parksRouter.route('/states/Massachusetts')
.get(mainController.MA, views.showMA);

parksRouter.route('/states/Michigan')
.get(mainController.MI, views.showMI);

parksRouter.route('/states/Mississipi')
.get(mainController.MS, views.showMS);

parksRouter.route('/states/Minnesota')
.get(mainController.MN, views.showMN);

parksRouter.route('/states/Missouri')
.get(mainController.MO, views.showMO);

parksRouter.route('/states/Montana')
.get(mainController.MT, views.showMT);

parksRouter.route('/states/Nebraska')
.get(mainController.NE, views.showNE);

parksRouter.route('/states/Nevada')
.get(mainController.NV, views.showNV);

parksRouter.route('/states/NewHampshire')
.get(mainController.NH, views.showNH);

parksRouter.route('/states/NewJersey')
.get(mainController.NJ, views.showNJ);

parksRouter.route('/states/NewMexico')
.get(mainController.NM, views.showNM);

parksRouter.route('/states/NewYork')
.get(mainController.NY, views.showNY);

parksRouter.route('/states/NorthCarolina')
.get(mainController.NC, views.showNC);

parksRouter.route('/states/NorthDakota')
.get(mainController.ND, views.showND);

parksRouter.route('/states/Ohio')
.get(mainController.OH, views.showOH);

parksRouter.route('/states/Oklahoma')
.get(mainController.OK, views.showOK);

parksRouter.route('/states/Oregon')
.get(mainController.OR, views.showOR);

parksRouter.route('/states/Pennsylvania')
.get(mainController.PA, views.showPA);

parksRouter.route('/states/RhodeIsland')
.get(mainController.RI, views.showRI);

parksRouter.route('/states/SouthCarolina')
.get(mainController.SC, views.showSC);

parksRouter.route('/states/SouthDakota')
.get(mainController.SD, views.showSD);

parksRouter.route('/states/Tennessee')
.get(mainController.TN, views.showTN);

parksRouter.route('/states/Texas')
.get(mainController.TX, views.showTX);

parksRouter.route('/states/Utah')
.get(mainController.UT, views.showUT);

parksRouter.route('/states/Vermont')
.get(mainController.VT, views.showVT);

parksRouter.route('/states/Virginia')
.get(mainController.VA, views.showVA);

parksRouter.route('/states/Washington')
.get(mainController.WA, views.showWA);

parksRouter.route('/states/WestVirginia')
.get(mainController.WV, views.showWV);

parksRouter.route('/states/Wisconsin')
.get(mainController.WI, views.showWI);

parksRouter.route('/states/Wyoming')
.get(mainController.WY, views.showWY);

parksRouter.route('/test')
.post(mainController.onePark, views.ShowOnePark)

parksRouter.route('/new')


parksRouter.route('/favoritesList')
.get(mainController.showFavorites, views.sendFavorites)
.post(mainController.Create, views.sendOneFavorite)
// parksRouter.route('/test')
// .get(mainController.showNotes, views.sendNotes)
// .post(mainController.Create, views.sendCreateNote)
// parksRouter.route('states/state')
// .post(mainController.oneState,views.ShowOneState)



module.exports = parksRouter
