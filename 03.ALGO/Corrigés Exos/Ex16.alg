<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHERCALCUL SUM / NB_NOTES" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000" arrondiAuto="vrai" nbDecimales="8" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="I EST_DU_TYPE NOMBRE" code="1#NOMBRE#I"/>
        <item algoitem="NB_NOTES EST_DU_TYPE NOMBRE" code="1#NOMBRE#NB_NOTES"/>
        <item algoitem="NB_ENTRE EST_DU_TYPE NOMBRE" code="1#NOMBRE#NB_ENTRE"/>
        <item algoitem="NOTE_MIN EST_DU_TYPE NOMBRE" code="1#NOMBRE#NOTE_MIN"/>
        <item algoitem="NOTE_MAX EST_DU_TYPE NOMBRE" code="1#NOMBRE#NOTE_MAX"/>
        <item algoitem="SUM EST_DU_TYPE NOMBRE" code="1#NOMBRE#SUM"/>
        <item algoitem="CHOIX_MENU EST_DU_TYPE NOMBRE" code="1#NOMBRE#CHOIX_MENU"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="NB_NOTES PREND_LA_VALEUR 5" code="5#NB_NOTES#5#pasliste"/>
        <item algoitem="POUR I ALLANT_DE 1 A NB_NOTES" code="12#I#1#NB_NOTES">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="AFFICHER &quot;Veuillez entrer la note n°&quot;" code="4#Veuillez entrer la note n°#0"/>
            <item algoitem="AFFICHER I" code="3#I#0#pasliste"/>
            <item algoitem="AFFICHER &quot; : &quot;" code="4# : #0"/>
            <item algoitem="LIRE NB_ENTRE" code="2#NB_ENTRE#pasliste"/>
            <item algoitem="SUM PREND_LA_VALEUR SUM + NB_ENTRE" code="5#SUM#SUM + NB_ENTRE#pasliste"/>
            <item algoitem="SI (I == 1) ALORS" code="6#I == 1">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="NOTE_MAX PREND_LA_VALEUR NB_ENTRE" code="5#NOTE_MAX#NB_ENTRE#pasliste"/>
                <item algoitem="NOTE_MIN PREND_LA_VALEUR NB_ENTRE" code="5#NOTE_MIN#NB_ENTRE#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="SI (NB_ENTRE > NOTE_MAX) ALORS" code="6#NB_ENTRE > NOTE_MAX">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="NOTE_MAX PREND_LA_VALEUR NB_ENTRE" code="5#NOTE_MAX#NB_ENTRE#pasliste"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                    </item>
                    <item algoitem="SI (NB_ENTRE &lt; NOTE_MIN) ALORS" code="6#NB_ENTRE &lt; NOTE_MIN">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="NOTE_MIN PREND_LA_VALEUR NB_ENTRE" code="5#NOTE_MIN#NB_ENTRE#pasliste"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                    </item>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="CHOIX_MENU PREND_LA_VALEUR -1" code="5#CHOIX_MENU#-1#pasliste"/>
        <item algoitem="TANT_QUE (CHOIX_MENU != 0) FAIRE" code="15#CHOIX_MENU != 0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="AFFICHER &quot;\n=== MENU ===&quot;" code="4#\n=== MENU ===#1"/>
            <item algoitem="AFFICHER &quot;1. Afficher la plus petite note&quot;" code="4#1. Afficher la plus petite note#1"/>
            <item algoitem="AFFICHER &quot;2. Afficher la plus grande note&quot;" code="4#2. Afficher la plus grande note#1"/>
            <item algoitem="AFFICHER &quot;3. Afficher la moyenne des notes&quot;" code="4#3. Afficher la moyenne des notes#1"/>
            <item algoitem="AFFICHER &quot;0. Quitter le programme&quot;" code="4#0. Quitter le programme#1"/>
            <item algoitem="AFFICHER &quot;Votre choix : &quot;" code="4#Votre choix : #0"/>
            <item algoitem="LIRE CHOIX_MENU" code="2#CHOIX_MENU#pasliste"/>
            <item algoitem="SI (CHOIX_MENU == 1) ALORS" code="6#CHOIX_MENU == 1">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="AFFICHER &quot;La plus petite note est &quot;" code="4#La plus petite note est #0"/>
                <item algoitem="AFFICHER NOTE_MIN" code="3#NOTE_MIN#1#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="SI (CHOIX_MENU == 2) ALORS" code="6#CHOIX_MENU == 2">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="AFFICHER &quot;La plus grande note est &quot;" code="4#La plus grande note est #0"/>
                        <item algoitem="AFFICHER NOTE_MAX" code="3#NOTE_MAX#1#pasliste"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                        <item algoitem="SINON" code="9#sinon">
                            <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                            <item algoitem="SI (CHOIX_MENU == 3) ALORS" code="6#CHOIX_MENU == 3">
                                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                <item algoitem="AFFICHER &quot;La moyenne des notes est de &quot;" code="4#La moyenne des notes est de #0"/>
                                <item algoitem="AFFICHERCALCUL SUM / NB_NOTES" code="20#SUM / NB_NOTES#1"/>
                                <item algoitem="FIN_SI" code="8#finsi"/>
                            </item>
                            <item algoitem="FIN_SINON" code="11#finsinon"/>
                        </item>
                    </item>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
