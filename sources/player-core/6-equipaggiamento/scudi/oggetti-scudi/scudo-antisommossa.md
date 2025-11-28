---
traits: [analogico]
source: Player Core (Eng), pag. 248
original-name: Riot Shield
original-srd: https://2e.aonsrd.com/equipment/shields/7-riot-shield
itemCategories: [base-shield]
navigation-disable: true
title: Scudo Antisommossa
level: "0+"
itemShield:
  price: 100
  hardness: 5
  hp: 20
  bt: 10
#[[shieldSubItems Scudo Antisommossa, Riot Shield]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Prezzo** {{% get `.params.itemShield.price | lang.FormatNumber 0` %}} crediti

**Bonus CA**^1^ +2/+4^2^; **Pen. Velocità** -1,5 m.; **Volume** 2

**Durezza** {{% get `.params.itemShield.hardness` %}}; **PF (SR)**
{{% get `.params.itemShield.hp` %}} ({{% get `.params.itemShield.bt` %}})

---

Gli scudi antisommossa sono costruiti con fogli di alluminio trasparente
rinforzato con pannelli in nanocarbonio, sovrapposti a polimeri o resine. Questi
scudi, eleganti ma robusti, sono progettati per proteggere la maggior parte del
corpo dell’utilizzatore quando sono alzati, consentendo allo stesso tempo di
avanzare in formazioni tattiche serrate. A volte sono trasparenti per permettere
ai portatori inesperti di vedere dall’altro lato mentre lo scudo è alzato, ma la
maggior parte dei guerrieri esperti non ha problemi a guardare oltre questi
scudi, e il materiale trasparente si graffia rapidamente dopo pochi colpi,
rendendo impossibile vedere attraverso di esso.

---

^1^ Per ottenere un bonus di circostanza dello scudo alla CA devi usare l’azione
[Alzare lo Scudo](/azioni/alzare-lo-scudo).  
^2^ Per ottenere il bonus più alto dello scudo devi usare l’azione
[Andare in Copertura](/azioni/andare-in-copertura) mentre hai lo scudo alzato.

{{% if `eq .type "equipment"` %}}

| Grado                                                                                   | Livello | Prezzo Potenziamento |  Prezzo Totale  | Durezza | PF  | SR  |
| --------------------------------------------------------------------------------------- | ------- | :------------------: | :-------------: | :-----: | :-: | :-: |
| [Scudo Antisommossa Commerciale](/equipaggiamento/scudo-antisommossa/commerciale)       | 0       |          —           |   100 crediti   |    5    | 20  | 10  |
| [Scudo Antisommossa Tattico](/equipaggiamento/scudo-antisommossa/tattico)               | 5       |     +750 crediti     |   850 crediti   |    8    | 66  | 33  |
| [Scudo Antisommossa Avanzato](/equipaggiamento/scudo-antisommossa/avanzato)             | 8       |    +2.250 crediti    |  3.100 crediti  |    8    | 76  | 38  |
| [Scudo Antisommossa Superiore](/equipaggiamento/scudo-antisommossa/superiore)           | 11      |    +6.000 crediti    |  9.100 crediti  |    8    | 88  | 44  |
| [Scudo Antisommossa D'Élite](/equipaggiamento/scudo-antisommossa/d-elite)               | 14      |   +16.000 crediti    | 25.100 crediti  |   10    | 100 | 50  |
| [Scudo Antisommossa Definitivo](/equipaggiamento/scudo-antisommossa/definitivo)         | 18      |   +55.000 crediti    | 80.100 crediti  |   11    | 120 | 60  |
| [Scudo Antisommossa Ineguagliabile](/equipaggiamento/scudo-antisommossa/ineguagliabile) | 20      |   +240.000 crediti   | 320.100 crediti |   12    | 140 | 70  |

`{caption="Miglioramenti"}`

{{% /if %}}
