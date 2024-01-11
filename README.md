# Série d'exercices JAVASCRIPT - Manipulations du DOM

## Algorithmie :
----------------
Un algorithme est la description d'*une suite d'étapes permettant d'obtenir un résultat à partir d'éléments fournis en entrée*.
Par exemple, une recette de cuisine est un algorithme permettant d'obtenir un plat à partir de ses ingrédients!

## LE DOM : 
Pour (**Document Object Model**)

    - Fournit une représentation *structurée du document* sous forme d'un *arbre*

    Image du DOM (dom.png)

    - Ci dessous, voyons la structure d'un document html source représentée sous forme d'arbre composé de noeud et de feuilles
    Chaque nœud est lié aux autres par une relation parent-enfant. Le premier nœud de l'arbre est la racine, tandis que les nœuds contiennent des feuilles.

    - STRUCTURE : 
    --------------

        <!doctype html>

        <html lang="en"> // la balise <html> est le *parent* (:root) / racine

        <head> // La balise <head> est une *branche*
            <title>My first web page</title> // La balise <title> est un enfant & le contenu de <title> est la *feuille*
        </head>

        <body> // La balise <body> est une autre/seconde *branche*
            <h1>Hello, world!</h1> // La balise <h1> est un *enfant* et 'Hello, world!' est la *feuille* 
            <p>How are you?</p> // <p> est un *enfant* et 'How are you?' est la *feuille*
        </body>

        </html>

    - La structure d'objet du DOM est représentée par ce qu'on appelle une "*arborescence de noeuds*" (**node tree**)