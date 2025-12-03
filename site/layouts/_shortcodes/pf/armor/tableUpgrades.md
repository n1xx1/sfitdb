{{- if eq .Page.Type "pfequipment" -}}
  {{- $suffix1 := "a" }}
  {{- $suffixT := "a" }}
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
  {{- $basePrice := .Page.Params.itemArmor.price -}}
  {{- $baseUpgrades := .Page.Params.itemArmor.upgrades -}}
  {{- $baseAC := .Page.Params.itemArmor.ac -}}

  {{- $list := slice -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Commercial%s" $suffix2) (path.Join .Page.RelPermalink (printf "commercial%s" $suffix2)))
    0
    "—"
    (printf "%s crediti" ($basePrice | lang.FormatNumber 0))
    $baseUpgrades
    (printf "+%d" $baseAC)
    "—"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Tattic%s" $suffixT) (path.Join .Page.RelPermalink (printf "tattic%s" $suffixT)))
    5
    (printf "+%s crediti" (1600 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 1600 | lang.FormatNumber 0))
    $baseUpgrades
    (printf "+%d" $baseAC)
    "—"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Avanzat%s" $suffix1) (path.Join .Page.RelPermalink (printf "avanzat%s" $suffix1)))
    8
    (printf "+%s crediti" (5000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 5000 | lang.FormatNumber 0))
    (add $baseUpgrades 1)
    (printf "+%d" (add $baseAC 1))
    "+1"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Superior%s" $suffix2) (path.Join .Page.RelPermalink (printf "superior%s" $suffix2)))
    11
    (printf "+%s crediti" (14000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 14000 | lang.FormatNumber 0))
    (add $baseUpgrades 2)
    (printf "+%d" (add $baseAC 2))
    "+1"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name "d'Élite" (path.Join .Page.RelPermalink "d-elite"))
    14
    (printf "+%s crediti" (45000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 45000 | lang.FormatNumber 0))
    (add $baseUpgrades 2)
    (printf "+%d" (add $baseAC 2))
    "+2"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Definitiv%s" $suffix1) (path.Join .Page.RelPermalink (printf "definitiv%s" $suffix1)))
    18
    (printf "+%s crediti" (240000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 240000 | lang.FormatNumber 0))
    (add $baseUpgrades 3)
    (printf "+%d" (add $baseAC 3))
    "+2"
    ))
  -}}

  {{- $list = $list | append (dict "v" (slice
    (printf "[%s %s](%s)" $name (printf "Ineguagliabil%s" $suffix2) (path.Join .Page.RelPermalink (printf "ineguagliabil%s" $suffix2)))
    20
    (printf "+%s crediti" (700000 | lang.FormatNumber 0))
    (printf "%s crediti" (add $basePrice 700000 | lang.FormatNumber 0))
    (add $baseUpgrades 3)
    (printf "+%d" (add $baseAC 3))
    "+3"
    ))
  -}}

  {{- "\n---" -}}

  {{- "\n\n| Grado | Livello | Prezzo Miglioramento | Valore Totale | Migliorie | Bonus CA | Resiliente |" -}}
  {{- "\n| - |:-:|:-:|:-:|:-:|:-:|:-:|" -}}

  {{- range $list -}}
    {{- "\n| " -}}
    {{- range .v -}}
      {{- . -}}{{- " | " -}}
    {{- end -}}
  {{- end -}}

  {{- "\n{caption=\"Miglioramenti\"}" -}}
{{- end -}}
