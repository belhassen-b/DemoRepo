<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="MSG PREND_LA_VALEUR MSG +  I + &quot; = &quot; + (SOM + I)" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" nbDecimales="8" totalAffichages="1000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#NB_ENTRE" algoitem="NB_ENTRE EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
        <item code="1#CHAINE#MSG" algoitem="MSG EST_DU_TYPE CHAINE"/>
        <item code="1#NOMBRE#SOM" algoitem="SOM EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuilez donner un nombre positif : #0" algoitem="AFFICHER &quot;Veuilez donner un nombre positif : &quot;"/>
        <item code="2#NB_ENTRE#pasliste" algoitem="LIRE NB_ENTRE"/>
        <item code="12#I#1#NB_ENTRE - 1" algoitem="POUR I ALLANT_DE 1 A NB_ENTRE - 1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="5#MSG#MSG + I + &quot; + &quot;#pasliste" algoitem="MSG PREND_LA_VALEUR MSG + I + &quot; + &quot;"/>
            <item code="5#SOM#SOM + I#pasliste" algoitem="SOM PREND_LA_VALEUR SOM + I"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="5#MSG#MSG +  I + &quot; = &quot; + (SOM + I)#pasliste" algoitem="MSG PREND_LA_VALEUR MSG +  I + &quot; = &quot; + (SOM + I)"/>
        <item code="3#MSG#1#pasliste" algoitem="AFFICHER MSG"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
