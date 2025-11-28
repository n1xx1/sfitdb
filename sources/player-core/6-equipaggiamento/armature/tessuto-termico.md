---
traits: [tecnologico]
source: Player Core (Eng), pag. 248
original-name: Tempweave
original-srd: https://2e.aonsrd.com/equipment/armor/11-tempweave
itemCategories: [base-armor]
navigation-disable: true
title: Tessuto Termico
level: "0+"
itemArmor:
  price: 285
  ac: 5
  upgrades: 1
#[[armorSubItems Tessuto Termico, Tempweave, o]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Leggera; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +4; **Pen.
Prove** -1; **Pen. Velocità** —

**Forza** +0; **Volume** 1; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Composita

---

Le tute in tessuto termico sono capi rinforzati con cappuccio, intrecciate con
materiale termico e fili di ventilazione, comunemente indossati per viaggi in
climi umidi come le giungle di Castrovel o di Pulonis.

{{% if `eq .type "equipment"` %}}

| Grado                                                                             | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| --------------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Tessuto Termico Commerciale](/equipaggiamento/tessuto-termico/commerciale)       | 0       | —                    | 45 crediti      | 1         | +1       | —          |
| [Tessuto Termico Tattico](/equipaggiamento/tessuto-termico/tattico)               | 5       | +1.600 crediti       | 1.645 crediti   | 2         | +2       | —          |
| [Tessuto Termico Avanzato](/equipaggiamento/tessuto-termico/avanzato)             | 8       | +3.400 crediti       | 5.045 crediti   | 2         | +2       | +1         |
| [Tessuto Termico Superiore](/equipaggiamento/tessuto-termico/superiore)           | 11      | +9.000 crediti       | 14.045 crediti  | 3         | +3       | +1         |
| [Tessuto Termico D'Élite](/equipaggiamento/tessuto-termico/d-elite)               | 14      | +31.000 crediti      | 45.045 crediti  | 3         | +3       | +2         |
| [Tessuto Termico Definitivo](/equipaggiamento/tessuto-termico/definitivo)         | 18      | +195.000 crediti     | 240.045 crediti | 4         | +4       | +2         |
| [Tessuto Termico Ineguagliabile](/equipaggiamento/tessuto-termico/ineguagliabile) | 20      | +460.000 crediti     | 700.045 crediti | 4         | +4       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
