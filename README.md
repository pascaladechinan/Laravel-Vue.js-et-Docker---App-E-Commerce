# Boutique en Ligne – Laravel + Vue.js + Docker

Ce projet est une **application e-commerce complète**, composée d’une **interface client** développée avec **Laravel**, et d’un **panneau d’administration** construit avec **Vue.js** (Vite), le tout orchestré et standardisé dans un environnement **Docker**.  
L’API Laravel assure la gestion des produits, commandes, utilisateurs et authentification, tandis que le tableau de bord Vue.js permet l'administration des contenus en temps réel.

---

## 🌐 Fonctionnalités Principales

| Module | Description |
|-------|-------------|
| **Interface Client (Laravel)** | Consultation des produits, inscription/connexion, panier, commandes. |
| **Panneau Admin (Vue.js)** | Gestion des produits, catégories, utilisateurs, commandes. |
| **API REST** | Communication sécurisée entre Laravel et Vue.js. |
| **Docker** | Standardisation complète de l’environnement. |
| **MySQL** | Stockage des données avec persistance. |

---

## 🧰 Technologies Utilisées

| Technologie | Rôle | Méthode d'utilisation |
|------------|------|-----------------------|
| **Laravel 10** | Backend & API | `php artisan serve` (en dev) / Servi via Nginx (Docker) |
| **Vue.js 3 + Vite** | Interface Admin dynamique | `npm run dev` ou **Vue_dev** avec hot reload |
| **MySQL 8** | Base de données | Conteneur Docker, persistance via volume `dbdata` |
| **Docker & Docker Compose** | Orchestration des services | `docker-compose up -d` |
| **Nginx** | Reverse proxy & serveur web | Configuration incluse dans `docker/nginx/` |

---

## 🔧 Architecture Docker

/mon-projet
├── backend/ # Interface Admin Vue.js
│ ├── Dockerfile # Build (production)
│ └── Dockerfile.dev # Mode développement Vite (hot reload)
├── docker/
│ ├── php/Dockerfile # PHP-FPM
│ └── nginx/default.conf # Config Nginx pour Laravel
├── docker-compose.yml # Orchestration
├── .env.example # Modèle d'environnement
└── README.md


### Services gérés par `docker-compose`

| Service | Fonction | Port |
|--------|----------|------|
| `laravel` | API & logique applicative | via Nginx |
| `nginx` | Proxy + serveur HTTP | **8080** (accès client) |
| `db (mysql)` | Base de données | **3306** |
| `phpmyadmin` | Interface SQL | **8082** |
| `vue_dev` (optionnel) | Mode Dev avec Vite HMR | **5173** |
| `vue` (production) | Build Admin servi par Nginx | **3000** |

---

## ✅ Prérequis

Avant installation, assurez-vous d'avoir :

| Outil | Version recommandée |
|------|----------------------|
| **Docker** | ≥ 20.x |
| **Docker Compose** | ≥ 1.29 |
| **Git** | ≥ 2.x |

---

## 🚀 Guide d'Installation

### 1) Cloner le projet

```bash
git clone https://github.com/TON-USER/boutique-laravel-vue.git
cd boutique-laravel-vue
```

### 2) Créer le fichier `.env`

```
cp .env.example .env
```
Pensez à configurer les accès DB si nécessaire.

### 3) Lancer l’environnement Docker

```
docker-compose up --build -d
```

### 4) Installer les dépendances Laravel

```
docker-compose exec laravel composer install
docker-compose exec laravel php artisan key:generate
docker-compose exec laravel php artisan migrate
```

### 5) Mode développement du panneau admin (Hot Reload)

```
docker-compose exec vue_dev npm install
docker-compose exec vue_dev npm run dev
```

### 6) Accéder aux interfaces

| Interface              | URL                                            |
| ---------------------- | ---------------------------------------------- |
| **Site Client**        | [http://localhost:8080](http://localhost:8080) |
| **Admin Vue.js (Dev)** | [http://localhost:5173](http://localhost:5173) |
| **phpMyAdmin**         | [http://localhost:8082](http://localhost:8082) |


## 🎓 Compétences Développées grâce à ce projet

* Maîtrise du pattern API REST

* Intégration Laravel ↔ Vue.js (consommation API)

* Standardisation d’environnement avec Docker

* Gestion de configuration multi-services (PHP-FPM, Nginx, Node, MySQL)

* Automatisation et reproductibilité d'installation

* Séparation claire frontend / backend

## 📄 Licence

Projet librement modifiable dans un cadre éducatif ou pratique.

## 🤝 Contribution

Toute amélioration est bienvenue.
Fork → créer branche → Pull Request.