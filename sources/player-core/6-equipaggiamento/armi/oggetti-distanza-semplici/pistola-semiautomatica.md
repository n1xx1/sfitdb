---
traits: [analogico:Analogica]
source: Player Core (Eng), pag. 265
original-name: Semi-Auto Pistol
original-srd: https://2e.aonsrd.com/equipment/weapons/46-semi-auto-pistol
itemCategories: [base-weapon]
navigation-disable: true
title: Pistola Semiautomatica
level: "0+"
itemWeapon:
  price: 30
  dice: 1
  upgrades: 1
#[[weaponSubItems Pistola Semiautomatica, Semi-Auto Pistol]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Prezzo** {{% get `.params.itemWeapon.price | lang.FormatNumber 0` %}} crediti;
**Danni** {{% get `.params.itemWeapon.dice` %}}d6 P; **Volume** L

**Mani** 1; **Gittata** 18 m.; **Ricarica** 1

**Tipo** Distanza; **Categoria** Semplice; **Gruppo**
[Proiettile](/gruppi-armi/proiettile)

**Migliorie** {{% get `.params.itemWeapon.upgrades` %}}; **Caricatore** 10
[proiettili](/equipaggiamento/munizione-proiettile); **Dispendio** 1

---

Questa pistola espelle automaticamente i bossoli usati e carica nuove munizioni
dopo ogni colpo sparato.

#[[weaponUpgradeTable Pistola Semiautomatica, pistola-semiautomatica]]
