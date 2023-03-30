<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="SINON"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#NBR_PHOTOCOPIES" algoitem="NBR_PHOTOCOPIES EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Combien de photocopies voulez-vous faire ? #0" algoitem="AFFICHER &quot;Combien de photocopies voulez-vous faire ? &quot;"/>
        <item code="2#NBR_PHOTOCOPIES#pasliste" algoitem="LIRE NBR_PHOTOCOPIES"/>
        <item code="4#Pour #0" algoitem="AFFICHER &quot;Pour &quot;"/>
        <item code="3#NBR_PHOTOCOPIES#0#pasliste" algoitem="AFFICHER NBR_PHOTOCOPIES"/>
        <item code="4# photocopies, vous payerez...#0" algoitem="AFFICHER &quot; photocopies, vous payerez...&quot;"/>
        <item code="6#NBR_PHOTOCOPIES &lt; 10" algoitem="SI (NBR_PHOTOCOPIES &lt; 10) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="20#NBR_PHOTOCOPIES * 0.5#0" algoitem="AFFICHERCALCUL NBR_PHOTOCOPIES * 0.5"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#NBR_PHOTOCOPIES &lt; 21" algoitem="SI (NBR_PHOTOCOPIES &lt; 21) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="20#NBR_PHOTOCOPIES * 0.4#0" algoitem="AFFICHERCALCUL NBR_PHOTOCOPIES * 0.4"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="20#NBR_PHOTOCOPIES * 0.3#0" algoitem="AFFICHERCALCUL NBR_PHOTOCOPIES * 0.3"/>
                        <item code="11#finsinon" algoitem="FIN_SINON"/>
                    </item>
                </item>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
        <item code="4# €.#1" algoitem="AFFICHER &quot; €.&quot;"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
