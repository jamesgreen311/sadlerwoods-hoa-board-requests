const config = connect().getSheetByName("Config");
const testSheet = "Dev-Test";
const liveSheet = "Data";
const defaultPage = `${pageRoot}/Request`;

let targetSheet = publishMode === "test" ? testSheet : liveSheet;
let data = connect().getSheetByName(targetSheet);

function init() {
    // SpreadsheetApp.getActiveSpreadsheet();
    return 
}

function connect(id) {
    let conn;
    if (id) {
        conn = SpreadsheetApp.openById(id);
    } else {
        conn = SpreadsheetApp.getActiveSpreadsheet();
    }
    return conn;
}