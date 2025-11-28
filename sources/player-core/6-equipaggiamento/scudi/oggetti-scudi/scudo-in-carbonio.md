---
traits: [retrattile, tecnologico]
source: Player Core (Eng), pag. 251
original-name: Carbon Shield
original-srd: https://2e.aonsrd.com/equipment/shields/1-carbon-shield
itemCategories: [base-shield]
navigation-disable: true
title: Scudo in Carbonio
level: "0+"
itemShield:
  price: 25
  hardness: 5
  hp: 20
  bt: 10
#[[shieldSubItems Scudo in Carbonio, Carbon Shield]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Prezzo** {{% get `.params.itemShield.price | lang.FormatNumber 0` %}} crediti

**Bonus CA**^1^ +2; **Pen. Velocità** —; **Volume** 1

**Durezza** {{% get `.params.itemShield.hardness` %}}; **PF (SR)**
{{% get `.params.itemShield.hp` %}} ({{% get `.params.itemShield.bt` %}})

---

Questa piastra difensiva resistente ma leggera è disponibile in una varietà di
forme e dimensioni, ed è spesso personalizzata con display a LED che trasmette
insegne personali o i colori e simboli di un’organizzazione.

---

^1^ Per ottenere un bonus di circostanza dello scudo alla CA devi usare l’azione
[Alzare lo Scudo](/azioni/alzare-lo-scudo).

{{% if `eq .type "equipment"` %}}

| Grado                                                                                 | Livello | Prezzo Potenziamento |  Prezzo Totale  | Durezza | PF  | SR  |
| ------------------------------------------------------------------------------------- | ------- | :------------------: | :-------------: | :-----: | :-: | :-: |
| [Scudo in Carbonio Commerciale](/equipaggiamento/scudo-in-carbonio/commerciale)       | 0       |          —           |   20 crediti    |    5    | 20  | 10  |
| [Scudo in Carbonio Tattico](/equipaggiamento/scudo-in-carbonio/tattico)               | 5       |     +750 crediti     |   770 crediti   |    8    | 66  | 33  |
| [Scudo in Carbonio Avanzato](/equipaggiamento/scudo-in-carbonio/avanzato)             | 8       |    +2.250 crediti    |  3.020 crediti  |    8    | 76  | 38  |
| [Scudo in Carbonio Superiore](/equipaggiamento/scudo-in-carbonio/superiore)           | 11      |    +6.000 crediti    |  9.020 crediti  |    8    | 88  | 44  |
| [Scudo in Carbonio D'Élite](/equipaggiamento/scudo-in-carbonio/d-elite)               | 14      |   +16.000 crediti    | 25.020 crediti  |   10    | 100 | 50  |
| [Scudo in Carbonio Definitivo](/equipaggiamento/scudo-in-carbonio/definitivo)         | 18      |   +55.000 crediti    | 80.020 crediti  |   11    | 120 | 60  |
| [Scudo in Carbonio Ineguagliabile](/equipaggiamento/scudo-in-carbonio/ineguagliabile) | 20      |   +240.000 crediti   | 320.020 crediti |   12    | 150 | 70  |

`{caption="Miglioramenti"}`

{{% /if %}}
