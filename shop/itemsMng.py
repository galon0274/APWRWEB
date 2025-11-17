class Charger:
    instTypeA11 = 1800
    instTypeA22 = 2000
    instTypeB11 = 2200
    instTypeB22 = 2400

    def __init__(self):
        self.sid = 0
        self.vendorPartNum = ''
        self.name = ''
        self.type = ''
        self.group = ''
        self.picList = []
        self.description = ''
        self.mainFeatures = []
        self.electricalParams = []
        self.equipment = []
        self.envConditions = []
        self.connectivity = []
        self.instDetails = []
        self.safety = []
        self.cost = 0
        self.price2Cell = 0
        self.instPrice = 0


class FeatureItem:
    def __init__(self):
        self.fName = ''
        self.fDescription = ''



def setVoltec():
    item2add = Charger()

    item2add.sid = 102
    item2add.type = 'prod'
    item2add.name = 'עמדת טעינה חכמה (דגם Home+)'
    item2add.vendorPartNum = 'HOME+'
    item2add.picList.append('voltec1.jpg')
    item2add.picList.append('voltec2.jpg')
    item2add.picList.append('voltec3.jpg')

    item2add.description = 'עמדת טעינה חכמה בהספק של 22kw, היכולה להגיע עם מערכת לאיזון עומס דינמי'
    item2add.mainFeatures.append('כבל טעינה מובנה באורך 6 מטר')
    item2add.mainFeatures.append('מנגנון הגנה מפני זליגת DC - לא נדרש פחת סוג B')
    item2add.mainFeatures.append('קישוריות ל- wifi, BT, או DLB')
    item2add.mainFeatures.append('אפליקצית הפעלה בעברית')
    item2add.mainFeatures.append('שנתיים אחריות יצרן')
    f2add = FeatureItem()
    f2add.fName = 'נתוני הזנה'
    f2add.fDescription = 'מתאימה לחיבור תלת פאזי או חד פאזי (230VAC/400VAC)'
    item2add.electricalParams.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'זרם כניסה מקסימלי'
    f2add.fDescription = '32A'
    item2add.electricalParams.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'הספק מוצא (ניתן להגדרה)'
    f2add.fDescription = '4.1KW - 22KW בחיבור תלת פאזי'
    item2add.electricalParams.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = '1.3KW - 7.4KW בחיבור חד פאזי'
    item2add.electricalParams.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'כבל'
    f2add.fDescription = 'כבל באורך 6 מטר'
    item2add.equipment.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'סוג מחבר'
    f2add.fDescription = 'Type 2'
    item2add.equipment.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'תקשורת'
    f2add.fDescription = 'Wifi, BT'
    item2add.connectivity.append(f2add.__dict__)


    f2add = FeatureItem()
    f2add.fName = 'כרטיסי הפעלה'
    f2add.fDescription = 'ניתנת להפעלה באמצעות כרטיסי RFID המסופקים עם העמדה'
    item2add.connectivity.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'אפליקציה'
    f2add.fDescription = 'אפליקציה בעברית הכוללת את הגדרות ההספק ותזמוני הטעינה'
    item2add.connectivity.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'ניהול עומסים דינמי'
    f2add.fDescription = 'ניתן להתחבר לרכיב ניהול עומס דינמי - בתוספת תשלום'
    item2add.connectivity.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'הגנת זרם דלף DC'
    f2add.fDescription = 'לעמדה הגנה מפני זליגת DC - לא נדרשת התקנה של פחת מסוג B'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'הגנות'
    f2add.fDescription = 'הגנת זרם יתר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'הגנת מתח יתר/חסר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'הגנת סטיה מתדר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'הגנת טמפרטורת יתר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'התקנה'
    f2add.fDescription = 'ניתנת להתקנה על קיר או על עמוד ייעודי'
    item2add.instDetails.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'מידות'
    f2add.fDescription = '380x169x151mm (HxWxD) - בתצורת כבל'
    item2add.instDetails.append(f2add.__dict__)


    f2add = FeatureItem()
    f2add.fName = 'טמפרטורת עבודה'
    f2add.fDescription = '25- עד 55 מעלות'
    item2add.envConditions.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'אטימות למים'
    f2add.fDescription = 'IP65'
    item2add.envConditions.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'תאימות לתקנים'
    f2add.fDescription = 'CE / UKCA'
    item2add.envConditions.append(f2add.__dict__)


    item2add.price2Cell = 2350
    item2add.instPrice = Charger.instTypeA22

    return item2add


