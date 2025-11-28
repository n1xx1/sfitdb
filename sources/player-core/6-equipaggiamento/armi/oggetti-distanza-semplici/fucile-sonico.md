---
traits: ["incremento [1d8]", tecnologico:Tecnologica]
source: Player Core (Eng), pag. 265
original-name: Sonic Rifle
original-srd: https://2e.aonsrd.com/equipment/weapons/47-sonic-rifle
itemCategories: [base-weapon]
navigation-disable: true
title: Fucile Sonico
level: "0+"
itemWeapon:
  price: 40
  dice: 1
  upgrades: 1
#[[weaponSubItems Fucile Sonico, Sonic Rifle]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Prezzo** {{% get `.params.itemWeapon.price | lang.FormatNumber 0` %}} crediti;
**Danni** {{% get `.params.itemWeapon.dice` %}}d6 S; **Volume** 1

**Mani** 2; **Gittata** 12 m.; **Ricarica** 1

**Tipo** Distanza; **Categoria** Semplice; **Gruppo**
[Sonico](/gruppi-armi/sonico)

**Migliorie** {{% get `.params.itemWeapon.upgrades` %}}; **Caricatore** 10
[cariche](/equipaggiamento/batteria); **Dispendio** 2

---

Un fucile sonico crea un fascio stretto di ultrasuoni che trasforma
efficacemente qualsiasi cosa colpisca in un altoparlante, frantumando i bersagli
con vibrazioni ipersoniche.

#[[weaponUpgradeTable Fucile Sonico, fucile-sonico]]
