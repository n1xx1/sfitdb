---
traits:
  [
    accurata,
    agile,
    "modulare [(A, Critica (Corrosione), Tecnologica, oppure T e Analogica)]",
  ]
source: Player Core (Eng), pag. 264
original-name: Talon
original-srd: https://2e.aonsrd.com/equipment/weapons/30-talon
itemCategories: [base-weapon]
navigation-disable: true
title: Artiglio
level: "0+"
itemWeapon:
  price: 20
  dice: 1
  upgrades: 1
#[[weaponSubItems Artiglio, Talon]]
---

# {{% get/param `title` %}} - Oggetto {{% get/param `level` %}}

**Prezzo** {{% get/param `#itemWeapon.price` %}} crediti; **Danni**
{{% get/param `itemWeapon.dice` %}}d6 Modulare; **Volume** —

**Mani** 1

**Tipo** Mischia; **Categoria** Da Guerra; **Gruppo**
[Coltello](/gruppi-armi/coltello)

**Migliorie** {{% get/param `itemWeapon.upgrades` %}}

---

Questo coltello stilizzato si assottiglia in una lama curva e seghettata. Quando
attivato, spruzza un acido altamente corrosivo ispirato agli artigli che
sciolgono l’armatura evoluti da diverse specie dello Sciame.

---

## Modalità 1 {statblock=1,traits="[accurata, agile, \"critica [(Corrosione)]\", tecnologico:Tecnologica]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 A

---

## Modalità 2 {statblock=1,traits="[accurata, agile, analogico:Analogica]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 T

#[[weaponUpgradeTable Artiglio, artiglio]]
