# Proponowana mapa nowej strony – SARCOMA

## 1. Punkt wyjścia

Mapa łączy trzy źródła:

| Źródło | Co wnosi | Główne ograniczenie |
|---|---|---|
| **Specyfikacja wymagań** | Funkcje i szablony: FAQ, zespół, dokumenty, PayU, newsletter, moduł wideo, szablon merytoryczny, WCAG | Płaska struktura bez miejsca na ok. 150 stron treści |
| **Obecny serwis sarcoma.pl** | Treści: mięsaki, czerniak, raki skóry, baza wiedzy, 29 historii pacjentów, projekty, Onkobieg, 1,5% | Menu tematyczne z 10 pozycjami, głębokie zagnieżdżenie (do 4 poziomów), brak ścieżki „szukam pomocy” |
| **Benchmark** | Wzorce nawigacji: wejście wg sytuacji (Rakiety), ścieżka leczenia wg nowotworu (Centrum Kryzysowe), hub form wsparcia (Alivia) | Szerszy zakres (wiele nowotworów, konta użytkowników), którego SARCOMA nie potrzebuje |

## 2. Zasady projektowe

1. **Dwa główne wejścia:** „Szukam pomocy” (według sytuacji) i „Nowotwory” (według choroby). Pacjent w kryzysie nie powinien musieć rozumieć struktury organizacji.
2. **Ścieżka leczenia jako szkielet treści.** Każdy obszar chorobowy ma te same kroki, jak w Centrum Kryzysowym. Treści ze starej strony przypisujemy do kroków zamiast odtwarzać stare drzewo.
3. **Maksymalnie 3 poziomy** w URL i nawigacji (dziś do 4).
4. **Specjalizacja jako przewaga.** Konkurencja opisuje ogólnie wiele nowotworów; SARCOMA powinna być najlepszym źródłem o mięsakach, czerniaku i rakach skóry, także u dzieci.
5. **Infolinia i wsparcie zawsze na wierzchu:** pasek narzędzi, sekcje stałe w szablonie merytorycznym (moduły h, j, k).
6. **Jeden hub „Wspieram”** z wszystkimi formami pomocy.
7. **Treści poza misją** (ogólne materiały o innych nowotworach) przeglądamy i archiwizujemy lub przenosimy do biblioteki, zamiast rozbudowywać nimi menu.

---

## 3. Proponowana mapa

### Pasek narzędzi (nad nagłówkiem, na każdej stronie)

```
Infolinia (odkryj numer / tel:) · Wersja kontrastowa · Powiększ tekst · Szukaj · Kontakt
```

### Menu główne

