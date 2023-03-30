<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER &quot;Veuillez saisir le deuxieme nombre : &quot;" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#ValeurMaximum#A,B" algoitem="FONCTION ValeurMaximum(A,B)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION"/>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="6#A>B" algoitem="SI (A>B) ALORS">
                <item code="7#debutsi" algoitem="DEBUT_SI"/>
                <item code="205#A" algoitem="RENVOYER A"/>
                <item code="8#finsi" algoitem="FIN_SI"/>
            </item>
            <item code="205#B" algoitem="RENVOYER B"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#Nb1" algoitem="Nb1 EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#Nb2" algoitem="Nb2 EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#Veuillez saisir le premier nombre : #0" algoitem="AFFICHER &quot;Veuillez saisir le premier nombre : &quot;"/>
        <item code="2#Nb1#pasliste" algoitem="LIRE Nb1"/>
        <item code="4#Veuillez saisir le deuxieme nombre : #0" algoitem="AFFICHER &quot;Veuillez saisir le deuxieme nombre : &quot;"/>
        <item code="2#Nb2#pasliste" algoitem="LIRE Nb2"/>
        <item code="4#Le plus grand nombre est #0" algoitem="AFFICHER &quot;Le plus grand nombre est &quot;"/>
        <item code="20#ValeurMaximum(Nb1, Nb2)#0" algoitem="AFFICHERCALCUL ValeurMaximum(Nb1, Nb2)"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
