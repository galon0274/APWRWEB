console.log('start item page');
// 1. Retrieve the CSRF Token from the template
const csrfTokenElement = document.getElementById('csrf-token');
const CSRF_TOKEN = csrfTokenElement ? JSON.parse(csrfTokenElement.textContent) : null;
let coItemsList = [];
/*
const pList = [];
const cartList = [];
let coItemsList = [];
const instTypeA11 = 1800;
const instTypeA22 = 2000;
const instTypeB11 = 2200;
const instTypeB22 = 2400;
let includePrice = 0;

let pid = 100;
let itemName = 'התקנת עמדת טעינה לרכב חדש';
let picList = 'evgen.jpg';
let description = 'ברשותי עמדת טעינה - מעוניין בהתקנה בלבד';
let fList = ['התקנה עפ"י תקנות החשמל','התקנה ע"י צוות מוסמך', 'מענה מותאם לבתים משותפים', 'צרו קשר לפרטים'];
let cost = 0;
let price = 0;
let instPrice = instTypeA22;

pList[0] = new pItem(pid, itemName, picList, description, fList, cost, price, instPrice);

pid = 101;
itemName = 'עמדת טעינה חכמה - ADVICE';
picList = 'advice11a.jpg';
description = 'עמדת טעינה חכמה מבית ADVICE, בעלת יכולת חיבור למערכת ניהול אנרגיה';
fList = ['העמדה המומלצת לבנייני מגורים', 'הגנה מפני זליגת DC - אין צורך בפחת סוג B', 'הספק 11KW', 'תומכת בממשק ניהול OCPP1.6'];
cost = 2280;
price = 2650;
instPrice = instTypeA11;

pList[1] = new pItem(pid, itemName, picList, description, fList, cost, price, instPrice);

pid = 102;
itemName = 'עמדת טעינה חכמה - ADVICE';
picList = 'advice11newb.png';
description = 'עמדת טעינה חדשנית, בעלת יכולות הגנה מורחבות וניהול אנרגיה';
fList = ['עמדה חכמה עם אפליקציה בעברית','כבל TYPE2 באורך 5 מ','הספק 11KW','אחריות יצרן - שנתיים'];
cost = 2280;
price = 2650;
instPrice = instTypeA11;

pList[2] = new pItem(pid, itemName, picList, description, fList, cost, price, instPrice);

pid = 103;
itemName = 'עמדת טעינה חכמה - ABB';
picList = 'abb1.jpg';
description = 'עמדת טעינה מבית המותג האירופאי ABB, בעלת הספק של 22KW';
fList = ['הספק 22KW', 'מחבר Type2','מתאים לכל סוגי הרכבים'];
cost = 0;
price = 3600;
instPrice = instTypeA22;

pList[3] = new pItem(pid, itemName, picList, description, fList, cost, price, instPrice);


function pItem(pid, itemName, picList, description, fList, cost, price, instPrice) {
    this.pid = pid;
    this.itemName = itemName;
    this.picList = picList;
    this.description = description;
    this.fList = fList;
    this.cost = cost;
    this.price = price;
    this.instPrice = instPrice;
}
*/
let itemObj = {};
function getItemData() {
    console.log('start get item data');
    apwrPageSetup();
    console.log('item data is before ajx ', item_data);
    $.ajax({
        data: {

        },
        type: 'POST',
        url: '/getPList'
    })
        .done(function (data) {
            console.log('Products List ', data);
            pList = data;
            console.log('Products pList ', pList);
            let nuberOfItems = pList.length;
            let itemIndex = findItem(item_data, pList);
            console.log('nuberOfItems ', nuberOfItems);
            console.log('itemIndex is  ', itemIndex);
            itemObj = pList[itemIndex];
            console.log('itemObj ', itemObj);
            createItemDetailFrame(pList[itemIndex]);
    });
    event.preventDefault();
}
function findItem(sid, pList) {
    let itemIndex = -1;
    for (let i = 0; i < pList.length; i++) {
        if (pList[i].sid == sid) {
            itemIndex = i;
            return itemIndex;
        }
    }
}
function createItemDetailFrame(item_data) {
    let centerE = document.getElementById('row3CenterId');
    console.log('row1 ele ', item_data);

    let frameE = document.createElement('div');
    frameE.classList.add('itemDetailsFrame');
    frameE.id = 'itemDetailsFrameId'
    centerE.appendChild(frameE);

    let titleE = document.createElement('div');
    titleE.classList.add('itemDetailsTitle');
    frameE.appendChild(titleE);

    //let hdrTitleE = document.createElement('p');
    // hdrTitleE.classList.add('itemDetailsHdr');
    // hdrTitleE.id = 'itemTitleId';
    //titleE.appendChild(hdrTitleE);
            //let txtNode = document.createTextNode('כותרת ראשית - פריט ' + itemNumber);
    let txtNode = document.createTextNode(item_data.name);
    titleE.appendChild(txtNode);
    // elVertCenter(titleE, hdrTitleE);

            // Create Item Row 1
    let itemRow1E = document.createElement('div');
    itemRow1E.classList.add('itemDetailsRow1');
    frameE.appendChild(itemRow1E);
    let itemRow1PicE = document.createElement('div');
    itemRow1PicE.classList.add('itemDetailsRow1Pic');
    itemRow1E.appendChild(itemRow1PicE);
    let picWrapE = document.createElement('div');
    picWrapE.classList.add('itemDetailsPicWrap');
    picWrapE.id = 'itemPicId';
    picWrapE.dataset.pic2pr = 0;
    itemRow1PicE.appendChild(picWrapE);
    let itemPicList = item_data.picList;
    console.log('itemPicList ', itemPicList);
    createItemGallery(picWrapE, itemPicList);


    // // let urlPath =  window.location.href;
    // let urlPath =  window.location.origin;
    // console.log('urlPath ',urlPath);
    // let picPath = urlPath + '/static/imgs/' + pList[item_data - 100].picList;
    // console.log('picPath ',picPath);
    // picWrapE.style.backgroundImage = `url(${picPath})`;
    //
    //         //picWrapE.style.backgroundImage = `url("static/imgs/abb1.jpg")`;
    // picWrapE.style.backgroundSize = 'cover';
    // picWrapE.style.backgroundPosition = 'center';
    // picWrapE.style.backgroundRepeat = 'no-repeat';

    let itemRow1DataE = document.createElement('div');
    itemRow1DataE.classList.add('itemDetailsRow1Data');
    itemRow1DataE.id = 'itemDataId';
    itemRow1E.appendChild(itemRow1DataE);
    // let itemRow1DataContE = document.createElement('div');
    // itemRow1DataContE.classList.add('itemRow1DataCont');
    // itemRow1DataE.appendChild(itemRow1DataContE);
    // let itemRow1stdParE = document.createElement('p');
    // itemRow1stdParE.classList.add('stdPar');
    // itemRow1stdParE.id = 'itemParId';
    // itemRow1DataContE.appendChild(itemRow1stdParE);
            // txtNode = document.createTextNode(' מוצר מספר ' + itemNumber + ' - תיאור כללי');
    txtNode = document.createTextNode(item_data.description);
    itemRow1DataE.appendChild(txtNode);

    let fListE = document.createElement('ul');
    fListE.classList.add('itemDetailsfList');
    itemRow1DataE.appendChild(fListE);
    let numOfFeatures = item_data.mainFeatures.length;
    for (let fInd = 0; fInd < numOfFeatures ; fInd++){
                /*
                if (fInd == 0){
                    let fItemE = document.createElement('li');
                } else {
                    fItemE = document.createElement('li');
                }

                 */
        let fItemE = document.createElement('li');
        fItemE.classList.add('itemDetailsli');
        fItemE.id = 'itemf1Id';
        fListE.appendChild(fItemE);

        txtNode = document.createTextNode(item_data.mainFeatures[fInd]);
        fItemE.appendChild(txtNode);
    }
    let ftbId = '';
    let ftbTitle = '';
    let featureList = [];
    // Start Creating Electrical Parameters Table
    ftbId = 'EP';
    ftbTitle = 'נתונים חשמליים';
    featureList = item_data.electricalParams;
    console.log('featureList ', featureList);
    createFTB(frameE, ftbTitle, featureList, ftbId);

    // Start Creating Equipment Table
    ftbId = 'EQ';
    ftbTitle = 'ממשקים וציוד נלווה';
    featureList = item_data.equipment;
    console.log('featureList ', featureList);
    createFTB(frameE, ftbTitle, featureList, ftbId);

    // Start Creating Connectivity Table
    ftbId = 'CON';
    ftbTitle = 'קישוריות ואפליקציות';
    featureList = item_data.connectivity;
    console.log('featureList ', featureList);
    createFTB(frameE, ftbTitle, featureList, ftbId);

    // Start Creating Safety Table
    ftbId = 'SAF';
    ftbTitle = 'בטיחות והגנות';
    featureList = item_data.safety;
    console.log('featureList ', featureList);
    createFTB(frameE, ftbTitle, featureList, ftbId);

    // Start Creating Installation Table
    ftbId = 'INS';
    ftbTitle = 'התקנה, מידות ומשקלים';
    featureList = item_data.instDetails;
    console.log('featureList ', featureList);
    createFTB(frameE, ftbTitle, featureList, ftbId);

    // Start Creating Environment Table
    ftbId = 'ENV';
    ftbTitle = 'תאימות לתקנים ותנאי סביבה';
    featureList = item_data.envConditions;
    console.log('featureList ', featureList);
    createFTB(frameE, ftbTitle, featureList, ftbId);




    // Create Item Row 2 - Proc Options
    // Set 1
    // let serviceType = item_data - 100; /* if serviceTpe = 0 the item is service only */
    let itemRow2E = document.createElement('div');
    itemRow2E.classList.add('itemDetailsRow2');
    frameE.appendChild(itemRow2E);
    // let itemType = item_data.type;

    if (item_data.type == 'service') {
        let extWrapE = document.createElement('div');
        extWrapE.classList.add('stdWrapNoPad');
        itemRow2E.appendChild(extWrapE);

        let stdWrapE = document.createElement('div');
        stdWrapE.classList.add('stdWrap');
        extWrapE.appendChild(stdWrapE);
        let inputE = document.createElement('input');
        inputE.type = 'radio';
        inputE.classList.add('itemRadio');
        stdWrapE.appendChild(inputE);
                //
        inputE.checked = true;
        inputE.dataset.frameNum = 0;
        inputE.dataset.procOp = '1';
        // inputE.dataset.itemType = item_data.type;
                //inputE.addEventListener('click', toggleHdl);
        inputE.id = 'itemRadio' + inputE.dataset.procOp + 'Id';

        let txtWrapE = document.createElement('div');
        txtWrapE.classList.add('txtWrapR');
        stdWrapE.appendChild(txtWrapE);
        let stdTxtE = document.createElement('p');
        stdTxtE.classList.add('idTxt');
        txtNode = document.createTextNode('התקנת עמדת טעינה לרכב חדש');
        txtWrapE.appendChild(stdTxtE);
        stdTxtE.appendChild(txtNode);
        stdTxtE = document.createElement('p');
        stdTxtE.classList.add('idTxtSmall');
        txtNode = document.createTextNode('התקנה סטנדרטית עד 30 מטר');
        txtWrapE.appendChild(stdTxtE);
        stdTxtE.appendChild(txtNode);
        let itemPriceE = document.createElement('p');
        itemPriceE.classList.add('itemPrice');
                // pList[i].price = instTypeA11;
        includePrice = item_data.price2Cell + item_data.instPrice;
        txtNode = document.createTextNode(includePrice.toLocaleString() + ' ש"ח');
        stdWrapE.appendChild(itemPriceE);
        itemPriceE.appendChild(txtNode);

        elVertCenter(stdWrapE, inputE);
        elVertCenter(stdWrapE, itemPriceE);
        elVertCenter(itemRow2E, extWrapE);

                // Set 2
                /*
                stdWrapE = document.createElement('div');
                stdWrapE.classList.add('stdWrap');
                itemRow2E.appendChild(stdWrapE);
                inputE = document.createElement('input');
                inputE.type = 'radio'
                inputE.classList.add('itemRadio');
                stdWrapE.appendChild(inputE);
                //
                inputE.checked = true;
                inputE.dataset.frameNum = itemNumber;
                inputE.dataset.procOp = 2;
                inputE.addEventListener('click', toggleHdl);
                inputE.id = 'item' + itemNumber + 'Radio' + inputE.dataset.procOp + 'Id';

                txtWrapE = document.createElement('div');
                txtWrapE.classList.add('txtWrapR');
                stdWrapE.appendChild(txtWrapE);
                stdTxtE = document.createElement('p');
                stdTxtE.classList.add('stdTxt');
                txtNode = document.createTextNode('התקנת עמדת טעינה - 22KW');
                txtWrapE.appendChild(stdTxtE);
                stdTxtE.appendChild(txtNode);
                stdTxtE = document.createElement('p');
                stdTxtE.classList.add('stdTxtSmall');
                txtNode = document.createTextNode('התקנה סטנדרטית עד 30 מטר');
                txtWrapE.appendChild(stdTxtE);
                stdTxtE.appendChild(txtNode);
                itemPriceE = document.createElement('p');
                itemPriceE.classList.add('itemPrice');
                // calculate price include installation
                // pList[i].price = instTypeA22;
                includePrice = pList[i].price + instTypeA22;
                txtNode = document.createTextNode(includePrice.toLocaleString() + ' ש"ח');
                stdWrapE.appendChild(itemPriceE);
                itemPriceE.appendChild(txtNode);

                 */

    } else {
        let extWrapE = document.createElement('div');
        extWrapE.classList.add('stdWrapNoPad');
        itemRow2E.appendChild(extWrapE);

        let stdWrapE = document.createElement('div');
        stdWrapE.classList.add('stdWrap');
        extWrapE.appendChild(stdWrapE);
        let inputE = document.createElement('input');
        inputE.type = 'radio';
        inputE.classList.add('itemRadio');
        stdWrapE.appendChild(inputE);
                //
        inputE.checked = true;
        inputE.dataset.frameNum = 0;
        inputE.dataset.procOp = '1';
        // inputE.dataset.itemType = item_data.type;
        inputE.addEventListener('click', itemPageToggleHdl);
        inputE.id = 'itemRadio' + inputE.dataset.procOp + 'Id';

        let txtWrapE = document.createElement('div');
        txtWrapE.classList.add('txtWrapR');
        stdWrapE.appendChild(txtWrapE);
        let stdTxtE = document.createElement('p');
        stdTxtE.classList.add('idTxt');
        txtNode = document.createTextNode('רכישת עמדת טעינה - ללא התקנה');
        txtWrapE.appendChild(stdTxtE);
        stdTxtE.appendChild(txtNode);
        stdTxtE = document.createElement('p');
        stdTxtE.classList.add('idTxtSmall');
        txtNode = document.createTextNode('אספקה עם שליח עד הבית');
        txtWrapE.appendChild(stdTxtE);
        stdTxtE.appendChild(txtNode);
        let itemPriceE = document.createElement('p');
        itemPriceE.classList.add('itemPrice');
        txtNode = document.createTextNode(item_data.price2Cell.toLocaleString() + ' ש"ח');
        stdWrapE.appendChild(itemPriceE);
        itemPriceE.appendChild(txtNode);

        elVertCenter(stdWrapE, inputE);
        elVertCenter(stdWrapE, itemPriceE);

                // Set 2
        stdWrapE = document.createElement('div');
        stdWrapE.classList.add('stdWrap');
        stdWrapE.style.marginTop = '0.5em';
        extWrapE.appendChild(stdWrapE);
        inputE = document.createElement('input');
        inputE.type = 'radio'
        inputE.classList.add('itemRadio');
        stdWrapE.appendChild(inputE);
                //
        inputE.checked = false;
        inputE.dataset.frameNum = 0;
        inputE.dataset.procOp = '2';
        // inputE.dataset.itemType = item_data.type;
        inputE.addEventListener('click', itemPageToggleHdl);
        inputE.id = 'itemRadio' + inputE.dataset.procOp + 'Id';

        txtWrapE = document.createElement('div');
        txtWrapE.classList.add('txtWrapR');
        stdWrapE.appendChild(txtWrapE);
        stdTxtE = document.createElement('p');
        stdTxtE.classList.add('idTxt');
        txtNode = document.createTextNode('עמדת טעינה - כולל התקנה והפעלה');
        txtWrapE.appendChild(stdTxtE);
        stdTxtE.appendChild(txtNode);
        stdTxtE = document.createElement('p');
        stdTxtE.classList.add('idTxtSmall');
        txtNode = document.createTextNode('התקנה סטנדרטית עד 30 מטר');
        txtWrapE.appendChild(stdTxtE);
        stdTxtE.appendChild(txtNode);
        itemPriceE = document.createElement('p');
        itemPriceE.classList.add('itemPrice');
                // calculate price without installation
                // includePrice = pList[i].price;
                // calculate price include installation
        opBPrice = item_data.price2Cell + item_data.instPrice;
        txtNode = document.createTextNode(opBPrice.toLocaleString() + ' ש"ח');
        stdWrapE.appendChild(itemPriceE);
        itemPriceE.appendChild(txtNode);

        elVertCenter(stdWrapE, inputE);
        elVertCenter(stdWrapE, itemPriceE);

        elVertCenter(itemRow2E, extWrapE);
    }

    // Create Item Row 3 - TotalPrice and ADD TO Cart
    let itemRow3E = document.createElement('div');
    itemRow3E.classList.add('itemDetailsRow3');
    frameE.appendChild(itemRow3E);

    stdWrapE = document.createElement('div');
    stdWrapE.classList.add('stdWrap');
    itemRow3E.appendChild(stdWrapE);

    txtWrapE = document.createElement('div');
    txtWrapE.classList.add('txtWrapR');
    stdWrapE.appendChild(txtWrapE);

    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('stdTxt');
    txtWrapE.appendChild(stdTxtE);
    txtNode = document.createTextNode('סה"כ לתשלום:');
    stdTxtE.appendChild(txtNode);

    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('totalPrice');
    txtWrapE.appendChild(stdTxtE);
    stdTxtE.id = 'itemTotalPriceId';
    if (item_data.type == 'service') {
        includePrice = item_data.instPrice;
    } else {
        includePrice = item_data.price2Cell;
    }

    txtNode = document.createTextNode(includePrice.toLocaleString() + ' ש"ח');
    stdTxtE.appendChild(txtNode);

    let btnE = document.createElement('button');
    btnE.classList.add('orderBtnH');
    btnE.id = 'itemBtnId';
    btnE.addEventListener('click', addToCart);
    btnE.dataset.pid = item_data.sid;
    btnE.dataset.procType = 'itemOnly';
            // btnE.dataset.frameNum = item_data - 100;
    /*
    let rdE = document.getElementById('itemRadio1Id');
    if (rdE.checked) {
        btnE.dataset.procType = 'itemOnly';
    } else {
        btnE.dataset.procType = 'itemPlusInst';
    }
    console.log('btn procType ', btnE.dataset.procType);

    */

    stdWrapE.appendChild(btnE);
    txtNode = document.createTextNode('לרכישה');
    btnE.appendChild(txtNode);
    elVertCenter(stdWrapE, txtWrapE);
    elVertCenter(stdWrapE, btnE);
    console.log('stdWrapE h data ', stdWrapE.clientHeight);
    console.log('itemRow3E h data ', itemRow3E.clientHeight);
    elVertCenter(itemRow3E, stdWrapE);

}

