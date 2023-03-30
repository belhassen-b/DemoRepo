<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_POUR" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2defaut="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" nbDecimales="8" maxBoucle="500000" totalAffichages="1000" epaisseurPoint="2" totalBoucles="5000000" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="I EST_DU_TYPE NOMBRE" code="1#NOMBRE#I"/>
        <item algoitem="N EST_DU_TYPE NOMBRE" code="1#NOMBRE#N"/>
        <item algoitem="AFFICHAGE EST_DU_TYPE CHAINE" code="1#CHAINE#AFFICHAGE"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Veuillez entrer N : &quot;" code="4#Veuillez entrer N : #0"/>
        <item algoitem="LIRE N" code="2#N#pasliste"/>
        <item algoitem="POUR I ALLANT_DE 1 A N - 1" code="12#I#1#N - 1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHAGE PREND_LA_VALEUR AFFICHAGE + I + &quot; &quot; " code="5#AFFICHAGE#AFFICHAGE + I + &quot; &quot; #pasliste"/>
            <item algoitem="AFFICHER AFFICHAGE" code="3#AFFICHAGE#1#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHAGE PREND_LA_VALEUR AFFICHAGE + I" code="5#AFFICHAGE#AFFICHAGE + I#pasliste"/>
        <item algoitem="AFFICHER AFFICHAGE" code="3#AFFICHAGE#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
