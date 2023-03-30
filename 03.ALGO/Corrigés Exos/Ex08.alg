<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="LIRE BC"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2para="" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai" nbDecimales="8" totalBoucles="5000000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#AB" algoitem="AB EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#BC" algoitem="BC EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#AC" algoitem="AC EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuilliez donner la longueur de AB : #0" algoitem="AFFICHER &quot;Veuilliez donner la longueur de AB : &quot;"/>
        <item code="2#AB#pasliste" algoitem="LIRE AB"/>
        <item code="4#Veuilliez donner la longueur de BC : #0" algoitem="AFFICHER &quot;Veuilliez donner la longueur de BC : &quot;"/>
        <item code="2#BC#pasliste" algoitem="LIRE BC"/>
        <item code="4#Veuilliez donner la longueur de AC : #0" algoitem="AFFICHER &quot;Veuilliez donner la longueur de AC : &quot;"/>
        <item code="2#AC#pasliste" algoitem="LIRE AC"/>
        <item code="6#AB == BC" algoitem="SI (AB == BC) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="6#BC == AC" algoitem="SI (BC == AC) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#Le triangle est equilatéral#1" algoitem="AFFICHER &quot;Le triangle est equilatéral&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="4#Le triangle est isocèle en B#1" algoitem="AFFICHER &quot;Le triangle est isocèle en B&quot;"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#BC == AC" algoitem="SI (BC == AC) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#Le triangle est isocèle en C#1" algoitem="AFFICHER &quot;Le triangle est isocèle en C&quot;"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="6#AB == AC" algoitem="SI (AB == AC) ALORS">
                            <item code="7#debutsi" algoitem="DEBUT_SI"/>
                            <item code="4#Le triangle est isocèle en A #1" algoitem="AFFICHER &quot;Le triangle est isocèle en A &quot;"/>
                            <item code="8#finsi" algoitem="FIN_SI"/>
                            <item code="9#sinon" algoitem="SINON">
                                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                <item code="4#Le triangle est quelconque#1" algoitem="AFFICHER &quot;Le triangle est quelconque&quot;"/>
                                <item code="11#finsinon" algoitem="FIN_SINON"/>
                            </item>
                        </item>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
