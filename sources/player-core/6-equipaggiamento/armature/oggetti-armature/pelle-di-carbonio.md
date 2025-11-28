---
traits: [tecnologico:Tecnologica]
source: Player Core (Eng), pag. 248
original-name: Carbon Skin
original-srd: https://2e.aonsrd.com/equipment/armor/5-carbon-skin
itemCategories: [base-armor]
navigation-disable: true
title: Pelle di Carbonio
level: "0+"
itemArmor:
  price: 285
  ac: 5
  upgrades: 1
#[[armorSubItems Pelle di Carbonio, Carbon Skin]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Leggera; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +4; **Pen.
Prove** -1; **Pen. Velocità** —

**Forza** +0; **Volume** 1; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Polimeri

---

Questo soprabito è realizzato in pelle vera o sintetica e rinforzato con piastre
corazzate. I cappotti corazzati sono spesso realizzati su misura per abbinarsi
allo stile personale del portatore. Le versioni standard sono assegnate agli
ufficiali militari come parte dell’uniforme.

{{% if `eq .type "equipment"` %}}

---

| Grado                                                                                 | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| ------------------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Pelle di Carbonio Commerciale](/equipaggiamento/pelle-di-carbonio/commerciale)       | 0       | —                    | 30 crediti      | 1         | +1       | —          |
| [Pelle di Carbonio Tattica](/equipaggiamento/pelle-di-carbonio/tattica)               | 5       | +1.600 crediti       | 1.630 crediti   | 2         | +2       | —          |
| [Pelle di Carbonio Avanzata](/equipaggiamento/pelle-di-carbonio/avanzata)             | 8       | +3.400 crediti       | 5.030 crediti   | 2         | +2       | +1         |
| [Pelle di Carbonio Superiore](/equipaggiamento/pelle-di-carbonio/superiore)           | 11      | +9.000 crediti       | 14.030 crediti  | 3         | +3       | +1         |
| [Pelle di Carbonio D'Élite](/equipaggiamento/pelle-di-carbonio/d-elite)               | 14      | +31.000 crediti      | 45.030 crediti  | 3         | +3       | +2         |
| [Pelle di Carbonio Definitiva](/equipaggiamento/pelle-di-carbonio/definitiva)         | 18      | +195.000 crediti     | 240.030 crediti | 4         | +4       | +2         |
| [Pelle di Carbonio Ineguagliabile](/equipaggiamento/pelle-di-carbonio/ineguagliabile) | 20      | +460.000 crediti     | 700.030 crediti | 4         | +4       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
