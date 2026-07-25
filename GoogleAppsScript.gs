// Google Apps Script - Checklist & Live Tagging Tool
// À copier/coller dans Google Sheets (Extensions > Apps Script)

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
    } else if (actionType === "stats_joueurs") {
      insertStatsJoueurs(ss, payload);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      timestamp: new Date(),
      type: actionType
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function initializeSheets(ss) {
  const sheetNames = ["Matchs", "Actions_Live", "Bilans_Apres_Match", "Stats_Joueurs"];
  
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
      } else if (name === "Stats_Joueurs") {
        sheet.appendRow([
          "ID_Match", "Équipe", "Dossard", "Buts", "Fautes", "Actions_Clés", "Erreurs", "Entré_À", "Sorti_À", "Créé_À"
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

function insertStatsJoueurs(ss, data) {
  const sheet = ss.getSheetByName("Stats_Joueurs");
  const matchId = data.matchId;
  
  // Traiter les joueurs de l'équipe 1
  if (data.team1Players && Array.isArray(data.team1Players)) {
    data.team1Players.forEach(player => {
      sheet.appendRow([
        matchId,
        player.team || "Équipe 1",
        player.dossard || "",
        player.buts || 0,
        player.fautes || 0,
        player.actionsClés || 0,
        player.erreurs || 0,
        player.entré || 0,
        player.sorti || "",
        new Date()
      ]);
    });
  }
  
  // Traiter les joueurs de l'équipe 2
  if (data.team2Players && Array.isArray(data.team2Players)) {
    data.team2Players.forEach(player => {
      sheet.appendRow([
        matchId,
        player.team || "Équipe 2",
        player.dossard || "",
        player.buts || 0,
        player.fautes || 0,
        player.actionsClés || 0,
        player.erreurs || 0,
        player.entré || 0,
        player.sorti || "",
        new Date()
      ]);
    });
  }
}

// Fonction utile pour tester le Web App URL
function getWebAppUrl() {
  return ScriptApp.getService().getUrl();
}

// Fonction utile pour récupérer un résumé des données
function getSummary() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  const matchSheet = ss.getSheetByName("Matchs");
  const actionsSheet = ss.getSheetByName("Actions_Live");
  const bilansSheet = ss.getSheetByName("Bilans_Apres_Match");
  const statsSheet = ss.getSheetByName("Stats_Joueurs");
  
  return {
    totalMatches: matchSheet ? matchSheet.getLastRow() - 1 : 0,
    totalActions: actionsSheet ? actionsSheet.getLastRow() - 1 : 0,
    totalBilans: bilansSheet ? bilansSheet.getLastRow() - 1 : 0,
    totalPlayerStats: statsSheet ? statsSheet.getLastRow() - 1 : 0
  };
}
