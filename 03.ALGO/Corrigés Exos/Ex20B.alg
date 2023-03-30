<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Buzz&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" epaisseurPoint="2" epaisseurLigne="2" nbDecimales="8" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#printFizzBuzz#LongueurTab" algoitem="FONCTION printFizzBuzz(LongueurTab)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#NOMBRE#iB" algoitem="iB EST_DU_TYPE NOMBRE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="4#Tableau : [#0" algoitem="AFFICHER &quot;Tableau : [&quot;"/>
            <item code="12#iB#0#LongueurTab-2" algoitem="POUR iB ALLANT_DE 0 A LongueurTab-2">
                <item code="13#debutpour" algoitem="DEBUT_POUR"/>
                <item code="6#LISTE_NB[iB] % 15 == 0" algoitem="SI (LISTE_NB[iB] % 15 == 0) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#FizzBuzz#0" algoitem="AFFICHER &quot;FizzBuzz&quot;"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="6#LISTE_NB[iB] % 5 == 0" algoitem="SI (LISTE_NB[iB] % 5 == 0) ALORS">
                            <item code="7#debutsi" algoitem="DEBUT_SI"/>
                            <item code="4#Buzz#0" algoitem="AFFICHER &quot;Buzz&quot;"/>
                            <item code="8#finsi" algoitem="FIN_SI"/>
                            <item code="9#sinon" algoitem="SINON">
                                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                <item code="6#LISTE_NB[iB] % 3 == 0" algoitem="SI (LISTE_NB[iB] % 3 == 0) ALORS">
                                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                                    <item code="4#Fizz#0" algoitem="AFFICHER &quot;Fizz&quot;"/>
                                    <item code="8#finsi" algoitem="FIN_SI"/>
                                    <item code="9#sinon" algoitem="SINON">
                                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                        <item code="20#LISTE_NB[iB]#0" algoitem="AFFICHERCALCUL LISTE_NB[iB]"/>
                                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                                    </item>
                                </item>
                                <item code="11#finsinon" algoitem="FIN_SINON"/>
                            </item>
                        </item>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="4#, #0" algoitem="AFFICHER &quot;, &quot;"/>
                <item code="14#finpour" algoitem="FIN_POUR"/>
            </item>
            <item code="6#LISTE_NB[LongueurTab - 1] % 15 == 0" algoitem="SI (LISTE_NB[LongueurTab - 1] % 15 == 0) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#FizzBuzz#0" algoitem="AFFICHER &quot;FizzBuzz&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="6#LISTE_NB[LongueurTab - 1] % 5 == 0" algoitem="SI (LISTE_NB[LongueurTab - 1] % 5 == 0) ALORS">
                        <item code="7#debutsi" algoitem="DEBUT_SI"/>
                        <item code="4#Buzz#0" algoitem="AFFICHER &quot;Buzz&quot;"/>
                        <item code="8#finsi" algoitem="FIN_SI"/>
                        <item code="9#sinon" algoitem="SINON">
                            <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                            <item code="6#LISTE_NB[LongueurTab - 1] % 3 == 0" algoitem="SI (LISTE_NB[LongueurTab - 1] % 3 == 0) ALORS">
                                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                                <item code="4#Fizz#0" algoitem="AFFICHER &quot;Fizz&quot;"/>
                                <item code="8#finsi" algoitem="FIN_SI"/>
                                <item code="9#sinon" algoitem="SINON">
                                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                    <item code="20#LISTE_NB[LongueurTab - 1]#0" algoitem="AFFICHERCALCUL LISTE_NB[LongueurTab - 1]"/>
                                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                                </item>
                            </item>
                            <item code="11#finsinon" algoitem="FIN_SINON"/>
                        </item>
                    </item>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="4#]#1" algoitem="AFFICHER &quot;]&quot;"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
        <item code="201#initTab#LongueurTab" algoitem="FONCTION initTab(LongueurTab)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#NOMBRE#iA" algoitem="iA EST_DU_TYPE NOMBRE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="12#iA#0#LongueurTab - 1" algoitem="POUR iA ALLANT_DE 0 A LongueurTab - 1">
                <item code="13#debutpour" algoitem="DEBUT_POUR"/>
                <item code="5#LISTE_NB#iA + 1#iA" algoitem="LISTE_NB[iA] PREND_LA_VALEUR iA + 1"/>
                <item code="14#finpour" algoitem="FIN_POUR"/>
            </item>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#LISTE_NB" algoitem="LISTE_NB EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#NB_NOMBRES" algoitem="NB_NOMBRES EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuillez entrer un nombre : #0" algoitem="AFFICHER &quot;Veuillez entrer un nombre : &quot;"/>
        <item code="2#NB_NOMBRES#pasliste" algoitem="LIRE NB_NOMBRES"/>
        <item code="206#initTab(NB_NOMBRES)" algoitem="APPELER_FONCTION initTab(NB_NOMBRES)"/>
        <item code="206#printFizzBuzz(NB_NOMBRES)" algoitem="APPELER_FONCTION printFizzBuzz(NB_NOMBRES)"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
