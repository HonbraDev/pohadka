# pohadka

Generátor pohádky o pečivu s mazáním

## Instalace přes CDN

Importujte script v headu

`<script src="https://cdn.jsdelivr.net/gh/HonbraOfficial/pohadka/pohadka.min.js"></script>`

## Použití

Funkce `generatePohadka()` vrátí generovanou pohádku. `generatePohadka()` očekává 2 arraye:

### Pečivo
    [
      {
        1: "Houska", // 1. pád (kdo, co)
        4: "Housku", // 4. pád (koho, co)
        5: "Housko" // 5. pád (oslovujeme, voláme)
      },
      {
        1: "Bageta",
        4: "Bagetu",
        5: "Bageto"
      }
    ]

### Mazání
    [
      "",
      " s máslem", // nezapoměňte na mezeru na začátku stringu!
      " s máslem se salámem"
    ]
    
### Příklad

    generatePohadka(
      [
        {
          1: "Houska",
          4: "Housku",
          5: "Housko"
        },
        {
          1: "Bageta",
          4: "Bagetu",
          5: "Bageto"
        }
      ], 
      [
        "",
        " s máslem",
        " s máslem se salámem"
      ]
    );

## Generovaná pohádka (příklad)

    Jde Houska a potká Housku s máslem. A Houska s máslem povídá: "Housko, můžu jít s tebou?", přičemž Houska odpoví: "Jo, můžeš".

    Takže jde Houska, Houska s máslem, Houska s máslem se salámem a potká Housku s máslem se salámem. A Houska s máslem se salámem povídá: "Housko, Housko s máslem, Housko s máslem se salámem, můžu jít s vámi?", přičemž Houska, Houska s máslem, Houska s máslem se salámem odpoví: "Jo, můžeš".

    Takže jde Houska, Houska s máslem, Houska s máslem se salámem, Bageta a potká Bagetu. A Bageta povídá: "Housko, Housko s máslem, Housko s máslem se salámem, Bageto, můžu jít s vámi?", přičemž Houska, Houska s máslem, Houska s máslem se salámem, Bageta odpoví: "Jo, můžeš".

    Takže jde Houska, Houska s máslem, Houska s máslem se salámem, Bageta, Bageta s máslem a potká Bagetu s máslem. A Bageta s máslem povídá: "Housko, Housko s máslem, Housko s máslem se salámem, Bageto, Bageto s máslem, můžu jít s vámi?", přičemž Houska, Houska s máslem, Houska s máslem se salámem, Bageta, Bageta s máslem odpoví: "Jo, můžeš".

    Takže jde Houska, Houska s máslem, Houska s máslem se salámem, Bageta, Bageta s máslem, Bageta s máslem se salámem a potká Bagetu s máslem se salámem. A Bageta s máslem se salámem povídá: "Housko, Housko s máslem, Housko s máslem se salámem, Bageto, Bageto s máslem, Bageto s máslem se salámem, můžu jít s vámi?", přičemž Houska, Houska s máslem, Houska s máslem se salámem, Bageta, Bageta s máslem, Bageta s máslem se salámem odpoví: "Jo, můžeš".
