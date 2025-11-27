---
source: Player Core (Eng), pag. 255
original-name: Area
original-srd: https://2e.aonsrd.com/traits/25-area
title: Area
---

# Area{{% if `and .parent (eq .parent.template "inlinetitle")` %}} (cono, esplosione, linea){{% /if %}}

Le armi con questo tratto possono far fuoco solo con l'azione
[Fuoco ad Area](/azioni/fuoco-ad-area).

{{% if `not (and .parent (eq .parent.template "inlinetitle"))` %}}

{{% include page="/azioni/fuoco-ad-area" %}}

{{% /if %}}

{{% if `and .parent (eq .parent.template "inlinetitle")` %}}

<div class="pl-5">

[**Fuoco ad Area**](/azioni/fuoco-ad-area) :aa: ([area](/tratti/area),
[attacco](/tratti/attacco)) Cerchi di colpire ogni creatura in un’area
designata, che ha una portata pari all’incremento di gittata dell’arma (per un
cono o una linea) o un raggio di deflagrazione designato (per un'esplosione).
Nel caso di un'esplosione, puoi posizionare il punto centrale ovunque entro il
tuo primo incremento di gittata. Tutte le creature nell’area devono superare un
tiro salvezza base su Riflessi contro la tua CD di classe più il valore
[tracciante](/tratti/tracciante) dell’arma (non effettui un tiro per colpire).
Questo danno è considerato danno ad area. Le creature che falliscono
criticamente questo tiro salvezza subiscono gli effetti che avverrebbero subito
con un colpo critico con quest’arma, incluso l’effetto di specializzazione del
critico dell’arma. Fuoco d’Area consuma una quantità di munizioni pari al valore
di dispendio indicato sull’arma.

</div>

{{% /if %}}
