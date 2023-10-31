import os
import openai
from dotenv import load_dotenv

# Charger les clés d'API depuis le fichier .env
load_dotenv()

# Récupérer la clé d'API
api_key = os.getenv("OPENAI_API_KEY")

if api_key is None:
    print("La clé API n'a pas été trouvée. Veuillez vérifier votre fichier .env.")
else:
    # Configurer la clé d'API
    openai.api_key = api_key

    # Demander à l'utilisateur de saisir une question ou une requête
    user_input = input("Veuillez saisir votre question ou votre requête : ")

    if user_input:
        # Utiliser l'API pour obtenir des réponses
        response = openai.Completion.create(
            engine="davinci",
            prompt=user_input,
            max_tokens=50
        )

        # Afficher la réponse
        print("Réponse de GPT-3 :")
        print(response.choices[0].text)
    else:
        print("La saisie de l'utilisateur est vide. Veuillez saisir une question ou une requête.")
