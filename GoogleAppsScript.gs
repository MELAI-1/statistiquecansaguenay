// Google Apps Script - À copier/coller dans Google Sheets (Extensions > Apps Script)

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Initialiser les feuilles si elles n'existent pas
    initializeSheets(ss);
    
    const actionType = payload.type;
    
    if (actionType === "match_create") {
      insertMatch(ss, payload);
    } else if (actionType === "action_live") {
      insertLiveAction(ss, payload);
    } else if (actionType === "bilan_match") {
      insertBilan(ss, payload);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      timestamp: new Date()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function initializeSheets(ss) {
  const sheetNames = ["Matchs", "Actions_Live", "Bilans_Apres_Match"];
  
  sheetNames.forEach(name => {
    let sheet = ss.getSheetByName(name);
    if (!sheet) {
      sheet = ss.insertSheet(name);
      
      if (name === "Matchs") {
        sheet.appendRow([
          "ID_Match", "Équipe_1", "Équipe_2", "Date_Création", 
          "Status", "Score_Final_T1", "Score_Final_T2", "Commentaires"
        ]);
      } else if (name === "Actions_Live") {
        sheet.appendRow([
          "ID_Match", "Timestamp", "Minute", "Équipe", "Type_Action", 
          "Dossard", "Description", "Sortant", "Entrant", "Créé_À"
        ]);
      } else if (name === "Bilans_Apres_Match") {
        sheet.appendRow([
          "ID_Match", "Équipe", "Total_Buts", "Total_Fautes", 
          "Total_Changements", "Actions_Clés", "Erreurs", "Notes", "Créé_À"
        ]);
      }
    }
  });
}

function insertMatch(ss, data) {
  const sheet = ss.getSheetByName("Matchs");
  sheet.appendRow([
    data.matchId,
    data.team1,
    data.team2,
    new Date(),
    "EN_COURS",
    0,
    0,
    data.comments || ""
  ]);
}

function insertLiveAction(ss, data) {
  const sheet = ss.getSheetByName("Actions_Live");
  
  // Extraction des dossards pour changements
  let playerInfo = data.player || "";
  let sortant = "";
  let entrant = "";
  
  if (data.actionType === "Changement" && data.player && data.player.includes("|")) {
    // Format: "Sortant: #7 | Entrant: #12"
    const parts = data.player.split("|");
    if (parts[0]) sortant = parts[0].replace("Sortant: #", "").trim();
    if (parts[1]) entrant = parts[1].replace("Entrant: #", "").trim();
  }
  
  sheet.appendRow([
    data.matchId,
    new Date().toISOString(),
    data.minute,
    data.team,
    data.actionType,
    playerInfo,
    data.description || "",
    sortant,
    entrant,
    new Date()
  ]);
}

function insertBilan(ss, data) {
  const sheet = ss.getSheetByName("Bilans_Apres_Match");
  sheet.appendRow([
    data.matchId,
    data.team,
    data.totalButs || 0,
    data.totalFautes || 0,
    data.totalChangements || 0,
    data.actionsClés || 0,
    data.erreurs || 0,
    data.notes || "",
    new Date()
  ]);
}

// Fonction utile pour tester le Web App URL
function getWebAppUrl() {
  return ScriptApp.getService().getUrl();
}
