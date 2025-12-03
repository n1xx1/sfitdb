---
traits: [analogico:Analogica, "modulare [(Fr e Spingere, V)]"]
source: Player Core (Eng), pag. 264
original-name: Bone Scepter
original-srd: https://2e.aonsrd.com/equipment/weapons/10-bone-scepter
itemCategories: [base-weapon]
navigation-disable: true
title: Scettro d'Osso
level: "0+"
itemWeapon:
  price: 5
  dice: 1
  diceSize: 6
  damage: Modulare
  bulk: L
  hands: 1
  category: Da Guerra
  group: randello
  upgrades: 1
#[[weaponSubItems Scettro d'Osso, Bone Scepter]]
---

# {{% get/param `title` %}} - Oggetto {{% get/param `level` %}}

{{% pf/weapons/meleeAttributes %}}

---

Questo randello inciso di osso massiccio è temprato usando materiale proveniente
dal Vuoto capace di drenare l’energia vitale.

---

## Modalità 1 {statblock=1,traits="[analogico:Analogica, spingere]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 {{% damage Fr %}}

---

## Modalità 2 {statblock=1,traits="[analogico:Analogica]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 {{% damage V %}}

{{% pf/weapons/tableUpgrades %}}
