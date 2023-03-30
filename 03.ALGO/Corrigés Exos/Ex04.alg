<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot; n'est pas divisible par 3...&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#NBR" algoitem="NBR EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuilliez entrer un nombre entier : #0" algoitem="AFFICHER &quot;Veuilliez entrer un nombre entier : &quot;"/>
        <item code="2#NBR#pasliste" algoitem="LIRE NBR"/>
        <item code="6#NBR % 3 == 0" algoitem="SI (NBR % 3 == 0) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Le nombre #0" algoitem="AFFICHER &quot;Le nombre &quot;"/>
            <item code="3#NBR#0#pasliste" algoitem="AFFICHER NBR"/>
            <item code="4# est divisible par 3 !#1" algoitem="AFFICHER &quot; est divisible par 3 !&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#Le nombre #0" algoitem="AFFICHER &quot;Le nombre &quot;"/>
                <item code="3#NBR#0#pasliste" algoitem="AFFICHER NBR"/>
                <item code="4# n'est pas divisible par 3...#1" algoitem="AFFICHER &quot; n'est pas divisible par 3...&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
