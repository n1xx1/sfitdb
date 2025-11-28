---
traits: [confortevole, flessibile, tecnologico:Tecnologica]
source: Player Core (Eng), pag. 248
original-name: Armored Coat
original-srd: https://2e.aonsrd.com/equipment/armor/4-armored-coat
itemCategories: [base-armor]
navigation-disable: true
title: Cappotto Corazzato
level: "0+"
itemArmor:
  price: 285
  ac: 5
  upgrades: 1
#[[armorSubItems Cappotto Corazzato, Armored Coat, o]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Leggera; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +2; **Pen.
Prove** -1; **Pen. Velocità** —

**Forza** +2; **Volume** 1; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Cuoio

---

Questo soprabito è realizzato in pelle vera o sintetica e rinforzato con piastre
corazzate. I cappotti corazzati sono spesso realizzati su misura per abbinarsi
allo stile personale del portatore. Le versioni standard sono assegnate agli
ufficiali militari come parte dell’uniforme.

{{% if `eq .type "equipment"` %}}

---

| Grado                                                                                   | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| --------------------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Cappotto Corazzato Commerciale](/equipaggiamento/cappotto-corazzato/commerciale)       | 0       | —                    | 20 crediti      | 1         | +2       | —          |
| [Cappotto Corazzato Tattico](/equipaggiamento/cappotto-corazzato/tattico)               | 5       | +1.600 crediti       | 1.620 crediti   | 2         | +3       | —          |
| [Cappotto Corazzato Avanzato](/equipaggiamento/cappotto-corazzato/avanzato)             | 8       | +3.400 crediti       | 5.020 crediti   | 2         | +3       | +1         |
| [Cappotto Corazzato Superiore](/equipaggiamento/cappotto-corazzato/superiore)           | 11      | +9.000 crediti       | 14.020 crediti  | 3         | +4       | +1         |
| [Cappotto Corazzato D'Élite](/equipaggiamento/cappotto-corazzato/d-elite)               | 14      | +31.000 crediti      | 45.020 crediti  | 3         | +4       | +2         |
| [Cappotto Corazzato Definitivo](/equipaggiamento/cappotto-corazzato/definitivo)         | 18      | +195.000 crediti     | 240.020 crediti | 4         | +5       | +2         |
| [Cappotto Corazzato Ineguagliabile](/equipaggiamento/cappotto-corazzato/ineguagliabile) | 20      | +460.000 crediti     | 700.020 crediti | 4         | +5       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
