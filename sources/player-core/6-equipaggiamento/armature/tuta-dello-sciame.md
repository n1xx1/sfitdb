---
traits: [flessibile, tecnologico, rumoroso]
source: Player Core (Eng), pag. 248
original-name: Swarmsuit
original-srd: https://2e.aonsrd.com/equipment/armor/16-swarmsuit
itemCategories: [base-armor]
navigation-disable: true
title: Tuta dello Sciame
level: "0+"
itemArmor:
  price: 75
  ac: 4
  upgrades: 1
#[[armorSubItems Tuta dello Sciame, Swarmsuit]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Media; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +1; **Pen.
Prove** -2; **Pen. Velocità** -1,5 m.

**Forza** +3; **Volume** 2; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Maglia

---

Naniti specializzati formano una tuta a rete che si adatta a portatori con
fisiologie uniche o trasformabili.

{{% if `eq .type "equipment"` %}}

| Grado                                                                                 | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| ------------------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Tuta dello Sciame Commerciale](/equipaggiamento/tuta-dello-sciame/commerciale)       | 0       | —                    | 75 crediti      | 1         | +4       | —          |
| [Tuta dello Sciame Tattica](/equipaggiamento/tuta-dello-sciame/tattica)               | 5       | +1.600 crediti       | 1.675 crediti   | 2         | +5       | —          |
| [Tuta dello Sciame Avanzata](/equipaggiamento/tuta-dello-sciame/avanzata)             | 8       | +3.400 crediti       | 5.075 crediti   | 2         | +5       | +1         |
| [Tuta dello Sciame Superiore](/equipaggiamento/tuta-dello-sciame/superiore)           | 11      | +9.000 crediti       | 14.075 crediti  | 3         | +6       | +1         |
| [Tuta dello Sciame D'Élite](/equipaggiamento/tuta-dello-sciame/d-elite)               | 14      | +31.000 crediti      | 45.075 crediti  | 3         | +6       | +2         |
| [Tuta dello Sciame Definitiva](/equipaggiamento/tuta-dello-sciame/definitiva)         | 18      | +195.000 crediti     | 240.075 crediti | 4         | +7       | +2         |
| [Tuta dello Sciame Ineguagliabile](/equipaggiamento/tuta-dello-sciame/ineguagliabile) | 20      | +460.000 crediti     | 700.075 crediti | 4         | +7       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
