---
source: Player Core (Eng), pag. 255
original-name: Automatic
original-srd: https://2e.aonsrd.com/traits/29-automatic
---

# Automatica

In aggiunta a i normali [Colpi](/azioni/colpire), puoi far fuoco con quest'arma
usando l'azione [Fuoco Automatico](/azioni/fuoco-automatico).

{{% if `not (and .parent (eq .parent.template "inlinetitle"))` %}}

{{% include page="/azioni/fuoco-automatico" %}}

{{% /if %}}

{{% if `and .parent (eq .parent.template "inlinetitle")` %}}

<div class="pl-5">

[**Fuoco Automatico**](/azioni/fuoco-automatico) :aa: ([area](/tratti/area),
[attacco](/tratti/attacco)) Cerchi di colpire ogni creatura in un cono con un
raggio pari alla metà dell’incremento di gittata dell’arma, senza effettuare un
tiro per colpire. Ogni creatura nell’area subisce il danno dell’arma (tiro
salvezza base su Riflessi contro la tua CD di classe più il valore
[tracciante](/tratti/tracciante) dell’arma). Questo danno è considerato danno ad
area. Le creature che falliscono criticamente questo tiro salvezza subiscono gli
effetti che si verificano in caso di colpo critico con quest’arma, incluso
l’effetto di specializzazione del critico dell’arma. Fuoco Automatico consuma
una quantità di munizioni pari al numero di bersagli nell’area × 2.

</div>

{{% /if %}}
