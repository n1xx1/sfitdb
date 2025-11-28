---
traits: [baluardo, tecnologico]
source: Player Core (Eng), pag. 248
original-name: Kyokor Plating
original-srd: https://2e.aonsrd.com/equipment/armor/20-kyokor-plating
itemCategories: [base-armor]
navigation-disable: true
title: Piastre Kyokor
level: "0+"
itemArmor:
  price: 250
  ac: 6
  upgrades: 1
#[[armorSubItems Piastre Kyokor, Kyokor Plating]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Pesante; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +0; **Pen.
Prove** -3; **Pen. Velocità** -3 m.

**Forza** +4; **Volume** 4; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Piastre

---

Questa armatura incorpora una tuta in policarbonato a copertura totale,
costellata di portelli e alloggiamenti e rivestita con piastre provenienti dagli
infami colossi di Daimalko. Le l'armatura di piastre kyokor include stivali,
guanti e un elmo con visiera trasparente.

{{% if `eq .type "equipment"` %}}

| Grado                                                                           | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| ------------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Piastre Kyokor Commerciale](/equipaggiamento/piastre-kyokor/commerciale)       | 0       | —                    | 250 crediti     | 1         | +6       | —          |
| [Piastre Kyokor Tattica](/equipaggiamento/piastre-kyokor/tattica)               | 5       | +1.600 crediti       | 1.850 crediti   | 2         | +7       | —          |
| [Piastre Kyokor Avanzata](/equipaggiamento/piastre-kyokor/avanzata)             | 8       | +3.400 crediti       | 5.250 crediti   | 2         | +7       | +1         |
| [Piastre Kyokor Superiore](/equipaggiamento/piastre-kyokor/superiore)           | 11      | +9.000 crediti       | 14.250 crediti  | 3         | +8       | +1         |
| [Piastre Kyokor D'Élite](/equipaggiamento/piastre-kyokor/d-elite)               | 14      | +31.000 crediti      | 45.250 crediti  | 3         | +8       | +2         |
| [Piastre Kyokor Definitiva](/equipaggiamento/piastre-kyokor/definitiva)         | 18      | +195.000 crediti     | 240.250 crediti | 4         | +9       | +2         |
| [Piastre Kyokor Ineguagliabile](/equipaggiamento/piastre-kyokor/ineguagliabile) | 20      | +460.000 crediti     | 700.250 crediti | 4         | +9       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
