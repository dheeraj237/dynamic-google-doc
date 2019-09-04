function createDocument(obj) {
  var TEMPLATE_ID = 'DOCUMENT_ID_XXXXXXXXXXXXX'; 

  // https://script.google.com/a/thinglogix.com/macros/s/AKfycbyaKpmobAA-__3jAvz_8c3tmiWETx4QDRQyD8CD3A/exec
  var fileName = obj.name + "_"+ obj.date;
  Logger.log("creating file with file name >",fileName);
  var documentId = DriveApp.getFileById(TEMPLATE_ID).makeCopy(fileName).getId();
  
  doc = DocumentApp.openById(documentId);
  
  var body = doc.getBody();
  
  body.replaceText('{title}', obj.title);
  body.replaceText('{subtitle}', obj.subtitle);
  body.replaceText('{date}', obj.date);
  body.replaceText('{url}', obj.url);
  body.replaceText('{name}', obj.name);
  
  drivedoc = DriveApp.getFileById(documentId);
  drivedoc.setName(fileName);
  drivedoc.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);

  return "https://docs.google.com/document/d/" + documentId + "/export?format=pdf";
}

function doGet(e) {
  Logger.log("post data",e);
  var obj = e.parameter;
  var url = createDocument(obj);
  return ContentService.createTextOutput(url);
}

//function doPost(e) {
//  Logger.log("post data",e);
//  var obj = e.parameter.subtitle;
//  var url = createDocument(obj);
//  return ContentService.createTextOutput(url);
//}