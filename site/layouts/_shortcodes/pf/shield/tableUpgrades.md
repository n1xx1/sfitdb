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
  {{- $basePrice := .Page.Params.itemShield.price -}}
  {{- $baseHardness := .Page.Params.itemShield.hardness -}}
  {{- $baseHP := .Page.Params.itemShield.hp -}}
  {{- $baseBT := .Page.Params.itemShield.bt -}}

  {{- $list := slice -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Commercial%s" $suffix2) (path.Join .Page.RelPermalink (printf "commercial%s" $suffix2)))
    0
    "—"
    (printf "%s crediti" ($basePrice | lang.FormatNumber 0))
    $baseHardness
    $baseHP
    $baseBT
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Tattic%s" $suffixT) (path.Join .Page.RelPermalink (printf "tattic%s" $suffixT)))
    5
    (printf "+%s crediti" (750 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 750 | lang.FormatNumber 0))
    (add $baseHardness 3)
    (add $baseHP 46)
    (add $baseBT 23)
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Avanzat%s" $suffix1) (path.Join .Page.RelPermalink (printf "avanzat%s" $suffix1)))
    8
    (printf "+%s crediti" (3000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 3000 | lang.FormatNumber 0))
    (add $baseHardness 3)
    (add $baseHP 56)
    (add $baseBT 28)
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Superior%s" $suffix2) (path.Join .Page.RelPermalink (printf "superior%s" $suffix2)))
    11
    (printf "+%s crediti" (9000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 9000 | lang.FormatNumber 0))
    (add $baseHardness 3)
    (add $baseHP 68)
    (add $baseBT 34)
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name "d'Élite" (path.Join .Page.RelPermalink "d-elite"))
    14
    (printf "+%s crediti" (25000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 25000 | lang.FormatNumber 0))
    (add $baseHardness 5)
    (add $baseHP 80)
    (add $baseBT 40)
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Definitiv%s" $suffix1) (path.Join .Page.RelPermalink (printf "definitiv%s" $suffix1)))
    18
    (printf "+%s crediti" (80000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 80000 | lang.FormatNumber 0))
    (add $baseHardness 6)
    (add $baseHP 100)
    (add $baseBT 50)
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Ineguagliabil%s" $suffix2) (path.Join .Page.RelPermalink (printf "ineguagliabil%s" $suffix2)))
    20
    (printf "+%s crediti" (320000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 320000 | lang.FormatNumber 0))
    (add $baseHardness 7)
    (add $baseHP 120)
    (add $baseBT 60)
    ))
  -}}

  {{- "\n---" -}}

  {{- "\n\n| Grado | Livello | Prezzo Miglioramento | Valore Totale | Durezza | PF | BT |" -}}
  {{- "\n| - |:-:|:-:|:-:|:-:|:-:|:-:|" -}}

  {{- range $list -}}
    {{- "\n| " -}}
    {{- range .v -}}
      {{- . -}}{{- " | " -}}
    {{- end -}}
  {{- end -}}

  {{- "\n{caption=\"Miglioramenti\"}" -}}
{{- end -}}
