---
traits:
  [
    alimentata,
    disarmare,
    "modulare [(Arco o Non Letale)]",
    tecnologico:Tecnologica,
  ]
source: Player Core (Eng), pag. 264
original-name: Shock Truncheon
original-srd: https://2e.aonsrd.com/equipment/weapons/25-shock-truncheon
itemCategories: [base-weapon]
navigation-disable: true
title: Manganello Elettrico
level: "0+"
itemWeapon:
  price: 16
  dice: 1
  upgrades: 1
#[[weaponSubItems Manganello Elettrico, Shock Truncheon]]
---

# {{% get/param `title` %}} - Oggetto {{% get/param `level` %}}

**Prezzo** {{% get/param `#itemWeapon.price` %}} crediti; **Danni**
{{% get/param `itemWeapon.dice` %}}d6 E; **Volume** L

**Mani** 1

**Tipo** Mischia; **Categoria** Da Guerra; **Gruppo**
[Randello](/gruppi-armi/randello)

**Migliorie** {{% get/param `itemWeapon.upgrades` %}}

---

Diffuso tra le forze di sicurezza, questo manganello retrattile rilascia
elettricità a ogni Colpo. Un dispositivo ronzante all’interno dell’impugnatura
genera voltaggio, producendo un suono simile a uno sciame di insetti quando è
completamente carico.

---

## Modalità 1 {statblock=1,traits="[arco, alimentata, disarmare, tecnologico:Tecnologica]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 E

---

## Modalità 2 {statblock=1,traits="[alimentata, disarmare, non letale, tecnologico:Tecnologica]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 E

#[[weaponUpgradeTable Manganello Elettrico, manganello-elettrico]]
