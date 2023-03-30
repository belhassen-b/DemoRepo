<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="NB_NOTES PREND_LA_VALEUR 15" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#T" algoitem="T EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NB_NOTES" algoitem="NB_NOTES EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#NB_NOTES#15#pasliste" algoitem="NB_NOTES PREND_LA_VALEUR 15"/>
        <item code="12#I#0#NB_NOTES - 1" algoitem="POUR I ALLANT_DE 0 A NB_NOTES - 1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="4#Veuilez entrer la note n°#0" algoitem="AFFICHER &quot;Veuilez entrer la note n°&quot;"/>
            <item code="20#I + 1#0" algoitem="AFFICHERCALCUL I + 1"/>
            <item code="4# : #0" algoitem="AFFICHER &quot; : &quot;"/>
            <item code="2#T#I" algoitem="LIRE T[I]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#Notes : [#0" algoitem="AFFICHER &quot;Notes : [&quot;"/>
        <item code="12#I#0#NB_NOTES - 2" algoitem="POUR I ALLANT_DE 0 A NB_NOTES - 2">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="3#T#0#I" algoitem="AFFICHER T[I]"/>
            <item code="4#, #0" algoitem="AFFICHER &quot;, &quot;"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="3#T#0#NB_NOTES - 1" algoitem="AFFICHER T[NB_NOTES - 1]"/>
        <item code="4#]#1" algoitem="AFFICHER &quot;]&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