function createItemGallery(fatherE, picList) {

    let numOfPics= picList.length;

    for (let sNum = 0; sNum < numOfPics; sNum++) {
        let imgE = document.createElement('img');
        imgE.classList.add('imgInGallery');
        let picName = picList[sNum];
        let urlPath =  window.location.host;
        // let picPath = urlPath + '/static/imgs/' + picName;
        let picPath = '/static/shop/img/' + picName;
        console.log('urlPath ', urlPath);
        console.log('picPath ', picPath);
        imgE.src = picPath;
        fatherE.appendChild(imgE);
        if (sNum == 0) {
            imgE.style.display = 'inline';
        }
    }
    let prevE = document.createElement('a');
    prevE.classList.add('prev');
    fatherE.appendChild(prevE);
    //let textNode = document.createTextNode('<');

    let cevPIconE = document.createElement('i');
    cevPIconE.classList.add('fa-solid');
    cevPIconE.classList.add('fa-chevron-right');
    cevPIconE.style.color = '#5EB130';
    cevPIconE.addEventListener('click', itemPrevPicHdl);

    prevE.appendChild(cevPIconE);
    //prevE.addEventListener('click', itemPrevPicHdl);
    //prevE.dataset.frameNum = fNum;

    let nextE = document.createElement('a');
    nextE.classList.add('next');
    fatherE.appendChild(nextE);
    //textNode = document.createTextNode('>');

    let cevNIconE = document.createElement('i');
    cevNIconE.classList.add('fa-solid');
    cevNIconE.classList.add('fa-chevron-left');
    cevNIconE.style.color = '#5EB130';
    cevNIconE.addEventListener('click', itemNextPicHdl);

    nextE.appendChild(cevNIconE);
    //nextE.addEventListener('click', itemNextPicHdl);
    //nextE.dataset.frameNum = fNum;

    let dotWrapE = document.createElement('div');
    dotWrapE.classList.add('dotWrap');
    fatherE.appendChild(dotWrapE);
    for (let dNum = 0; dNum < numOfPics; dNum++) {
        let dotE = document.createElement('span');
        dotE.classList.add('dot');
        dotWrapE.appendChild(dotE);
        if (dNum == 0) {
            dotE.className += ' active';
        }
    }
}

