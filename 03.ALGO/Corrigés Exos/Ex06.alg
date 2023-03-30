<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;€&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2" nbDecimales="8" arrondiAuto="vrai" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Ci" algoitem="Ci EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Tx" algoitem="Tx EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NbA" algoitem="NbA EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Cf" algoitem="Cf EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuilliez donner le capital initial : #0" algoitem="AFFICHER &quot;Veuilliez donner le capital initial : &quot;"/>
        <item code="2#Ci#pasliste" algoitem="LIRE Ci"/>
        <item code="4#Veuilliez donner le taux (en pourcents) : #0" algoitem="AFFICHER &quot;Veuilliez donner le taux (en pourcents) : &quot;"/>
        <item code="2#Tx#pasliste" algoitem="LIRE Tx"/>
        <item code="4#Veuilliez donner le nombre d'années : #0" algoitem="AFFICHER &quot;Veuilliez donner le nombre d'années : &quot;"/>
        <item code="2#NbA#pasliste" algoitem="LIRE NbA"/>
        <item code="5#Cf#round(Ci *  pow(1+Tx/100,NbA))#pasliste" algoitem="Cf PREND_LA_VALEUR round(Ci *  pow(1+Tx/100,NbA))"/>
        <item code="4#Au bout de #0" algoitem="AFFICHER &quot;Au bout de &quot;"/>
        <item code="3#NbA#0#pasliste" algoitem="AFFICHER NbA"/>
        <item code="4# années, avec un capital initial de #0" algoitem="AFFICHER &quot; années, avec un capital initial de &quot;"/>
        <item code="3#Ci#0#pasliste" algoitem="AFFICHER Ci"/>
        <item code="4#€ et un taux de #0" algoitem="AFFICHER &quot;€ et un taux de &quot;"/>
        <item code="3#Tx#0#pasliste" algoitem="AFFICHER Tx"/>
        <item code="4#% on aura #0" algoitem="AFFICHER &quot;% on aura &quot;"/>
        <item code="3#Cf#0#pasliste" algoitem="AFFICHER Cf"/>
        <item code="4#€ soit un gain de #0" algoitem="AFFICHER &quot;€ soit un gain de &quot;"/>
        <item code="20#Cf - Ci#0" algoitem="AFFICHERCALCUL Cf - Ci"/>
        <item code="4#€#1" algoitem="AFFICHER &quot;€&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
