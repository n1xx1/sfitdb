{{- $p := .Page.Params -}}
{{- $groupLink := path.Join "/gruppi-armi" $p.itemWeapon.group -}}
{{- $groupPage := site.GetPage $groupLink -}}
{{- $groupName := (partialCached "utils/title" $groupPage $groupPage.Path).name -}}
{{- $damage := $p.itemWeapon.damage -}}

**Prezzo** {{ if $p.itemWeapon.price }}{{ $p.itemWeapon.price | lang.FormatNumber 0 }} crediti{{ else }}—{{ end }};
**Danni** {{ $p.itemWeapon.dice }}d{{ $p.itemWeapon.diceSize }} {{ partialCached "inline/shortcode/damage.html" $damage $damage | safeHTML }};
**Volume** {{ $p.itemWeapon.bulk }}

**Mani** {{ $p.itemWeapon.hands }};
**Gittata** {{ $p.itemWeapon.range | lang.FormatNumber 1 | replaceRE `[,\.]0+$` "" }} m.;
**Ricarica** {{ $p.itemWeapon.reload }}

**Tipo** A Distanza;
**Categoria** {{ $p.itemWeapon.category }};
**Gruppo** [{{$groupName}}]({{$groupLink}})

**Migliorie** {{ $p.itemWeapon.upgrades }}{{ if $p.itemWeapon.magazineSize }};
**Caricatore** {{ $p.itemWeapon.magazineSize }} [{{ $p.itemWeapon.ammoName }}](/equipaggiamento/{{ $p.itemWeapon.ammo }});
**Dispendio** {{ $p.itemWeapon.expend }}{{ end }}