function itemPrevPicHdl(event) {
    // const trigE = event.target;
    // let fNum = Number(trigE.dataset.frameNum);
    // console.log('prev trigE ', trigE, 'fNum ', fNum );
    let delta2pr = -1;
    let fNum = 0;

    itemShowSlide(fNum, delta2pr);
}
function itemNextPicHdl(event) {
    // const trigE = event.target;
    // let fNum = Number(trigE.dataset.frameNum);
    // console.log('next trigE ', trigE, 'fNum ', fNum );
    let delta2pr = 1;
    let fNum = 0;

    itemShowSlide(fNum, delta2pr);
}
function itemShowSlide(fNum, delta2pr) {
    let itemNumber = fNum + 1;
    let picWrapE = document.getElementById('itemPicId');
    let cPic = Number(picWrapE.dataset.pic2pr);
    let pic2pr = cPic + delta2pr;
    console.log('picWrapE ', picWrapE);
    let picList = picWrapE.querySelectorAll('.imgInGallery');
    let dotsList = picWrapE.querySelectorAll('.dot');
    console.log('picList ', picList, 'dotsList ', dotsList);
    let numOfPics = picList.length;
    if (pic2pr >= numOfPics) {
        pic2pr = 0;
    } else if (pic2pr < 0) {
        pic2pr = numOfPics - 1;
    }
    for (let picInd = 0; picInd < numOfPics; picInd++) {
        picList[picInd].style.display = 'none';
        // dots[i].className = dots[i].className.replace(" active", "");
        dotsList[picInd].className = dotsList[picInd].className.replace(' active', '');
    }
    picList[pic2pr].style.display = 'inline';
    dotsList[pic2pr].className += ' active';
    picWrapE.dataset.pic2pr = pic2pr;
    console.log('picList[pic2pr] ', picList[pic2pr]);
}

