# 👥 GUIDE - Gestion des Joueurs avant le Match

## 🎯 Vue d'ensemble

La nouvelle section **"Gestion des Joueurs"** dans l'onglet "📋 Avant Match" vous permet de :
- ✅ Ajouter progressivement les dossards des joueurs
- ✅ Distinguer les **titulaires** (sur le terrain) des **remplaçants** (banc)
- ✅ Vérifier que les effectifs sont équilibrés
- ✅ Démarrer le match uniquement si les deux équipes ont le même nombre de joueurs

---

## 📋 Étapes d'utilisation

### **Étape 1️⃣ : Configuration du Match**
Comme avant, complétez :
- Équipe 1 : `FC Lyon`
- Équipe 2 : `AS Étienne`
- Date du match
- Lieu du match

```
┌─────────────────────────────────────┐
│  Équipe 1: [FC Lyon              ]  │
│  Équipe 2: [AS Étienne           ]  │
│  Date    : [2024-05-15          ]  │
│  Lieu    : [Stade Gerland       ]  │
└─────────────────────────────────────┘
```

---

### **Étape 2️⃣ : Sélectionner l'équipe à configurer**

Dans la section "👥 Gestion des Joueurs", utilisez le sélecteur :

```
Équipe en cours : [FC Lyon ▼]
                  ├─ FC Lyon
                  └─ AS Étienne
```

Cliquez sur l'équipe pour laquelle vous voulez ajouter des joueurs.

---

### **Étape 3️⃣ : Ajouter les joueurs**

