<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER DBL"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#NBR" algoitem="NBR EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#DBL" algoitem="DBL EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuilliez entrer la valeur du nombre : #0" algoitem="AFFICHER &quot;Veuilliez entrer la valeur du nombre : &quot;"/>
        <item code="2#NBR#pasliste" algoitem="LIRE NBR"/>
        <item code="5#DBL#NBR * 2#pasliste" algoitem="DBL PREND_LA_VALEUR NBR * 2"/>
        <item code="4#Le double de #0" algoitem="AFFICHER &quot;Le double de &quot;"/>
        <item code="3#NBR#0#pasliste" algoitem="AFFICHER NBR"/>
        <item code="4# est #0" algoitem="AFFICHER &quot; est &quot;"/>
        <item code="3#DBL#1#pasliste" algoitem="AFFICHER DBL"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
