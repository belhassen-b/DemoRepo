<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Mot de passe invalide !&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" epaisseurLigne="2" arrondiAuto="vrai" totalBoucles="5000000" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#EMAIL" algoitem="EMAIL EST_DU_TYPE CHAINE"/>
        <item code="1#CHAINE#MDP" algoitem="MDP EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuilliez entrer votre email : #0" algoitem="AFFICHER &quot;Veuilliez entrer votre email : &quot;"/>
        <item code="2#EMAIL#pasliste" algoitem="LIRE EMAIL"/>
        <item code="6#EMAIL == &quot;test@example.com&quot;" algoitem="SI (EMAIL == &quot;test@example.com&quot;) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Veuilliez entrer votre mot de passe : #0" algoitem="AFFICHER &quot;Veuilliez entrer votre mot de passe : &quot;"/>
            <item code="2#MDP#pasliste" algoitem="LIRE MDP"/>
            <item code="6#MDP == &quot;password&quot;" algoitem="SI (MDP == &quot;password&quot;) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="4#Bienvenue sur le site !#1" algoitem="AFFICHER &quot;Bienvenue sur le site !&quot;"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
                <item code="9#sinon" algoitem="SINON">
                    <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                    <item code="4#Mot de passe invalide !#1" algoitem="AFFICHER &quot;Mot de passe invalide !&quot;"/>
                    <item code="11#finsinon" algoitem="FIN_SINON"/>
                </item>
            </item>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="4#Email inconnu !#0" algoitem="AFFICHER &quot;Email inconnu !&quot;"/>
                <item code="11#finsinon" algoitem="FIN_SINON"/>
            </item>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
