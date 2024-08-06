//JS BOM WINDOW OBJECT...............................
let  myWindow;

function openNow(){
    myWindow  =   window.open("https://www.facebook.com/");
}

function closeNow(){

    myWindow.close();
}

// JS BOM SCREEN OBJECT..................................

const width = document.getElementById("width");
const height = document.getElementById("height");
const availWidth = document.getElementById("availWidth");
const availHeight = document.getElementById("availHeight");
const colorDepth = document.getElementById("colorDepth");
const pixelDepth = document.getElementById("pixelDepth");


width.innerHTML = screen.width;
height.innerHTML = screen.height;
availWidth.innerHTML = screen.availWidth;
availHeight.innerHTML = screen.availHeight;
colorDepth.innerHTML = screen.colorDepth;
pixelDepth.innerHTML = screen. pixelDepth;

//  JS BOM LOCATION OBJECT........................

const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const pathname = document.getElementById("pathname");
const protocol = document.getElementById("protocol");
const port = document.getElementById("port");


href.innerHTML = location.href;
hostname.innerHTML = location.hostname;
pathname.innerHTML = location.pathname;
protocol.innerHTML = location.protocol;
port.innerHTML = location.port;

function webNew(){
    window.location.assign("https://www.facebook.com/");
}

// JS BOM HISTORY OBJECT ... ..........................

function goBack(){
    window.history.back();
}

function goForward(){
    window.history.forward();
}

//JS BOM navigator.................................
const appName = document.getElementById("appName");
const appCodeName = document.getElementById("appCodeName");
const platform = document.getElementById("platform");
const cookieEnabled = document.getElementById("cookieEnabled");
const product = document.getElementById("product");
const appVersion = document.getElementById("appVersion");
const userAgent = document.getElementById("userAgent");
const language = document.getElementById("language");
const onLine = document.getElementById("onLine");
const javaenabled = document.getElementById("javaenabled");

appName.innerHTML = navigator.appName;
appCodeName.innerHTML = navigator.appCodeName;
platform.innerHTML = navigator.platform;
cookieEnabled.innerHTML = navigator.cookieEnabled;
product.innerHTML = navigator.product;
appVersion.innerHTML = navigator.appVersion;
userAgent.innerHTML = navigator.userAgent;
language.innerHTML = navigator.language;
onLine.innerHTML = navigator.onLine;
javaenabled.innerHTML = navigator.javaenabled();



// JS BOM ALERT ...............................
const confirm = document.getElementById("confirm")
const Prompt = document.getElementById("Prompt");

function showAlert(){
    window.alert("Hello world");
}

function showConfirm(){
    let txx;
    if(window.confirm("Press a button")){
        txx = "You pressed OK...";
    } else {
        txx = "You pressed Cancelled!";
    }
    document.getElementById("confirm").innerHTML = txx;
}


function showPrompt(){
   let person =  window.prompt("Please Enter a number between 1 to 10:");
   let txt;

   if(person === null || person === "") {
    txt = "User closed the input box...!!";

   } else {
    txt = "Hello" + person + "! How are you?"; 
   }
  
   document.getElementById("Prompt").innerHTML = txt;
}

// JS BOM Timing events..............................
const timeout = document.getElementById("timeout");
const interval = document.getElementById("interval");

// 1
let timeoutInstance;


function startTimeout(){
    timeoutInstance =  setTimeout(function(){
        document.getElementById("timeout").innerHTML = "1 seconds Over"
    }, 1000)
}

// 2
function stopTimeout(){
    clearTimeout(timeoutInstance);
}

// 3
let intervalInstance;

function startInterval(){
    intervalInstance = setInterval(function(){
        document.getElementById("interval").innerHTML = new Date().toLocaleTimeString();
    }, 1000);
}

// 4
function stopInterval(){
    clearInterval(intervalInstance);
}


