---
traits: ["modulare [(T e Analogica, o V, Alimentata e Tecnologica)]", spazzare]
source: Player Core (Eng), pag. 264
original-name: Phase Cutlass
original-srd: https://2e.aonsrd.com/equipment/weapons/20-phase-cutlass
itemCategories: [base-weapon]
navigation-disable: true
title: Sciabola d'Abbordaggio Fasica
level: "0+"
itemWeapon:
  price: 18
  dice: 1
  diceSize: 6
  damage: Modulare
  bulk: 1
  hands: 1
  category: Da Guerra
  group: spada
  upgrades: 1
#[[weaponSubItems Sciabola d'Abbordaggio Fasica, Phase Cutlass]]
---

# {{% get/param `title` %}} - Oggetto {{% get/param `level` %}}

{{% pf/weapons/meleeAttributes %}}

---

Una sciabola d'abbordaggio fasica assomiglia a una tradizionale sciabola finché
non viene attivata. Allora la sua lama si trasforma in un vuoto scintillante,
con una minuscola stella per ogni vita alla quale ha posto fine.

---

## Modalità 1 {statblock=1,traits="[analogica:Analogica, spazzare]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 {{% damage T %}}

---

## Modalità 2 {statblock=1,traits="[alimentata, spazzare, tecnologico:Tecnologica]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 {{% damage V %}}

{{% pf/weapons/tableUpgrades %}}