function itemPageToggleHdl(event){
    const rdE = event.target;
    console.log('selected radio is ', rdE);
    let frameNum = Number(rdE.dataset.frameNum);
    let procType = rdE.dataset.procOp;
    let itemType = rdE.dataset.itemType;
    let btnE = document.getElementById('itemBtnId');

    console.log('rdE.dataset.itemType', rdE.dataset.itemType);
    console.log('rdE.dataset.type', rdE.dataset.type);
    console.log('btnE before tug: ', btnE);
    let parProcType = 0;
    // procType = 1 --> without installation
    // procType = 2 --> with installation
    if (procType == 1) {
        parProcType = 2;
        btnE.dataset.procType = 'itemOnly';
        console.log('btnE after tug: ', btnE);
    } else {
        parProcType = 1;
        btnE.dataset.procType = 'itemPlusInst';
        console.log('btnE after tug: ', btnE);
    }
    const paraRadioE = document.getElementById('itemRadio' + parProcType + 'Id');
    const finalPriceE = document.getElementById('itemTotalPriceId');

    console.log('the paralel radio is ', paraRadioE);

    console.log('rdE before is ', rdE.checked);
    console.log('par before is ', paraRadioE.checked);
    rdE.checked = true;
    paraRadioE.checked = false;
    console.log('rdE after is ', rdE.checked);
    console.log('par after is ', paraRadioE.checked);
    procType = rdE.dataset.procOp;
    console.log('proctype to cell', procType);
    // btnE.dataset.procType = procType;
    let includePrice = 0;
    if (procType == 1) {
        // without installation
        includePrice = itemObj.price2Cell;
        if (itemType == 'service') {
            includePrice = itemObj.instPrice;
        }
    } else {
        // with installation
        includePrice = itemObj.price2Cell + itemObj.instPrice;
        // if ( frameNum-1 == 0) {
        //     includePrice = instTypeA22;
        // }
    }
    finalPriceE.innerHTML = includePrice.toLocaleString() + ' ש"ח';
}

