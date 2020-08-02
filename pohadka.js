function generatePohadka(pecivo, mazani) {
    var all = [],
        pohadka = "";

    pecivo.forEach(function(currentPecivo) {
        mazani.forEach(function(currentMazani) {
            all.push({
                1: currentPecivo[1] + currentMazani,
                4: currentPecivo[4] + currentMazani,
                5: currentPecivo[5] + currentMazani
            });
        });
    });

    if (all.length < 2) {
        throw new Error("Je potřeba zadat alespoň 2 typy pečiva nebo mazání!");
    }

    pohadka += `Jde ${all[0][1]} a potká ${all[1][4]}. A ${all[1][1]} povídá: "${all[0][5]}, můžu jít s tebou?", přičemž ${all[0][1]} odpoví: "Jo, můžeš".`;

    for (var i = 2; i < all.length; i++) {
        pohadka += "\n\n";
        pohadka += `Takže jde ${makePartyString(i + 1, 1)} a potká ${all[i][4]}. A ${all[i][1]} povídá: "${makePartyString(i + 1, 5)}, můžu jít s vámi?", přičemž ${makePartyString(i + 1, 1)} odpoví: "Jo, můžeš".`;
    }

    function makePartyString(input, pad) {
        var response = "";
        for (var i = 0; i < input; i++) {
            response += `${(function() {if (i != 0) {return ", ";} else {return "";}})()}${all[i][pad]}`;
        }
        return response;
    }

    return pohadka;
}
