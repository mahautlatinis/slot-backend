# slot-backend

deps.ts: centralise les imports des modules tiers.
mod.ts: point d'entrée du projet.
main.ts: fichier principal de l'application. 


##### Lancer le projet
```sh
deno run --allow-net --allow-env --allow-read main.ts
```

##### Exécuter une migration ou un seed 

```sh
deno run --allow-net --allow-env database/migrations/001_create_users_table.ts
deno run --allow-net --allow-env database/seed.ts
```

##### PostgreSQL

Vérifier l'installation
```sh
psql --version
```

Démarrer le service 
```sh
brew services start postgresql
```

Tester la connexion, lancer postgreSQL en mode intéractif  
```sh
psql postgres
```

Lister les services en cours
```sh
brew services list
```

Créer une base de donnée
```sql
CREATE USER postgres WITH PASSWORD 'postgres';
```

Créer un utilisateur avec un mot de passe 
```sql
CREATE USER postgres WITH PASSWORD 'postgres';
```

Accorder les privilèges à l'utilisateur
```sql
GRANT ALL PRIVILEGES ON DATABASE deno_users TO postgres;
```

Dépannage postgreSQL
```sh
lsof -i :5432
```
Redémarrer le service 
```sh
brew services restart postgresql
```
Tester la connexion
```sh
psql -U postgres -d deno_users -h localhost -p 5432
```

##### Logs 
```sh
tail -f /usr/local/var/log/postgresql.log
```

# Installing dependencies

``sh
deno install npm:drizzle-orm npm:drizzle-kit npm:pg npm:@types/pg
```

### Drizzle
Si la base de donnée et/ou des tables existes, on peut inspecter le schema et generer des fichiers TS automatiquement : 
```sh
deno --env -A --node-modules-dir npm:drizzle-kit pull
```