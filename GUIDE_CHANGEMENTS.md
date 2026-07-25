# 🔄 GUIDE COMPLET - GESTION DES CHANGEMENTS

## Comment signaler un changement (remplacement de joueur)

---

## 📱 UTILISATION RAPIDE

### **Étape 1 : Cliquer sur le bouton CHANGEMENT**
```
Pendant le match → Onglet ⏱️ "Pendant Match"
                → Cliquez sur 🔄 CHANGEMENT
```

### **Étape 2 : Une section spéciale s'affiche**
```
┌─────────────────────────────────────┐
│  🔄 DÉTAILS DU CHANGEMENT          │
├─────────────────────────────────────┤
│ Dossard qui SORT  :  [  7  ]       │
│ Dossard qui ENTRE :  [  12  ]      │
└─────────────────────────────────────┘
```

### **Étape 3 : Remplissez les deux numéros**
- **Dossard qui SORT** = Le joueur qui quitte le terrain (ex: `7`)
- **Dossard qui ENTRE** = Le remplaçant qui arrive (ex: `12`)

### **Étape 4 : Cliquez sur CHANGEMENT**
Le changement s'enregistre immédiatement !

---

## 📊 AFFICHAGE DANS LE JOURNAL

### **Avant d'avoir cliqué :**
```
Journal d'actions :
  45'  BUT       FC Lyon #7
  47'  FAUTE     AS Étienne #23
```

### **Après avoir cliqué sur CHANGEMENT :**
```
Journal d'actions :
  45'  BUT       FC Lyon #7
  47'  FAUTE     AS Étienne #23
  52'  CHANGEMENT  FC Lyon  #7 → #12    ← Remplacement clairement visible !
```

**Format :** `[Minute] CHANGEMENT [Équipe] #[Sortant] → #[Entrant]`

---

## 📈 ENREGISTREMENT DANS GOOGLE SHEETS

### **Onglet `Actions_Live`** : Structure complète
```
| Minute | Équipe | Type_Action | Dossard | Description | Sortant | Entrant | Créé_À |
|--------|--------|-------------|---------|-------------|---------|---------|--------|
| 52 | FC Lyon | CHANGEMENT | Sortant: #7 \| Entrant: #12 | Remplacement du #7 par le #12 | 7 | 12 | 2024-05-15... |
```

**Colonnes spéciales pour les changements :**
- `Sortant` : Numéro du joueur qui sort (ex: `7`)
- `Entrant` : Numéro du remplaçant qui entre (ex: `12`)

---

## 🎯 EXEMPLES RÉELS D'UTILISATION

### **Scénario 1 : Blessure à la 30ème minute**
```
1. Minute : 30'
2. Équipe : FC Lyon
3. Cliquez sur 🔄 CHANGEMENT
4. Dossard qui SORT : 9 (joueur blessé)
5. Dossard qui ENTRE : 18 (remplaçant)
6. Cliquez CHANGEMENT

Résultat dans le journal :
  30'  CHANGEMENT  FC Lyon  #9 → #18
  
Google Sheets :
  | 30 | FC Lyon | CHANGEMENT | ... | 9 | 18 |
```

### **Scénario 2 : Changement tactique à la 65ème minute**
```
1. Minute : 65'
2. Équipe : AS Étienne
3. Cliquez sur 🔄 CHANGEMENT
4. Dossard qui SORT : 14
5. Dossard qui ENTRE : 21
6. Cliquez CHANGEMENT

Résultat dans le journal :
  65'  CHANGEMENT  AS Étienne  #14 → #21
```

### **Scénario 3 : Double changement (deux équipes)**
```
À la 45ème minute (mi-temps)

FC Lyon - Changement 1 :
  45'  CHANGEMENT  FC Lyon  #7 → #12

AS Étienne - Changement 1 :
  45'  CHANGEMENT  AS Étienne  #3 → #15

AS Étienne - Changement 2 :
  45'  CHANGEMENT  AS Étienne  #14 → #21
```

---

## ⚙️ DÉTAILS TECHNIQUES

### **Structure du changement enregistré**

Dans l'app :
```javascript
{
  minute: 52,
  team: "FC Lyon",
  actionType: "Changement",
  playerOut: "7",      // Dossard qui sort
  playerIn: "12",      // Dossard qui entre
  player: "7→12",      // Format affiché
  description: "#7 remplacé par #12"
}
```

Envoyé à Google Sheets :
```json
{
  "type": "action_live",
  "matchId": "LYON_001",
  "minute": 52,
  "team": "FC Lyon",
  "actionType": "Changement",
  "player": "Sortant: #7 | Entrant: #12",
  "description": "Remplacement du #7 par le #12"
}
```

