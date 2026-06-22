/* 
Copy this into your Google Apps Script editor (Extensions > Apps Script)
and deploy as a Web App (Deploy > New Deployment > Web App > "Anyone").
*/

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Append data: Name, Email, Phone, Website, Budget, Challenges
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.phone,
    data.website,
    data.budget,
    data.challenges
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
    .setMimeType(ContentService.MimeType.JSON);
}
