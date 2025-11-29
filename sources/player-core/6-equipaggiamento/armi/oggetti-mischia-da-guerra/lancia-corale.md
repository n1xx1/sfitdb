---
traits:
  [
    "modulare [P, Analogica e Lancio 6 m., oppure S, Alimentata, Incremento
    1d10, Critica (Sonico) e Tecnologica]",
  ]
source: Player Core (Eng), pag. 264
original-name: Singing Spear
original-srd: https://2e.aonsrd.com/equipment/weapons/28-singing-spear
itemCategories: [base-weapon]
navigation-disable: true
title: Lancia Corale
level: "0+"
itemWeapon:
  price: 20
  dice: 1
  upgrades: 1
#[[weaponSubItems Lancia Corale, Singing Spear]]
---

# {{% get/param `title` %}} - Oggetto {{% get/param `level` %}}

**Prezzo** {{% get/param `#itemWeapon.price` %}} crediti; **Danni**
{{% get/param `itemWeapon.dice` %}}d6 Modulare; **Volume** 1

**Mani** 2

**Tipo** Mischia; **Categoria** Da Guerra; **Gruppo**
[Lancia](/gruppi-armi/lancia)

**Migliorie** {{% get/param `itemWeapon.upgrades` %}}

---

Classicamente sagomata come una nota musicale sovradimensionata, questa lancia
intona tonalità melodiose quando colpisce, creando una nuova canzone a ogni
battaglia.

---

## Modalità 1 {statblock=1,traits="[analogico:Analogica, \"lancio [6 m.]\"]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 P

---

## Modalità 2 {statblock=1,traits="[alimentata, \"incremento [1d10]\", \"critica [(Sonico)]\", tecnologico:Tecnologica]"}

**Danni** {{% get/param `itemWeapon.dice` %}}d6 S

#[[weaponUpgradeTable Lancia Corale, lancia-corale]]
