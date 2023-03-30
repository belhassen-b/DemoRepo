<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHERCALCUL facto(NB_ENTRE)" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#facto#nombre" algoitem="FONCTION facto(nombre)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
                <item code="1#NOMBRE#RESULTAT" algoitem="RESULTAT EST_DU_TYPE NOMBRE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="5#RESULTAT#1#pasliste" algoitem="RESULTAT PREND_LA_VALEUR 1"/>
            <item code="12#I#1#nombre" algoitem="POUR I ALLANT_DE 1 A nombre">
                <item code="13#debutpour" algoitem="DEBUT_POUR"/>
                <item code="5#RESULTAT#I * RESULTAT#pasliste" algoitem="RESULTAT PREND_LA_VALEUR I * RESULTAT"/>
                <item code="14#finpour" algoitem="FIN_POUR"/>
            </item>
            <item code="205#RESULTAT" algoitem="RENVOYER RESULTAT"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#NB_ENTRE" algoitem="NB_ENTRE EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuillez entrer un nombre : #0" algoitem="AFFICHER &quot;Veuillez entrer un nombre : &quot;"/>
        <item code="2#NB_ENTRE#pasliste" algoitem="LIRE NB_ENTRE"/>
        <item code="3#NB_ENTRE#0#pasliste" algoitem="AFFICHER NB_ENTRE"/>
        <item code="4#! = #0" algoitem="AFFICHER &quot;! = &quot;"/>
        <item code="20#facto(NB_ENTRE)#1" algoitem="AFFICHERCALCUL facto(NB_ENTRE)"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
