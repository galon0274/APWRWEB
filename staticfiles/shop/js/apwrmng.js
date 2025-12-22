// Retrieve the CSRF Token from the template
const csrfTokenElement = document.getElementById('csrf-token');
const CSRF_TOKEN = csrfTokenElement ? JSON.parse(csrfTokenElement.textContent) : null;

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
        let textNode = document.createTextNode('הזמנה מספר: ' + ordersList[frameIndex].order_num);
        titleE.appendChild(textNode);
        let orderTotalPrice = 0;
        let orderItemsList = ordersList[frameIndex].items // item2Deliver;
        let numOfWraps = orderItemsList.length;
        for (let i = 0; i < numOfWraps; i++) {
            creatItemWrap1(wrapE, orderItemsList, i);
            orderTotalPrice += orderItemsList[i].price;
        }

        let RowE = document.createElement('div');
        RowE.classList.add('coRow');
        wrapE.appendChild(RowE);

        let reqId = 'personNameId';
        let reqLabel = 'שם מלא';
        let reqWidth = 'wide';
        let reqVal = ordersList[frameIndex].full_name;
        createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
        reqId = 'familyNameId';
        reqLabel = 'כתובת מייל';
        reqWidth = 'wide';
        reqVal = ordersList[frameIndex].email_add
        createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
        reqId = 'cellphoneId';
        reqLabel = 'מספר נייד';
        reqWidth = 'wide';
        reqVal = ordersList[frameIndex].cell_num
        createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
        reqId = 'streetAddId';
        reqLabel = 'רחוב';
        reqWidth = 'wide';
        reqVal = ordersList[frameIndex].street_name
        createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
        reqId = 'streetNumAddId';
        reqLabel = 'מספר בית';
        reqWidth = 'wide';
        reqVal = ordersList[frameIndex].house_num
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
        textNode = document.createTextNode('סטאטוס הזמנה: ' + ordersList[frameIndex].stage);
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

        // textNode = document.createTextNode(orderTotalPrice.toLocaleString() + ' ש"ח');

        textNode = document.createTextNode(ordersList[frameIndex].total_cost + ' ש"ח');
        stdTxtE.appendChild(textNode);

        let btnE = document.createElement('button');
        btnE.classList.add('orderBtnH');
        btnE.dataset.order_num = ordersList[frameIndex].order_num;
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
    let order_num = btnE.dataset.order_num;
    console.log('start order handle: ', order_num);

    getOrder(order_num);
}

