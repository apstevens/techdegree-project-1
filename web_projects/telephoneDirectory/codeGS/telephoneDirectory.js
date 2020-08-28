function onOpen() {
  SpreadsheetApp.getUi()
  .createMenu('Advanced')
  .addItem('Popup 1', 'myFunction1')
  .addSeparator()
  .addItem('Popup 2', 'myFunction2')
  .addToUi();
}

function doGet(e){
  var ss = SpreadsheetApp.openById('1Awk0q3FizhADNVsVqwKGhP3Cee36MP7cxONwMze-fcI');
  var sheet = ss.getSheetByName('Staff');
  var range = sheet.getDataRange();
  var values = range.getValues();
  var holderArray = [];
  var HTMLTemp = HtmlService.createTemplateFromFile('index');
  
  Logger.log(values);
  var holder = '';
  for(x=1; x<values.length; x++){
    holderArray.push({
      "firstname" : values[x][0],
      "lastname" : values[x][1],
      "service" : values[x][2],
      "role" : values[x][3],
      "location" : values[x][4],
      "deskphone" : values[x][5],
      "mobilephone" : values[x][6],
      "email" : values[x][7]
    });
  }
  HTMLTemp.data = holderArray;
  var html = HTMLTemp.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  return html;
}

function myFunction1(){
  var ss = SpreadsheetApp.openById('1Awk0q3FizhADNVsVqwKGhP3Cee36MP7cxONwMze-fcI');
  var sheet = ss.getSheetByName('Staff');
  var range = sheet.getDataRange();
  var values = range.getValues();
  var holderArray = [];
  var HTMLTemp = HtmlService.createTemplateFromFile('index');
  
  Logger.log(values);
  var holder = '';
  for(x=1; x<values.length; x++){
    holderArray.push({
      "firstname" : values[x][0],
      "lastname" : values[x][1],
      "service" : values[x][2],
      "role" : values[x][3],
      "location" : values[x][4],
      "deskphone" : values[x][5],
      "mobilephone" : values[x][6],
      "email" : values[x][7]
     });
  }
  HTMLTemp.data = holderArray;
  var html = HTMLTemp.evaluate().setWidth(1020).setHeight(800);
  SpreadsheetApp.getUi().showModalDialog(html, 'Age UK Essex Staff Directory');
}