function createFTB(frameE, ftbTitle, featureList, ftbId) {
    if (featureList.length > 0) {
        let itemADE = document.createElement('div');
        itemADE.classList.add('ftbWrap');
        frameE.appendChild(itemADE);
        const tableE = document.createElement('table');
        tableE.classList.add('ftb_table');
        tableE.id = 'ftbTable' + ftbId + 'Id';
        itemADE.appendChild(tableE);
        let trowE = document.createElement('tr');
        trowE.classList.add('ftb_head_tr');
        tableE.appendChild(trowE);
        let theadE = document.createElement('th');
        theadE.classList.add('ftb_th_col1');
        trowE.appendChild(theadE);
        let plusWrapE = document.createElement('div');
        plusWrapE.classList.add('plus_icon');
        //plusWrapE.id = 'plusIcon' + ftbId + 'Id';
        //let icoNum = '1';
        //plusWrapE.dataset.ftbId = ftbId;
        //let textNode = document.createTextNode('-');
        //plusWrapE.appendChild(textNode);
        //plusWrapE.addEventListener('click', toggleRows);
        let iconE = document.createElement('i');
        iconE.classList.add('fa-solid');
        iconE.classList.add('fa-plus');
        iconE.style.color = '#5EB130';
        iconE.id = 'plusIcon' + ftbId + 'Id';
        iconE.dataset.ftbId = ftbId;
        iconE.addEventListener('click', toggleRows);
        plusWrapE.appendChild(iconE);

        //<i className="fa-solid fa-plus"></i>
        theadE.appendChild(plusWrapE);
        theadE = document.createElement('th');
        theadE.classList.add('ftb_th');
        theadE.colSpan = '2';
        theadE.innerHTML = ftbTitle;
        trowE.appendChild(theadE);

        for (let i = 0; i < featureList.length; i++) {
            trowE = document.createElement('tr');
            trowE.classList.add('ftb_tr');
            tableE.appendChild(trowE);
            theadE = document.createElement('td');
            theadE.classList.add('ftb_td_col1');
            // theadE.innerHTML = 'ריק'
            trowE.appendChild(theadE);
            theadE = document.createElement('td');
            theadE.classList.add('ftb_td_col2');
            theadE.innerHTML = featureList[i].fName;
            trowE.appendChild(theadE);
            theadE = document.createElement('td');
            theadE.classList.add('ftb_td_col3');
            theadE.innerHTML = featureList[i].fDescription;
            trowE.appendChild(theadE);
        }

    }

}
function toggleRows(event) {
    console.log('event is ', event);
    const trigE = event.target;
    let ftbId = trigE.dataset.ftbId;
    const plusIconE = document.getElementById('plusIcon' + ftbId + 'Id');
    const trigTableE = document.getElementById('ftbTable'+ ftbId +'Id');
    console.log('plusIconE is ', plusIconE);
    console.log('trigTableE is ', trigTableE);

    const rowsE = trigTableE.querySelectorAll('tr');
    const ftbHdrE = rowsE[0].querySelectorAll('th');
    console.log('rowsE is ', rowsE);
    if (plusIconE.classList.contains('fa-plus')) {
        plusIconE.classList.remove('fa-plus');
        plusIconE.classList.add('fa-minus');
        ftbHdrE[1].style.borderBottom = '2px solid #5EB130';
        for (let i = 1; i < rowsE.length; i++) {
            rowsE[i].style.display = 'table-row';
        }
    } else {
        plusIconE.classList.remove('fa-minus');
        plusIconE.classList.add('fa-plus');
        ftbHdrE[1].style.borderBottom = 'none';
        for (let i = 1; i < rowsE.length; i++) {
            rowsE[i].style.display = 'none';
        }
    }
}