def setAdvice():
    item2add = Charger()
    item2add.sid = 101
    item2add.type = 'prod'
    item2add.name = 'עמדת טעינה חכמה (ADVICE)'
    item2add.vendorPartNum = 'ORA011-CWL'
    item2add.picList.append('adcive11newc.png')
    item2add.picList.append('advice11newb.png')

    item2add.description = 'עמדה חכמה וחדשנית הניתנת לניהול מרחוק מבית ADVICE'
    item2add.mainFeatures.append('כבל טעינה מובנה')
    item2add.mainFeatures.append('מנגנוני הגנה רבים')
    item2add.mainFeatures.append('קישוריות ל- wifi, BT, ו- 4G')
    item2add.mainFeatures.append('אפליקצית הפעלה בעברית')
    item2add.mainFeatures.append('שנתיים אחריות יצרן')
    f2add = FeatureItem()
    f2add.fName = 'נתוני הזנה'
    f2add.fDescription = '400VAC, 3P+N+PE'
    item2add.electricalParams.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'זרם כניסה מקסימלי'
    f2add.fDescription = '16A'
    item2add.electricalParams.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'הספק מוצא'
    f2add.fDescription = '11KW'
    item2add.electricalParams.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'כבל'
    f2add.fDescription = 'כבל באורך 5 מטר'
    item2add.equipment.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'ניתן להזמין בתצורת Socket ללא כבל'
    item2add.equipment.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'סוג מחבר'
    f2add.fDescription = 'Type 2'
    item2add.equipment.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'תקשורת'
    f2add.fDescription = 'Wifi, BT ו- Ethernet'
    item2add.connectivity.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'תומך בפרוטוקול OCPP1.6 לטובת חיבור למערכת ניהול אנרגיה'
    item2add.connectivity.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'תקשורת סלולרית'
    f2add.fDescription = 'אופציונאלי'
    item2add.connectivity.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'כרטיסי הפעלה'
    f2add.fDescription = 'ניתנת להפעלה באמצעות כרטיסי RFID המסופקים עם העמדה'
    item2add.connectivity.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'אפליקציה'
    f2add.fDescription = 'אפליקציה בעברית הכוללת את ההגדרות ותזמוני הטעינה'
    item2add.connectivity.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'הגנת זרם דלף DC'
    f2add.fDescription = 'הגנת זרם דלף DC בערך של 6ma (מאפשר התקנת פחת רגיל)'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'הגנות'
    f2add.fDescription = 'הגנת זרם יתר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'הגנת מתח יתר/חסר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'הגנת סטיה מתדר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'הגנת טמפרטורת יתר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'התקנה'
    f2add.fDescription = 'ניתנת להתקנה על קיר או על עמוד ייעודי'
    item2add.instDetails.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'משקל'
    f2add.fDescription = '3.5 ק"ג נטו'
    item2add.instDetails.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'מידות'
    f2add.fDescription = '344x201x100mm (HxWxD) - בתצורת כבל'
    item2add.instDetails.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = '344x201x135mm (HxWxD) - בתצורת Socket'
    item2add.instDetails.append(f2add.__dict__)

    f2add = FeatureItem()
    f2add.fName = 'טמפרטורת עבודה'
    f2add.fDescription = '30- עד 50 מעלות'
    item2add.envConditions.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'אטימות למים'
    f2add.fDescription = 'IP65'
    item2add.envConditions.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'תאימות לתקנים'
    f2add.fDescription = 'CE / C8'
    item2add.envConditions.append(f2add.__dict__)


    item2add.price2Cell = 2250
    item2add.instPrice = Charger.instTypeA22
    return item2add