Stocké comme :
```
| 52 | FC Lyon | CHANGEMENT | Sortant: #7 | Entrant: #12 | Remplacement du #7 par le #12 | 7 | 12 |
```

---

## 🎨 AFFICHAGE VISUEL

### **Avant d'ouvrir la section :**
Les boutons d'action s'affichent normalement :
```
⚽ BUT   |  🛑 FAUTE  |  🔄 CHANGEMENT  |  💡 ACTION CLÉ  |  ❌ ERREUR
```

### **Après clic sur CHANGEMENT :**
Une section spéciale s'affiche avec un encadré bleu :
```
┌─────────────────────────────────────────────┐
│  🔄 DÉTAILS DU CHANGEMENT                  │
├─────────────────────────────────────────────┤
│ Dossard qui SORT   (en ROUGE)  :  [ _ ]   │
│ Dossard qui ENTRE  (en VERT)   :  [ _ ]   │
│                                             │
│ 💡 Remplissez ces deux champs avant de     │
│    cliquer sur CHANGEMENT                  │
└─────────────────────────────────────────────┘
```

---

## ✅ CHECKLIST UTILISATION

### **Pour chaque changement :**
- [ ] Sélectionner l'équipe concernée
- [ ] Cliquer sur 🔄 CHANGEMENT
- [ ] La section de changement s'affiche
- [ ] Entrer le numéro du joueur qui SORT
- [ ] Entrer le numéro du remplaçant qui ENTRE
- [ ] Cliquer sur 🔄 CHANGEMENT (ou le bouton valide)
- [ ] ✅ Le changement est enregistré en temps réel

---

## 🚨 ERREURS COURANTES

### ❌ Erreur : "Veuillez saisir les deux numéros"
**Cause :** Vous avez cliqué sur CHANGEMENT sans remplir les deux champs  
**Solution :** Remplissez les deux champs (Sortant et Entrant) avant de valider

### ❌ Le changement ne s'affiche pas
**Cause :** La section de changement ne s'est pas ouverte  
**Solution :** Cliquez à nouveau sur 🔄 CHANGEMENT pour ouvrir la section

### ❌ Changement enregistré avec les mauvais dossards
**Solution :** Cliquez **Supprimer** dans le journal, puis refaites le changement

---

## 💾 EXPORT GOOGLE SHEETS

### **Colonnes spéciales pour les changements**

Contrairement aux autres actions, les changements ont des colonnes dédiées :

| Colonne | Contenu | Exemple |
|---------|---------|---------|
| `Minute` | Minute du match | 52 |
| `Équipe` | Équipe concernée | FC Lyon |
| `Type_Action` | Type d'action | CHANGEMENT |
| `Dossard` | Format complet | Sortant: #7 \| Entrant: #12 |
| `Sortant` | Numéro du joueur qui sort | 7 |
| `Entrant` | Numéro du remplaçant | 12 |
| `Description` | Description lisible | Remplacement du #7 par le #12 |

---

## 📊 UTILISATION DES CHANGEMENTS DANS LES STATISTIQUES

### **Comptage automatique**
- **Total Changements** = Nombre de fois que le bouton CHANGEMENT a été cliqué
- Les changements des deux équipes sont comptabilisés séparément

### **Dans le bilan après-match**
```
Équipe 1 (FC Lyon) :
  - Total Changements : 3
  
Équipe 2 (AS Étienne) :
  - Total Changements : 2
```

---

## 🎯 BONNES PRATIQUES

✅ **À faire :**
- Saisir les changements immédiatement (ne pas attendre)
- Vérifier les numéros de dossard avant de valider
- Corriger rapidement si erreur (bouton Supprimer)
- Garder le même format pour tous les changements

❌ **À éviter :**
- Saisir le nom du joueur au lieu du dossard
- Oublier de remplir les deux champs
- Saisir un changement deux fois
- Mélanger les numéros de dossard des deux équipes

---

## 📱 OPTIMISATION MOBILE

**Sur téléphone :**
- Les deux champs de dossards apparaissent l'un sous l'autre
- Le clavier numérique s'ouvre automatiquement
- Les touches sont grandes pour saisie rapide
- La validation se fait au doigt

**Astuce :** Positionnez-vous à côté du banc de touche pour noter rapidement les changements !

---

**Version :** 1.0  
**Mise à jour :** Mai 2024

Bon changement ! 🔄⚽