```
Strona główna                                          /
│
├── 1. Szukam pomocy                                   /szukam-pomocy/
│   ├── Mam podejrzenie lub nową diagnozę              /szukam-pomocy/nowa-diagnoza/
│   ├── Jestem w trakcie leczenia                      /szukam-pomocy/w-trakcie-leczenia/
│   ├── Jestem po leczeniu                             /szukam-pomocy/po-leczeniu/
│   ├── Jestem rodzicem chorego dziecka                /szukam-pomocy/dla-rodzicow/
│   ├── Jestem bliskim osoby chorej                    /szukam-pomocy/dla-bliskich/
│   ├── Jestem lekarzem / pielęgniarką                 /szukam-pomocy/dla-kadry-medycznej/
│   ├── ─────────────
│   ├── Infolinia                                      /infolinia/
│   ├── Konsultacje                                    /konsultacje/
│   ├── Wsparcie psychoonkologiczne                    /wsparcie-psychoonkologiczne/
│   ├── Wsparcie socjalne (treść + FAQ)                /wsparcie-socjalne/
│   └── Gdzie się leczyć (ośrodki i kliniki)           /gdzie-sie-leczyc/
│
├── 2. Nowotwory                                       /nowotwory/
│   ├── Mięsaki                                        /miesaki/            [hub nowotworu]
│   │   ├── Czym są mięsaki
│   │   ├── Objawy
│   │   ├── Diagnostyka
│   │   ├── Gdzie się leczyć
│   │   ├── Leczenie (w tym terapie lekowe)
│   │   ├── Wznowa
│   │   ├── Życie po leczeniu i rehabilitacja
│   │   ├── Mięsaki u dzieci i młodzieży               /miesaki/dzieci-i-mlodziez/
│   │   └── Typy:  Mięsaki tkanek miękkich · Mięsaki kości ·
│   │              Mięsak Ewinga · Chrzęstniakomięsak · GIST · Guzy desmoidalne
│   │
│   ├── Czerniak                                       /czerniak/           [hub nowotworu]
│   │   ├── Objawy i profilaktyka
│   │   ├── Diagnostyka
│   │   ├── Gdzie się leczyć
│   │   ├── Leczenie (w tym terapie lekowe)
│   │   ├── Wznowa
│   │   ├── Życie po leczeniu
│   │   └── Typy:  Czerniak błony naczyniowej oka
│   │
│   └── Raki skóry                                     /raki-skory/         [hub nowotworu]
│       ├── Czym są raki skóry
│       ├── Profilaktyka, objawy i diagnoza
│       ├── Leczenie
│       └── Typy:  Rak podstawnokomórkowy · Rak kolczystokomórkowy · Rak z komórek Merkla
│
├── 3. Wiedza i materiały                              /wiedza/
│   ├── Poradniki dla pacjenta                         /wiedza/poradniki/
│   │   └── Razem zwyciężymy raka! (seria 15 części)   /wiedza/poradniki/razem-zwyciezymy-raka/{czesc}/
│   ├── ABC pacjenta onkologicznego                    /wiedza/abc-pacjenta/
│   ├── Materiały wideo                                /wideo/
│   │   ├── {kategoria} / {projekt}  (filtry)
│   │   └── {film}                                     /wideo/{slug}/
│   ├── Historie pacjentów                             /historie-pacjentow/
│   │   └── {historia}                                 /historie-pacjentow/{slug}/
│   ├── Publikacje i wydawnictwa                       /publikacje/
│   │   └── {publikacja}                               /publikacje/{slug}/
│   └── Recenzje książek                               /recenzje/
│
├── 4. Projekty                                        /projekty/
│   ├── Onkobieg                                       /projekty/onkobieg/   (+ link onkobieg.pl)
│   ├── Profilaktyka mięsaków                          /projekty/profilaktyka-miesakow/
│   ├── Profilaktyka raków skóry / Miej oko na skórę   /projekty/profilaktyka-rakow-skory/
│   ├── #FuraZdrowia                                   /projekty/furazdrowia/
│   ├── Szkolenie pielęgniarek                         /projekty/szkolenie-pielegniarek/
│   └── Zakończone projekty                            /projekty/?status=zakonczone
│
├── 5. O nas                                           /o-nas/
│   ├── Misja, cele i historia                         /o-nas/
│   ├── Zespół                                         /o-nas/zespol/
│   │   └── Zarząd · Komisja Rewizyjna · Eksperci      (grupy kafelków)
│   ├── Dokumenty                                      /o-nas/dokumenty/
│   │   └── Statut · Sprawozdania wg lat · Walne zebrania · Standardy ochrony małoletnich
│   ├── Partnerzy                                      /o-nas/partnerzy/
│   ├── Dla mediów (opcja)                             /o-nas/dla-mediow/
│   └── Kontakt                                        /kontakt/
│
├── 6. Aktualności                                     /aktualnosci/
│   ├── {kategoria}                                    /aktualnosci/kategoria/{slug}/
│   └── {wpis}                                         /aktualnosci/{slug}/  (z galerią zdjęć)
│
└── [Przycisk] Wspieram                                /wspieram/
    ├── Darowizna online (PayU)                        /wspieram/#darowizna
    ├── Przekaż 1,5% podatku                           /wspieram/1-5-procent/
    ├── Przelew tradycyjny                             /wspieram/#przelew
    ├── Pobiegnij w Onkobiegu                          → /projekty/onkobieg/
    ├── Dla firm                                       /wspieram/dla-firm/        (opcja)
    ├── Płatność – sukces                              /wspieram/dziekujemy/
    └── Płatność – błąd                                /wspieram/blad-platnosci/
```

### Stopka

