function generatePohadka(pecivo, mazani, domu) {
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
        pohadka += `Takže jde ${makePartyString(i, 1)} a potká ${all[i][4]}. A ${all[i][1]} povídá: "${makePartyString(i, 5)}, můžu jít s vámi?", přičemž ${makePartyString(i, 1)} odpoví: "Jo, můžeš".`;
    }

    if (domu) {
        pohadka += "\n\n------------------------------";

        for (var i = 0; i < all.length - 1; i++) {
            console.log(all);
            console.log(i);
            pohadka += "\n\n";
            pohadka += `Takže jde ${makeReversePartyString(i, 1)} a ${all[i][1]} povídá: "${makeReversePartyString(i + 1, 5)}, můžu jít domů?", přičemž ${makeReversePartyString(i + 1, 1)} odpoví: "Jo, můžeš".`;
        }

        pohadka += "\n\n";
        pohadka += `Takže jde ${all[all.length - 1][1]} domů.`;
    }

    function makePartyString(input, pad) {
        var response = "";
        for (var i = 0; i < input; i++) {
            response += `${(function() {if (i != 0) {return ", ";} else {return "";}})()}${all[i][pad]}`;
        }
        return response;
    }

    function makeReversePartyString(input, pad) {
        var response = "",
            slicedAll = all.slice(input);
        console.log("Spliced all:", slicedAll);
        response = slicedAll[0][pad];
        slicedAll = slicedAll.slice(1);
        slicedAll.forEach(function(elem) {
            response += ", " + elem[pad];
        });
        return response;
    }

    return pohadka;
}