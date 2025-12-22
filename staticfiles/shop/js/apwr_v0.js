console.log('start run apwr');

const pList = [];
const cartList = [];
let coItemsList = [];
const instTypeAPrice = 2000;
const instTypeBPrice = 2400;
let includePrice = 0;

let pid = 100;
let itemName = 'התקנת עמדת טעינה';
let picList = 'abb1.jpg';
let description = 'קניתי רכב חשמלי וברשותי עמדת טעינה - מעוניין בהתקנה בלבד';
let fList = ['התקנה ע"י צוות מקצועי', 'מתן מענה לבתים משותפים'];
let cost = 1750;
let price = 3250;

pList[0] = new pItem(pid, itemName, picList, description, fList, cost, price);

pid = 101;
itemName = 'עמדת טעינה חכמה - ABB';
picList = 'abb2.jpg';
description = 'עמדת טעינה חכמה מבית המותג האירופאי ABB, בעלת הספק של 22KW';
fList = ['הספק 22KW', 'מחבר Type2','מתאים לכל סוגי הרכבים'];
cost = 1750;
price = 2250;

pList[1] = new pItem(pid, itemName, picList, description, fList, cost, price);

pid = 102;
itemName = 'עמדת טעינה - ABB';
picList = 'abb2.jpg';
description = 'עמדת טעינה חכמה בית המותג האירופי ABB, בעלת הספק של 11KW';
fList = ['תכונה 1', 'תכונה 2','תכונה 3'];
cost = 1250;
price = 1750;

pList[2] = new pItem(pid, itemName, picList, description, fList, cost, price);


function pItem(pid, itemName, picList, description, fList, cost, price) {
    this.pid = pid;
    this.itemName = itemName;
    this.picList = picList;
    this.description = description;
    this.fList = fList;
    this.cost = cost;
    this.price = price;
}

function getApwrData(){
    console.log('start running function getApwrData');
    // media queries
    /*let scrHeight = screen.availHeight;
    let scrWidth = screen.availWidth;
    console.log('height ', scrHeight, 'width ', scrWidth);
    let scrPort = true;
    if (scrHeight > 1.2*scrWidth){
        scrPort = true;
    } else {
        scrPort = false;
    }
    let row1ReqHeight = 0;
    let row2ReqHeight = 0;
    let row3ReqHeight = 0;*/
    /* if (scrPort){
        console.log('Port Screen');
                // Start Styling Body
        row1ReqHeight = 0.15 * scrHeight;
        row2ReqHeight = 0.4 * scrHeight;
        row3ReqHeight = 0.15 * scrHeight;

        document.getElementById('row1CenterId').style.width = '100%';
        document.getElementById('row2CenterId').style.width = '100%';
        document.getElementById('row3CenterId').style.width = '100%';

        document.getElementById('senDetailsBlkId').style.width = '80%';

    } else {
        console.log('Landscape Screen');
        // Start Styling Body
        row1ReqHeight = 0.15 * scrHeight;
        row2ReqHeight = 0.3 * scrHeight;
        row3ReqHeight = 0.15 * scrHeight;

    }
    */

    /*
    let hdrHandle = document.getElementById('hdrMainId');
    let hdrHeight = hdrHandle.clientHeight;

    let HdrBlk1Handle = document.getElementById('hdrBlk1Id');
    let HdrBlk1Height = HdrBlk1Handle.clientHeight;

    let HdrBlk2Handle = document.getElementById('hdrBlk2Id');
    let HdrBlk2Height = HdrBlk2Handle.clientHeight;

    let blk1TopMargin = (hdrHeight - HdrBlk1Height)/2;
    let blk2TopMargin = (hdrHeight - HdrBlk2Height)/2;
    document.getElementById("hdrBlk1Id").style.marginTop = blk1TopMargin + 'px';
    document.getElementById("hdrBlk2Id").style.marginTop = blk2TopMargin + 'px';

     */
    /*
        // Start Styling Row 1
    let row1ParHeight = document.getElementById("row1ParId").clientHeight;
    let reqMargin = (row1ReqHeight - row1ParHeight)/2;
    document.getElementById("row1ParId").style.paddingBlock = reqMargin + 'px';
        // Start Styling Row2

        //document.getElementById('row1Id').style.height = row1Height + 'px';
        //let rightBlock = document.getElementById('rightBlockId');
        //rightBlock.style.alignItems = 'center';
        //let rbHeight = document.getElementById("rightBlockId").clientHeight;
        //let listWrapH = document.getElementById("listWrapId").clientHeight;
        //let topMargin = (rbHeight - listWrapH)/2;
        // document.getElementById('listWrapId').style.marginTop = topMargin + 'px';
    */
    let row1Center = document.getElementById('row1CenterId');
        // leftBlock.style.height = listWrapH + 'px';
    row1Center.style.backgroundImage = `url("static/imgs/evImage.jpeg")`;
    row1Center.style.backgroundSize = 'cover';
    /*
    let listWrapHeight = document.getElementById("listWrapId").clientHeight;
    reqMargin = (row2ReqHeight - listWrapHeight)/2;
    document.getElementById("row2CenterId").style.paddingBlock = reqMargin + 'px';
    */

    // Star Creating Items On Row Number 2

    let nuberOfItems = pList.length;
    createItems(nuberOfItems);





        // Start Styling Row3
    /*
    document.getElementById('parOfSendId').style.fontSize = 'smaller';

    document.getElementById('costumerNameId').style.border = 'solid 1px grey';
    document.getElementById('nameLableId').style.color = 'grey';

    document.getElementById('costumerPhoneId').style.border = 'solid 1px grey';
    document.getElementById('numberLableId').style.color = 'grey';

    document.getElementById('numberWrapId').style.marginRight = '0px';
    document.getElementById('numberWrapId').style.marginTop = '10px';
    let numWrapH = document.getElementById("numberWrapId").clientHeight;

    document.getElementById('sendBtnId').style.height = numWrapH + 'px';
    document.getElementById('sendBtnId').style.marginTop = '10px';
    document.getElementById('sendBtnId').style.width = '13%';
    if (scrWidth < 600) {
        document.getElementById('sendBtnId').style.fontSize = '0.8em';
    } else {
        document.getElementById('sendBtnId').style.fontSize = '1.1em';
    }


    document.getElementById('debugId').style.fontSize = '1em';
    document.getElementById('debugId').innerHTML = 'scrHeight: ' + scrHeight + ' ' + 'scrWidth: ' + scrWidth;
    */

}

