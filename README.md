# Application MERN

## Description

Cette application MERN utilise une architecture avec plusieurs services :

- **Backend** : Contient plusieurs services (user-service, product-service, api-gateway).
- **Frontend** : Interface utilisateur.

## Instructions pour lancer l'application

1. **Lancer les services backend**

   - Ouvrez un terminal et accédez au répertoire `backend` :
     ```bash
     cd backend
     ```
   - Démarrez le service `user-service` :
     ```bash
     cd user-service
     node app.js
     ```
   - Ouvrez un nouveau terminal, accédez au répertoire `product-service` et lancez-le :
     ```bash
     cd product-service
     node app.js
     ```
   - Ouvrez un autre terminal, accédez au répertoire `api-gateway` et démarrez-le :
     ```bash
     cd api-gateway
     node server.js
     ```

2. **Lancer le frontend**

   - Dans un nouveau terminal, accédez au répertoire `frontend` :
     ```bash
     cd frontend
     ```
   - Installez les dépendances et démarrez l'application :
     ```bash
     npm start
     ```

3. **Accéder à l'application**
   - Une fois tous les services en cours d'exécution, ouvrez votre navigateur et accédez à l'URL indiquée dans la console (par défaut, probablement `http://localhost:3000` pour le frontend).

---

## Tester les méthodes de l'API

Pour tester les différentes méthodes de l'API, vous pouvez utiliser un outil comme **Postman** ou **Thunder Client**. Assurez-vous que votre serveur est en cours d'exécution sur le port 3003.

### Étapes générales

1. **Démarrer le serveur**  
   Assurez-vous d'abord que votre serveur est en marche. Allez dans le répertoire de votre projet et lancez-le avec la commande suivante :

   ```bash
   node app.js
   ```

2. **Utiliser Postman ou Thunder Client**  
   Lancez **Postman** ou **Thunder Client** et configurez les requêtes HTTP comme suit :

---

### 1. **GET /users**

Cette méthode récupère la liste de tous les utilisateurs.

- **URL** : `http://localhost:3003/api/users`
- **Méthode** : GET
- **Headers** :
  - `Authorization: Bearer <votre_token>`
- **Réponse attendue** : Liste des utilisateurs.

### 2. **GET /users/:id**

Cette méthode récupère les détails d'un utilisateur spécifique par son ID.

- **URL** : `http://localhost:3003/api/users/:id`
- **Méthode** : GET
- **Headers** :
  - `Authorization: Bearer <votre_token>`
- **Réponse attendue** : Détails de l'utilisateur.

### 3. **PUT /users/:id**

Cette méthode met à jour les informations d'un utilisateur spécifique par son ID.

- **URL** : `http://localhost:3003/api/users/:id`
- **Méthode** : PUT
- **Headers** :
  - `Authorization: Bearer <votre_token>`
- **Body** (exemple) :
  ```json
  {
    "username": "nouveau_nom_utilisateur",
    "email": "nouveau_email@example.com",
    "role": "admin"
  }
  ```

### 4. **DELETE /users/:id**

Cette méthode supprime un utilisateur spécifique par son ID.

- **URL** : `http://localhost:3003/api/users/:id`
- **Méthode** : DELETE
- **Headers** :
  - `Authorization: Bearer <votre_token>`
- **Réponse attendue** : Message confirmant la suppression.

### 5. **POST /users/signin**

Cette méthode permet de se connecter en utilisant un email et un mot de passe.

- **URL** : `http://localhost:3003/api/users/signin`
- **Méthode** : POST
- **Body** (exemple) :
  ```json
  {
    "email": "email@example.com",
    "password": "votre_mot_de_passe"
  }
  ```

### 6. **POST /users/signup**

Cette méthode permet de s'inscrire en tant que nouvel utilisateur.

- **URL** : `http://localhost:3003/api/users/signup`
- **Méthode** : POST
- **Body** (exemple) :
  ```json
  {
    "username": "nouvel_utilisateur",
    "email": "email@example.com",
    "password": "mot_de_passe",
    "role": "user"
  }
  ```

