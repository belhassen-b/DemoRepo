<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="DEBUT_SI" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param arrondiAuto="vrai" epaisseurPoint="2" epaisseurLigne="2" totalAffichages="1000" maxBoucle="500000" totalBoucles="5000000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#TAILLE" algoitem="TAILLE EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#POIDS" algoitem="POIDS EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuilliez donner votre taille (en cm) : #0" algoitem="AFFICHER &quot;Veuilliez donner votre taille (en cm) : &quot;"/>
        <item code="2#TAILLE#pasliste" algoitem="LIRE TAILLE"/>
        <item code="4#Veuilliez donner votre poids (en kg) : #0" algoitem="AFFICHER &quot;Veuilliez donner votre poids (en kg) : &quot;"/>
        <item code="2#POIDS#pasliste" algoitem="LIRE POIDS"/>
        <item code="6#(TAILLE >= 145 ET TAILLE &lt; 172 ET POIDS >= 43 ET POIDS &lt; 48) OU (TAILLE >= 145 ET TAILLE &lt; 169 ET POIDS >= 48 ET POIDS &lt; 54) OU (TAILLE >= 145 ET TAILLE &lt; 166 ET POIDS >= 54 ET POIDS &lt; 60) OU (TAILLE >= 145 ET TAILLE &lt; 163 ET POIDS >= 60 ET POIDS &lt; 66)" algoitem="SI ((TAILLE >= 145 ET TAILLE &lt; 172 ET POIDS >= 43 ET POIDS &lt; 48) OU (TAILLE >= 145 ET TAILLE &lt; 169 ET POIDS >= 48 ET POIDS &lt; 54) OU (TAILLE >= 145 ET TAILLE &lt; 166 ET POIDS >= 54 ET POIDS &lt; 60) OU (TAILLE >= 145 ET TAILLE &lt; 163 ET POIDS >= 60 ET POIDS &lt; 66)) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#Vous êtes de la taille 1#1" algoitem="AFFICHER &quot;Vous êtes de la taille 1&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
            <item code="9#sinon" algoitem="SINON">
                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                <item code="6#(TAILLE >= 169 ET TAILLE &lt; 183 ET POIDS >= 48 ET POIDS &lt; 54) OU (TAILLE >= 166 ET TAILLE &lt; 178 ET POIDS >= 54 ET POIDS &lt; 60) OU (TAILLE >= 163 ET TAILLE &lt; 175 ET POIDS >= 60 ET POIDS &lt; 66) OU (TAILLE >= 160 ET TAILLE &lt; 172 ET POIDS >= 66 ET POIDS &lt; 72)" algoitem="SI ((TAILLE >= 169 ET TAILLE &lt; 183 ET POIDS >= 48 ET POIDS &lt; 54) OU (TAILLE >= 166 ET TAILLE &lt; 178 ET POIDS >= 54 ET POIDS &lt; 60) OU (TAILLE >= 163 ET TAILLE &lt; 175 ET POIDS >= 60 ET POIDS &lt; 66) OU (TAILLE >= 160 ET TAILLE &lt; 172 ET POIDS >= 66 ET POIDS &lt; 72)) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="4#Vous êtes de la taille 2#1" algoitem="AFFICHER &quot;Vous êtes de la taille 2&quot;"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                    <item code="9#sinon" algoitem="SINON">
                        <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                        <item code="6#(TAILLE >= 178 ET TAILLE &lt; 187 ET POIDS >= 54 ET POIDS &lt; 60) OU (TAILLE >= 175 ET TAILLE &lt; 187 ET POIDS >= 60 ET POIDS &lt; 66) OU (TAILLE >= 172 ET TAILLE &lt; 187 ET POIDS >= 66 ET POIDS &lt; 72) OU (TAILLE >= 163 ET TAILLE &lt; 187 ET POIDS >= 72 ET POIDS &lt; 78)" algoitem="SI ((TAILLE >= 178 ET TAILLE &lt; 187 ET POIDS >= 54 ET POIDS &lt; 60) OU (TAILLE >= 175 ET TAILLE &lt; 187 ET POIDS >= 60 ET POIDS &lt; 66) OU (TAILLE >= 172 ET TAILLE &lt; 187 ET POIDS >= 66 ET POIDS &lt; 72) OU (TAILLE >= 163 ET TAILLE &lt; 187 ET POIDS >= 72 ET POIDS &lt; 78)) ALORS">
                            <item code="7#debutsi" algoitem="DEBUT_SI"/>
                            <item code="4#Vous êtes de la taille 3#1" algoitem="AFFICHER &quot;Vous êtes de la taille 3&quot;"/>
                            <item code="8#finsi" algoitem="FIN_SI"/>
                            <item code="9#sinon" algoitem="SINON">
                                <item code="10#debutsinon" algoitem="DEBUT_SINON"/>
                                <item code="4#Nous n'avons pas votre taille...#1" algoitem="AFFICHER &quot;Nous n'avons pas votre taille...&quot;"/>
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
