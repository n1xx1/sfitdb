---
traits: [baluardo, tecnologico]
source: Player Core (Eng), pag. 248
original-name: Veskarium Imperial Plate
original-srd: https://2e.aonsrd.com/equipment/armor/22-veskarium-imperial-plate
itemCategories: [base-armor]
navigation-disable: true
title: Armatura Veskariana Imperiale
level: "0+"
itemArmor:
  price: 325
  ac: 6
  upgrades: 1
#[[armorSubItems Armatura Veskariana Imperiale, Veskarium Imperial Plate]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Pesante; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +0; **Pen.
Prove** -3; **Pen. Velocità** -3 m.

**Forza** +4; **Volume** 5; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Composita

---

Questa armatura pesante è composta da piastre metalliche interconnesse modellate
sul corpo del portatore con un motivo squamato. Paracoda e guanti artigliati
sono elementi standard di questa armatura.

{{% if `eq .type "equipment"` %}}

| Grado                                                                                                         | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| ------------------------------------------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Armatura Veskariana Imperiale Commerciale](/equipaggiamento/armatura-veskariana-imperiale/commerciale)       | 0       | —                    | 325 crediti     | 1         | +6       | —          |
| [Armatura Veskariana Imperiale Tattica](/equipaggiamento/armatura-veskariana-imperiale/tattica)               | 5       | +1.600 crediti       | 1.925 crediti   | 2         | +7       | —          |
| [Armatura Veskariana Imperiale Avanzata](/equipaggiamento/armatura-veskariana-imperiale/avanzata)             | 8       | +3.400 crediti       | 5.325 crediti   | 2         | +7       | +1         |
| [Armatura Veskariana Imperiale Superiore](/equipaggiamento/armatura-veskariana-imperiale/superiore)           | 11      | +9.000 crediti       | 14.325 crediti  | 3         | +8       | +1         |
| [Armatura Veskariana Imperiale D'Élite](/equipaggiamento/armatura-veskariana-imperiale/d-elite)               | 14      | +31.000 crediti      | 45.325 crediti  | 3         | +8       | +2         |
| [Armatura Veskariana Imperiale Definitiva](/equipaggiamento/armatura-veskariana-imperiale/definitiva)         | 18      | +195.000 crediti     | 240.325 crediti | 4         | +9       | +2         |
| [Armatura Veskariana Imperiale Ineguagliabile](/equipaggiamento/armatura-veskariana-imperiale/ineguagliabile) | 20      | +460.000 crediti     | 700.325 crediti | 4         | +9       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