```
Kolumna 1: Dane organizacji – adres, KRS, NIP, REGON, numer konta (kopiuj), infolinia z godzinami
Kolumna 2: Szukam pomocy – skróty do ścieżek + Gdzie się leczyć
Kolumna 3: Nowotwory – Mięsaki, Czerniak, Raki skóry
Kolumna 4: O nas – Zespół, Dokumenty, Projekty, Aktualności, Kontakt
Pasek:     Newsletter (MailerLite) · Partnerzy (logotypy) · Social media (FB, YouTube, Instagram)
Dół:       Polityka prywatności · Polityka cookies · Regulamin płatności · Deklaracja dostępności ·
           Mapa strony · Ustawienia cookies
```

### Strony techniczne

`/szukaj/` (wyniki z filtrami) · `/404` · `/newsletter/potwierdzenie/` · `/sitemap.xml` · `/robots.txt` · `/llms.txt` (opcja, widoczność w AI)

---

## 4. Uzasadnienie kluczowych decyzji

| Decyzja | Źródło | Uzasadnienie |
|---|---|---|
| „Szukam pomocy” jako pierwsza pozycja, wg sytuacji | Rakiety | Pacjent szuka odpowiedzi na swoją sytuację, nie działu organizacji. Strony sytuacyjne to huby linkujące do istniejących treści – nie wymagają nowych tekstów od zera. |
| Osobna ścieżka „dla rodziców” | Stara strona (mięsaki u dzieci, historie rodziców) | Mięsaki często dotyczą dzieci; żaden benchmark nie ma takiej ścieżki – to wyróżnik SARCOMA. |
| Ścieżka „dla kadry medycznej” | Specyfikacja (moduł i: wytyczne NIO), Szkolenie pielęgniarek, monografie | Zbiera materiały specjalistyczne, które dziś są rozproszone w publikacjach. |
| Hub nowotworu z krokami leczenia | Centrum Kryzysowe | Porządkuje treści mięsaków (dziś podzielone na dorosłych / dzieci / publikacje) w logiczną sekwencję i poprawia SEO/AI (jedno źródło odpowiedzi na pytanie „jak leczyć…”). |
| Typy nowotworów jako podstrony huba | Stara strona | Zachowuje wartościowe treści o GIST, desmoidach, Ewingu itd. bez mnożenia pozycji menu. |
| Historie pacjentów w „Wiedzy i materiałach” + na hubach | Stara strona, specyfikacja (wideo) | 29 historii to duży zasób; filtrowane po chorobie trafiają też do hubów. |
| „Gdzie się leczyć” zamiast 3 osobnych stron klinik | Stara strona, Centrum Kryzysowe | Jedna lista ośrodków z filtrami zamiast rozproszonych stron /coi-kntmkic/, /imid-kco/, /coi-pp/. |
| Projekty jako osobny dział | Stara strona, specyfikacja | Onkobieg i programy profilaktyczne to kluczowa działalność; dziś rozproszone między menu, stronę główną i stopkę. |
| Fotorelacje rozproszone w projektach i aktualnościach | Stara strona | Galerie bez kontekstu mają małą wartość; lepiej przy wydarzeniu, którego dotyczą. |
| Hub „Wspieram” | Alivia, Rakiety | Łączy dzisiejsze „Pomagaj”, „1,5%” i Onkobieg; porządkuje ścieżkę darczyńcy. |
| „Tożsamość” → „O nas” | Specyfikacja, benchmark | Nazwa zrozumiała dla użytkownika; spójna z konkurencją. |

---

## 5. Migracja treści ze starej strony

