const checkInput = (ele) => {
  if (event.keyCode == 13) {
    if ("-1665552523,-2055674242,1249693790,2056810162,1682091365,1324870052,-1904670374,-2141201662,-752287153,-2146016331,-1028631548,-672072770,-1234608582,-1736127469,1337913777,-823009991" == CryptoJS.SHA3(ele.value.toUpperCase()).words.toString()) {
      window.location.replace("https://docs.google.com/spreadsheets/d/1NRVrr-iSsHQExeUU7KKM99Rv_KTfZsQZOugBEciVMOk/edit?usp=sharing");
    }
  }
};

var myElement = document.body;
myElement.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
