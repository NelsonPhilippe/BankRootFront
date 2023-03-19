# BankRootFront

## Cloner le projet Github
1. Ouvrez un terminal et accédez au dossier dans lequel vous souhaitez cloner le projet.

2. Exécutez la commande suivante pour cloner le projet :

```bash
git clone https://github.com/NelsonPhilippe/BankRootFront.git
```

3. Une fois le projet cloné, accédez au dossier du projet en exécutant la commande suivante :
```bash
cd BankRootFront
```

## Installer les dépendances via NPM

1. Assurez-vous que Node.js et NPM sont installés sur votre machine.
2. Exécutez la commande suivante pour installer les dépendances via NPM :
```bash
npm install
```
Cette commande téléchargera et installera toutes les dépendances nécessaires pour exécuter le projet.

## Lancer l'application Angular

1. Assurez-vous que vous êtes dans le dossier du projet.

2. Exécutez la commande suivante pour lancer l'application Angular :

```bash
npm run start ou npx ng serve
```

Cette commande démarrera un serveur de développement et ouvrira l'application dans votre navigateur par défaut.

Vous devriez maintenant être en mesure de visualiser l'application dans votre navigateur et de commencer à explorer ses différentes fonctionnalités.

L'application est par defaut sur le port 4200, vous pouvez le changer dans le fichier `angular.json` dans la partie `serve` et `options` :

```json
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "browserTarget": "BankRootFront:build",
    "port": 4200
  },
  "configurations": {
    "production": {
      "browserTarget": "BankRootFront:build:production"
    }
  }
}
```


