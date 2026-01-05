console.log('start apwr welcome');

let pList = [];
// const cartList = [];
let coItemsList = [];

// 1. Retrieve the CSRF Token from the template
const csrfTokenElement = document.getElementById('csrf-token');
const CSRF_TOKEN = csrfTokenElement ? JSON.parse(csrfTokenElement.textContent) : null;




/*
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
*/


/*
pid = 103;
itemName = 'עמדת טעינה - ABB';
picList = 'abb1.jpg';
description = 'עמדת טעינה חכמה בית המותג האירופי ABB, בעלת הספק של 11KW';
fList = ['תכונה 1', 'תכונה 2','תכונה 3'];
cost = 1250;
price = 1750;
instPrice = instTypeA22;

pList[3] = new pItem(pid, itemName, picList, description, fList, cost, price, instPrice);
*/
/*
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
function getApwrData(){
    console.log('start running function getApwrData');
    apwrPageSetup();
    let row1Center = document.getElementById('row1CenterId');
    row1Center.style.backgroundImage = `url("static/imgs/evImage.jpeg")`;
    row1Center.style.backgroundSize = 'cover';

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
            console.log('nuberOfItems ', nuberOfItems);
            console.log('Products pList in ajax ', pList);
            createItems(pList);
            createContactDetails();
    });
    event.preventDefault();



    // let num = getItemsList();
    //let nuberOfItems = pList.length;
    //console.log('nuberOfItems ', nuberOfItems);
    //console.log('Products pList in welcome ', pList);
    //createItems(nuberOfItems);
    //createContactDetails();
}

function createContactDetails() {
    let centerE = document.getElementById('row3CenterId');
    let wrapE = document.createElement('div');
    wrapE.classList.add('senDetailsBlk');
    wrapE.id = 'senDetailsBlkId';
    centerE.appendChild(wrapE);


    let stdTxtE = document.createElement('p');
    stdTxtE.classList.add('contactPar');
    let txtNode = document.createTextNode('מתלבטים? זקוקים לייעוץ הנדסי?');
    wrapE.appendChild(stdTxtE);
    stdTxtE.appendChild(txtNode);
    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('stdTxtCB');
    wrapE.appendChild(stdTxtE);
    txtNode = document.createTextNode('השאירו פרטים ונחזור אליכם בהקדם');
    stdTxtE.appendChild(txtNode);
    let formE = document.createElement('div');
    formE.classList.add('senDetailsForm');
    formE.id = 'senDetailsFormId';
    wrapE.appendChild(formE);

    let reqId = 'costumerNameId';
    let reqLabel = 'שם מלא';
    let reqVal = ''
    let reqWidth = 'wide';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);

    reqId = 'costumerPhoneId';
    reqLabel = 'מספר טלפון לחזרה';
    reqVal = ''
    reqWidth = 'wide';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);

    let btnE = document.createElement('button');
    btnE.classList.add('orderBtnH');
    //btnE.id = 'item' + itemNumber + 'BtnId';
    btnE.addEventListener('click', sendContacts);
    formE.appendChild(btnE);
    txtNode = document.createTextNode('התקשרו אליי');
    btnE.appendChild(txtNode);

}
function createItems(pList) {
    let itemNumber = 0;
    console.log('start creating frames');

    let numOfItems = pList.length;
    let itemsWrapE = document.getElementById('itemsWrapId');

    for (let i=0 ; i < numOfItems; i++ ){
        itemNumber = i + 1;
    /*    if (i == 0) { */
        let frameE = document.createElement('div');
        frameE.classList.add('itemFrame');
        itemsWrapE.appendChild(frameE);

        let titleE = document.createElement('div');
        titleE.classList.add('itemTitle');
        frameE.appendChild(titleE);

        let hdrTitleE = document.createElement('p');
        hdrTitleE.classList.add('hdrTxt');
        hdrTitleE.id = 'item' + itemNumber + 'TitleId';
        titleE.appendChild(hdrTitleE);
            //let txtNode = document.createTextNode('כותרת ראשית - פריט ' + itemNumber);
        let txtNode = document.createTextNode(pList[i].name);
        hdrTitleE.appendChild(txtNode);
        elVertCenter(titleE, hdrTitleE);

        // Create Item Row 1
        let itemRow1E = document.createElement('div');
        itemRow1E.classList.add('itemRow1');
        frameE.appendChild(itemRow1E);
        let itemRow1PicE = document.createElement('div');
        itemRow1PicE.classList.add('itemRow1Pic');
        itemRow1E.appendChild(itemRow1PicE);
        let picWrapE = document.createElement('div');
        picWrapE.classList.add('picWrap');
        picWrapE.id = 'item' + itemNumber + 'PicId';
        picWrapE.dataset.pic2pr = 0;
        itemRow1PicE.appendChild(picWrapE);
        let itemPicList = pList[i].picList;
        console.log('itemPicList ', itemPicList);
        createGallery(picWrapE, itemPicList, i);
        // let urlPath =  window.location.href;
        // console.log('urlPath ',urlPath);
        // let picPath = urlPath + 'static/imgs/' + pList[i].picList[0];
        // console.log('picPath ',picPath);
        // picWrapE.style.backgroundImage = `url(${picPath})`;
        //
        // //picWrapE.style.backgroundImage = `url("static/imgs/abb1.jpg")`;
        // picWrapE.style.backgroundSize = 'cover';
        // picWrapE.style.backgroundPosition = 'center';
        // picWrapE.style.backgroundRepeat = 'no-repeat';

        let itemRow1DataE = document.createElement('div');
        itemRow1DataE.classList.add('itemRow1Data');
        itemRow1DataE.id = 'item' + itemNumber + 'DataId';
        itemRow1E.appendChild(itemRow1DataE);
        let itemRow1DataContE = document.createElement('div');
        itemRow1DataContE.classList.add('itemRow1DataCont');
        itemRow1DataE.appendChild(itemRow1DataContE);
        let itemRow1stdParE = document.createElement('p');
        itemRow1stdParE.classList.add('stdPar');
        itemRow1stdParE.id = 'item' + itemNumber + 'ParId';
        itemRow1DataContE.appendChild(itemRow1stdParE);
            // txtNode = document.createTextNode(' מוצר מספר ' + itemNumber + ' - תיאור כללי');
        txtNode = document.createTextNode(pList[i].description);
        itemRow1stdParE.appendChild(txtNode);

        let fListE = document.createElement('ul');
        fListE.classList.add('fList');
        itemRow1DataContE.appendChild(fListE);
        let numOfFeatures = pList[i].mainFeatures.length;
        for (let fInd = 0; fInd < numOfFeatures ; fInd++){
            let fItemE = document.createElement('li');
            fItemE.classList.add('li');
            fItemE.id = 'item' + itemNumber + 'f1Id';
            fListE.appendChild(fItemE);

            txtNode = document.createTextNode(pList[i].mainFeatures[fInd]);
            fItemE.appendChild(txtNode);
        }
        let linkContE = document.createElement('div');
        linkContE.classList.add('linkCont');
        itemRow1DataE.appendChild(linkContE);

        let aDlinkE = document.createElement('p');
        aDlinkE.classList.add('stdLink');
        aDlinkE.dataset.pid = pList[i].sid;
        aDlinkE.addEventListener('click', gotoItemPage);
        linkContE.appendChild(aDlinkE);
        txtNode = document.createTextNode('למפרט המלא ...');
        aDlinkE.appendChild(txtNode);

        // Create Item Row 2 - Proc Options
        // Set 1
        let itemRow2E = document.createElement('div');
        itemRow2E.classList.add('itemRow2');
        frameE.appendChild(itemRow2E);
        if (pList[i].type == 'service') {
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
            inputE.dataset.frameNum = itemNumber;
            inputE.dataset.procOp = 1;
            inputE.dataset.itemType = pList[i].type;
            inputE.dataset.itemPrice = pList[i].price2Cell;
            inputE.dataset.instPrice = pList[i].instPrice;
            //inputE.addEventListener('click', toggleHdl);
            inputE.id = 'item' + itemNumber + 'Radio' + inputE.dataset.procOp + 'Id';

            let txtWrapE = document.createElement('div');
            txtWrapE.classList.add('txtWrapR');
            stdWrapE.appendChild(txtWrapE);
            let stdTxtE = document.createElement('p');
            stdTxtE.classList.add('stdTxt');
            txtNode = document.createTextNode('התקנת עמדת טעינה לרכב חדש');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.appendChild(txtNode);
            stdTxtE = document.createElement('p');
            stdTxtE.classList.add('stdTxtSmall');
            txtNode = document.createTextNode('התקנה סטנדרטית עד 30 מטר');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.appendChild(txtNode);
            let itemPriceE = document.createElement('p');
            itemPriceE.classList.add('itemPrice');
            // pList[i].price = instTypeA11;
            includePrice = pList[i].price2Cell + pList[i].instPrice;
            txtNode = document.createTextNode(includePrice.toLocaleString() + ' ש"ח');
            stdWrapE.appendChild(itemPriceE);
            itemPriceE.appendChild(txtNode);

            elVertCenter(stdWrapE, inputE);
            elVertCenter(stdWrapE, itemPriceE);
            elVertCenter(itemRow2E, extWrapE);

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
            inputE.dataset.frameNum = itemNumber;
            inputE.dataset.procOp = 1; // Item Only No Service
            inputE.dataset.itemType = pList[i].type;
            inputE.dataset.itemPrice = pList[i].price2Cell;
            inputE.dataset.instPrice = pList[i].instPrice;
            inputE.addEventListener('click', toggleHdl);
            inputE.id = 'item' + itemNumber + 'Radio' + inputE.dataset.procOp + 'Id';

            let txtWrapE = document.createElement('div');
            txtWrapE.classList.add('txtWrapR');
            stdWrapE.appendChild(txtWrapE);
            let stdTxtE = document.createElement('p');
            stdTxtE.classList.add('stdTxt');
            txtNode = document.createTextNode('רכישת עמדת טעינה - ללא התקנה');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.appendChild(txtNode);
            stdTxtE = document.createElement('p');
            stdTxtE.classList.add('stdTxtSmall');
            txtNode = document.createTextNode('אספקה עם שליח עד הבית');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.appendChild(txtNode);
            let itemPriceE = document.createElement('p');
            itemPriceE.classList.add('itemPrice');
            txtNode = document.createTextNode(pList[i].price2Cell.toLocaleString() + ' ש"ח');
            stdWrapE.appendChild(itemPriceE);
            itemPriceE.appendChild(txtNode);

            elVertCenter(stdWrapE, inputE);
            elVertCenter(stdWrapE, itemPriceE);

            // Set 2
            stdWrapE = document.createElement('div');
            stdWrapE.classList.add('stdWrap');
            extWrapE.appendChild(stdWrapE);
            inputE = document.createElement('input');
            inputE.type = 'radio'
            inputE.classList.add('itemRadio');
            stdWrapE.appendChild(inputE);
            //
            inputE.checked = false;
            inputE.dataset.frameNum = itemNumber;
            inputE.dataset.procOp = 2;
            inputE.dataset.itemType = pList[i].type;
            inputE.dataset.itemPrice = pList[i].price2Cell;
            inputE.dataset.instPrice = pList[i].instPrice;
            inputE.addEventListener('click', toggleHdl);
            inputE.id = 'item' + itemNumber + 'Radio' + inputE.dataset.procOp + 'Id';

            txtWrapE = document.createElement('div');
            txtWrapE.classList.add('txtWrapR');
            stdWrapE.appendChild(txtWrapE);
            stdTxtE = document.createElement('p');
            stdTxtE.classList.add('stdTxt');
            txtNode = document.createTextNode('עמדת טעינה - כולל התקנה והפעלה');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.appendChild(txtNode);
            stdTxtE = document.createElement('p');
            stdTxtE.classList.add('stdTxtSmall');
            txtNode = document.createTextNode('התקנה סטנדרטית עד 30 מטר');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.appendChild(txtNode);
            itemPriceE = document.createElement('p');
            itemPriceE.classList.add('itemPrice');
            // calculate price without installation
            // includePrice = pList[i].price;
            // calculate price include installation
            opBPrice = pList[i].price2Cell + pList[i].instPrice;
            txtNode = document.createTextNode(opBPrice.toLocaleString() + ' ש"ח');
            stdWrapE.appendChild(itemPriceE);
            itemPriceE.appendChild(txtNode);

            elVertCenter(stdWrapE, inputE);
            elVertCenter(stdWrapE, itemPriceE);

            elVertCenter(itemRow2E, extWrapE);
        }

        // Create Item Row 3 - TotalPrice and ADD TO Cart
        let itemRow3E = document.createElement('div');
        itemRow3E.classList.add('itemRow3');
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
        stdTxtE.id = 'item' + itemNumber + 'TotalPriceId';
        if (pList[i].type == 'service') {
            includePrice = pList[i].instPrice;
        } else {
            includePrice = pList[i].price2Cell;
        }

        txtNode = document.createTextNode(includePrice.toLocaleString() + ' ש"ח');
        stdTxtE.appendChild(txtNode);

        let btnE = document.createElement('button');
        btnE.classList.add('orderBtnH');
        btnE.id = 'item' + itemNumber + 'BtnId';
        btnE.addEventListener('click', addToCart);
        btnE.dataset.pid = pList[i].sid;
        btnE.dataset.frameNum = itemNumber;
        let rdE = document.getElementById('item' + itemNumber + 'Radio1Id');
        if (rdE.checked) {
            btnE.dataset.procType = 'itemOnly';
        } else {
            btnE.dataset.procType = 'itemPlusInst';
        }
        console.log('btn procType ', btnE.dataset.procType);

        stdWrapE.appendChild(btnE);
        txtNode = document.createTextNode('לרכישה');
        btnE.appendChild(txtNode);
        elVertCenter(stdWrapE, txtWrapE);
        elVertCenter(stdWrapE, btnE);
        console.log('stdWrapE h data ', stdWrapE.clientHeight);
        console.log('itemRow3E h data ', itemRow3E.clientHeight);
        elVertCenter(itemRow3E, stdWrapE);





