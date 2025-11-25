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
subItems:
  commerciale:
    name: Armatura del Soldato Nascosto Commerciale
    params:
      "original-name": { set: "Hidden Soldier Armor (Commercial)" }
      "navigation-order": { set: 1 }
  tattica:
    name: Armatura del Soldato Nascosto Tattica
    params:
      "original-name": { set: "Hidden Soldier Armor (Tactical)" }
      "navigation-order": { set: 2 }
      level: { set: 5 }
      itemArmor.price: { add: 1600 }
      itemArmor.ac: { add: 1 }
      itemArmor.upgrades: { add: 1 }
  avanzata:
    name: Armatura del Soldato Nascosto Avanzata
    params:
      "original-name": { set: "Hidden Soldier Armor (Advanced)" }
      "navigation-order": { set: 3 }
      level: { set: 8 }
      itemArmor.price: { add: 5000 }
      itemArmor.ac: { add: 1 }
      itemArmor.upgrades: { add: 1 }
      traits: { append: "resilente +1" }
  superiore:
    name: Armatura del Soldato Nascosto Superiore
    params:
      "original-name": { set: "Hidden Soldier Armor (Superior)" }
      "navigation-order": { set: 4 }
      level: { set: 11 }
      itemArmor.price: { add: 14000 }
      itemArmor.ac: { add: 2 }
      itemArmor.upgrades: { add: 2 }
      traits: { append: "resilente +1" }
  d-elite:
    name: Armatura del Soldato Nascosto D'Élite
    params:
      "original-name": { set: "Hidden Soldier Armor (Elite)" }
      "navigation-order": { set: 5 }
      level: { set: 14 }
      itemArmor.price: { add: 14000 }
      itemArmor.ac: { add: 2 }
      itemArmor.upgrades: { add: 2 }
      traits: { append: "resilente +2" }
  definitiva:
    name: Armatura del Soldato Nascosto Definitiva
    params:
      "original-name": { set: "Hidden Soldier Armor (Ultimate)" }
      "navigation-order": { set: 6 }
      level: { set: 18 }
      itemArmor.price: { add: 240000 }
      itemArmor.ac: { add: 3 }
      itemArmor.upgrades: { add: 3 }
      traits: { append: "resilente +2" }
  ineguagliabile:
    name: Armatura del Soldato Nascosto Ineguagliabile
    params:
      "original-name": { set: "Hidden Soldier Armor (Paragon)" }
      "navigation-order": { set: 7 }
      level: { set: 20 }
      itemArmor.price: { add: 700000 }
      itemArmor.ac: { add: 3 }
      itemArmor.upgrades: { add: 3 }
      traits: { append: "resilente +3" }
---

# {{% get "title" %}} - Oggetto {{% get "level" %}}

**Categoria** Pesante; **Prezzo** {{% get "itemArmor.price" "number" %}} crediti

**Bonus CA** +{{% get "itemArmor.ac" %}}; **Des Massimo** +1; **Pen. Prove** -3;
**Pen. Velocità** -3 m.

**Forza** +4; **Volume** 3; **Migliorie** {{% get "itemArmor.upgrades" %}}

**Gruppo** Ceramica

---

Questa armatura pesante presenta un elmo fessurato che rivela solo gli occhi del
portatore. Questa tuta ceramica hi-tech comprende pettorale, spallacci,
bracciali e schinieri che si flettono con i movimenti del corpo.

| Grado                                        | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| -------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| Armatura del Soldato Nascosto Commerciale    | 0       | —                    | 285 crediti     | 1         | +5       | —          |
| Armatura del Soldato Nascosto Tattica        | 5       | +1.600 crediti       | 1.885 crediti   | 2         | +6       | —          |
| Armatura del Soldato Nascosto Avanzata       | 8       | +3.400 crediti       | 5.285 crediti   | 2         | +6       | +1         |
| Armatura del Soldato Nascosto Superiore      | 11      | +9.000 crediti       | 14.285 crediti  | 3         | +7       | +1         |
| Armatura del Soldato Nascosto D'Élite        | 14      | +31.000 crediti      | 45.285 crediti  | 3         | +7       | +2         |
| Armatura del Soldato Nascosto Definitiva     | 18      | +195.000 crediti     | 240.285 crediti | 4         | +8       | +2         |
| Armatura del Soldato Nascosto Ineguagliabile | 20      | +460.000 crediti     | 700.285 crediti | 4         | +8       | +3         |

`{caption="Potenziamenti"}`
