---
traits: [analogico, compatto]
source: Player Core (Eng), pag. 251
original-name: Compact Shield
original-srd: https://2e.aonsrd.com/equipment/shields/2-compact-shield
itemCategories: [base-shield]
navigation-disable: true
title: Scudo Compatto
level: "0+"
itemShield:
  price: 15
  hardness: 4
  hp: 8
  bt: 4
#[[shieldSubItems Scudo Compatto, Compact Shield]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Prezzo** {{% get `.params.itemShield.price | lang.FormatNumber 0` %}} crediti

**Bonus CA**^1^ +1; **Pen. Velocità** —; **Volume** L

**Durezza** {{% get `.params.itemShield.hardness` %}}; **PF (SR)**
{{% get `.params.itemShield.hp` %}} ({{% get `.params.itemShield.bt` %}})

---

Questo scudo elegante è il preferito di operativi e altri combattenti mobili. Il
suo design più comune è un pannello in policarbonato sagomato per adattarsi
perfettamente a un avambraccio o a un altro arto.

^1^ Per ottenere un bonus di circostanza dello scudo alla CA devi usare l’azione
[Alzare lo Scudo](/azioni/alzare-lo-scudo).

{{% if `eq .type "equipment"` %}}

| Grado                                                                           | Livello | Prezzo Potenziamento |  Prezzo Totale  | Durezza | PF  | SR  |
| ------------------------------------------------------------------------------- | ------- | :------------------: | :-------------: | :-----: | :-: | :-: |
| [Scudo Compatto Commerciale](/equipaggiamento/scudo-compatto/commerciale)       | 0       |          —           |   15 crediti    |    4    |  8  |  4  |
| [Scudo Compatto Tattico](/equipaggiamento/scudo-compatto/tattico)               | 5       |     +750 crediti     |   765 crediti   |    7    | 54  | 27  |
| [Scudo Compatto Avanzato](/equipaggiamento/scudo-compatto/avanzato)             | 8       |    +2.250 crediti    |  3.015 crediti  |    7    | 64  | 32  |
| [Scudo Compatto Superiore](/equipaggiamento/scudo-compatto/superiore)           | 11      |    +6.000 crediti    |  9.015 crediti  |    7    | 76  | 38  |
| [Scudo Compatto D'Élite](/equipaggiamento/scudo-compatto/d-elite)               | 14      |   +16.000 crediti    | 25.015 crediti  |    9    | 88  | 44  |
| [Scudo Compatto Definitivo](/equipaggiamento/scudo-compatto/definitivo)         | 18      |   +55.000 crediti    | 80.015 crediti  |   10    | 108 | 54  |
| [Scudo Compatto Ineguagliabile](/equipaggiamento/scudo-compatto/ineguagliabile) | 20      |   +240.000 crediti   | 320.015 crediti |   11    | 128 | 64  |

`{caption="Miglioramenti"}`

{{% /if %}}