/*
        } else {
            frameE = document.createElement('div');
            frameE.classList.add('itemFrame');
            itemsWrapE.appendChild(frameE);

            titleE = document.createElement('div');
            titleE.classList.add('itemTitle');
            frameE.appendChild(titleE);

            hdrTitleE = document.createElement('p');
            hdrTitleE.classList.add('hdrTxt');
            hdrTitleE.id = 'item' + itemNumber + 'TitleId';
            titleE.appendChild(hdrTitleE)
            txtNode = document.createTextNode('כותרת ראשית - פריט ' + itemNumber);
            hdrTitleE.appendChild(txtNode);

            // Create Item Row 1
            itemRow1E = document.createElement('div');
            itemRow1E.classList.add('itemRow1');
            frameE.appendChild(itemRow1E);
            itemRow1PicE = document.createElement('div');
            itemRow1PicE.classList.add('itemRow1Pic');
            itemRow1E.appendChild(itemRow1PicE);
            let picWrapE = document.createElement('div');
            picWrapE.classList.add('picWrap');
            picWrapE.id = 'item' + itemNumber + 'PicId';
            itemRow1PicE.appendChild(picWrapE);
            picWrapE.style.backgroundImage = `url("static/imgs/abb1.jpg")`;
            picWrapE.style.backgroundSize = 'cover';
            picWrapE.style.backgroundPosition = 'center';
            picWrapE.style.backgroundRepeat = 'no-repeat'

            let itemRow1DataE = document.createElement('div');
            itemRow1DataE.classList.add('itemRow1Data');
            itemRow1DataE.id = 'item' + itemNumber + 'DataId';
            itemRow1E.appendChild(itemRow1DataE);
            let itemRow1stdParE = document.createElement('p');
            itemRow1stdParE.classList.add('stdPar');
            itemRow1stdParE.id = 'item' + itemNumber + 'ParId';
            itemRow1DataE.appendChild(itemRow1stdParE);
            txtNode = document.createTextNode(' מוצר מספר ' + itemNumber + ' - תיאור כללי');
            itemRow1stdParE.appendChild(txtNode);

            let fListE = document.createElement('ul');
            fListE.classList.add('fList');
            itemRow1DataE.appendChild(fListE);
            let fItemE = document.createElement('li');
            fItemE.classList.add('li');
            fItemE.id = 'item' + itemNumber + 'f1Id';
            fListE.appendChild(fItemE);

            txtNode = document.createTextNode('תכונה ראשונה ...');
            fItemE.appendChild(txtNode);

            // Create Item Row 2 - Proc Options
            // Set 1
            let itemRow2E = document.createElement('div');
            itemRow2E.classList.add('itemRow2');
            frameE.appendChild(itemRow2E);
            let stdWrapE = document.createElement('div');
            stdWrapE.classList.add('stdWrap');
            itemRow2E.appendChild(stdWrapE);
            let inputE = document.createElement('input');
            inputE.type = 'radio'
            inputE.classList.add('itemRadio');
            stdWrapE.appendChild(inputE);
            let txtWrapE = document.createElement('div');
            txtWrapE.classList.add('txtWrapR');
            stdWrapE.appendChild(txtWrapE);
            let stdTxtE = document.createElement('p');
            stdTxtE.classList.add('stdTxt');
            txtNode = document.createTextNode('רכישת עמדת טעינה - ללא התקנה');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.appendChild(txtNode);
            stdTxtE = document.createElement('p');
            stdTxtE.classList.add('stdTxtSmall');
            txtNode = document.createTextNode('(ללא התקנה)');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.appendChild(txtNode);
            let itemPreiceE = document.createElement('p');
            itemPreiceE.classList.add('itemPrice');
            txtNode = document.createTextNode('5,350 ש"ח');
            stdWrapE.appendChild(itemPreiceE);
            itemPreiceE.appendChild(txtNode);

            // Set 2
            stdWrapE = document.createElement('div');
            stdWrapE.classList.add('stdWrap');
            itemRow2E.appendChild(stdWrapE);
            inputE = document.createElement('input');
            inputE.type = 'radio'
            inputE.classList.add('itemRadio');
            stdWrapE.appendChild(inputE);
            txtWrapE = document.createElement('div');
            txtWrapE.classList.add('txtWrapR');
            stdWrapE.appendChild(txtWrapE);
            stdTxtE = document.createElement('p');
            stdTxtE.classList.add('stdTxt');
            txtNode = document.createTextNode('עמדת טעינה - כולל התקנה והפעלה');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.appendChild(txtNode);
            stdTxtE = document.createElement('p');
            stdTxtE.classList.add('stdTxtSmall');
            txtNode = document.createTextNode('התקנה סטנדרטית עד 30 מטר');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.appendChild(txtNode);
            itemPreiceE = document.createElement('p');
            itemPreiceE.classList.add('itemPrice');
            txtNode = document.createTextNode('5,350 ש"ח');
            stdWrapE.appendChild(itemPreiceE);
            itemPreiceE.appendChild(txtNode);

            // Create Item Row 3 - TotalPrice and ADD TO Cart
            let itemRow3E = document.createElement('div');
            itemRow3E.classList.add('itemRow3');
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
            stdTxtE.classList.add('itemPrice');
            txtWrapE.appendChild(stdTxtE);
            txtNode = document.createTextNode('5,350 ש"ח (כולל מע"מ)');
            stdTxtE.appendChild(txtNode);

            let btnE = document.createElement('button');
            btnE.classList.add('orderBtnH');
            btnE.id = 'item' + itemNumber + 'BtnId';
            stdWrapE.appendChild(btnE);
            txtNode = document.createTextNode('בחר פריט');
            btnE.appendChild(txtNode);

        }
*/
    }
}

