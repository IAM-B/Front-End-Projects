import json

# Charger le fichier JSON d'entrée
with open("Vocabulary1.json", "r", encoding="utf-8") as fichier_entree:
    data = json.load(fichier_entree)

    for vocabulaire in data["vocabulary"]:
        if "context" in vocabulaire:
            del vocabulaire["context"]
        vocabulaire["meaning"] = ["..."]
        if "translations" in vocabulaire:
            del vocabulaire["translations"]
        vocabulaire["translation"] = ["..."]

# Enregistrer les modifications dans le fichier JSON d'origine
with open("votre_fichier_entree.json", "w", encoding="utf-8") as fichier_entree:
    json.dump(data, fichier_entree, ensure_ascii=False, indent=2)
