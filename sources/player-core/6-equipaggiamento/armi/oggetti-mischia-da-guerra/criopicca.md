---
traits:
  [
    "modulare [(Fr, Alimentata, Critica (Criogenesi) e Tecnologica, oppure P e
    Analogica)]",
    portata,
  ]
source: Player Core (Eng), pag. 264
original-name: Cryopike
original-srd: https://2e.aonsrd.com/equipment/weapons/11-cryopike
itemCategories: [base-weapon]
navigation-disable: true
title: Criopicca
level: "0+"
itemWeapon:
  price: 20
  dice: 1
  diceSize: 6
  damage: Modulare
  bulk: 1
  hands: 2
  category: Da Guerra
  group: arma-inastata
  upgrades: 1
#[[weaponSubItems Criopicca, Cryopike]]
---

# {{% get/param `title` %}} - Oggetto {{% get/param `level` %}}

{{% pf/weapons/meleeAttributes %}}

---

L’asta di quest’arma inastata contiene un gas super-raffreddato che circola
rapidamente, condensando e convogliando energia endotermica in una lama
criogenica.

---

## Modalità 1 {statblock=1,traits="[alimentata, \"critica [(criogenesi)]\", tecnologico:Tecnologica]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 {{% damage Fr %}}

---

## Modalità 2 {statblock=1,traits="[analogico:Analogica]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 {{% damage P %}}

{{% pf/weapons/tableUpgrades %}}
