<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="C PREND_LA_VALEUR B - A"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#A" algoitem="A EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#B" algoitem="B EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#C" algoitem="C EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#A#3#pasliste" algoitem="A PREND_LA_VALEUR 3"/>
        <item code="5#B#7#pasliste" algoitem="B PREND_LA_VALEUR 7"/>
        <item code="5#A#B#pasliste" algoitem="A PREND_LA_VALEUR B"/>
        <item code="5#B#A + 5#pasliste" algoitem="B PREND_LA_VALEUR A + 5"/>
        <item code="5#C#A + B#pasliste" algoitem="C PREND_LA_VALEUR A + B"/>
        <item code="5#C#B - A#pasliste" algoitem="C PREND_LA_VALEUR B - A"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
