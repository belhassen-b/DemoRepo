<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_TANT_QUE" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurPoint="2" epaisseurLigne="2" totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NB_REPETITIONS" algoitem="NB_REPETITIONS EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#NB_REPETITIONS#10#pasliste" algoitem="NB_REPETITIONS PREND_LA_VALEUR 10"/>
        <item code="12#I#0#NB_REPETITIONS - 1" algoitem="POUR I ALLANT_DE 0 A NB_REPETITIONS - 1">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="6#I % 2 == 0" algoitem="SI (I % 2 == 0) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="3#I#1#pasliste" algoitem="AFFICHER I"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="3#I#1#pasliste" algoitem="AFFICHER I"/>
        <item code="5#I#0#pasliste" algoitem="I PREND_LA_VALEUR 0"/>
        <item code="15#I &lt;= 9" algoitem="TANT_QUE (I &lt;= 9) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="6#I % 2 == 0" algoitem="SI (I % 2 == 0) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="3#I#1#pasliste" algoitem="AFFICHER I"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="5#I#I + 1#pasliste" algoitem="I PREND_LA_VALEUR I + 1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
