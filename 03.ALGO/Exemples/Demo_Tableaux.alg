<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER T[I]" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#T" algoitem="T EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#T#11#0" algoitem="T[0] PREND_LA_VALEUR 11"/>
        <item code="5#T#25#1" algoitem="T[1] PREND_LA_VALEUR 25"/>
        <item code="3#T#1#0" algoitem="AFFICHER T[0]"/>
        <item code="3#T#1#1" algoitem="AFFICHER T[1]"/>
        <item code="12#I#0#9" algoitem="POUR I ALLANT_DE 0 A 9">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#T#floor(random() * 10) +1#I" algoitem="T[I] PREND_LA_VALEUR floor(random() * 10) +1"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#Valeurs : [#0" algoitem="AFFICHER &quot;Valeurs : [&quot;"/>
        <item code="12#I#0#8" algoitem="POUR I ALLANT_DE 0 A 8">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="3#T#0#I" algoitem="AFFICHER T[I]"/>
            <item code="4#, #0" algoitem="AFFICHER &quot;, &quot;"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="3#T#0#9" algoitem="AFFICHER T[9]"/>
        <item code="4#]#1" algoitem="AFFICHER &quot;]&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
