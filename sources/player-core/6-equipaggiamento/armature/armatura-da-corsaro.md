---
traits: [tecnologico]
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
subItems:
  commerciale:
    name: Armatura da Corsaro Commerciale
    params:
      "original-name": { set: "Freebooter Armor (Commercial)" }
      "navigation-order": { set: 1 }
  tattica:
    name: Armatura da Corsaro Tattica
    params:
      "original-name": { set: "Freebooter Armor (Tactical)" }
      "navigation-order": { set: 2 }
      level: { set: 5 }
      itemArmor.price: { add: 1600 }
      itemArmor.ac: { add: 1 }
      itemArmor.upgrades: { add: 1 }
  avanzata:
    name: Armatura da Corsaro Avanzata
    params:
      "original-name": { set: "Freebooter Armor (Advanced)" }
      "navigation-order": { set: 3 }
      level: { set: 8 }
      itemArmor.price: { add: 5000 }
      itemArmor.ac: { add: 1 }
      itemArmor.upgrades: { add: 1 }
      traits: { append: "resilente +1" }
  superiore:
    name: Armatura da Corsaro Superiore
    params:
      "original-name": { set: "Freebooter Armor (Superior)" }
      "navigation-order": { set: 4 }
      level: { set: 11 }
      itemArmor.price: { add: 14000 }
      itemArmor.ac: { add: 2 }
      itemArmor.upgrades: { add: 2 }
      traits: { append: "resilente +1" }
  d-elite:
    name: Armatura da Corsaro D'Élite
    params:
      "original-name": { set: "Freebooter Armor (Elite)" }
      "navigation-order": { set: 5 }
      level: { set: 14 }
      itemArmor.price: { add: 14000 }
      itemArmor.ac: { add: 2 }
      itemArmor.upgrades: { add: 2 }
      traits: { append: "resilente +2" }
  definitiva:
    name: Armatura da Corsaro Definitiva
    params:
      "original-name": { set: "Freebooter Armor (Ultimate)" }
      "navigation-order": { set: 6 }
      level: { set: 18 }
      itemArmor.price: { add: 240000 }
      itemArmor.ac: { add: 3 }
      itemArmor.upgrades: { add: 3 }
      traits: { append: "resilente +2" }
  ineguagliabile:
    name: Armatura da Corsaro Ineguagliabile
    params:
      "original-name": { set: "Freebooter Armor (Paragon)" }
      "navigation-order": { set: 7 }
      level: { set: 20 }
      itemArmor.price: { add: 700000 }
      itemArmor.ac: { add: 3 }
      itemArmor.upgrades: { add: 3 }
      traits: { append: "resilente +3" }
---

# {{% get "title" %}} - Oggetto {{% get "level" %}}

**Categoria** Media; **Prezzo** {{% get "itemArmor.price" "number" %}} crediti

**Bonus CA** +{{% get "itemArmor.ac" %}}; **Des Massimo** +1; **Pen. Prove** -2;
**Pen. Velocità** -1,5 m.

**Forza** +3; **Volume** 2; **Migliorie** {{% get "itemArmor.upgrades" %}}

**Gruppo** Piastre

---

L’armatura da crosaro prende il nome dai pirati e fuorilegge che spesso la
indossano. Di solito consiste in un pettorale sotto una giacca o tuta da volo,
stivali e guanti pesanti, un elmo e cinghie e fondine nascoste per occultare
armi.

{{% if "type" "equipment" %}}

| Grado                              | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| ---------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| Armatura da Corsaro Commerciale    | 0       | —                    | 65 crediti      | 1         | +4       | —          |
| Armatura da Corsaro Tattica        | 5       | +1.600 crediti       | 1.665 crediti   | 2         | +5       | —          |
| Armatura da Corsaro Avanzata       | 8       | +3.400 crediti       | 5.065 crediti   | 2         | +5       | +1         |
| Armatura da Corsaro Superiore      | 11      | +9.000 crediti       | 14.065 crediti  | 3         | +6       | +1         |
| Armatura da Corsaro D'Élite        | 14      | +31.000 crediti      | 45.065 crediti  | 3         | +6       | +2         |
| Armatura da Corsaro Definitiva     | 18      | +195.000 crediti     | 240.065 crediti | 4         | +7       | +2         |
| Armatura da Corsaro Ineguagliabile | 20      | +460.000 crediti     | 700.065 crediti | 4         | +7       | +3         |

`{caption="Potenziamenti"}`

{{% /if %}}
