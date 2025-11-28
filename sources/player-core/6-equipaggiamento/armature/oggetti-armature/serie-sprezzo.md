---
traits: [tecnologico:Tecnologica]
source: Player Core (Eng), pag. 248
original-name: Defiance Series
original-srd: https://2e.aonsrd.com/equipment/armor/18-defiance-series
itemCategories: [base-armor]
navigation-disable: true
title: Serie Sprezzo
level: "0+"
itemArmor:
  price: 200
  ac: 5
  upgrades: 1
#[[armorSubItems Serie Sprezzo, Defiance Series]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Pesante; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +1; **Pen.
Prove** -3; **Pen. Velocità** -3 m.

**Forza** +3; **Volume** 3; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Piastre

---

Questa armatura da squadra è un guscio modellato in policarbonato rinforzato,
con elmo e visiera retrattile.

{{% if `eq .type "equipment"` %}}

---

| Grado                                                                         | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| ----------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Serie Sprezzo Commerciale](/equipaggiamento/serie-sprezzo/commerciale)       | 0       | —                    | 200 crediti     | 1         | +5       | —          |
| [Serie Sprezzo Tattica](/equipaggiamento/serie-sprezzo/tattica)               | 5       | +1.600 crediti       | 1.800 crediti   | 2         | +6       | —          |
| [Serie Sprezzo Avanzata](/equipaggiamento/serie-sprezzo/avanzata)             | 8       | +3.400 crediti       | 5.200 crediti   | 2         | +6       | +1         |
| [Serie Sprezzo Superiore](/equipaggiamento/serie-sprezzo/superiore)           | 11      | +9.000 crediti       | 14.200 crediti  | 3         | +7       | +1         |
| [Serie Sprezzo D'Élite](/equipaggiamento/serie-sprezzo/d-elite)               | 14      | +31.000 crediti      | 45.200 crediti  | 3         | +7       | +2         |
| [Serie Sprezzo Definitiva](/equipaggiamento/serie-sprezzo/definitiva)         | 18      | +195.000 crediti     | 240.200 crediti | 4         | +8       | +2         |
| [Serie Sprezzo Ineguagliabile](/equipaggiamento/serie-sprezzo/ineguagliabile) | 20      | +460.000 crediti     | 700.200 crediti | 4         | +8       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
