# 📥 GUIDE - Mode Hors Ligne & Annuler la Dernière Action

## 1️⃣ Mode hors ligne

### Le problème que ça résout
Un stade a souvent un mauvais réseau. Avant, si la connexion coupait pendant un envoi vers Google Sheets, l'action était silencieusement perdue. Maintenant, **rien ne se perd** : chaque action est mise en file d'attente et renvoyée automatiquement dès que la connexion revient.

### Ce qui a changé
Chaque action (BUT, FAUTE, CHANGEMENT, ACTION CLÉ, ERREUR, création du match, bilan de fin de match) est envoyée en temps réel vers Google Sheets. Si l'envoi échoue (pas de réseau), elle est stockée localement dans le téléphone/ordinateur et renvoyée automatiquement :
- dès que la connexion revient (détection automatique),
- ou toutes les 20 secondes en arrière-plan,
- ou en cliquant sur **🔄 Réessayer maintenant**.

### Le bandeau de statut
Un bandeau apparaît en haut de l'écran, sous le titre, selon la situation :

```
🔴 Hors ligne — 3 action(s) en file d'attente
```
```
🟠 3 action(s) en attente de synchronisation   [🔄 Réessayer maintenant]
```
```
🟢 En ligne — synchronisé avec Google Sheets
```

- **Rouge** : pas de connexion internet du tout. Continuez à taguer normalement, rien n'est perdu.
- **Orange** : connexion instable ou serveur injoignable, des actions attendent d'être renvoyées.
- **Vert** : tout est synchronisé. Ce bandeau disparaît automatiquement après quelques secondes.

### Ce que vous devez savoir
- Vous pouvez continuer à cliquer sur BUT / FAUTE / CHANGEMENT etc. **sans interruption**, même hors ligne.
- La file d'attente est sauvegardée sur l'appareil : si vous fermez l'onglet ou perdez la connexion, elle reste intacte et se relance à la réouverture.
- Si l'URL du Web App (Google Sheets) n'est pas configurée dans "⚙️ Configuration", rien n'est mis en file d'attente — c'est normal, il n'y a simplement pas de synchronisation prévue.

---

## 2️⃣ Annuler la dernière action

Un bouton **↩️ Annuler la dernière action** a été ajouté juste au-dessus du journal, dans l'onglet "Pendant Match".

```
📜 Journal des Actions          [↩️ Annuler la dernière action]
───────────────────────────────────────
  52'  CHANGEMENT  FC Lyon  #7 → #12
  50'  FAUTE       FC Lyon #4
```

### Comment ça marche
1. Cliquez sur **↩️ Annuler la dernière action**.
2. Une confirmation s'affiche avec le détail de l'action (type, équipe, minute).
3. Si vous validez, l'action la plus récente est retirée du journal.

### Cas particuliers
- **Si l'action n'avait pas encore été envoyée** (mode hors ligne ou envoi en cours) : elle est simplement annulée, rien n'est jamais parti vers Google Sheets. ✅
- **Si l'action avait déjà été synchronisée** : elle est supprimée du journal local, mais la ligne correspondante reste dans Google Sheets (l'app ne peut pas supprimer à distance une ligne déjà écrite). Un message vous le rappelle — pensez à supprimer la ligne manuellement dans la feuille `Actions_Live` si besoin.

### Et le bouton "Supprimer" sur chaque action ?
Il fonctionne toujours et suit exactement la même logique que "Annuler la dernière action" — vous pouvez supprimer n'importe quelle action du journal, pas seulement la dernière.

---

## ✅ Bonnes pratiques

- Ne vous inquiétez pas de la connexion pendant le match : taguez normalement, le bandeau vous prévient s'il y a du retard à rattraper.
- Vérifiez que le bandeau repasse au vert avant de quitter la page en fin de match, pour être sûr que tout est bien remonté dans Google Sheets.
- Utilisez "Annuler la dernière action" pour les erreurs de frappe immédiates (mauvais dossard, mauvaise minute) plutôt que de chercher l'action dans la liste.

---

**Version :** 1.0
**Mise à jour :** Juillet 2026
