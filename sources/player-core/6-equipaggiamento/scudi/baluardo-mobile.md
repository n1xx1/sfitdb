---
traits: [analogico, massiccio +2]
source: Player Core (Eng), pag. 251
original-name: Mobile Bulwark
original-srd: https://2e.aonsrd.com/equipment/shields/5-mobile-bulwark
itemCategories: [base-shield]
navigation-disable: true
title: Baluardo Mobile
level: "0+"
itemShield:
  price: 200
  hardness: 6
  hp: 24
  bt: 12
#[[shieldSubItems Baluardo Mobile, Mobile Bulwark]]
---

# {{% get `.params.title` %}} - Oggetto {{% get `.params.level` %}}

**Prezzo** {{% get `.params.itemShield.price | lang.FormatNumber 0` %}} crediti

**Bonus CA**^1^ +3/+4^2^; **Pen. Velocità** -3 m.; **Volume** 4

**Durezza** {{% get `.params.itemShield.hardness` %}}; **PF (SR)**
{{% get `.params.itemShield.hp` %}} ({{% get `.params.itemShield.bt` %}})

---

L’armatura da crosaro prende il nome dai pirati e fuorilegge che spesso la
indossano. Di solito consiste in un pettorale sotto una giacca o tuta da volo,
stivali e guanti pesanti, un elmo e cinghie e fondine nascoste per occultare
armi.

^1^ Per ottenere un bonus di circostanza dello scudo alla CA devi usare l’azione
[Alzare lo Scudo](/azioni/alzare-lo-scudo).  
^2^ Per ottenere il bonus più alto dello scudo devi usare l’azione
[Andare in Copertura](/azioni/andare-in-copertura) mentre hai lo scudo alzato.

{{% if `eq .type "equipment"` %}}

| Grado                                                                             | Livello | Prezzo Potenziamento |  Prezzo Totale  | Durezza | PF  | SR  |
| --------------------------------------------------------------------------------- | ------- | :------------------: | :-------------: | :-----: | :-: | :-: |
| [Baluardo Mobile Commerciale](/equipaggiamento/baluardo-mobile/commerciale)       | 0       |          —           |   200 crediti   |    6    | 24  | 12  |
| [Baluardo Mobile Tattico](/equipaggiamento/baluardo-mobile/tattico)               | 5       |     +750 crediti     |   950 crediti   |    9    | 70  | 35  |
| [Baluardo Mobile Avanzato](/equipaggiamento/baluardo-mobile/avanzato)             | 8       |    +2.250 crediti    |  3.200 crediti  |    9    | 80  | 40  |
| [Baluardo Mobile Superiore](/equipaggiamento/baluardo-mobile/superiore)           | 11      |    +6.000 crediti    |  9.200 crediti  |    9    | 92  | 46  |
| [Baluardo Mobile D'Élite](/equipaggiamento/baluardo-mobile/d-elite)               | 14      |   +16.000 crediti    | 25.200 crediti  |   11    | 104 | 52  |
| [Baluardo Mobile Definitivo](/equipaggiamento/baluardo-mobile/definitivo)         | 18      |   +55.000 crediti    | 80.200 crediti  |   12    | 124 | 62  |
| [Baluardo Mobile Ineguagliabile](/equipaggiamento/baluardo-mobile/ineguagliabile) | 20      |   +240.000 crediti   | 320.200 crediti |   13    | 144 | 72  |

`{caption="Miglioramenti"}`

{{% /if %}}
