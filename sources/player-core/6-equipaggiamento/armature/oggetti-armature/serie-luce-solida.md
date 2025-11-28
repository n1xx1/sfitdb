---
traits: [flessibile, tecnologico:Tecnologica, rumorosa]
source: Player Core (Eng), pag. 248
original-name: Hardlight Series
original-srd: https://2e.aonsrd.com/equipment/armor/7-hardlight-series
itemCategories: [base-armor]
navigation-disable: true
title: Serie Luce Solida
level: "0+"
itemArmor:
  price: 50
  ac: 2
  upgrades: 1
#[[armorSubItems Serie Luce Solida, Hardlight Series]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Categoria** Leggera; **Prezzo**
{{% get `.params.itemArmor.price | lang.FormatNumber 0` %}} crediti

**Bonus CA** +{{% get `.params.itemArmor.ac` %}}; **Des Massimo** +3; **Pen.
Prove** -1; **Pen. Velocità** —

**Forza** +1; **Volume** 1; **Migliorie**
{{% get `.params.itemArmor.upgrades` %}}

**Gruppo** Maglia

---

Un proiettore fissato alla cintura o al bavero avvolge il corpo
dell’utilizzatore in questo scintillante guscio di luce solida. Le armature di
luce solida di uso militare seguono uno standard prevedibile, mentre gli utenti
privati possono scegliere tra numerose opzioni estetiche personalizzabili.

{{% if `eq .type "equipment"` %}}

---

| Grado                                                                                 | Livello | Prezzo Potenziamento | Prezzo Totale   | Migliorie | Bonus CA | Resiliente |
| ------------------------------------------------------------------------------------- | ------- | -------------------- | --------------- | --------- | -------- | ---------- |
| [Serie Luce Solida Commerciale](/equipaggiamento/serie-luce-solida/commerciale)       | 0       | —                    | 50 crediti      | 1         | +2       | —          |
| [Serie Luce Solida Tattica](/equipaggiamento/serie-luce-solida/tattica)               | 5       | +1.600 crediti       | 1.650 crediti   | 2         | +3       | —          |
| [Serie Luce Solida Avanzata](/equipaggiamento/serie-luce-solida/avanzata)             | 8       | +3.400 crediti       | 5.050 crediti   | 2         | +3       | +1         |
| [Serie Luce Solida Superiore](/equipaggiamento/serie-luce-solida/superiore)           | 11      | +9.000 crediti       | 14.050 crediti  | 3         | +4       | +1         |
| [Serie Luce Solida D'Élite](/equipaggiamento/serie-luce-solida/d-elite)               | 14      | +31.000 crediti      | 45.050 crediti  | 3         | +4       | +2         |
| [Serie Luce Solida Definitiva](/equipaggiamento/serie-luce-solida/definitiva)         | 18      | +195.000 crediti     | 240.050 crediti | 4         | +5       | +2         |
| [Serie Luce Solida Ineguagliabile](/equipaggiamento/serie-luce-solida/ineguagliabile) | 20      | +460.000 crediti     | 700.050 crediti | 4         | +5       | +3         |

`{caption="Miglioramenti"}`

{{% /if %}}
