/*
    Accepts input and converts it to commands for the model or view.

    The controller responds to the user input and performs interactions on the data model objects. 
    The controller receives the input, optionally validates it and then passes the input to the model.
*/
var Route = {};
Route.path = function (r, callback) {
    Route[r] = callback;
}

function doGet(e) {
    Route.path("done", showDone);

    var r;
    if (Route[e.parameter.v]) {
        r = Route[e.parameter.v]();
    } else {
        // default to main page
        r = render(defaultPage);
    }

    return r;
}

function showDone() {
    return render(`${pageRoot}/ThankYou`);
}

function saveFile(f, d) {
    let blob = Utilities.newBlob(f.bytes, f.mimeType, f.filename);
    let uploadFolder = DriveApp.getFolderById(docFolderId);
    let today = new Date();

    let newFile = uploadFolder.createFile(blob).getId();
    d.push(newFile);
    d.push(today);

    let done = saveToSheet(d);
    Logger.log("Uploaded file id = %s", newFile);
    return done;
}

function saveToSheet(data) {
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName(targetSheet);

    ws.appendRow(data);
    Logger.log(data);
    return true;
}