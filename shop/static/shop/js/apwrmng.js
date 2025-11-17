function getMangData(){
    apwrPageSetup();
    let myName = 'testName';
    $.ajax({
        data: {
            myName: myName
        },
        type: 'POST',
        url: '/getorders'
    })
        .done(function (data) {
            console.log('GET ORDERS is done', data);
            createMngSec(data);
    });
    event.preventDefault();
}

function createMngSec(ordersList) {
    console.log('start creating mng items', ordersList.length);
    console.log('start creating mng items', ordersList);

    let centerE = document.getElementById('row1CenterId');
    centerE.style.justifyContent = 'center';
    //let centerE = document.getElementById('itemsWrapId');
    let sttWrapE = document.createElement('div');
    sttWrapE.classList.add('sttWrap');
    sttWrapE.id = 'sttWrapId';
    centerE.appendChild(sttWrapE)



    let numOfFrames = ordersList.length;
    for (let frameIndex = 0; frameIndex < numOfFrames; frameIndex++) {

        let wrapE = document.createElement('div');
        wrapE.classList.add('orderStatusFrame');
        sttWrapE.appendChild(wrapE);

        let titleE = document.createElement('p');
        titleE.classList.add('stdTitle');
        wrapE.appendChild(titleE);
        let textNode = document.createTextNode('הזמנה מספר: ' + ordersList[frameIndex].orderNum);
        titleE.appendChild(textNode);
        let orderTotalPrice = 0;
        let orderItemsList = ordersList[frameIndex].item2Deliver;
        let numOfWraps = orderItemsList.length;
        for (let i = 0; i < numOfWraps; i++) {
            creatItemWrap(wrapE, orderItemsList, i);
            orderTotalPrice += orderItemsList[i].price;
        }

        let RowE = document.createElement('div');
        RowE.classList.add('coRow');
        wrapE.appendChild(RowE);

        let reqId = 'personNameId';
        let reqLabel = 'שם מלא';
        let reqWidth = 'wide';
        let reqVal = ordersList[frameIndex].pName;
        createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
        reqId = 'familyNameId';
        reqLabel = 'כתובת מייל';
        reqWidth = 'wide';
        reqVal = ordersList[frameIndex].fName
        createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
        reqId = 'cellphoneId';
        reqLabel = 'מספר נייד';
        reqWidth = 'wide';
        reqVal = ordersList[frameIndex].cellNum
        createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
        reqId = 'streetAddId';
        reqLabel = 'רחוב';
        reqWidth = 'wide';
        reqVal = ordersList[frameIndex].street
        createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
        reqId = 'streetNumAddId';
        reqLabel = 'מספר בית';
        reqWidth = 'wide';
        reqVal = ordersList[frameIndex].houseNum
        createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
        reqId = 'cityAddId';
        reqLabel = 'עיר';
        reqWidth = 'wide';
        reqVal = ordersList[frameIndex].city
        createInput(RowE, reqId, reqLabel, reqVal, reqWidth);

        RowE = document.createElement('div');
        RowE.classList.add('coRow');
        wrapE.appendChild(RowE);

        let stdWrapE = document.createElement('div');
        stdWrapE.classList.add('stdWrap');
        RowE.appendChild(stdWrapE);

        let txtWrapE = document.createElement('div');
        txtWrapE.classList.add('txtWrapR');
        stdWrapE.appendChild(txtWrapE);

        stdTxtE = document.createElement('p');
        stdTxtE.classList.add('stdTxt');
        txtWrapE.appendChild(stdTxtE);
        textNode = document.createTextNode('סטאטוס הזמנה: ' + ordersList[frameIndex].status);
        stdTxtE.appendChild(textNode);

        stdWrapE = document.createElement('div');
        stdWrapE.classList.add('stdWrap');
        RowE.appendChild(stdWrapE);

        txtWrapE = document.createElement('div');
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

        textNode = document.createTextNode(orderTotalPrice.toLocaleString() + ' ש"ח');
        stdTxtE.appendChild(textNode);

        let btnE = document.createElement('button');
        btnE.classList.add('orderBtnH');
        btnE.dataset.orderNum = ordersList[frameIndex].orderNum;
        btnE.addEventListener('click', orderHandle);
        //btnE.dataset.orderItems = coItemsList;
        //btnE.id = 'item' + itemNumber + 'BtnId';
        stdWrapE.appendChild(btnE);
        textNode = document.createTextNode('עדכן');
        btnE.appendChild(textNode);
    }

}


function orderHandle(event) {

    const btnE = event.target;
    let orderNum = btnE.dataset.orderNum;
    console.log('start order handle: ', orderNum);

    getOrder(orderNum);
}

function getOrder(orderNum) {

    $.ajax({
        data: {
            orderNum: orderNum
        },
        type: 'POST',
        url: '/getOrderData'
    })
        .done(function (data) {
            console.log('get order data is done', data);
            presentOrderData(data);
    });
    event.preventDefault();
}

