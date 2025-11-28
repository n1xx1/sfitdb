---
traits: [confortevole, flessibile, tecnologico]
source: Player Core (Eng), pag. 248
original-name: Second Skin
original-srd: https://2e.aonsrd.com/equipment/armor/10-second-skin
itemCategories: [base-armor]
navigation-disable: true
title: Seconda Pelle
level: "0+"
itemArmor:
  price: 20
  ac: 1
  upgrades: 0
#[[armorSubItems Seconda Pelle, Second Skin]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Leggera; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +4; **Pen.
Prove** —; **Pen. Velocità** —

**Forza** +0; **Volume** L; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Polimeri

---

Un tessuto morbido ma resistente si adatta perfettamente al corpo del portatore,
offrendo una protezione di base senza sacrificare il comfort. La seconda pelle è
comunemente indossata sotto abiti casual.

{{% if `eq .type "equipment"` %}}

| Grado                                                                         | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| ----------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Seconda Pelle Commerciale](/equipaggiamento/seconda-pelle/commerciale)       | 0       | —                    | 20 crediti      | 0         | +1       | —          |
| [Seconda Pelle Tattica](/equipaggiamento/seconda-pelle/tattica)               | 5       | +1.600 crediti       | 1.620 crediti   | 1         | +2       | —          |
| [Seconda Pelle Avanzata](/equipaggiamento/seconda-pelle/avanzata)             | 8       | +3.400 crediti       | 5.020 crediti   | 1         | +2       | +1         |
| [Seconda Pelle Superiore](/equipaggiamento/seconda-pelle/superiore)           | 11      | +9.000 crediti       | 14.020 crediti  | 2         | +3       | +1         |
| [Seconda Pelle D'Élite](/equipaggiamento/seconda-pelle/d-elite)               | 14      | +31.000 crediti      | 45.020 crediti  | 2         | +3       | +2         |
| [Seconda Pelle Definitiva](/equipaggiamento/seconda-pelle/definitiva)         | 18      | +195.000 crediti     | 240.020 crediti | 3         | +4       | +2         |
| [Seconda Pelle Ineguagliabile](/equipaggiamento/seconda-pelle/ineguagliabile) | 20      | +460.000 crediti     | 700.020 crediti | 3         | +4       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