#### **Formulaire d'ajout :**
```
┌──────────────────────────────────────────────────────────┐
│  Joueurs - FC Lyon                                       │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  Ajouter un dossard                                      │
│  ┌──────────────────┬──────────────────────┬──────────┐  │
│  │ Numéro de dossard│ [Titulaire ▼      ] │ ➕ Ajouter│  │
│  │ [  7   ]         │ ├─ Titulaire (terrain)           │  │
│  │                  │ └─ Remplaçant (banc)             │  │
│  └──────────────────┴──────────────────────┴──────────┘  │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

**Exemple : Ajouter le titulaire #7**
1. Entrez `7` dans le champ "Numéro de dossard"
2. Sélectionnez `Titulaire (sur le terrain)`
3. Cliquez sur `➕ Ajouter`

**Résultat :**
```
📍 Titulaires (Sur le terrain)
┌─────────────────────────────┐
│  [ #7 ✕ ]                   │
└─────────────────────────────┘

🔄 Remplaçants (Banc)
┌─────────────────────────────┐
│  Aucun remplaçant ajouté    │
└─────────────────────────────┘
```

---

### **Étape 4️⃣ : Ajouter progressivement les joueurs**

Continuez à ajouter les dossards :

```
Titulaires FC Lyon : #1, #4, #7, #10, #14, #19, #23, #25, #28, #32, #35
Remplaçants FC Lyon : #41, #42, #43
```

**Pour ajouter un remplaçant (#41) :**
1. Entrez `41`
2. Sélectionnez `Remplaçant (banc)`
3. Cliquez `➕ Ajouter`

**Résultat après ajout :**
```
📍 Titulaires (Sur le terrain)
[ #1 ✕ ] [ #4 ✕ ] [ #7 ✕ ] [ #10 ✕ ] [ #14 ✕ ] ...

🔄 Remplaçants (Banc)
[ #41 ✕ ] [ #42 ✕ ] [ #43 ✕ ]
```

---

### **Étape 5️⃣ : Passer à l'autre équipe**

Une fois terminé avec **FC Lyon** :
1. Changez le sélecteur : `[AS Étienne ▼]`
2. Recommencez les étapes 3-4 pour l'autre équipe

```
Équipe en cours : [AS Étienne ▼]

Joueurs - AS Étienne
┌───────────────────────────────────────┐
│ Ajouter un dossard                    │
│ [  12  ] [Titulaire ▼] [➕ Ajouter] │
├───────────────────────────────────────┤
│ 📍 Titulaires : [ #12 ✕ ] [ #8 ✕ ] │
│ 🔄 Remplaçants: Aucun               │
└───────────────────────────────────────┘
```

---

### **Étape 6️⃣ : Vérifier les Effectifs**

Cliquez sur `🔍 Vérifier les Effectifs` :

```
┌──────────────────────────────────────────────────────┐
│  ✅ Vérification des Effectifs                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Équipe      │ Titulaires │ Remplaçants │ Total   │
│  ─────────────┼────────────┼─────────────┼─────────│
│  FC Lyon      │     11     │      3      │   14   │
│  AS Étienne   │     11     │      3      │   14   │
│                                                      │
│  ✅ Effectifs équilibrés (14 joueurs par équipe)  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Cas de déséquilibre :**
```
┌──────────────────────────────────────────────────────┐
│  ✅ Vérification des Effectifs                      │
├──────────────────────────────────────────────────────┤
│  Équipe      │ Titulaires │ Remplaçants │ Total   │
│  ─────────────┼────────────┼─────────────┼─────────│
│  FC Lyon      │     11     │      3      │   14   │
│  AS Étienne   │     10     │      3      │   13   │
│                                                      │
│  ❌ Effectifs non équilibrés : FC Lyon (14) vs     │
│     AS Étienne (13)                                  │
│  💡 Veuillez ajouter 1 joueur à AS Étienne        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

### **Étape 7️⃣ : Démarrer le Match**

Le bouton **`▶️ Démarrer le Match`** s'active **UNIQUEMENT** si :
- ✅ Au moins un joueur par équipe
- ✅ **Même nombre total de joueurs**

**Avant équilibre :**
```
[🔍 Vérifier les Effectifs] [▶️ Démarrer le Match] ← DÉSACTIVÉ 🔒
```

**Après équilibre :**
```
[🔍 Vérifier les Effectifs] [▶️ Démarrer le Match] ← ACTIVÉ 🟢
```

---

## 🎮 Exemple Complet

### **Scenario : FC Lyon vs AS Étienne (14 joueurs chacun)**

#### **FC Lyon - Titulaires (11)**
```
1️⃣  Ajouter #1 (Titulaire) → [ #1 ✕ ]
2️⃣  Ajouter #4 (Titulaire) → [ #1 ✕ ] [ #4 ✕ ]
3️⃣  Ajouter #7 (Titulaire) → [ #1 ✕ ] [ #4 ✕ ] [ #7 ✕ ]
... continuer jusqu'à #35 ...
```

#### **FC Lyon - Remplaçants (3)**
```
Ajouter #41 (Remplaçant)
Ajouter #42 (Remplaçant)
Ajouter #43 (Remplaçant)

Résultat :
📍 Titulaires  : [ #1 ✕ ] [ #4 ✕ ] [ #7 ✕ ] ... [ #35 ✕ ]
🔄 Remplaçants : [ #41 ✕ ] [ #42 ✕ ] [ #43 ✕ ]
```

#### **Passer à AS Étienne**
```
Équipe en cours : [AS Étienne ▼]
... Ajouter 11 titulaires + 3 remplaçants ...
```

#### **Vérifier et Démarrer**
```
[🔍 Vérifier les Effectifs]
→ ✅ Effectifs équilibrés (14 joueurs par équipe)

[▶️ Démarrer le Match]
→ Match démarré ! (14 joueurs par équipe) ✅
```

---

## 🛠️ Actions Disponibles

### **Supprimer un joueur**
Cliquez sur le **`✕`** à côté du dossard :
```
[ #7 ✕ ]  ← Cliquez sur ✕
→ Joueur #7 supprimé ✅
```

### **Réinitialiser tous les joueurs**
Cliquez sur `🗑️ Réinitialiser les Joueurs` :
```
Êtes-vous sûr de vouloir supprimer tous les joueurs ?
[Oui] [Non]
```

### **Changer le nom d'équipe**
Modifiez les noms dans les champs "Équipe 1" et "Équipe 2" :
```
Équipe 1 : [FC Lyon] → Modifiez en [FC Nantes]
→ Le sélecteur se met à jour automatiquement
```

---

## ✨ Points Clés

| Point | Détail |
|-------|--------|
| **Titulaires** | Joueurs de base qui commencent sur le terrain (11 en football) |
| **Remplaçants** | Joueurs sur le banc (max 3 en football traditionnel) |
| **Vérification** | Doit être **strictement égale** pour les deux équipes |
| **Activation** | Le bouton démarrage est verrouillé jusqu'à l'équilibre |
| **Flexibilité** | Adaptez le nombre total selon votre sport |

---

## 📱 Sur Mobile

L'interface s'adapte automatiquement :

```
┌─────────────────────────────┐
│  Équipe : [FC Lyon ▼]      │
│                             │
│  Ajouter un dossard        │
│  [ Numéro        ]         │
│  [ Titulaire ▼ ]           │
│  [➕ Ajouter]              │
│                             │
│  📍 Titulaires             │
│  [ #1 ✕ ]                  │
│  [ #4 ✕ ]                  │
│  [ #7 ✕ ]                  │
│  ...                        │
│                             │
│  🔄 Remplaçants            │
│  [ #41 ✕ ]                 │
│  [ #42 ✕ ]                 │
│                             │
│  [🔍 Vérifier]             │
│  [▶️ Démarrer] (désactivé) │
└─────────────────────────────┘
```

---

## ❓ Foire Aux Questions

### **Q : Puis-je ajouter des joueurs pendant le match ?**
**R :** Non. La gestion des joueurs est **uniquement dans l'onglet "Avant Match"**. Une fois le match démarré, les joueurs sont figés.

### **Q : Que se passe-t-il si je modifie un nom d'équipe après avoir ajouté des joueurs ?**
**R :** Les noms se mettent à jour automatiquement, mais les joueurs restent associés à l'équipe.

### **Q : Puis-je avoir un nombre différent de joueurs par équipe ?**
**R :** Non. L'application **force l'égalité** des effectifs pour garantir la fairness.

### **Q : Combien de joueurs puis-je ajouter ?**
**R :** Jusqu'à 99 par catégorie (illimité en théorie, mais pratiquement vous serez limité par le nombre de dossards 1-99).

### **Q : Puis-je supprimer un dossard après démarrage du match ?**
**R :** Non, uniquement dans l'onglet "Avant Match". Utilisez `🗑️ Réinitialiser` pour recommencer.

---

## 🎓 Bonnes Pratiques

✅ **À faire :**
- Remplir complètement une équipe avant de passer à l'autre
- Vérifier les effectifs avant de démarrer
- Utiliser des numéros cohérents (11-99 pour foot, 1-23 pour basket, etc.)
- Garder les titulaires les plus bas (1-11) et remplaçants plus hauts (41+)

❌ **À éviter :**
- Mélanger titulaires et remplaçants avec les mêmes numéros
- Démarrer sans vérifier l'équilibre
- Ajouter le même dossard deux fois à la même équipe
- Oublier de terminer l'ajout des joueurs

---

**Version :** 1.0  
**Mise à jour :** 2024

Bon setup ! ⚽
