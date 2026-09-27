# sarcoma-website

**Makieta klikalna** nowej strony [sarcoma.pl](https://sarcoma.pl) — do prezentacji struktury IA (HTML + CSS + minimalny JS).

## Stack

- Czysty HTML + CSS + vanilla JS (kontrast, powiększenie tekstu, menu mobilne, odkrywanie infolinii)
- Bez frameworków, bez build step, bez npm
- Base path GitHub Pages: `/sarcoma-website/` (`<base href="/sarcoma-website/">`)
- Assety: `assets/css/site.css`, `assets/js/site.js`
- Identyfikacja wizualna: wyłącznie paleta neutralna (`<!-- brand: TBD -->`)

## Co jest klikalne (przykłady do pokazu)

1. Menu główne → wszystkie huby  
2. Strona główna → Szukam pomocy / Nowotwory / projekty / aktualności / wideo / Wspieram  
3. Szukam pomocy → ścieżki + usługi; **pełny przykład:** `szukam-pomocy/nowa-diagnoza/`  
4. Mięsaki → kroki ścieżki; **pełny szablon a–k:** `miesaki/czym-sa-miesaki/`  
5. Wspieram → kotwice `#darowizna`, `#przelew` + 1,5% / dla firm / Onkobieg  
6. Wiedza, Projekty, O nas, Aktualności, Wideo — huby z kartami do stubów  

## Hosting

Repozytorium jest **prywatne**. GitHub Pages na darmowym planie może nie serwować prywatnego repo — wtedy makietę otwieramy lokalnie lub przez inny hosting.

```bash
# Podgląd lokalny (uwaga na <base>): serwuj z katalogu nadrzędnego
# albo otwórz pliki po tymczasowej zmianie base na "./"
```

Planowany URL Pages (jeśli włączone): https://stanleyagent.github.io/sarcoma-website/
