<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="SI (Roll_Dice(20, 10) >= 16 + Difficulty) ALORS" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2para="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" arrondiAuto="vrai" totalAffichages="1000" epaisseurPoint="2" epaisseurLigne="2" maxBoucle="500000" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions">
        <item algoitem="FONCTION Roll_Dice(Dice, Modifier)" code="201#Roll_Dice#Dice, Modifier">
            <item algoitem="VARIABLES_FONCTION" code="202#declarationsvariablesfonction"/>
            <item algoitem="DEBUT_FONCTION" code="203#debutfonction"/>
            <item algoitem="RENVOYER floor(random() * Dice) + Modifier+ 1" code="205#floor(random() * Dice) + Modifier+ 1"/>
            <item algoitem="FIN_FONCTION" code="204#finfonction"/>
        </item>
        <item algoitem="FONCTION Afficher_Stats( )" code="201#Afficher_Stats# ">
            <item algoitem="VARIABLES_FONCTION" code="202#declarationsvariablesfonction"/>
            <item algoitem="DEBUT_FONCTION" code="203#debutfonction"/>
            <item algoitem="AFFICHER &quot; &quot;" code="4# #1"/>
            <item algoitem="AFFICHER &quot;=== Stats ===&quot;" code="4#=== Stats ===#1"/>
            <item algoitem="AFFICHER &quot;- Temps restant : &quot;" code="4#- Temps restant : #0"/>
            <item algoitem="AFFICHERCALCUL floor(TempsRestant / 60)" code="20#floor(TempsRestant / 60)#0"/>
            <item algoitem="AFFICHER &quot; heures &quot;" code="4# heures #0"/>
            <item algoitem="AFFICHERCALCUL TempsRestant % 60" code="20#TempsRestant % 60#0"/>
            <item algoitem="AFFICHER &quot; minutes&quot;" code="4# minutes#1"/>
            <item algoitem="AFFICHER &quot;- Baies possédées : &quot;" code="4#- Baies possédées : #0"/>
            <item algoitem="AFFICHER BaiesRestantes" code="3#BaiesRestantes#0#pasliste"/>
            <item algoitem="AFFICHER &quot; baies.&quot;" code="4# baies.#1"/>
            <item algoitem="AFFICHER &quot;- Rennes restants : &quot;" code="4#- Rennes restants : #0"/>
            <item algoitem="AFFICHER RennesRestants" code="3#RennesRestants#0#pasliste"/>
            <item algoitem="AFFICHER &quot; rennes.&quot;" code="4# rennes.#1"/>
            <item algoitem="SI (RodolpheTrouve == 0) ALORS" code="6#RodolpheTrouve == 0">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="AFFICHER &quot;- Rodolphe est introuvable&quot;" code="4#- Rodolphe est introuvable#1"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="AFFICHER &quot;- Rodolphe est rentré&quot;" code="4#- Rodolphe est rentré#1"/>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="FIN_FONCTION" code="204#finfonction"/>
        </item>
        <item algoitem="FONCTION Amadouer_Renne( )" code="201#Amadouer_Renne# ">
            <item algoitem="VARIABLES_FONCTION" code="202#declarationsvariablesfonction">
                <item algoitem="ChoixAmadouer EST_DU_TYPE NOMBRE" code="1#NOMBRE#ChoixAmadouer"/>
            </item>
            <item algoitem="DEBUT_FONCTION" code="203#debutfonction"/>
            <item algoitem="ChoixAmadouer PREND_LA_VALEUR -1" code="5#ChoixAmadouer#-1#pasliste"/>
            <item algoitem="TANT_QUE (ChoixAmadouer != 0 ET TempsRestant > 0) FAIRE" code="15#ChoixAmadouer != 0 ET TempsRestant > 0">
                <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
                <item algoitem="APPELER_FONCTION Afficher_Stats()" code="206#Afficher_Stats()"/>
                <item algoitem="AFFICHER &quot; &quot;" code="4# #1"/>
                <item algoitem="AFFICHER &quot;=== Amadouer un renne ===&quot;" code="4#=== Amadouer un renne ===#1"/>
                <item algoitem="AFFICHER &quot;1. Lui lancer une baies&quot;" code="4#1. Lui lancer une baies#1"/>
                <item algoitem="AFFICHER &quot;2. Lui demander de rentrer&quot;" code="4#2. Lui demander de rentrer#1"/>
                <item algoitem="AFFICHER &quot;3. Le menacer avec un bout de bois&quot;" code="4#3. Le menacer avec un bout de bois#1"/>
                <item algoitem="AFFICHER &quot;0. Laisser tomber&quot;" code="4#0. Laisser tomber#1"/>
                <item algoitem="AFFICHER &quot;Votre choix : &quot;" code="4#Votre choix : #0"/>
                <item algoitem="LIRE ChoixAmadouer" code="2#ChoixAmadouer#pasliste"/>
                <item algoitem="SI (ChoixAmadouer == 1) ALORS" code="6#ChoixAmadouer == 1">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="SI (BaiesRestantes > 1) ALORS" code="6#BaiesRestantes > 1">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="AFFICHER &quot;Vous lancez une baie au renne...&quot;" code="4#Vous lancez une baie au renne...#1"/>
                        <item algoitem="BaiesRestantes PREND_LA_VALEUR BaiesRestantes - 1" code="5#BaiesRestantes#BaiesRestantes - 1#pasliste"/>
                        <item algoitem="SI (Roll_Dice(20, 10) >= 16 + Difficulty) ALORS" code="6#Roll_Dice(20, 10) >= 16 + Difficulty">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="AFFICHER &quot;Le renne se régale et décide de vous suivre !&quot;" code="4#Le renne se régale et décide de vous suivre !#1"/>
                            <item algoitem="RENVOYER 1" code="205#1"/>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="AFFICHER &quot;Le renne ne semble pas avoir envie de votre baie...&quot;" code="4#Le renne ne semble pas avoir envie de votre baie...#1"/>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                        <item algoitem="SINON" code="9#sinon">
                            <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                            <item algoitem="AFFICHER &quot;Impossible ! Vous n'avez plus de baies ! &quot;" code="4#Impossible ! Vous n'avez plus de baies ! #1"/>
                            <item algoitem="FIN_SINON" code="11#finsinon"/>
                        </item>
                    </item>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI (ChoixAmadouer == 2) ALORS" code="6#ChoixAmadouer == 2">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="SI (Roll_Dice(20, 5) >= 16 + Difficulty) ALORS" code="6#Roll_Dice(20, 5) >= 16 + Difficulty">
                                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                <item algoitem="AFFICHER &quot;Le renne accepte de vous suivre et de rentrer !&quot;" code="4#Le renne accepte de vous suivre et de rentrer !#1"/>
                                <item algoitem="RENVOYER 1" code="205#1"/>
                                <item algoitem="FIN_SI" code="8#finsi"/>
                                <item algoitem="SINON" code="9#sinon">
                                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                    <item algoitem="AFFICHER &quot;Le renne ne vous écoute pas...&quot;" code="4#Le renne ne vous écoute pas...#1"/>
                                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                                </item>
                            </item>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="SI (ChoixAmadouer == 3 ) ALORS" code="6#ChoixAmadouer == 3 ">
                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                    <item algoitem="SI (Roll_Dice(20, -Roll_Dice(6, 0))  >= 16 + Difficulty) ALORS" code="6#Roll_Dice(20, -Roll_Dice(6, 0))  >= 16 + Difficulty">
                                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                        <item algoitem="AFFICHER &quot;Vos menaces ont fonctionnées, le renne accepte de vous suivre...&quot;" code="4#Vos menaces ont fonctionnées, le renne accepte de vous suivre...#1"/>
                                        <item algoitem="RENVOYER 1" code="205#1"/>
                                        <item algoitem="FIN_SI" code="8#finsi"/>
                                        <item algoitem="SINON" code="9#sinon">
                                            <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                            <item algoitem="AFFICHER &quot;Vos menaces n'ont aucun effet...&quot;" code="4#Vos menaces n'ont aucun effet...#1"/>
                                            <item algoitem="FIN_SINON" code="11#finsinon"/>
                                        </item>
                                    </item>
                                    <item algoitem="FIN_SI" code="8#finsi"/>
                                    <item algoitem="SINON" code="9#sinon">
                                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                        <item algoitem="TempsRestant PREND_LA_VALEUR TempsRestant + 5" code="5#TempsRestant#TempsRestant + 5#pasliste"/>
                                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                                    </item>
                                </item>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="TempsRestant PREND_LA_VALEUR TempsRestant - 5" code="5#TempsRestant#TempsRestant - 5#pasliste"/>
                <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
            </item>
            <item algoitem="RENVOYER 0" code="205#0"/>
            <item algoitem="FIN_FONCTION" code="204#finfonction"/>
        </item>
        <item algoitem="FONCTION Chercher_baies( )" code="201#Chercher_baies# ">
            <item algoitem="VARIABLES_FONCTION" code="202#declarationsvariablesfonction"/>
            <item algoitem="DEBUT_FONCTION" code="203#debutfonction"/>
            <item algoitem="RENVOYER Roll_Dice(10, 0)" code="205#Roll_Dice(10, 0)"/>
            <item algoitem="FIN_FONCTION" code="204#finfonction"/>
        </item>
        <item algoitem="FONCTION Menu_Principal( )" code="201#Menu_Principal# ">
            <item algoitem="VARIABLES_FONCTION" code="202#declarationsvariablesfonction">
                <item algoitem="Choix EST_DU_TYPE NOMBRE" code="1#NOMBRE#Choix"/>
            </item>
            <item algoitem="DEBUT_FONCTION" code="203#debutfonction"/>
            <item algoitem="AFFICHER &quot; &quot;" code="4# #1"/>
            <item algoitem="AFFICHER &quot;=== MENU PRINCIPAL ===&quot;" code="4#=== MENU PRINCIPAL ===#1"/>
            <item algoitem="AFFICHER &quot;1. Chercher des baies&quot;" code="4#1. Chercher des baies#1"/>
            <item algoitem="AFFICHER &quot;2. Chercher un renne&quot;" code="4#2. Chercher un renne#1"/>
            <item algoitem="AFFICHER &quot;0. Quitter le jeu&quot;" code="4#0. Quitter le jeu#1"/>
            <item algoitem="AFFICHER &quot;Votre choix : &quot;" code="4#Votre choix : #0"/>
            <item algoitem="LIRE Choix" code="2#Choix#pasliste"/>
            <item algoitem="RENVOYER Choix" code="205#Choix"/>
            <item algoitem="FIN_FONCTION" code="204#finfonction"/>
        </item>
        <item algoitem="FONCTION Chercher_Renne(Restants, Rodolphe)" code="201#Chercher_Renne#Restants, Rodolphe">
            <item algoitem="VARIABLES_FONCTION" code="202#declarationsvariablesfonction">
                <item algoitem="DiceResult EST_DU_TYPE NOMBRE" code="1#NOMBRE#DiceResult"/>
            </item>
            <item algoitem="DEBUT_FONCTION" code="203#debutfonction"/>
            <item algoitem="TempsRestant PREND_LA_VALEUR TempsRestant - 20 * Difficulty" code="5#TempsRestant#TempsRestant - 20 * Difficulty#pasliste"/>
            <item algoitem="AFFICHER &quot;Vous passez &quot;" code="4#Vous passez #0"/>
            <item algoitem="AFFICHERCALCUL 20 * Difficulty" code="20#20 * Difficulty#0"/>
            <item algoitem="AFFICHER &quot; minutes à chercher...&quot;" code="4# minutes à chercher...#1"/>
            <item algoitem="DiceResult PREND_LA_VALEUR Roll_Dice(20, Restants)" code="5#DiceResult#Roll_Dice(20, Restants)#pasliste"/>
            <item algoitem="SI (DiceResult >= 16) ALORS" code="6#DiceResult >= 16">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="SI (Roll_Dice(6, 0) >= 5 ET Rodolphe == 0) ALORS" code="6#Roll_Dice(6, 0) >= 5 ET Rodolphe == 0">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="RENVOYER 2" code="205#2"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="SI (RennesRestants > 0) ALORS" code="6#RennesRestants > 0">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="RENVOYER 1" code="205#1"/>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="RENVOYER 0" code="205#0"/>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="RENVOYER 0" code="205#0"/>
            <item algoitem="FIN_FONCTION" code="204#finfonction"/>
        </item>
    </item>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="TempsRestant EST_DU_TYPE NOMBRE" code="1#NOMBRE#TempsRestant"/>
        <item algoitem="ChoixMenu EST_DU_TYPE NOMBRE" code="1#NOMBRE#ChoixMenu"/>
        <item algoitem="RennesRestants EST_DU_TYPE NOMBRE" code="1#NOMBRE#RennesRestants"/>
        <item algoitem="RodolpheTrouve EST_DU_TYPE NOMBRE" code="1#NOMBRE#RodolpheTrouve"/>
        <item algoitem="BaiesRestantes EST_DU_TYPE NOMBRE" code="1#NOMBRE#BaiesRestantes"/>
        <item algoitem="RenneResult EST_DU_TYPE NOMBRE" code="1#NOMBRE#RenneResult"/>
        <item algoitem="Difficulty EST_DU_TYPE NOMBRE" code="1#NOMBRE#Difficulty"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="ChoixMenu PREND_LA_VALEUR -1" code="5#ChoixMenu#-1#pasliste"/>
        <item algoitem="TempsRestant PREND_LA_VALEUR 24 * 60" code="5#TempsRestant#24 * 60#pasliste"/>
        <item algoitem="RennesRestants PREND_LA_VALEUR 6" code="5#RennesRestants#6#pasliste"/>
        <item algoitem="AFFICHER &quot;Choisissez votre difficulté : &quot;" code="4#Choisissez votre difficulté : #1"/>
        <item algoitem="AFFICHER &quot;1. Facile &quot;" code="4#1. Facile #1"/>
        <item algoitem="AFFICHER &quot;2. Normal&quot;" code="4#2. Normal#1"/>
        <item algoitem="AFFICHER &quot;3. Difficile&quot;" code="4#3. Difficile#1"/>
        <item algoitem="AFFICHER &quot;Votre choix : &quot;" code="4#Votre choix : #0"/>
        <item algoitem="LIRE Difficulty" code="2#Difficulty#pasliste"/>
        <item algoitem="TANT_QUE (ChoixMenu != 0 ET TempsRestant > 0 ET (RennesRestants > 0 OU RodolpheTrouve == 0)) FAIRE" code="15#ChoixMenu != 0 ET TempsRestant > 0 ET (RennesRestants > 0 OU RodolpheTrouve == 0)">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="APPELER_FONCTION Afficher_Stats()" code="206#Afficher_Stats()"/>
            <item algoitem="ChoixMenu PREND_LA_VALEUR Menu_Principal()" code="5#ChoixMenu#Menu_Principal()#pasliste"/>
            <item algoitem="SI (ChoixMenu == 1) ALORS" code="6#ChoixMenu == 1">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="AFFICHER &quot;Vous allez chercher des baies...&quot;" code="4#Vous allez chercher des baies...#1"/>
                <item algoitem="BaiesRestantes PREND_LA_VALEUR BaiesRestantes + Chercher_baies()" code="5#BaiesRestantes#BaiesRestantes + Chercher_baies()#pasliste"/>
                <item algoitem="TempsRestant PREND_LA_VALEUR TempsRestant - 10 * Difficulty" code="5#TempsRestant#TempsRestant - 10 * Difficulty#pasliste"/>
                <item algoitem="AFFICHERCALCUL 10 * Difficulty" code="20#10 * Difficulty#0"/>
                <item algoitem="AFFICHER &quot; minutes plus tard, vous avez &quot;" code="4# minutes plus tard, vous avez #0"/>
                <item algoitem="AFFICHER BaiesRestantes" code="3#BaiesRestantes#0#pasliste"/>
                <item algoitem="AFFICHER &quot; baies.&quot;" code="4# baies.#1"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="SI (ChoixMenu == 2 ) ALORS" code="6#ChoixMenu == 2 ">
                        <item algoitem="DEBUT_SI" code="7#debutsi"/>
                        <item algoitem="AFFICHER &quot;Vous partez chercher un renne...&quot;" code="4#Vous partez chercher un renne...#1"/>
                        <item algoitem="RenneResult PREND_LA_VALEUR Chercher_Renne(RennesRestants, RodolpheTrouve)" code="5#RenneResult#Chercher_Renne(RennesRestants, RodolpheTrouve)#pasliste"/>
                        <item algoitem="SI (RenneResult == 2) ALORS" code="6#RenneResult == 2">
                            <item algoitem="DEBUT_SI" code="7#debutsi"/>
                            <item algoitem="AFFICHER &quot;Vous avez trouvé Rudolphe !&quot;" code="4#Vous avez trouvé Rudolphe !#1"/>
                            <item algoitem="RodolpheTrouve PREND_LA_VALEUR Amadouer_Renne()" code="5#RodolpheTrouve#Amadouer_Renne()#pasliste"/>
                            <item algoitem="FIN_SI" code="8#finsi"/>
                            <item algoitem="SINON" code="9#sinon">
                                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                <item algoitem="SI (RenneResult == 1) ALORS" code="6#RenneResult == 1">
                                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                                    <item algoitem="AFFICHER &quot;Vous avez trouvé un renne !&quot;" code="4#Vous avez trouvé un renne !#1"/>
                                    <item algoitem="RennesRestants PREND_LA_VALEUR RennesRestants - Amadouer_Renne()" code="5#RennesRestants#RennesRestants - Amadouer_Renne()#pasliste"/>
                                    <item algoitem="FIN_SI" code="8#finsi"/>
                                    <item algoitem="SINON" code="9#sinon">
                                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                                        <item algoitem="AFFICHER &quot;Vous n'avez rien trouvé...&quot;" code="4#Vous n'avez rien trouvé...#0"/>
                                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                                    </item>
                                </item>
                                <item algoitem="FIN_SINON" code="11#finsinon"/>
                            </item>
                        </item>
                        <item algoitem="FIN_SI" code="8#finsi"/>
                    </item>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot; &quot;" code="4# #1"/>
        <item algoitem="SI (RennesRestants == 0 ) ALORS" code="6#RennesRestants == 0 ">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Bravo, vous avez sauvé Noël !&quot;" code="4#Bravo, vous avez sauvé Noël !#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;Il n'y aura pas de Noël cette année...&quot;" code="4#Il n'y aura pas de Noël cette année...#0"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