function createGallery(fatherE, picList, fNum) {
    let numOfPics= picList.length;
    // let picE = document.createElement('div');
    // picE.classList.add('picSlide');
    // picE.id = 'picSlide' + fNum + 'Id';
    // picE.dataset.pic2pr = 1;
    // fatherE.appendChild(picE);

    for (let sNum = 0; sNum < numOfPics; sNum++) {
        let imgE = document.createElement('img');
        imgE.classList.add('imgInGallery');
        let picName = picList[sNum];
        let urlPath =  window.location.host;
        //let picPath = urlPath + '/static/imgs/' + picName;
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
    // let textNode = document.createTextNode('<');
    let cevPIconE = document.createElement('i');
    cevPIconE.classList.add('fa-solid');
    cevPIconE.classList.add('fa-chevron-right');
    cevPIconE.style.color = '#5EB130';
    cevPIconE.addEventListener('click', prevPicHdl);
    cevPIconE.dataset.frameNum = fNum;

    prevE.appendChild(cevPIconE);

    let nextE = document.createElement('a');
    nextE.classList.add('next');
    fatherE.appendChild(nextE);
    //textNode = document.createTextNode('>');
    let cevNIconE = document.createElement('i');
    cevNIconE.classList.add('fa-solid');
    cevNIconE.classList.add('fa-chevron-left');
    cevNIconE.style.color = '#5EB130';
    cevNIconE.addEventListener('click', nextPicHdl);
    cevNIconE.dataset.frameNum = fNum;
    nextE.appendChild(cevNIconE);
    // nextE.addEventListener('click', nextPicHdl);
    // nextE.dataset.frameNum = fNum;

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

function prevPicHdl(event) {
    const trigE = event.target;
    let fNum = Number(trigE.dataset.frameNum);
    console.log('prev trigE ', trigE, 'fNum ', fNum );
    let delta2pr = -1;

    showSlide(fNum, delta2pr);
}
function nextPicHdl(event) {
    const trigE = event.target;
    let fNum = Number(trigE.dataset.frameNum);
    console.log('next trigE ', trigE, 'fNum ', fNum );
    let delta2pr = 1;

    showSlide(fNum, delta2pr);
}
function showSlide(fNum, delta2pr) {
    let itemNumber = fNum + 1;
    let picWrapE = document.getElementById('item' + itemNumber + 'PicId');
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
/*
function createCheckOutFrame() {
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
    let insType = 0;
    for (let i=0; i<cartList.length; i++) {
        itemIndex = findProd(cartList[i].pid);
        currentItemName = pList[itemIndex].name;
        currentItemPrice = pList[itemIndex].price2Cell;
        currentItemInstPrice = pList[itemIndex].instPrice;
        coItemsList[coIndex] = new coItem(currentItemName, currentItemPrice);
        orderSumPrice += currentItemPrice;
        coIndex += 1;
        console.log('service type ',cartList[i].serviceType)

        if (cartList[i].serviceType == 1) {
            currentItemName = 'משלוח עד בית הלקוח';
            currentItemPrice = 0;
            coItemsList[coIndex] = new coItem(currentItemName, currentItemPrice);
            orderSumPrice += currentItemPrice;
            coIndex += 1;
        } else {
            insType = 2;
            currentItemName = 'סקר אתר לפני התקנה';
            currentItemPrice = 0;
            coItemsList[coIndex] = new coItem(currentItemName, currentItemPrice);
            orderSumPrice += currentItemPrice;
            coIndex += 1;
            currentItemName = 'ביצוע התקנה סטנדרטית עד 30 מטר';
            currentItemPrice = pList[itemIndex].instPrice;
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
    if (insType == 2) {
        textNode = document.createTextNode('כתובת ההתקנה');
    } else {
        textNode = document.createTextNode('כתובת למשלוח');
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

    if (insType == 2) {
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
    } else {
        stdTxtE = document.createElement('p');
        stdTxtE.classList.add('stdTxt');
        textNode = document.createTextNode('התשלום יבוצע בעת המסירה');
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

 */



function presentAproval(data) {
    let centerE = document.getElementById('row3CenterId');
    let coExistE = document.getElementById('checkOutFrameId');
    if (coExistE) {
        coExistE.remove();
    }
    let checkOutFrameE = document.createElement('div');
    checkOutFrameE.classList.add('checkOutFrame');
    // checkOutFrameE.id = 'checkOutFrameId';
    centerE.appendChild(checkOutFrameE);
    // create check out title
    let titleE = document.createElement('p');
    titleE.classList.add('stdTitle');
    checkOutFrameE.appendChild(titleE);
    let textNode = document.createTextNode('הזמנתך התקבלה בהצלחה');
    titleE.appendChild(textNode);

    titleE = document.createElement('p');
    titleE.classList.add('stdTitle');
    checkOutFrameE.appendChild(titleE);
    textNode = document.createTextNode('נציגנו ייצרו קשר לתיאום ההתקנה / המשלוח');
    titleE.appendChild(textNode);

    titleE = document.createElement('p');
    titleE.classList.add('stdTitle');
    checkOutFrameE.appendChild(titleE);
    textNode = document.createTextNode('מספר הזמנה: ' + data);
    titleE.appendChild(textNode);


}
function returnToItems() {
    console.log('Starts return');
    window.open('/', '_self');
    // let itemsWrapE = document.getElementById('itemsWrapId');
    // let coFrameE = document.getElementById('checkOutFrameId');
    // itemsWrapE.style.display = 'flex';
    // coFrameE.style.display = 'none';
    }

function createInput(formE, reqId, reqLabel, reqVal, reqWidth) {
    let inputWrapE = document.createElement('div');
    if (reqWidth == 'wide') {
        inputWrapE.classList.add('stdWideInputWrap');
    } else if (reqWidth == 'narrow') {
        inputWrapE.classList.add('stdNrInputWrap');
    } else {
        inputWrapE.classList.add('stdInputWrap');
    }

    formE.appendChild(inputWrapE);
    let stdInputE = document.createElement('input');
    stdInputE.classList.add('stdInput');
    stdInputE.id = reqId;
    stdInputE.setAttribute('type', 'text');
    stdInputE.value = reqVal;
    // stdInputE.setAttribute('value', 'test');
    let lblE = document.createElement('label');
    lblE.classList.add('stdLabel');
    txtNode = document.createTextNode(reqLabel);
    lblE.setAttribute('for', reqId);
    lblE.appendChild(txtNode);
    inputWrapE.appendChild(lblE);
    inputWrapE.appendChild(stdInputE);
    //inputWrapE.style.width = '20%';


}





function findProd(pid) {
    let prodIndex = 0;
    for(let i=0; i < pList.length; i++) {
        if (pList[i].sid == pid) {
            prodIndex = i;
        }
    }
    return prodIndex;
}


function hideNameLable(){
    console.log('hide name label');
    let txtIn = document.getElementById('costumerNameId').value;
    if (txtIn == '') {
        document.getElementById('nameLableId').style.visibility = 'visible';
    } else {
        document.getElementById('nameLableId').style.visibility = 'hidden';
    }
}

function hideNumberLable(){
    console.log('hide number label');
    let txtIn = document.getElementById('costumerPhoneId').value;
    if (txtIn == '') {
        document.getElementById('numberLableId').style.visibility = 'visible';
    } else {
        document.getElementById('numberLableId').style.visibility = 'hidden';
    }
}
function mngtst() {
    console.log('Starts to manage account');
    window.open( '/apwrMang', '_self');

}


async  function sendContacts() {
    console.log('Starts to send details');
    let items = [];
    let currentItemName = 'בקשה לקבלת ייעוץ הנדסי';
    let currentItemPrice = 0;
    items[0] = new coItem(currentItemName, currentItemPrice);

    const API_URL = '/api/create-order/'; // Define the URL for clarity

    if (!CSRF_TOKEN) {
        console.error("CSRF token is missing. Aborting request.");
        return;
    }

    // Structure the data as an object to send JSON
    const dataToSend = {
        items: items,
        personName: document.getElementById('costumerNameId').value,
        cellphone: document.getElementById('costumerPhoneId').value
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': CSRF_TOKEN
            },
            body: JSON.stringify(dataToSend)
        });

        /*if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Server Error (${response.status}): ${errorData.message}`);
        }
        */


        const responseData = await response.json();
        console.log("SUCCESS. Server acknowledged with message:", responseData.message);

        if (response.ok) {
            // const confNumber = responseData.confirmation_num;
            detailSaved();
        } else {
            const errorData = await response.json();
            throw new Error(`Server Error (${response.status}): ${errorData.message}`);
        }

    } catch (error) {
        console.error("Fetch request failed:", error.message);
    }

    /*
    $.ajax({
        data: {
            items: JSON.stringify(items),
            personName: $('#costumerNameId').val(),
            familyName: '',
            cellphone: $('#costumerPhoneId').val(),
            streetAdd: '',
            streetNumAdd: '',
            cityAdd: ''
        },
        type: 'POST',
        url: '/createOrder'
    })
        .done(function (data) {
            console.log('save details is done', data);
            detailSaved();
    });
    event.preventDefault();

     */
}

