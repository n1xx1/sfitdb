---
traits:
  [
    accurata,
    agile,
    alimentata,
    gemella,
    "modulare [(F e critica (fiamma), oppure Fr)]",
    nascondibile,
    tecnologico:Tecnologica,
  ]
source: Player Core (Eng), pag. 265
original-name: Thermal Dynafan
original-srd: https://2e.aonsrd.com/equipment/weapons/34-thermal-dynafan
itemCategories: [base-weapon]
navigation-disable: true
title: Dinamoventagio Termico
level: "0+"
itemWeapon:
  price: 15
  dice: 1
  diceSize: 6
  damage: Modulare
  bulk: L
  hands: 1
  category: Avanzata
  group: criogenesi
  upgrades: 1
#[[weaponSubItems Dinamoventagio Termico, Thermal Dynafan]]
---

# {{% get/param `title` %}} - Oggetto {{% get/param `level` %}}

{{% pf/weapons/meleeAttributes %}}

---

Questo ventaglio da guerra è un dispositivo portatile modificato per il comfort
ambientale che cambia la pressione nell'aria per creare un gelo glaciale o un
brillante pennacchio di fuoco.

---

## Modalità 1 {statblock=1,traits="[accurata, agile, alimentata, \"critica [(fiamma)]\", gemella, nascondibile, tecnologico:Tecnologica]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 {{% damage F %}}

---

## Modalità 2 {statblock=1,traits="[accurata, agile, alimentata, gemella, nascondibile, tecnologico:Tecnologica]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 {{% damage Fr %}}

{{% pf/weapons/tableUpgrades %}}
