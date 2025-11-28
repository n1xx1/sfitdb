---
traits: [baluardo, tecnologico]
source: Player Core (Eng), pag. 248
original-name: Hidden Soldier Armor
original-srd: https://2e.aonsrd.com/equipment/armor/19-hidden-soldier-armor
itemCategories: [base-armor]
navigation-disable: true
title: Armatura del Soldato Nascosto
level: "0+"
itemArmor:
  price: 285
  ac: 5
  upgrades: 1
#[[armorSubItems Armatura del Soldato Nascosto, Hidden Soldier Armor]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Pesante; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +1; **Pen.
Prove** -3; **Pen. Velocità** -3 m.

**Forza** +4; **Volume** 3; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Ceramica

---

Questa armatura pesante presenta un elmo fessurato che rivela solo gli occhi del
portatore. Questa tuta ceramica hi-tech comprende pettorale, spallacci,
bracciali e schinieri che si flettono con i movimenti del corpo.

{{% if `eq .type "equipment"` %}}

| Grado                                                                                                         | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| ------------------------------------------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Armatura del Soldato Nascosto Commerciale](/equipaggiamento/armatura-del-soldato-nascosto/commerciale)       | 0       | —                    | 285 crediti     | 1         | +5       | —          |
| [Armatura del Soldato Nascosto Tattica](/equipaggiamento/armatura-del-soldato-nascosto/tattica)               | 5       | +1.600 crediti       | 1.885 crediti   | 2         | +6       | —          |
| [Armatura del Soldato Nascosto Avanzata](/equipaggiamento/armatura-del-soldato-nascosto/avanzata)             | 8       | +3.400 crediti       | 5.285 crediti   | 2         | +6       | +1         |
| [Armatura del Soldato Nascosto Superiore](/equipaggiamento/armatura-del-soldato-nascosto/superiore)           | 11      | +9.000 crediti       | 14.285 crediti  | 3         | +7       | +1         |
| [Armatura del Soldato Nascosto D'Élite](/equipaggiamento/armatura-del-soldato-nascosto/d-elite)               | 14      | +31.000 crediti      | 45.285 crediti  | 3         | +7       | +2         |
| [Armatura del Soldato Nascosto Definitiva](/equipaggiamento/armatura-del-soldato-nascosto/definitiva)         | 18      | +195.000 crediti     | 240.285 crediti | 4         | +8       | +2         |
| [Armatura del Soldato Nascosto Ineguagliabile](/equipaggiamento/armatura-del-soldato-nascosto/ineguagliabile) | 20      | +460.000 crediti     | 700.285 crediti | 4         | +8       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