function createItems(numOfItems) {
    let itemNumber = 1;
    console.log('start creating frames');
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
            let txtNode = document.createTextNode(pList[i].itemName);
            hdrTitleE.appendChild(txtNode);

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
            itemRow1PicE.appendChild(picWrapE);
            // let path = 'static/imgs/abb' + itemNumber + '.jpg';
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
            // txtNode = document.createTextNode(' מוצר מספר ' + itemNumber + ' - תיאור כללי');
            txtNode = document.createTextNode(pList[i].description);
            itemRow1stdParE.appendChild(txtNode);

            let fListE = document.createElement('ul');
            fListE.classList.add('fList');
            itemRow1DataE.appendChild(fListE);
            let numOfFeatures = pList[i].fList.length;
            for (let fInd = 0; fInd < numOfFeatures ; fInd++){
                /*
                if (fInd == 0){
                    let fItemE = document.createElement('li');
                } else {
                    fItemE = document.createElement('li');
                }

                 */
                let fItemE = document.createElement('li');
                fItemE.classList.add('li');
                fItemE.id = 'item' + itemNumber + 'f1Id';
                fListE.appendChild(fItemE);

                txtNode = document.createTextNode(pList[i].fList[fInd]);
                fItemE.appendChild(txtNode);
            }

            // Create Item Row 2 - Proc Options
            // Set 1
            let itemRow2E = document.createElement('div');
            itemRow2E.classList.add('itemRow2');
            frameE.appendChild(itemRow2E);
            let stdWrapE = document.createElement('div');
            stdWrapE.classList.add('stdWrap');
            itemRow2E.appendChild(stdWrapE);
            let inputE = document.createElement('input');
            inputE.type = 'radio';
            inputE.classList.add('itemRadio');
            stdWrapE.appendChild(inputE);
            //
            inputE.checked = false;
            inputE.dataset.frameNum = itemNumber;
            inputE.dataset.procOp = 1;
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
            txtNode = document.createTextNode('(אספקה עם שליח עד הבית)');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.appendChild(txtNode);
            let itemPriceE = document.createElement('p');
            itemPriceE.classList.add('itemPrice');
            txtNode = document.createTextNode(pList[i].price.toLocaleString() + ' ש"ח');
            stdWrapE.appendChild(itemPriceE);
            itemPriceE.appendChild(txtNode);

            // Set 2
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
            // calculate price include installation
            includePrice = instTypeAPrice + pList[i].price;
            txtNode = document.createTextNode(includePrice.toLocaleString() + ' ש"ח');
            stdWrapE.appendChild(itemPriceE);
            itemPriceE.appendChild(txtNode);

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
            txtNode = document.createTextNode('סה"כ כולל מע"מ:');
            stdTxtE.appendChild(txtNode);

            stdTxtE = document.createElement('p');
            stdTxtE.classList.add('totalPrice');
            txtWrapE.appendChild(stdTxtE);
            stdTxtE.id = 'item' + itemNumber + 'TotalPriceId';

            txtNode = document.createTextNode(includePrice.toLocaleString() + ' ש"ח');
            stdTxtE.appendChild(txtNode);

            let btnE = document.createElement('button');
            btnE.classList.add('orderBtnH');
            btnE.id = 'item' + itemNumber + 'BtnId';
            btnE.addEventListener('click', addToCart);
            btnE.dataset.pid = pList[i].pid;
            btnE.dataset.frameNum = itemNumber;
            let rdE = document.getElementById('item' + itemNumber + 'Radio1Id');
            if (rdE.checked) {
                btnE.dataset.procType = 1;
            } else {
                btnE.dataset.procType = 2;
            }
            console.log('btn procType ', btnE.dataset.procType);

            stdWrapE.appendChild(btnE);
            txtNode = document.createTextNode('בחר פריט');
            btnE.appendChild(txtNode);





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
function addToCart(event) {
    const btnE = event.target;
    console.log('btn is ', btnE);
    let pid = btnE.dataset.pid;
    let serviceType = btnE.dataset.procType;
    let qpp = 1;
    let itemIndex = findProd(pid);
    // Clear items from cart before assigning new one
    // Next step need to add here existing item check
    while (cartList.length > 0) {
        cartList.pop();
    }
    cartList[cartList.length] = new cartItem(pid, serviceType, qpp);
    //cartList.push(cartItem);
    console.log('cart is ', cartList);

    let itemsWrapE = document.getElementById('itemsWrapId');
    itemsWrapE.style.display = 'none';
    createCheckOutFrame();

}
function createCheckOutFrame() {
    let centerE = document.getElementById('row3CenterId');
    let coExistE = document.getElementById('checkOutFrameId');
    if (coExistE) {
        coExistE.remove();
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

    // create list of items to delivery
    coItemsList = [];
    let coIndex = 0;
    let itemIndex = -1;
    let currentItemName = '';
    let currentItemPrice = 0;
    let orderSumPrice = 0;
    let insType = 0;
    for (let i=0; i<cartList.length; i++) {
        itemIndex = findProd(cartList[i].pid);
        currentItemName = pList[itemIndex].itemName;
        currentItemPrice = pList[itemIndex].price;
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
            currentItemPrice = instTypeAPrice;
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
    let reqLabel = 'שם פרטי';
    let reqVal = ''
    let reqWidth = 'narrow';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'familyNameId';
    reqLabel = 'שם משפחה';
    reqWidth = 'narrow';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'cellphoneId';
    reqLabel = 'מספר נייד';
    reqWidth = 'narrow';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'streetAddId';
    reqLabel = 'רחוב';
    reqWidth = 'narrow';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'streetNumAddId';
    reqLabel = 'מספר בית';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'cityAddId';
    reqLabel = 'עיר';
    reqWidth = 'narrow';
    createInput(formE, reqId, reqLabel, reqVal, reqWidth);

    // Create row num 3 - payment details
    coFrameRowE = document.createElement('div');
    coFrameRowE.classList.add('coRow');
    checkOutFrameE.appendChild(coFrameRowE);

    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('stdTxtB');
    textNode = document.createTextNode('פרטי תשלום');
    coFrameRowE.appendChild(stdTxtE);
    stdTxtE.appendChild(textNode);

    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('stdTxtB');
    if (insType == 2) {
        textNode = document.createTextNode('התשלום יבוצע לאחר ההתקנה');
    } else {
        textNode = document.createTextNode('התשלום יבוצע בעת המסירה');
    }
    coFrameRowE.appendChild(stdTxtE);
    stdTxtE.appendChild(textNode);

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
    textNode = document.createTextNode('סה"כ כולל מע"מ:');
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
function createOrder() {
    console.log('start create order');
    let items = coItemsList;
    $.ajax({
        data: {
            items: JSON.stringify(items),
            personName: $('#personNameId').val(),
            familyName: $('#familyNameId').val(),
            cellphone: $('#cellphoneId').val(),
            streetAdd: $('#streetAddId').val(),
            streetNumAdd: $('#streetNumAddId').val(),
            cityAdd: $('#cityAddId').val()

        },
        type: 'POST',
        url: '/createOrder'
    })
        .done(function (data) {
            console.log('create order is done', data);
            presentAproval(data);
    });
    event.preventDefault();
}
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
    let itemsWrapE = document.getElementById('itemsWrapId');
    let coFrameE = document.getElementById('checkOutFrameId');
    itemsWrapE.style.display = 'flex';
    coFrameE.style.display = 'none';
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
function creatItemWrap(fatherE, wList, wInd) {
    let wrapE = document.createElement('div');
    wrapE.classList.add('stdWrap');
    fatherE.appendChild(wrapE);
    let stdTxtE = document.createElement('p');
    stdTxtE.classList.add('stdCellTxt');
    let txtNode = document.createTextNode(wList[wInd].dsc);
    wrapE.appendChild(stdTxtE);
    stdTxtE.appendChild(txtNode);

    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('itemPrice');
    txtNode = document.createTextNode(wList[wInd].price + ' ש"ח');
    wrapE.appendChild(stdTxtE);
    stdTxtE.appendChild(txtNode);







}

function coItem(dsc, price) {
    this.dsc = dsc;
    this.price = price;
}
function findProd(pid) {
    let prodIndex = 0;
    for(let i=0; i < pList.length; i++) {
        if (pList[i].pid == pid) {
            prodIndex = i;
        }
    }
    return prodIndex;
}
function cartItem(pid, serviceType, qpp){
    this.pid = pid;
    this.serviceType = serviceType;
    this.qpp = qpp;
}
function toggleHdl(event){
    const rdE = event.target;
    console.log('selected radio is ', rdE);
    let frameNum = rdE.dataset.frameNum;
    let procType = rdE.dataset.procOp;
    let btnE = document.getElementById('item' + frameNum + 'BtnId');

    let parProcType = 0;
    // procType = 1 --> without installation
    // procType = 2 --> with installation
    if (procType == 1) {
        parProcType = 2;
    } else {
        parProcType = 1;
    }
    const paraRadioE = document.getElementById('item' + frameNum + 'Radio' + parProcType + 'Id');
    const finalPriceE = document.getElementById('item' + frameNum + 'TotalPriceId');

    console.log('the paralel radio is ', paraRadioE);

    console.log('rdE before is ', rdE.checked);
    console.log('par before is ', paraRadioE.checked);
    rdE.checked = true;
    paraRadioE.checked = false;
    console.log('rdE after is ', rdE.checked);
    console.log('par after is ', paraRadioE.checked);
    procType = rdE.dataset.procOp;
    console.log('proctype to cell', procType);
    btnE.dataset.procType = procType;
    let includePrice = 0;
    if (procType == 1) {
        // without installation
        includePrice = pList[frameNum-1].price;
    } else {
        // with installation
        includePrice = pList[frameNum-1].price + instTypeAPrice;
    }
    finalPriceE.innerHTML = includePrice.toLocaleString() + ' ש"ח';
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


$('#sendBtnId').click(function () {
    console.log('Starts to send details');
    $.ajax({
        data: {
            costumerName: $('#costumerNameId').val(),
            costumerPhone: $('#costumerPhoneId').val()
        },
        type: 'POST',
        url: '/savedetails'
    })
        .done(function (data) {
            console.log('save details is done', data);
            detailSaved();
    });
    event.preventDefault();
});

function detailSaved(){
    console.log('aqq')
    const responsePar = document.createElement('p');
    const node = document.createTextNode('פנייתך התקבלה - נציג מטעמנו ייצור איתך קשר תוך 2 ימי עסקים');
    responsePar.appendChild(node);
    const sdBlkElement = document.getElementById('senDetailsBlkId');
    sdBlkElement.appendChild(responsePar);

    responsePar.style.color = 'darkolivegreen';
    responsePar.style.fontWeight = 'bold';
    //responsePar.inner

}

