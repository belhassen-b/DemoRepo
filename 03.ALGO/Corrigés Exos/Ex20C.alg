<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="FIN_TANT_QUE"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2lignes="" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" arrondiAuto="vrai" maxBoucle="500000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions">
        <item algoitem="FONCTION ShowCart( )" code="201#ShowCart# ">
            <item algoitem="VARIABLES_FONCTION" code="202#declarationsvariablesfonction"/>
            <item algoitem="DEBUT_FONCTION" code="203#debutfonction"/>
            <item algoitem="SI (NB_CHOCO == 0 ET NB_CROISSANT == 0 ET NB_BAGUETTE == 0) ALORS" code="6#NB_CHOCO == 0 ET NB_CROISSANT == 0 ET NB_BAGUETTE == 0">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="AFFICHER &quot;Votre panier est vide !&quot;" code="4#Votre panier est vide !#1"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="AFFICHER &quot;=== PANIER ===&quot;" code="4#=== PANIER ===#1"/>
                    <item algoitem="SI (NB_CHOCO > 0) ALORS" code="6#NB_CHOCO > 0">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="AFFICHER &quot;Pains au chocolat : &quot;" code="4#Pains au chocolat : #0"/>
                        <item algoitem="AFFICHER NB_CHOCO" code="3#NB_CHOCO#0#pasliste"/>
                        <item algoitem="AFFICHER &quot; (&quot;" code="4# (#0"/>
                        <item algoitem="AFFICHERCALCUL CalcPrice(1.60, NB_CHOCO)" code="20#CalcPrice(1.60, NB_CHOCO)#0"/>
                        <item algoitem="AFFICHER &quot;€)&quot;" code="4#€)#1"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                    </item>
                    <item algoitem="SI (NB_CROISSANT > 0) ALORS" code="6#NB_CROISSANT > 0">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="AFFICHER &quot;Croissants : &quot;" code="4#Croissants : #0"/>
                        <item algoitem="AFFICHER NB_CROISSANT" code="3#NB_CROISSANT#0#pasliste"/>
                        <item algoitem="AFFICHER &quot; (&quot;" code="4# (#0"/>
                        <item algoitem="AFFICHERCALCUL CalcPrice(1.50, NB_CROISSANT)" code="20#CalcPrice(1.50, NB_CROISSANT)#0"/>
                        <item algoitem="AFFICHER &quot;€)&quot;" code="4#€)#1"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                    </item>
                    <item algoitem="SI (NB_BAGUETTE > 0) ALORS" code="6#NB_BAGUETTE > 0">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="AFFICHER &quot;Baguettes : &quot;" code="4#Baguettes : #0"/>
                        <item algoitem="AFFICHER NB_BAGUETTE" code="3#NB_BAGUETTE#0#pasliste"/>
                        <item algoitem="AFFICHER &quot; (&quot;" code="4# (#0"/>
                        <item algoitem="AFFICHERCALCUL CalcPrice(1.10, NB_BAGUETTE)" code="20#CalcPrice(1.10, NB_BAGUETTE)#0"/>
                        <item algoitem="AFFICHER &quot;€)&quot;" code="4#€)#1"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                    </item>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="AFFICHER &quot; &quot;" code="4# #1"/>
            <item algoitem="FIN_FONCTION" code="204#finfonction"/>
        </item>
        <item algoitem="FONCTION CalcPrice(Price, Quantity)" code="201#CalcPrice#Price, Quantity">
            <item algoitem="VARIABLES_FONCTION" code="202#declarationsvariablesfonction"/>
            <item algoitem="DEBUT_FONCTION" code="203#debutfonction"/>
            <item algoitem="RENVOYER Price * Quantity - floor(Quantity / 4) *  Price" code="205#Price * Quantity - floor(Quantity / 4) *  Price"/>
            <item algoitem="FIN_FONCTION" code="204#finfonction"/>
        </item>
    </item>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="NB_CHOCO EST_DU_TYPE NOMBRE" code="1#NOMBRE#NB_CHOCO"/>
        <item algoitem="NB_CROISSANT EST_DU_TYPE NOMBRE" code="1#NOMBRE#NB_CROISSANT"/>
        <item algoitem="NB_BAGUETTE EST_DU_TYPE NOMBRE" code="1#NOMBRE#NB_BAGUETTE"/>
        <item algoitem="MenuChoice EST_DU_TYPE NOMBRE" code="1#NOMBRE#MenuChoice"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="MenuChoice PREND_LA_VALEUR -1" code="5#MenuChoice#-1#pasliste"/>
        <item algoitem="TANT_QUE (MenuChoice != 0) FAIRE" code="15#MenuChoice != 0">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="AFFICHER &quot;=== MENU === &quot;" code="4#=== MENU === #1"/>
            <item algoitem="AFFICHER &quot;1. Voir le panier&quot;" code="4#1. Voir le panier#1"/>
            <item algoitem="AFFICHER &quot;2. Ajouter un pain au chocolat&quot;" code="4#2. Ajouter un pain au chocolat#1"/>
            <item algoitem="AFFICHER &quot;3. Retirer un pain au chocolat&quot;" code="4#3. Retirer un pain au chocolat#1"/>
            <item algoitem="AFFICHER &quot;4. Ajouter un croissant&quot;" code="4#4. Ajouter un croissant#1"/>
            <item algoitem="AFFICHER &quot;5. Retirer un croissant&quot;" code="4#5. Retirer un croissant#1"/>
            <item algoitem="AFFICHER &quot;6. Ajouter une baguette&quot;" code="4#6. Ajouter une baguette#1"/>
            <item algoitem="AFFICHER &quot;7. Retirer une baguette&quot;" code="4#7. Retirer une baguette#1"/>
            <item algoitem="AFFICHER &quot;0. Quitter le programme&quot;" code="4#0. Quitter le programme#1"/>
            <item algoitem="AFFICHER &quot;Votre choix : &quot;" code="4#Votre choix : #0"/>
            <item algoitem="LIRE MenuChoice" code="2#MenuChoice#pasliste"/>
            <item algoitem="SI (MenuChoice == 1) ALORS" code="6#MenuChoice == 1">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="APPELER_FONCTION ShowCart()" code="206#ShowCart()"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="SI (MenuChoice == 2) ALORS" code="6#MenuChoice == 2">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="NB_CHOCO PREND_LA_VALEUR NB_CHOCO + 1" code="5#NB_CHOCO#NB_CHOCO + 1#pasliste"/>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                        <item algoitem="SINON" code="9#sinon">
                            <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                            <item algoitem="SI (MenuChoice == 3) ALORS" code="6#MenuChoice == 3">
                                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                <item algoitem="SI (NB_CHOCO > 0) ALORS" code="6#NB_CHOCO > 0">
                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                    <item algoitem="NB_CHOCO PREND_LA_VALEUR NB_CHOCO - 1" code="5#NB_CHOCO#NB_CHOCO - 1#pasliste"/>
                                    <item algoitem="FIN_SI" code="8#finsi"/>
                                </item>
                                <item algoitem="FIN_SI" code="8#finsi"/>
                                <item algoitem="SINON" code="9#sinon">
                                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                    <item algoitem="SI (MenuChoice == 4) ALORS" code="6#MenuChoice == 4">
                                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                        <item algoitem="NB_CROISSANT PREND_LA_VALEUR NB_CROISSANT + 1" code="5#NB_CROISSANT#NB_CROISSANT + 1#pasliste"/>
                                        <item algoitem="FIN_SI" code="8#finsi"/>
                                        <item algoitem="SINON" code="9#sinon">
                                            <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                            <item algoitem="SI (MenuChoice == 5) ALORS" code="6#MenuChoice == 5">
                                                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                                <item algoitem="SI (NB_CROISSANT > 0) ALORS" code="6#NB_CROISSANT > 0">
                                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                                    <item algoitem="NB_CROISSANT PREND_LA_VALEUR NB_CROISSANT - 1" code="5#NB_CROISSANT#NB_CROISSANT - 1#pasliste"/>
                                                    <item algoitem="FIN_SI" code="8#finsi"/>
                                                </item>
                                                <item algoitem="FIN_SI" code="8#finsi"/>
                                                <item algoitem="SINON" code="9#sinon">
                                                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                                    <item algoitem="SI (MenuChoice == 6) ALORS" code="6#MenuChoice == 6">
                                                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                                        <item algoitem="NB_BAGUETTE PREND_LA_VALEUR NB_BAGUETTE + 1" code="5#NB_BAGUETTE#NB_BAGUETTE + 1#pasliste"/>
                                                        <item algoitem="FIN_SI" code="8#finsi"/>
                                                        <item algoitem="SINON" code="9#sinon">
                                                            <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                                            <item algoitem="SI (MenuChoice == 7) ALORS" code="6#MenuChoice == 7">
                                                                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                                                <item algoitem="SI (NB_BAGUETTE > 0) ALORS" code="6#NB_BAGUETTE > 0">
                                                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                                                    <item algoitem="NB_BAGUETTE PREND_LA_VALEUR NB_BAGUETTE - 1" code="5#NB_BAGUETTE#NB_BAGUETTE - 1#pasliste"/>
                                                                    <item algoitem="FIN_SI" code="8#finsi"/>
                                                                </item>
                                                                <item algoitem="FIN_SI" code="8#finsi"/>
                                                                <item algoitem="SINON" code="9#sinon">
                                                                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                                                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                                                                </item>
                                                            </item>
                                                            <item algoitem="FIN_SINON" code="11#finsinon"/>
                                                        </item>
                                                    </item>
                                                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                                                </item>
                                            </item>
                                            <item algoitem="FIN_SINON" code="11#finsinon"/>
                                        </item>
                                    </item>
                                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                                </item>
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
