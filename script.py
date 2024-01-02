# import json

# # Charger le fichier JSON d'entrée
# with open("Vocabulary1.json", "r", encoding="utf-8") as fichier_entree:
#     data = json.load(fichier_entree)

#     for vocabulaire in data["vocabulary"]:
#         if "context" in vocabulaire:
#             del vocabulaire["context"]
#         vocabulaire["meaning"] = ["..."]
#         if "translations" in vocabulaire:
#             del vocabulaire["translations"]
#         vocabulaire["translation"] = ["..."]

# # Enregistrer les modifications dans le fichier JSON d'origine
# with open("votre_fichier_entree.json", "w", encoding="utf-8") as fichier_entree:
#     json.dump(data, fichier_entree, ensure_ascii=False, indent=2)


import json

# Charger la structure 1 depuis un fichier JSON
with open('IELAM/Data/Words-order/1.json', 'r', encoding='utf-8') as file:
    structure1 = json.load(file)

# Charger la structure 2 depuis un fichier JSON
with open('IELAM/Data/Translation/en-word.json', 'r', encoding='utf-8') as file:
    structure2 = json.load(file)

compteur_structure2 = 1

# Parcourir la structure 1
for surah in structure1['surahs']:
    for ayah in surah['ayahs']:
        for word in ayah['words']:
            # Vérifier si le texte du mot n'est pas explicitement défini comme 'null'
            if word['text'] is not None:
                # Récupérer la donnée correspondante de la structure 2 en utilisant le compteur
                donnee_structure2 = structure2.get(str(compteur_structure2))

                # Ajouter la nouvelle donnée à la structure 1
                if donnee_structure2 is not None:
                    # Créer le paramètre 'translate' en dessous de 'text'
                    word['translate'] = donnee_structure2

                # Incrémenter le compteur pour la prochaine clé dans la structure 2
                compteur_structure2 += 1

# Sauvegarder la structure 1 modifiée dans un nouveau fichier JSON
with open('structure1_modifiee.json', 'w', encoding='utf-8') as file:
    json.dump(structure1, file, ensure_ascii=False, indent=2)
