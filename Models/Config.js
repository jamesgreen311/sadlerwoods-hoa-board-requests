// Defines the structure of the config array
const ConfigMap = {
    boardMembers: {
        byColNum: 1,
        byRef: "a2:a"
    },
    boardEmails: {
        byColNum: 2,
        byRef: "b2:b"
    },
    attachmentFolderId: {
        byColNum: 3,
        byRef: "c2"
    }
}

/* 
@Return {array} member names 
*/
function getBoardMembers() {
    let arr = config.getRange(`${ConfigMap.boardMembers.byRef}${config.getLastRow()}`).getValues();
    return arr.map(el => el[0]);
}

/* 
@Return {array} emails
*/
function getBoardEmails() {
    let arr = config.getRange(`${ConfigMap.boardEmails.byRef}${config.getLastRow()}`).getValues();
    return arr.map(el => el[0]);
}

/* 
@Return {string} folder id 
*/
function getAttachmentFolderId() {
    return config.getRange(ConfigMap.attachmentFolderId.byRef).getValue();
}