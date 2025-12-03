{{- if eq .Page.Type "pfequipment" -}}
  {{- $suffix1 := "o" }}
  {{- $suffixT := "o" }}
  {{- $suffix2 := "e" }}
  {{- $gender := .Get 0 -}}

  {{- if eq $gender "f" -}}
    {{- $suffix1 = "a" -}}
    {{- $suffixT = "a" -}}
  {{- else if eq $gender "m" -}}
    {{- $suffix1 = "o" -}}
    {{- $suffixT = "o" -}}
  {{- else if eq $gender "mp" -}}
    {{- $suffix1 = "i" -}}
    {{- $suffix2 = "i" -}}
    {{- $suffixT = "i" -}}
  {{- else if eq $gender "fp" -}}
    {{- $suffix1 = "i" -}}
    {{- $suffix2 = "e" -}}
    {{- $suffixT = "he" -}}
  {{- end -}}

  {{- $name := (partialCached "utils/title" .Page .Page.Path).name -}}
  {{- $basePrice := .Page.Params.itemWeapon.price -}}
  {{- $baseUpgrades := .Page.Params.itemWeapon.upgrades -}}

  {{- $list := slice -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Commercial%s" $suffix2) (path.Join .Page.RelPermalink (printf "commercial%s" $suffix2)))
    0
    "—"
    (printf "%s crediti" ($basePrice | lang.FormatNumber 0))
    $baseUpgrades
    1
    "—"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Tattic%s" $suffixT) (path.Join .Page.RelPermalink (printf "tattic%s" $suffixT)))
    2
    (printf "+%s crediti" (350 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 350 | lang.FormatNumber 0))
    $baseUpgrades
    1
    "+1"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Avanzat%s" $suffix1) (path.Join .Page.RelPermalink (printf "avanzat%s" $suffix1)))
    4
    (printf "+%s crediti" (1000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 1000 | lang.FormatNumber 0))
    (add $baseUpgrades 1)
    2
    "+1"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Superior%s" $suffix2) (path.Join .Page.RelPermalink (printf "superior%s" $suffix2)))
    10
    (printf "+%s crediti" (10000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 10000 | lang.FormatNumber 0))
    (add $baseUpgrades 1)
    2
    "+2"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name "d'Élite" (path.Join .Page.RelPermalink "d-elite"))
    12
    (printf "+%s crediti" (20000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 20000 | lang.FormatNumber 0))
    (add $baseUpgrades 2)
    3
    "+2"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Definitiv%s" $suffix1) (path.Join .Page.RelPermalink (printf "definitiv%s" $suffix1)))
    16
    (printf "+%s crediti" (100000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 100000 | lang.FormatNumber 0))
    (add $baseUpgrades 2)
    3
    "+3"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Ineguagliabil%s" $suffix2) (path.Join .Page.RelPermalink (printf "ineguagliabil%s" $suffix2)))
    19
    (printf "+%s crediti" (400000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 400000 | lang.FormatNumber 0))
    (add $baseUpgrades 3)
    4
    "+3"
    ))
  -}}

  {{- "\n---" -}}

  {{- "\n\n| Grado | Livello | Prezzo Miglioramento | Valore Totale | Migliorie | Dadi di Danno | Tracciante |" -}}
  {{- "\n| - |:-:|:-:|:-:|:-:|:-:|:-:|" -}}

  {{- range $list -}}
    {{- "\n| " -}}
    {{- range .v -}}
      {{- . -}}{{- " | " -}}
    {{- end -}}
  {{- end -}}

  {{- "\n{caption=\"Miglioramenti\"}" -}}
{{- end -}}
