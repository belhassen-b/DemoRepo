<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER I" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2etat="inactif" F2para="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" maxBoucle="500000" epaisseurLigne="2" totalAffichages="1000" arrondiAuto="vrai" totalBoucles="5000000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="NB_ENTRE EST_DU_TYPE NOMBRE" code="1#NOMBRE#NB_ENTRE"/>
        <item algoitem="I EST_DU_TYPE NOMBRE" code="1#NOMBRE#I"/>
        <item algoitem="NB_MAX EST_DU_TYPE NOMBRE" code="1#NOMBRE#NB_MAX"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="POUR I ALLANT_DE 1 A 6" code="12#I#1#6">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER &quot;Veuillez entrer le nombre n°&quot;" code="4#Veuillez entrer le nombre n°#0"/>
            <item algoitem="AFFICHER I" code="3#I#0#pasliste"/>
            <item algoitem="AFFICHER &quot; : &quot;" code="4# : #0"/>
            <item algoitem="SI (I == 1) ALORS" code="6#I == 1">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="LIRE NB_MAX" code="2#NB_MAX#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="LIRE NB_ENTRE" code="2#NB_ENTRE#pasliste"/>
                    <item algoitem="SI (NB_ENTRE > NB_MAX) ALORS" code="6#NB_ENTRE > NB_MAX">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="NB_MAX PREND_LA_VALEUR NB_ENTRE" code="5#NB_MAX#NB_ENTRE#pasliste"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                    </item>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Votre nombre maximum était &quot;" code="4#Votre nombre maximum était #0"/>
        <item algoitem="AFFICHER NB_MAX" code="3#NB_MAX#0#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
