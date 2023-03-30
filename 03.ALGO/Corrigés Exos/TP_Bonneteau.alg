<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="DEBUT_SINON"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurLigne="2" totalAffichages="1000" totalBoucles="5000000" nbDecimales="8" maxBoucle="500000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#PrintCups# " algoitem="FONCTION PrintCups( )">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#NOMBRE#iC" algoitem="iC EST_DU_TYPE NOMBRE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="4#Cups : [#0" algoitem="AFFICHER &quot;Cups : [&quot;"/>
            <item code="12#iC#0#CupsLength - 2" algoitem="POUR iC ALLANT_DE 0 A CupsLength - 2">
                <item code="13#debutpour" algoitem="DEBUT_POUR"/>
                <item code="6#Cups[iC] == 1" algoitem="SI (Cups[iC] == 1) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#O#0" algoitem="AFFICHER &quot;O&quot;"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="4#_#0" algoitem="AFFICHER &quot;_&quot;"/>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="4#, #0" algoitem="AFFICHER &quot;, &quot;"/>
                <item code="14#finpour" algoitem="FIN_POUR"/>
            </item>
            <item code="6#Cups[CupsLength - 1] == 1" algoitem="SI (Cups[CupsLength - 1] == 1) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#O]#1" algoitem="AFFICHER &quot;O]&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="4#_]#1" algoitem="AFFICHER &quot;_]&quot;"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
        <item code="201#InitCups#Difficulty" algoitem="FONCTION InitCups(Difficulty)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION"/>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="5#CupsLength#1+ 2 * Difficulty#pasliste" algoitem="CupsLength PREND_LA_VALEUR 1+ 2 * Difficulty"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
        <item code="201#Randomizer# TabLength" algoitem="FONCTION Randomizer( TabLength)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#NOMBRE#RandNumbA" algoitem="RandNumbA EST_DU_TYPE NOMBRE"/>
                <item code="1#NOMBRE#iA" algoitem="iA EST_DU_TYPE NOMBRE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="5#RandNumbA#floor(random() * TabLength)#pasliste" algoitem="RandNumbA PREND_LA_VALEUR floor(random() * TabLength)"/>
            <item code="12#iA#0#TabLength - 1" algoitem="POUR iA ALLANT_DE 0 A TabLength - 1">
                <item code="13#debutpour" algoitem="DEBUT_POUR"/>
                <item code="6#iA == RandNumbA" algoitem="SI (iA == RandNumbA) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#Cups#1#iA" algoitem="Cups[iA] PREND_LA_VALEUR 1"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="5#Cups#0#iA" algoitem="Cups[iA] PREND_LA_VALEUR 0"/>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="14#finpour" algoitem="FIN_POUR"/>
            </item>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#Cups" algoitem="Cups EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#CupsLength" algoitem="CupsLength EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Choice" algoitem="Choice EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NbTrials" algoitem="NbTrials EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#NbTrials#1#pasliste" algoitem="NbTrials PREND_LA_VALEUR 1"/>
        <item code="4#Choisir difficulté : #1" algoitem="AFFICHER &quot;Choisir difficulté : &quot;"/>
        <item code="4#1. Facile (3 Gobelets)#1" algoitem="AFFICHER &quot;1. Facile (3 Gobelets)&quot;"/>
        <item code="4#2. Normal (5 Gobelets)#1" algoitem="AFFICHER &quot;2. Normal (5 Gobelets)&quot;"/>
        <item code="4#3. Difficile (7 Gobelets)#0" algoitem="AFFICHER &quot;3. Difficile (7 Gobelets)&quot;"/>
        <item code="4#Votre choix : #0" algoitem="AFFICHER &quot;Votre choix : &quot;"/>
        <item code="2#Choice#pasliste" algoitem="LIRE Choice"/>
        <item code="4#Création des gobelets...#1" algoitem="AFFICHER &quot;Création des gobelets...&quot;"/>
        <item code="206#InitCups(Choice)" algoitem="APPELER_FONCTION InitCups(Choice)"/>
        <item code="4#Jeu initialisé ! #1" algoitem="AFFICHER &quot;Jeu initialisé ! &quot;"/>
        <item code="5#Choice#-1#pasliste" algoitem="Choice PREND_LA_VALEUR -1"/>
        <item code="15#Cups[Choice] != 1" algoitem="TANT_QUE (Cups[Choice] != 1) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="206#Randomizer(CupsLength)" algoitem="APPELER_FONCTION Randomizer(CupsLength)"/>
            <item code="4#Choisissez un gobelet : #0" algoitem="AFFICHER &quot;Choisissez un gobelet : &quot;"/>
            <item code="2#Choice#pasliste" algoitem="LIRE Choice"/>
            <item code="5#Choice#Choice - 1#pasliste" algoitem="Choice PREND_LA_VALEUR Choice - 1"/>
            <item code="6#Choice &lt; 0 OU Choice >= CupsLength" algoitem="SI (Choice &lt; 0 OU Choice >= CupsLength) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#Votre choix n'est pas valide !#1" algoitem="AFFICHER &quot;Votre choix n'est pas valide !&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="6#Cups[Choice] != 1" algoitem="SI (Cups[Choice] != 1) ALORS">
                        <item code="7#debutsi" algoitem="DEBUT_SI"/>
                        <item code="4#Ce n'était pas le bon gobelet...#1" algoitem="AFFICHER &quot;Ce n'était pas le bon gobelet...&quot;"/>
                        <item code="206#PrintCups()" algoitem="APPELER_FONCTION PrintCups()"/>
                        <item code="5#NbTrials#NbTrials + 1#pasliste" algoitem="NbTrials PREND_LA_VALEUR NbTrials + 1"/>
                        <item code="8#finsi" algoitem="FIN_SI"/>
                    </item>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#Bravo, vous avez gagné en #0" algoitem="AFFICHER &quot;Bravo, vous avez gagné en &quot;"/>
        <item code="3#NbTrials#0#pasliste" algoitem="AFFICHER NbTrials"/>
        <item code="4# coups !#1" algoitem="AFFICHER &quot; coups !&quot;"/>
        <item code="4# #1" algoitem="AFFICHER &quot; &quot;"/>
        <item code="206#PrintCups()" algoitem="APPELER_FONCTION PrintCups()"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
