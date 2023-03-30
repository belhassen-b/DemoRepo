<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot; années pour doubler votre capital.&quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurPoint="2" epaisseurLigne="2" totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Tx" algoitem="Tx EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#NbA" algoitem="NbA EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuilliez entrer le taux de votre investissement (en %) : #0" algoitem="AFFICHER &quot;Veuilliez entrer le taux de votre investissement (en %) : &quot;"/>
        <item code="2#Tx#pasliste" algoitem="LIRE Tx"/>
        <item code="15#pow(1 + Tx / 100, NbA) &lt; 2" algoitem="TANT_QUE (pow(1 + Tx / 100, NbA) &lt; 2) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="5#NbA#NbA + 1#pasliste" algoitem="NbA PREND_LA_VALEUR NbA + 1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#Il vous faudra #0" algoitem="AFFICHER &quot;Il vous faudra &quot;"/>
        <item code="3#NbA#0#pasliste" algoitem="AFFICHER NbA"/>
        <item code="4# années pour doubler votre capital.#1" algoitem="AFFICHER &quot; années pour doubler votre capital.&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