def setPortAdvice():
    item2add = Charger()
    item2add.sid = 103
    item2add.type = 'prod'
    item2add.name = 'מטען נייד (ADVICE)'
    item2add.vendorPartNum = 'ORP036-DP'
    item2add.picList.append('ORP036.jpg')

    item2add.description = 'מטען נייד חד פאזי מתכוונן עד 16 אמפר'
    item2add.mainFeatures.append('קל לשימוש')
    item2add.mainFeatures.append('ניתן לכיוונון בלחיצת כפתור')
    item2add.mainFeatures.append('מנגנון הגנה מפני זליגת DC - לא נדרש פחת סוג B')
    item2add.mainFeatures.append('עומד בתקני הבטיחות הנדרשים')
    item2add.mainFeatures.append('שנה אחריות יצרן')
    f2add = FeatureItem()
    f2add.fName = 'נתוני הזנה'
    f2add.fDescription = 'מתאימה לחיבור חד פאזי (230VAC)'
    item2add.electricalParams.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'זרם כניסה'
    f2add.fDescription = '6/8/10/13/16A'
    item2add.electricalParams.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'הספק מוצא (בהתאם לבחירה)'
    f2add.fDescription = '3.6KW מקסימום'
    item2add.electricalParams.append(f2add.__dict__)

    f2add = FeatureItem()
    f2add.fName = 'כבל'
    f2add.fDescription = 'כבל באורך 4.5 מטר'
    item2add.equipment.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'מחבר לכניסה'
    f2add.fDescription = 'CEE'
    item2add.equipment.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'סוג מחבר לרכב'
    f2add.fDescription = 'Type 2'
    item2add.equipment.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'תצוגה'
    f2add.fDescription = 'מסך לד קטן 1.8'
    item2add.connectivity.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'תצוגת נוריות חיווי לד'
    item2add.connectivity.append(f2add.__dict__)





    f2add = FeatureItem()
    f2add.fName = 'הגנת זרם דלף DC'
    f2add.fDescription = 'לעמדה הגנה מפני זליגת DC - לא נדרשת התקנה של פחת מסוג B'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'הגנות'
    f2add.fDescription = 'הגנת זרם יתר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'הגנת מתח יתר/חסר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'הגנת סטיה מתדר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = ''
    f2add.fDescription = 'הגנת טמפרטורת יתר'
    item2add.safety.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'התקנה'
    f2add.fDescription = 'מתקן נשיאה נייד'
    item2add.instDetails.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'משקל'
    f2add.fDescription = '2.7kg'
    item2add.instDetails.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'מידות'
    f2add.fDescription = '255x109x55mm (HxWxD)'
    item2add.instDetails.append(f2add.__dict__)


    f2add = FeatureItem()
    f2add.fName = 'טמפרטורת עבודה'
    f2add.fDescription = '30- עד 60 מעלות'
    item2add.envConditions.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'אטימות למים'
    f2add.fDescription = 'IP67'
    item2add.envConditions.append(f2add.__dict__)



    item2add.price2Cell = 1450
    item2add.instPrice = 500

    return item2add

def setInstOnly():
    item2add = Charger()
    item2add.sid = 100
    item2add.type = 'service'
    item2add.name = 'התקנת עמדת טעינה'
    item2add.picList.append('inst1.jpg')
    item2add.picList.append('inst2.jpg')
    item2add.picList.append('inst31.jpg')
    item2add.picList.append('evgen.jpg')
    item2add.description = 'התקנה סטנרדטית לבית פרטי או משותף ע"י צוות מקצועי בראשות חשמלאי מוסמך לפחות'
    item2add.mainFeatures.append('התקנה עפ"י תקנות החשמל')
    item2add.mainFeatures.append('ניתן לבצע פיצול הזנה עפ"י הצורך')
    item2add.mainFeatures.append('במידת הצורך - טיפול מלא בכל התהליך מול חברת החשמל')
    item2add.mainFeatures.append('מחיר סופי יקבע לאחר סקר ההתקנה')
    f2add = FeatureItem()
    f2add.fName = 'התקנת מא"ז'
    f2add.fDescription = '3x16 או 3x32  בהתאם לסוג עמדת הטעינה וגודל החיבור הזמין'
    item2add.instDetails.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'פחת'
    f2add.fDescription = 'TYPE A'
    item2add.instDetails.append(f2add.__dict__)
    f2add = FeatureItem()
    f2add.fName = 'כבל'
    f2add.fDescription = 'עד 30 מטר כבל בחתך 5x6mmr'
    item2add.instDetails.append(f2add.__dict__)
    item2add.price2Cell = 0
    item2add.instPrice = Charger.instTypeA22

    return(item2add)


def get_user_list(userName):
    userList = []
    if userName == 'main_shop':
        # userList = [{1:11},{2:22}]
        userList.append(setVoltec().__dict__)
        userList.append(setAdvice().__dict__)
        userList.append(setPortAdvice().__dict__)
        userList.append(setInstOnly().__dict__)

    return userList

def get_item(pid):
    # tempItem = []
    if pid == 100:
        tempItem = setInstOnly().__dict__
    elif pid == 101:
        tempItem = setAdvice().__dict__
    elif pid == 102:
        tempItem = setVoltec().__dict__
    elif pid == 103:
        tempItem = setPortAdvice().__dict__
    else:
        tempItem = Charger().__dict__

    itemDict = tempItem

    return itemDict
