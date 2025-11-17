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
    let textNode = document.createTextNode('כניסת מתקינים');
    linkE.href = '/apwrLogIn';
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
        serviceType = '0'; // No Item Just Service
    } else {
        serviceType = btnE.dataset.procType;
    }

    let qpp = 1;
    //let itemIndex = findProd(pid);
    // Clear items from cart before assigning new one
    // Next step need to add here existing item check
    while (cartList.length > 0) {
        cartList.pop();
    }
    cartList[cartList.length] = new cartItem(pid, serviceType, qpp);
    //cartList.push(cartItem);
    console.log('cart is ', cartList);
    if (itemId == 'itemBtnId') {

    } else {
        let itemsWrapE = document.getElementById('itemsWrapId');
        itemsWrapE.style.display = 'none';
    }

    createCheckOutFrame();

}