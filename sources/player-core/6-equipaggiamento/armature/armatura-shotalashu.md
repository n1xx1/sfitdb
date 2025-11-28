---
traits: [tecnologico]
source: Player Core (Eng), pag. 248
original-name: Shotalashu Armor
original-srd: https://2e.aonsrd.com/equipment/armor/14-shotalashu-armor
itemCategories: [base-armor]
navigation-disable: true
title: Armatura Shotalashu
level: "0+"
itemArmor:
  price: 40
  ac: 3
  upgrades: 1
#[[armorSubItems Armatura Shotalashu, Shotalashu Armor]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Media; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +2; **Pen.
Prove** -2; **Pen. Velocità** -1,5 m.

**Forza** +2; **Volume** 2; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Composita

---

Questa armatura tradizionale indossata dalla cavalleria lashunta su Castrovel è
formata da piastre flessibili ma robuste sovrapposte. Anticamente, un membro
della cavalleria shotalashu forgiava la propria armatura dalla pelle mutata
della propria cavalcatura, o più raramente dalla pelle di una cavalcatura
caduta, per onorarla nelle battaglie future. Imitazioni sintetiche sono di moda
in alcune parti di Castrovel.

{{% if `eq .type "equipment"` %}}

| Grado                                                                                     | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| ----------------------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Armatura Shotalashu Commerciale](/equipaggiamento/armatura-shotalashu/commerciale)       | 0       | —                    | 40 crediti      | 1         | +3       | —          |
| [Armatura Shotalashu Tattica](/equipaggiamento/armatura-shotalashu/tattica)               | 5       | +1.600 crediti       | 1.640 crediti   | 2         | +4       | —          |
| [Armatura Shotalashu Avanzata](/equipaggiamento/armatura-shotalashu/avanzata)             | 8       | +3.400 crediti       | 5.040 crediti   | 2         | +4       | +1         |
| [Armatura Shotalashu Superiore](/equipaggiamento/armatura-shotalashu/superiore)           | 11      | +9.000 crediti       | 14.040 crediti  | 3         | +5       | +1         |
| [Armatura Shotalashu D'Élite](/equipaggiamento/armatura-shotalashu/d-elite)               | 14      | +31.000 crediti      | 45.040 crediti  | 3         | +5       | +2         |
| [Armatura Shotalashu Definitiva](/equipaggiamento/armatura-shotalashu/definitiva)         | 18      | +195.000 crediti     | 240.040 crediti | 4         | +6       | +2         |
| [Armatura Shotalashu Ineguagliabile](/equipaggiamento/armatura-shotalashu/ineguagliabile) | 20      | +460.000 crediti     | 700.040 crediti | 4         | +6       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
