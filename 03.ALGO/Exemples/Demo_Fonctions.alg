<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHERCALCUL a+b+c+d" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2defaut="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES">
        <item code="201#additionBadPracticeB#a,b,c,d" algoitem="FONCTION additionBadPracticeB(a,b,c,d)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION"/>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="20#a+b+c+d#1" algoitem="AFFICHERCALCUL a+b+c+d"/>
            <item code="205#a+b+c+d" algoitem="RENVOYER a+b+c+d"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
        <item code="201#additionBadPractice#a,b,c,d" algoitem="FONCTION additionBadPractice(a,b,c,d)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION"/>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="20#a+b+c+d#1" algoitem="AFFICHERCALCUL a+b+c+d"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
        <item code="201#addition#a, b, c, d" algoitem="FONCTION addition(a, b, c, d)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION"/>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="205#a+b+c+d" algoitem="RENVOYER a+b+c+d"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
        <item code="201#direBonjour#prenom, nom" algoitem="FONCTION direBonjour(prenom, nom)">
            <item code="202#declarationsvariablesfonction" algoitem="VARIABLES_FONCTION">
                <item code="1#CHAINE#res" algoitem="res EST_DU_TYPE CHAINE"/>
            </item>
            <item code="203#debutfonction" algoitem="DEBUT_FONCTION"/>
            <item code="4#calcul d'une dizaines de lignes#1" algoitem="AFFICHER &quot;calcul d'une dizaines de lignes&quot;"/>
            <item code="5#res#&quot;Bonjour &quot; + prenom + &quot; &quot; + nom#pasliste" algoitem="res PREND_LA_VALEUR &quot;Bonjour &quot; + prenom + &quot; &quot; + nom"/>
            <item code="4#calcul d'une dizaine de lignes#1" algoitem="AFFICHER &quot;calcul d'une dizaine de lignes&quot;"/>
            <item code="205#res" algoitem="RENVOYER res"/>
            <item code="204#finfonction" algoitem="FIN_FONCTION"/>
        </item>
    </item>
    <item code="100#declarationsvariables" algoitem="VARIABLES"/>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="20#addition(1, 10, 100, 1000)#1" algoitem="AFFICHERCALCUL addition(1, 10, 100, 1000)"/>
        <item code="20#addition(2, 20, 200, 2000)#1" algoitem="AFFICHERCALCUL addition(2, 20, 200, 2000)"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
