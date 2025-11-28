---
traits: [tecnologico:Tecnologica]
source: Player Core (Eng), pag. 248
original-name: Freebooter Armor
original-srd: https://2e.aonsrd.com/equipment/armor/13-freebooter-armor
itemCategories: [base-armor]
navigation-disable: true
title: Armatura da Corsaro
level: "0+"
itemArmor:
  price: 65
  ac: 4
  upgrades: 1
#[[armorSubItems Armatura da Corsaro, Freebooter Armor]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Media; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +1; **Pen.
Prove** -2; **Pen. Velocità** -1,5 m.

**Forza** +3; **Volume** 2; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Piastre

---

L’armatura da crosaro prende il nome dai pirati e fuorilegge che spesso la
indossano. Di solito consiste in un pettorale sotto una giacca o tuta da volo,
stivali e guanti pesanti, un elmo e cinghie e fondine nascoste per occultare
armi.

{{% if `eq .type "equipment"` %}}

---

| Grado                                                                                     | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| ----------------------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Armatura da Corsaro Commerciale](/equipaggiamento/armatura-da-corsaro/commerciale)       | 0       | —                    | 65 crediti      | 1         | +4       | —          |
| [Armatura da Corsaro Tattica](/equipaggiamento/armatura-da-corsaro/tattica)               | 5       | +1.600 crediti       | 1.665 crediti   | 2         | +5       | —          |
| [Armatura da Corsaro Avanzata](/equipaggiamento/armatura-da-corsaro/avanzata)             | 8       | +3.400 crediti       | 5.065 crediti   | 2         | +5       | +1         |
| [Armatura da Corsaro Superiore](/equipaggiamento/armatura-da-corsaro/superiore)           | 11      | +9.000 crediti       | 14.065 crediti  | 3         | +6       | +1         |
| [Armatura da Corsaro D'Élite](/equipaggiamento/armatura-da-corsaro/d-elite)               | 14      | +31.000 crediti      | 45.065 crediti  | 3         | +6       | +2         |
| [Armatura da Corsaro Definitiva](/equipaggiamento/armatura-da-corsaro/definitiva)         | 18      | +195.000 crediti     | 240.065 crediti | 4         | +7       | +2         |
| [Armatura da Corsaro Ineguagliabile](/equipaggiamento/armatura-da-corsaro/ineguagliabile) | 20      | +460.000 crediti     | 700.065 crediti | 4         | +7       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