| Stara sekcja | Nowe miejsce | Działanie |
|---|---|---|
| Mięsaki → u dorosłych / u dzieci | Hub Mięsaki (kroki + typy + dzieci i młodzież) | Scalić i podzielić wg kroków |
| Mięsaki → Publikacje, Czerniak → Publikacje, Raki skóry → Publikacje | Publikacje i wydawnictwa (filtr wg obszaru) | Przenieść jako typ treści |
| Mięsaki → Pacjenci o sobie (29) | Historie pacjentów | Przenieść 1:1 |
| Terapie lekowe (mięsaki, czerniak) | Krok „Leczenie” w hubach | Przenieść |
| Czerniak → Lista ośrodków | Gdzie się leczyć | Przenieść do bazy ośrodków |
| Kampania „Miej oko na skórę” | Projekty → Profilaktyka raków skóry | Scalić |
| Baza wiedzy → Razem zwyciężymy raka! (15) | Poradniki dla pacjenta | Przenieść z nawigacją poprzednia/następna |
| Baza wiedzy → Co warto wiedzieć (25) | Archiwum lub Poradniki | **Do decyzji** – głównie inne nowotwory, poza misją |
| Baza wiedzy → Recenzje (17) | Recenzje książek | Przenieść |
| Baza wiedzy → Akademia NFZ, Walka z bólem, Chirurgia onkologiczna, EKWR | Poradniki / Publikacje | Przegląd aktualności |
| ABC pacjenta onkologicznego | Wiedza → ABC pacjenta | Przenieść |
| Tożsamość → Statut, Sprawozdania, Walne zebrania | O nas → Dokumenty | Przenieść |
| Tożsamość → Zespół, Władze | O nas → Zespół (grupy) | Scalić |
| Tożsamość → Cele, Historia, O nas w skrócie | O nas | Scalić w jedną stronę |
| Onkobieg | Projekty → Onkobieg | Przenieść |
| Konsultacje | Szukam pomocy → Konsultacje | Przenieść |
| Profilaktyka mięsaków, raków skóry, #FuraZdrowia, Szkolenie pielęgniarek | Projekty | Przenieść |
| Własne wydawnictwa | Publikacje (filtr „własne”) | Scalić |
| Kliniki NIO, IMiD, Poradnia Psychoonkologii | Gdzie się leczyć | Scalić |
| Psychoonkologia | Wsparcie psychoonkologiczne | Przenieść |
| Badania kliniczne, Polska Grupa Mięsakowa | Hub Mięsaki → Leczenie / Dla kadry medycznej | Przenieść |
| Fotorelacje | Galerie w projektach i aktualnościach | Rozproszyć |
| 1,5%, Pomagaj, Jak pomagamy | Wspieram / O nas | Scalić |
| Nowości w witrynie | Aktualności | Scalić |
| Polityka cookies | Polityka prywatności + Polityka cookies | Zaktualizować |

Każdy stary adres dostaje przekierowanie 301 (E19).

---

## 6. Wpływ na epiki i user stories (v2)

| Epik | Zmiana |
|---|---|
| **Nowy: Huby „Szukam pomocy”** | Szablon strony sytuacyjnej: lead, kafle linków do treści, sekcje stałe (infolinia, wsparcie). Zarządzanie w CMS przez wybór powiązanych treści. |
| E7 Szablon merytoryczny | Dodać **szablon huba nowotworu** (kroki leczenia, typy, historie, filmy, publikacje) oraz nawigację „krok poprzedni / następny” w obrębie ścieżki. |
| E1 Nawigacja | Mega-menu dla „Szukam pomocy” i „Nowotwory”; pasek narzędzi z infolinią, kontrastem i wyszukiwarką. |
| E3 / E9 | Hub „Wspieram” z sekcjami form pomocy; **pytanie do klienta o darowizny cykliczne** (standard u wszystkich benchmarków). |
| E5 Dokumenty | Dodać standardy ochrony małoletnich (wymóg ustawowy przy pracy z dziećmi). |
| E17 Ośrodki | Rozszerzyć o kliniki ze starej strony i filtr „dla dzieci”. |
| E18 Fotorelacje | Zmienić z działu na galerie przypisywane do projektów i aktualności. |
| E19 Migracja | Tabela z rozdziału 5 jako podstawa mapowania. |

---

## 7. Pytania do klienta

1. Czy materiały „Co warto wiedzieć” o innych nowotworach (25 stron) zostają, czy archiwizujemy?
2. Czy wprowadzamy darowizny cykliczne (PayU Recurring)?
3. Kto przygotuje treści hubów sytuacyjnych i kroków ścieżki (dziś brakuje np. „Wznowa”, „Życie po leczeniu” dla czerniaka)?
4. Czy potrzebna jest strona „Dla mediów” i „Dla firm”?
5. Czy stowarzyszenie planuje wersję angielską (partnerzy SPAGN, ECPC)?
