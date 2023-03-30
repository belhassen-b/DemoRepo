<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="NbA PREND_LA_VALEUR NbA + 1"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2lignes="" F2etat="inactif" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="NbA EST_DU_TYPE NOMBRE" code="1#NOMBRE#NbA"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="TANT_QUE (96809 * pow(1 + 0.0089, NbA) &lt; 120000) FAIRE" code="15#96809 * pow(1 + 0.0089, NbA) &lt; 120000">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="NbA PREND_LA_VALEUR NbA + 1" code="5#NbA#NbA + 1#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Au bout de &quot;" code="4#Au bout de #0"/>
        <item algoitem="AFFICHER NbA" code="3#NbA#0#pasliste"/>
        <item algoitem="AFFICHER &quot; ans à partir de 2015, Tourcoing aura dépassé les 120000 habitants. Nous serons en &quot;" code="4# ans à partir de 2015, Tourcoing aura dépassé les 120000 habitants. Nous serons en #0"/>
        <item algoitem="AFFICHERCALCUL NbA + 2015" code="20#NbA + 2015#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
