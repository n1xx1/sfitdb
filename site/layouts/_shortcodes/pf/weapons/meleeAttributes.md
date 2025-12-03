{{- $p := .Page.Params -}}
{{- $groupLink := path.Join "/gruppi-armi" $p.itemWeapon.group -}}
{{- $groupPage := site.GetPage $groupLink -}}
{{- $groupName := (partialCached "utils/title" $groupPage $groupPage.Path).name -}}
{{- $damage := $p.itemWeapon.damage -}}

**Prezzo** {{ if $p.itemWeapon.price }}{{ $p.itemWeapon.price | lang.FormatNumber 0 }} crediti{{ else }}—{{ end }};
**Danni** {{ $p.itemWeapon.dice }}d{{ $p.itemWeapon.diceSize }} {{- partialCached "inline/shortcode/damage.html" $damage $damage | safeHTML -}};
**Volume** {{ $p.itemWeapon.bulk }}

**Mani** {{ $p.itemWeapon.hands }}

**Tipo** Mischia;
**Categoria** {{ $p.itemWeapon.category }};
**Gruppo** [{{$groupName}}]({{$groupLink}})

**Migliorie** {{ if $p.itemWeapon.upgrades }}{{ $p.itemWeapon.upgrades }}{{ else }}—{{ end }}