function presentOrderData(orderData) {

    let centerE = document.getElementById('row1CenterId');

    let coExistE = document.getElementById('sttWrapId');
    if (coExistE) {
        coExistE.remove();
    }
    let sttWrapE = document.createElement('div');
    sttWrapE.classList.add('sttWrap');
    sttWrapE.id = 'sttWrapId';
    centerE.appendChild(sttWrapE);

    //
    let wrapE = document.createElement('div');
    wrapE.classList.add('orderStatusFrame');
    sttWrapE.appendChild(wrapE);

    let titleE = document.createElement('p');
    titleE.classList.add('stdTitle');
    wrapE.appendChild(titleE);
    let textNode = document.createTextNode('הזמנה מספר: ' + orderData.orderNum);
    titleE.appendChild(textNode);

    let orderTotalPrice = 0;
    let orderItemsList = orderData.item2Deliver;
    let numOfWraps = orderItemsList.length;
    for (let i = 0; i < numOfWraps; i++) {
        creatItemWrap(wrapE, orderItemsList, i);
        orderTotalPrice += orderItemsList[i].price;
    }

    let RowE = document.createElement('div');
    RowE.classList.add('coRow');
    wrapE.appendChild(RowE);

    let reqId = 'personNameId';
    let reqLabel = 'שם מלא';
    let reqWidth = 'wide';
    let reqVal = orderData.pName;
    createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'familyNameId';
    reqLabel = 'כתובת מייל';
    reqWidth = 'wide';
    reqVal = orderData.fName
    createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'cellphoneId';
    reqLabel = 'מספר נייד';
    reqWidth = 'wide';
    reqVal = orderData.cellNum
    createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'streetAddId';
    reqLabel = 'רחוב';
    reqWidth = 'wide';
    reqVal = orderData.street
    createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'streetNumAddId';
    reqLabel = 'מספר בית';
    reqVal = orderData.houseNum
    reqWidth = 'wide';
    createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'cityAddId';
    reqLabel = 'עיר';
    reqWidth = 'wide';
    reqVal = orderData.city
    createInput(RowE, reqId, reqLabel, reqVal, reqWidth);

    RowE = document.createElement('div');
    RowE.classList.add('coRow');
    wrapE.appendChild(RowE);

    let stdWrapE = document.createElement('div');
    stdWrapE.classList.add('stdWrap');
    RowE.appendChild(stdWrapE);

    let txtWrapE = document.createElement('div');
    txtWrapE.classList.add('txtWrapR');
    stdWrapE.appendChild(txtWrapE);

    stdTxtE = document.createElement('p');
    stdTxtE.classList.add('stdTxt');
    txtWrapE.appendChild(stdTxtE);
    textNode = document.createTextNode('סטאטוס הזמנה: ' + orderData.status);
    stdTxtE.appendChild(textNode);

    stdWrapE = document.createElement('div');
    stdWrapE.classList.add('stdWrap');
    RowE.appendChild(stdWrapE);

    txtWrapE = document.createElement('div');
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

    textNode = document.createTextNode(orderTotalPrice.toLocaleString() + ' ש"ח');
    stdTxtE.appendChild(textNode);



    stdWrapE = document.createElement('div');
    stdWrapE.classList.add('stdWrap');
    RowE.appendChild(stdWrapE);

    let selectE = document.createElement('select');
    //selectE.classList.add('txtWrapR');
    selectE.id = 'actionSelId';
    stdWrapE.appendChild(selectE);
    selectE.innerHTML = '';

    const selOpt= [
        {value: 'opt1', label:'אשר שלב'},
        {value: 'opt2', label:'עדכן פרטים'},
        {value: 'opt3', label:'בטל הזמנה'},
    ];

    selOpt.forEach(selOpt => {
        const optE = document.createElement('option');
        optE.value = selOpt.value;
        optE.textContent = selOpt.label;
        selectE.appendChild(optE);

    });

    let btnE = document.createElement('button');
    btnE.classList.add('orderBtnH');
    btnE.dataset.orderNum = orderData.orderNum;
    btnE.addEventListener('click', updateOrder);
        //btnE.dataset.orderItems = coItemsList;
        //btnE.id = 'item' + itemNumber + 'BtnId';
    stdWrapE.appendChild(btnE);
    textNode = document.createTextNode('שלח');
    btnE.appendChild(textNode);

    btnE = document.createElement('button');
    btnE.classList.add('orderBtnH');
    btnE.dataset.orderNum = orderData.orderNum;
    btnE.addEventListener('click', back2Orders);
        //btnE.dataset.orderItems = coItemsList;
        //btnE.id = 'item' + itemNumber + 'BtnId';
    stdWrapE.appendChild(btnE);
    textNode = document.createTextNode('חזור');
    btnE.appendChild(textNode);

    //stdTxtE = document.createElement('p');
    //stdTxtE.classList.add('stdTxt');
    //txtWrapE.appendChild(stdTxtE);
    //textNode = document.createTextNode('סטאטוס הזמנה: ' + orderData.status);
    //stdTxtE.appendChild(textNode);

}
function back2Orders() {
    let coExistE = document.getElementById('sttWrapId');
    if (coExistE) {
        coExistE.remove();
    }
    getMangData();
}
function updateOrder(event) {
    const btnE = event.target;
    let orderNum = btnE.dataset.orderNum;
    console.log('start update order: ', orderNum);

    $.ajax({
        data: {
            orderNum: orderNum,
            personName: $('#personNameId').val(),
            familyName: $('#familyNameId').val(),
            cellphone: $('#cellphoneId').val(),
            streetAdd: $('#streetAddId').val(),
            streetNumAdd: $('#streetNumAddId').val(),
            cityAdd: $('#cityAddId').val(),
            actionSel: $('#actionSelId').val()
        },
        type: 'POST',
        url: '/updateOrderData'
    })
        .done(function (data) {
            console.log('order data after update is: ', data);
            back2Orders()
            //presentOrderData(data);
    });
    event.preventDefault();

}

