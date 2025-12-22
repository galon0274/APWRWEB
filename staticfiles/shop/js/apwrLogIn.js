
// 1. Retrieve the CSRF Token from the template
const csrfTokenElement = document.getElementById('csrf-token');
const CSRF_TOKEN = csrfTokenElement ? JSON.parse(csrfTokenElement.textContent) : null;


const logInBtn = document.getElementById('logInBtnId');
// const API_URL = '/api/login-check/'; // Define the URL for clarity

function apwrLoginSetup() {
    apwrPageSetup();
    let wrapE = document.getElementById('stdBlkWrapId');
    let reqId = 'userNameId';
    let reqLabel = 'שם משתמש';
    let reqWidth = 'wide';
    let reqVal = '';
    createInput(wrapE, reqId, reqLabel, reqVal, reqWidth);

    reqId = 'passId';
    reqLabel = 'סיסמא';
    reqWidth = 'wide';
    reqVal = '';
    createInput(wrapE, reqId, reqLabel, reqVal, reqWidth);
    let passE = document.getElementById('passId');
    console.log('passE ', passE)
    passE.type = 'password';

    let btnE = document.createElement('button');
    btnE.classList.add('orderBtnH');
    btnE.id = 'logInBtnId';
    btnE.addEventListener('click', login_check);
    // btnE.dataset.orderItems = coItemsList;
            //btnE.id = 'item' + itemNumber + 'BtnId';
    wrapE.appendChild(btnE);
    textNode = document.createTextNode('כניסה');
    btnE.appendChild(textNode);
    btnE.style.marginLeft = '0px';

    /*
    let parE = document.createElement('p');
    let textNode = document.createTextNode('במידה ועדיין אין לך חשבון מתקין - צור קשר');
    wrapE.appendChild(parE);
    parE.appendChild(textNode)
    */
}



function apwrLogInReq() {
    $.ajax({
        data: {
            userName: $('#userNameId').val(),
            passCode: $('#passId').val(),
        },
        type: 'POST',
        url: '/loginCheck'
    })
        .done(function (data) {
            console.log('data from login check: ', data);

            if (data == 1) {
                window.open('/apwrMang', '_self');
            } else if (data == -1) {
                alert('שם משתמש אינו קיים במערכת');
            } else if (data == 0) {
                alert('סיסמא שגויה');
            } else {
                alert('תקלה בכניסה למערכת - פנה למנהל האתר');
            }
            //window.open('/apwrMang', '_self');
    });
    event.preventDefault();

}



async function login_check() {
    console.log('start login check');
    const API_URL = '/api/Login/'; // Define the URL for clarity
    // const API_URL = "{% url 'login_check_api' %}";
    const username = document.getElementById('userNameId').value;
    const password = document.getElementById('passId').value;
    // Structure the data as an object to send JSON
    const dataToSend = {username, password };

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

        const responseData = await response.json();


        if (response.ok) {
            // handle redirect
            window.location.href = responseData.redirect_url;
        } else {
            console.log('login denied by server ');
            console.log("Server message:", responseData.message);
        }

    } catch (error) {
        console.error("Fetch request failed:", error.message);
    }
}


// Add a listener to the button
if (logInBtn) {
    logInBtn.addEventListener('click', () => {
        // Get the current value from the input field
        //const inputValue = inputElement.value;

        // Check if the input is empty
        //if (inputValue.trim() === "") {
        //    alert("Please enter some text before sending.");
        //    return;
        //}

        console.log('log in pushed');
        // login_check();
        // Call the fetch function with the text
        // sendText(inputValue);
    });
}

document.addEventListener('DOMContentLoaded', apwrLoginSetup);