function detailSaved(){
    console.log('aqq')
    let centerE = document.getElementById('row3CenterId');
    const sdBlkElement = document.getElementById('senDetailsBlkId');
    sdBlkElement.remove();

    let wrapE = document.createElement('div');
    wrapE.classList.add('senDetailsBlk');
    wrapE.id = 'senDetailsBlkId';
    centerE.appendChild(wrapE);
    let responsePar = document.createElement('p');
    let node = document.createTextNode('פנייתך התקבלה');
    responsePar.appendChild(node);
    wrapE.appendChild(responsePar);
    responsePar.style.fontWeight = 'bold';
    responsePar = document.createElement('p');
    node = document.createTextNode('נציג A-Power ייצור קשר תוך 2 ימי עסקים');
    responsePar.appendChild(node);
    wrapE.appendChild(responsePar);
    responsePar.style.fontWeight = 'bold';

}

function gotoItemPage(event) {
    console.log('start gotoItemPage');
    const trigEv = event.target;
    let pid = trigEv.dataset.pid;
    console.log('pid to load ', pid);
    const reqUrl = window.location.origin + '/itemPage/' + pid + '/';
    window.location.href = reqUrl;
    // history.pushState(null, null, reqUrl);
    // window.open(reqUrl, '_self');

}

function getItemsList() {
    // let pList = [];
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
    });
    event.preventDefault();
}

// Define your function
function initializePage() {
    // This code will only run once the template's HTML structure
    // (the DOM) is fully loaded and parsed.
    // let list2p = []
    console.log("Template content is ready! Starting initialization.");

    // start building the page
    console.log('start Page Setup');
    apwrPageSetup();
    let row1Center = document.getElementById('row1CenterId');
    row1Center.style.backgroundImage = `url("static/shop/img/evImage.jpeg")`;
    row1Center.style.backgroundSize = 'cover';
    // 1. Get the script element using the ID
    const scriptElement = document.getElementById('items-data');

    // Check if the element exists before trying to access its content
    if (scriptElement) {
        // 2. Extract the text content (the JSON string)
        const jsonString = scriptElement.textContent;

        // 3. Parse the JSON string into a usable JavaScript object/array
        try {
            const list2p = JSON.parse(jsonString);
            pList = list2p;
            // --- Data Manipulation Starts Here ---

            console.log("Successfully retrieved and parsed pList:", pList);

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
    // console.log('this is list2p', list2p);
    console.log('this is list2p', pList);
    createItems(pList);
    createContactDetails();
}

// Attach the listener to the document
document.addEventListener('DOMContentLoaded', initializePage);