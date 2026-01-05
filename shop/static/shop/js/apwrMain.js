console.log('start apwrMain');

function apwrPageSetup(){
    console.log('start page setup');
    let mainHdrE = document.getElementById('hdrMainId');
    let hamburgerWrapE = document.createElement('div');
    hamburgerWrapE.classList.add('hamburgerIcon');
    mainHdrE.appendChild(hamburgerWrapE);
    hamburgerWrapE.addEventListener(('click'), menuSlide);

    let lineE = document.createElement('div');
    lineE.classList.add('lineBar1');
    hamburgerWrapE.appendChild(lineE);
    lineE = document.createElement('div');
    lineE.classList.add('lineBar2');
    hamburgerWrapE.appendChild(lineE);
    lineE = document.createElement('div');
    lineE.classList.add('lineBar3');
    hamburgerWrapE.appendChild(lineE);

    let rowE = document.getElementById('row1Id');
    let sidePanelE = document.createElement('div');
    sidePanelE.classList.add('sidePanel');
    sidePanelE.id = 'sidePanelId';
    rowE.appendChild(sidePanelE);

    let linkE = document.createElement('a');
    linkE.id = 'inst_log_id';
    // linkE.addEventListener('click', to_login_page);
    let textNode = document.createTextNode('כניסת מתקינים');
    linkE.href = LOGIN_PAGE_URL;
    linkE.appendChild(textNode);
    sidePanelE.appendChild(linkE);
    linkE = document.createElement('a');
    textNode = document.createTextNode('עמדות טעינה');
    linkE.setAttribute.href = '/';
    linkE.appendChild(textNode);
    sidePanelE.appendChild(linkE);
    linkE = document.createElement('a');
    textNode = document.createTextNode('צור קשר');
    linkE.setAttribute.href = '#';
    linkE.appendChild(textNode);
    sidePanelE.appendChild(linkE);
}

function to_login_page() {
    window.location.href = 'apwrLogIn/';
}

function menuSlide(){
    let iconE = document.getElementsByClassName('hamburgerIcon');
    iconE[0].classList.toggle('change');

    //console.log('iconE[0].classList'. iconE[0].classList);

    let sidePanelE = document.getElementById('sidePanelId');
    let menuWidth = sidePanelE.clientHeight;
    console.log('sidePanelE.style.height ', menuWidth);
    if (menuWidth == 0) {
        sidePanelE.style.height = '150px';
    } else {
        sidePanelE.style.height = '0px';
    }
}

function elVertCenter(fatherE, currentE) {
    let fatherH = fatherE.clientHeight;
    let currentH = currentE.clientHeight;
    let reqPad = (fatherH - currentH) / 2;
    console.log('vertical aline data ',fatherH +':'+ currentH +':'+ reqPad  )

    currentE.style.marginBlock = reqPad + 'px';
}
function toggleHdl(event){
    const rdE = event.target;
    console.log('selected radio is ', rdE);
    let frameNum = Number(rdE.dataset.frameNum);
    let procType = rdE.dataset.procOp;
    let itemType = rdE.dataset.itemType;
    let itemPrice = Number(rdE.dataset.itemPrice);
    let instPrice = Number(rdE.dataset.instPrice);
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
        includePrice = itemPrice;
        if ( itemType == 'service') {
            includePrice = instPrice;
        }
    } else {
        // with installation
        includePrice = itemPrice + instPrice;
        /*if ( frameNum-1 == 0) {
            includePrice = instTypeA22;
        }*/
    }
    finalPriceE.innerHTML = includePrice.toLocaleString() + ' ש"ח';
}

function addToCart(event) {
    const btnE = event.target;
    const itemId = btnE.id;
    console.log('itemId is ', itemId);
    console.log('btn is ', btnE);
    let pid = btnE.dataset.pid;
    let serviceType = '';
    if (pid == 100) {
        serviceType = 'instOnly'; // No Item Just Service
    } else {
        serviceType = btnE.dataset.procType;
    }

    let qpp = 1;
    const cartList = [];
    //let itemIndex = findProd(pid);
    // Clear items from cart before assigning new one
    // Next step need to add here existing item check
    /*
    while (cartList.length > 0) {
        cartList.pop();
    }

     */
    cartList[cartList.length] = new cartItem(pid, serviceType, qpp);
    //cartList.push(cartItem);
    console.log('cart is ', cartList);
    if (itemId == 'itemBtnId') {
        itemCreateCheckOutFrame(cartList);
    } else {
        let itemsWrapE = document.getElementById('itemsWrapId');
        itemsWrapE.style.display = 'none';
        createCheckOutFrame(cartList);
    }
}




function createCheckOutFrame(cartList) {
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
        itemIndex = findProd(cartList[i].pid);
        currentItemName = pList[itemIndex].name;
        currentItemPrice = pList[itemIndex].price2Cell;
        currentItemInstPrice = pList[itemIndex].instPrice;
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
    txtNode = document.createTextNode(wList[wInd].price.toLocaleString() + ' ש"ח');
    wrapE.appendChild(stdTxtE);
    stdTxtE.appendChild(txtNode);
}

async function createOrder() {
    console.log('start create order');
    let items = coItemsList;
    console.log('start create order, items are:', items);
    const API_URL = '/api/create-order/'; // Define the URL for clarity

    if (!CSRF_TOKEN) {
        console.error("CSRF token is missing. Aborting request.");
        return;
    }

    // Structure the data as an object to send JSON
    const dataToSend = {
        items: items,
        personName: document.getElementById('personNameId').value,
        mailAdd: document.getElementById('mailAddId').value,
        cellphone: document.getElementById('cellphoneId').value,
        streetAdd: document.getElementById('streetAddId').value,
        streetNumAdd: document.getElementById('streetNumAddId').value,
        cityAdd: document.getElementById('cityAddId').value

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

        const responseData = await response.json();

        if (response.ok) {
            // const confNumber = responseData.confirmation_num;
            window.location.href = `/order-success/${responseData.confirmation_num}/`;
            // presentAproval(confNumber);
        } else {
            alert("Error: " + responseData.message);
        }

    } catch (error) {
        console.error("Fetch request failed:", error.message);
    }

    /*
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
    */
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

function creatItemWrap1(fatherE, wList, wInd) {
    let wrapE = document.createElement('div');
    wrapE.classList.add('stdWrap');
    fatherE.appendChild(wrapE);
    let stdTxtE = document.createElement('p');
    stdTxtE.classList.add('stdCellTxt');
    let txtNode = document.createTextNode(wList[wInd].product);
    wrapE.appendChild(stdTxtE);
    stdTxtE.appendChild(txtNode);

    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('itemPrice');
    txtNode = document.createTextNode(wList[wInd].price_at_order.toLocaleString() + ' ש"ח');
    wrapE.appendChild(stdTxtE);
    stdTxtE.appendChild(txtNode);
}

function cartItem(pid, serviceType, qpp){
    this.pid = pid;
    this.serviceType = serviceType;
    this.qpp = qpp;
}

function coItem(dsc, price) {
    this.dsc = dsc;
    this.price = price;
}