### 7. **PUT /users/profile/myprofile**

Cette méthode permet de mettre à jour les informations du profil de l'utilisateur connecté.

- **URL** : `http://localhost:3003/api/users/profile/myprofile`
- **Méthode** : PUT
- **Headers** :
  - `Authorization: Bearer <votre_token>`
- **Body** (exemple) :
  ```json
  {
    "username": "nouveau_nom_utilisateur",
    "email": "nouveau_email@example.com",
    "password": "nouveau_mot_de_passe"
  }
  ```

---

## Méthodes pour les Produits

### 1. **GET /products**

Cette méthode récupère la liste de tous les produits.

- **URL** : `http://localhost:3003/api/products`
- **Méthode** : GET
- **Réponse attendue** : Liste des produits.

### 2. **POST /products/create**

Cette méthode permet de créer un produit.

- **URL** : `http://localhost:3003/api/products/create`
- **Méthode** : POST
- **Headers** :
  - `Authorization: Bearer <votre_token>`
- **Body** (exemple) :
  ```json
  {
    "name": "Produit 1",
    "slug": "produit-1",
    "price": 100,
    "image": "image_url",
    "category": "Catégorie 1",
    "stock": 10,
    "description": "Description du produit",
    "rating": 4.5
  }
  ```

### 3. **PUT /products/:id**

Cette méthode permet de mettre à jour un produit spécifique par son ID.

- **URL** : `http://localhost:3003/api/products/:id`
- **Méthode** : PUT
- **Headers** :
  - `Authorization: Bearer <votre_token>`
- **Body** (exemple) :
  ```json
  {
    "name": "Produit mis à jour",
    "slug": "produit-mis-a-jour",
    "price": 120,
    "image": "nouvelle_image_url",
    "category": "Nouvelle catégorie",
    "stock": 15,
    "description": "Nouvelle description du produit",
    "rating": 4.8
  }
  ```

### 4. **GET /products/admin**

Cette méthode permet de récupérer une liste de produits pour l'administration (avec pagination).

- **URL** : `http://localhost:3003/api/products/admin`
- **Méthode** : GET
- **Headers** :
  - `Authorization: Bearer <votre_token>`
- **Réponse attendue** : Liste de produits avec pagination.

### 5. **GET /products/search**

Cette méthode permet de rechercher des produits par critères (nom, catégorie, prix, évaluation).

- **URL** : `http://localhost:3003/api/products/search`
- **Méthode** : GET
- **Headers** : Aucun
- **Query parameters** :
  - `query`: Requête de recherche (ex. `query=produit`)
  - `category`: Catégorie (ex. `category=catégorie1`)
  - `price`: Plage de prix (ex. `price=0-100`)
  - `rating`: Note minimale (ex. `rating=4`)
  - `order`: Ordre de tri (ex. `order=highest`)

### 6. **GET /products/categories**

Cette méthode permet de récupérer la liste des catégories de produits.

- **URL** : `http://localhost:3003/api/products/categories`
- **Méthode** : GET
- **Réponse attendue** : Liste des catégories.

### 7. **GET /products/slug/:slug**

Cette méthode permet de récupérer un produit par son slug.

- **URL** : `http://localhost:3003/api/products/slug/:slug`
- **Méthode** : GET
- **Réponse attendue** : Détails du produit.

### 8. **GET /products/:id**

Cette méthode permet de récupérer un produit par son ID.

- **URL** : `http://localhost:3003/api/products/:id`
- **Méthode** : GET
- **Réponse attendue** : Détails du produit.

### 9. **DELETE /products/:id**

Cette méthode permet de supprimer un produit par son ID.

- **URL** : `http://localhost:3003/api/products/:id`
- **Méthode** : DELETE
- **Headers** :
  - `Authorization: Bearer <votre_token>`
- **Réponse attendue** : Message confirmant la suppression.