function itemCreateCheckOutFrame(cartList) {
    let centerE = document.getElementById('row3CenterId');
    let coExistE = document.getElementById('checkOutFrameId');
    if (coExistE) {
        coExistE.remove();
    }
    let sendExistE = document.getElementById('senDetailsBlkId');
    if (sendExistE) {
        sendExistE.remove();
    }
    let itemFrameExistE = document.getElementById('itemDetailsFrameId');
    if (itemFrameExistE) {
        itemFrameExistE.remove();
    }


    let checkOutFrameE = document.createElement('div');
    checkOutFrameE.classList.add('checkOutFrame');
    checkOutFrameE.id = 'checkOutFrameId';
    centerE.appendChild(checkOutFrameE);
    // create check out title
    let titleE = document.createElement('p');
    titleE.classList.add('stdTitle');
    checkOutFrameE.appendChild(titleE);
    let textNode = document.createTextNode('סיכום הזמנה');
    titleE.appendChild(textNode);

    coItemsList = [];
    let coIndex = 0;
    let itemIndex = -1;
    let currentItemName = '';
    let currentItemPrice = 0;
    let currentItemInstPrice = 0;
    let orderSumPrice = 0;
    let insType = '';

    for (let i=0; i<cartList.length; i++) {
        insType = cartList[i].serviceType;
        console.log('itemObj is: ', itemObj);
        // itemIndex = findProd(cartList[i].pid);
        currentItemName = itemObj.name;
        currentItemPrice = itemObj.price2Cell;
        currentItemInstPrice = itemObj.instPrice;
        if (insType != 'instOnly'){
            coItemsList[coIndex] = new coItem(currentItemName, currentItemPrice);
            orderSumPrice += currentItemPrice;
            coIndex += 1;
            console.log('service type ',cartList[i].serviceType)
        }

        if (insType == 'itemOnly') {
            currentItemName = 'משלוח עד בית הלקוח';
            currentItemPrice = 0;
            coItemsList[coIndex] = new coItem(currentItemName, currentItemPrice);
            orderSumPrice += currentItemPrice;
            coIndex += 1;
        } else {
            // insType = 2;
            currentItemName = 'סקר אתר לפני התקנה';
            currentItemPrice = 0;
            coItemsList[coIndex] = new coItem(currentItemName, currentItemPrice);
            orderSumPrice += currentItemPrice;
            coIndex += 1;
            currentItemName = 'ביצוע התקנה סטנדרטית עד 30 מטר';
            currentItemPrice = itemObj.instPrice;
            coItemsList[coIndex] = new coItem(currentItemName, currentItemPrice);
            orderSumPrice += currentItemPrice;
            coIndex += 1;
        }
    }
    console.log('coItemsList ', coItemsList);
            //
    let coFrameRowE = document.createElement('div');
    coFrameRowE.classList.add('coRow');
    checkOutFrameE.appendChild(coFrameRowE);
    let numOfWraps = coItemsList.length;
    for (let i= 0; i < numOfWraps; i++){
        creatItemWrap(coFrameRowE, coItemsList, i);
    }



    // Create row num 2 - customer details
    coFrameRowE = document.createElement('div');
    coFrameRowE.classList.add('coRow');
    checkOutFrameE.appendChild(coFrameRowE);

    let stdTxtE = document.createElement('p');
    stdTxtE.classList.add('stdTxtB');
    if (insType == 'itemOnly') {
        textNode = document.createTextNode('כתובת למשלוח');
    } else {
        textNode = document.createTextNode('כתובת ההתקנה');
    }
    coFrameRowE.appendChild(stdTxtE);
    stdTxtE.appendChild(textNode);

    let formE = document.createElement('form');
    coFrameRowE.appendChild(formE);
    let reqId = 'personNameId';
    let reqLabel = 'שם מלא';
    let reqVal = ''
    let reqWidth = 'normal';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'cellphoneId';
    reqLabel = 'מספר נייד';
    reqWidth = 'normal';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'mailAddId';
    reqLabel = 'כתובת מייל';
    reqWidth = 'wide';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);
    formE = document.createElement('form');
    coFrameRowE.appendChild(formE);
    reqId = 'streetAddId';
    reqLabel = 'רחוב';
    reqWidth = 'wide';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'streetNumAddId';
    reqLabel = 'מספר בית';
    reqWidth = 'narrow';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'cityAddId';
    reqLabel = 'עיר';
    reqWidth = 'wide';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);

    // Create row num 3 - payment details
    coFrameRowE = document.createElement('div');
    coFrameRowE.classList.add('coRow');
    checkOutFrameE.appendChild(coFrameRowE);

    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('stdTxtB');
    textNode = document.createTextNode('תנאי תשלום');
    coFrameRowE.appendChild(stdTxtE);
    stdTxtE.appendChild(textNode);

    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('stdTxt');
    textNode = document.createTextNode('עד 10 תשלומים ללא ריבית - בכרטיס אשראי');
    coFrameRowE.appendChild(stdTxtE);
    stdTxtE.appendChild(textNode);

    if (insType == 'itemOnly') {
        stdTxtE = document.createElement('p');
        stdTxtE.classList.add('stdTxt');
        textNode = document.createTextNode('התשלום יבוצע בעת המסירה');
        coFrameRowE.appendChild(stdTxtE);
        stdTxtE.appendChild(textNode);
    } else {
        stdTxtE = document.createElement('p');
        stdTxtE.classList.add('stdTxt');
        textNode = document.createTextNode('מחיר התקנה סופי יקבע לאחר אישור סקר ההתקנה');
        coFrameRowE.appendChild(stdTxtE);
        stdTxtE.appendChild(textNode);

        stdTxtE = document.createElement('p');
        stdTxtE.classList.add('stdTxt');
        textNode = document.createTextNode('במידה והעסקה תבוטל לאחר ביצוע סקר - יחויב הלקוח בעלות של 300 ש"ח');
        coFrameRowE.appendChild(stdTxtE);
        stdTxtE.appendChild(textNode);

        stdTxtE = document.createElement('p');
        stdTxtE.classList.add('stdTxt');
        textNode = document.createTextNode('התשלום יבוצע לאחר ההתקנה');
        coFrameRowE.appendChild(stdTxtE);
        stdTxtE.appendChild(textNode);
    }


    // Create row num 4 - place an order
    coFrameRowE = document.createElement('div');
    coFrameRowE.classList.add('coRow');
    checkOutFrameE.appendChild(coFrameRowE);

    let stdWrapE = document.createElement('div');
    stdWrapE.classList.add('stdWrap');
    coFrameRowE.appendChild(stdWrapE);

    let txtWrapE = document.createElement('div');
    txtWrapE.classList.add('txtWrapR');
    stdWrapE.appendChild(txtWrapE);

    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('stdTxt');
    txtWrapE.appendChild(stdTxtE);
    textNode = document.createTextNode('סה"כ לתשלום:');
    stdTxtE.appendChild(textNode);

    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('totalPrice');
    txtWrapE.appendChild(stdTxtE);
            //stdTxtE.id = 'item' + itemNumber + 'TotalPriceId';

    textNode = document.createTextNode(orderSumPrice.toLocaleString() + ' ש"ח');
    stdTxtE.appendChild(textNode);

    let btnE = document.createElement('button');
    btnE.classList.add('orderBtnH');
    btnE.id = 'orderBtnId';
    btnE.addEventListener('click', createOrder);
    //btnE.dataset.orderItems = coItemsList;
            //btnE.id = 'item' + itemNumber + 'BtnId';
    stdWrapE.appendChild(btnE);
    textNode = document.createTextNode('הזמנה');
    btnE.appendChild(textNode);

    btnE = document.createElement('button');
    btnE.classList.add('orderBtnH');
    btnE.addEventListener('click', returnToItems);
    //btnE.id = 'returnBtnId';
            //btnE.id = 'item' + itemNumber + 'BtnId';
    stdWrapE.appendChild(btnE);
    textNode = document.createTextNode('חזור');
    btnE.appendChild(textNode);

}