async function getOrder(order_num) {
/*
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

 */

    console.log('start get order');
    const API_URL = '/api/get_order_data/'; // Define the URL for clarity
    // const API_URL = "{% url 'login_check_api' %}";
    // const username = document.getElementById('userNameId').value;
    // const password = document.getElementById('passId').value;
    // Structure the data as an object to send JSON
    const dataToSend = order_num;

    if (!CSRF_TOKEN) {
        console.error("CSRF token is missing. Aborting request.");
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': CSRF_TOKEN
            },
            body: JSON.stringify(dataToSend)
        });

        const {status, order_data, message} = await response.json();
        if (status === 'success') {
            // handle redirect
            // window.location.href = responseData.redirect_url;
            console.log('get order data is done', order_data);
            presentOrderData(order_data);
        } else {
            console.log('Oredr was not found or access dined ');
            console.log("Server message:", message);
        }

    } catch (error) {
        console.error("Fetch request failed:", error.message);
    }
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
    let textNode = document.createTextNode('הזמנה מספר: ' + orderData.order_num);
    titleE.appendChild(textNode);

    let orderTotalPrice = 0;
    let orderItemsList = orderData.items;
    let numOfWraps = orderItemsList.length;
    for (let i = 0; i < numOfWraps; i++) {
        creatItemWrap1(wrapE, orderItemsList, i); // Dedicated function for this page
        orderTotalPrice += orderItemsList[i].price;
    }

    let RowE = document.createElement('div');
    RowE.classList.add('coRow');
    wrapE.appendChild(RowE);

    let reqId = 'personNameId';
    let reqLabel = 'שם מלא';
    let reqWidth = 'wide';
    let reqVal = orderData.full_name;
    createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'mailAddId';
    reqLabel = 'כתובת מייל';
    reqWidth = 'wide';
    reqVal = orderData.email_add
    createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'cellphoneId';
    reqLabel = 'מספר נייד';
    reqWidth = 'wide';
    reqVal = orderData.cell_num
    createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'streetAddId';
    reqLabel = 'רחוב';
    reqWidth = 'wide';
    reqVal = orderData.street_name
    createInput(RowE, reqId, reqLabel, reqVal, reqWidth);
    reqId = 'streetNumAddId';
    reqLabel = 'מספר בית';
    reqVal = orderData.house_num
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
    textNode = document.createTextNode('סטאטוס הזמנה: ' + orderData.stage);
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

    // textNode = document.createTextNode(orderTotalPrice.toLocaleString() + ' ש"ח');
    textNode = document.createTextNode(orderData.total_cost + ' ש"ח');
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
    btnE.dataset.orderNum = orderData.order_num;
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
    // getMangData();
    // apwrPageSetup();
    const scriptElement = document.getElementById('orders-data');

    // Check if the element exists before trying to access its content
    if (scriptElement) {
        // 2. Extract the text content (the JSON string)
        const jsonString = scriptElement.textContent;

        // 3. Parse the JSON string into a usable JavaScript object/array
        try {
            const orderList = JSON.parse(jsonString);
            // pList = list2p;
            // --- Data Manipulation Starts Here ---

            console.log("Successfully retrieved and parsed order list:", orderList);
            createMngSec(orderList);

         } catch (error) {
            console.error("Error parsing JSON data from 'orders-data':", error);
        }
    } else {
        console.error("Could not find script element with ID 'orders-data'. Check your template.");
    }
}
async function updateOrder(event) {
    const btnE = event.target;
    let orderNum = btnE.dataset.orderNum;
    console.log('start update order: ', orderNum);

    // let items = coItemsList;
    // console.log('start create order, items are:', items);
    const API_URL = '/api/update-order/'; // Define the URL for clarity

    if (!CSRF_TOKEN) {
        console.error("CSRF token is missing. Aborting request.");
        return;
    }

    // Structure the data as an object to send JSON
    const dataToSend = {
        order_num: orderNum,
        personName: document.getElementById('personNameId').value,
        mailAdd: document.getElementById('mailAddId').value,
        cellphone: document.getElementById('cellphoneId').value,
        streetAdd: document.getElementById('streetAddId').value,
        streetNumAdd: document.getElementById('streetNumAddId').value,
        cityAdd: document.getElementById('cityAddId').value,
        actionSel: document.getElementById('actionSelId').value
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
            // if ok page should be directed to load updated orderlist
            // const confNumber = responseData.confirmation_num;
            // presentAproval(confNumber);
            console.log("SUCCESS. Server acknowledged with message:", responseData.message);
            window.location.href = responseData.redirect_url;
            // createMngSec(orderList);
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

     */

}
function init_manager_page(){
    apwrPageSetup();
    const scriptElement = document.getElementById('orders-data');

    // Check if the element exists before trying to access its content
    if (scriptElement) {
        // 2. Extract the text content (the JSON string)
        const jsonString = scriptElement.textContent;

        // 3. Parse the JSON string into a usable JavaScript object/array
        try {
            const orderList = JSON.parse(jsonString);
            // pList = list2p;
            // --- Data Manipulation Starts Here ---

            console.log("Successfully retrieved and parsed order list:", orderList);
            createMngSec(orderList);

         } catch (error) {
            console.error("Error parsing JSON data from 'orders-data':", error);
        }
    } else {
        console.error("Could not find script element with ID 'orders-data'. Check your template.");
    }


}

// Attach the listener to the document
document.addEventListener('DOMContentLoaded', init_manager_page);
