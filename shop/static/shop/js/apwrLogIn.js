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
    btnE.addEventListener('click', apwrLogInReq);
    //btnE.dataset.orderItems = coItemsList;
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