function initItemPage() {
    // This code will only run once the template's HTML structure
    // (the DOM) is fully loaded and parsed.
    // let list2p = []
    let dItem = {};
    console.log("Template content is ready! Starting build Item Page");

    const scriptElement = document.getElementById('item-details');

    // Check if the element exists before trying to access its content
    if (scriptElement) {
        // 2. Extract the text content (the JSON string)
        const jsonString = scriptElement.textContent;

        // 3. Parse the JSON string into a usable JavaScript object/array
        try {
            const list2p = JSON.parse(jsonString);
            dItem = list2p;
            // --- Data Manipulation Starts Here ---

            console.log("Successfully retrieved and parsed list2p:", list2p);

            // Example: Accessing the first item (assuming pList is an array)
            // if (Array.isArray(pList) && pList.length > 0) {
            //     console.log("First item in pList:", pList[0]);
            // }

            // Example: Iterate and display some property (assuming pList is an array of objects)
            // pList.forEach(item => {
            //     console.log(`Item ID: ${item.id} | Item Name: ${item.name}`);
            //     // Add logic to manipulate the DOM here
            // });

        } catch (error) {
            console.error("Error parsing JSON data from 'debug-data':", error);
        }
    } else {
        console.error("Could not find script element with ID 'debug-data'. Check your template.");
    }
    console.log('this is dItem', dItem);
    itemObj = dItem;
    createItemDetailFrame(dItem);
    // console.log('this is list2p', pList);
    // createItems(pList);
    // createContactDetails();
}

// Attach the listener to the document
document.addEventListener('DOMContentLoaded', initItemPage);

