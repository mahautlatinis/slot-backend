# slot-backend

##### Lancer le projet
```sh
deno -A --env ./src/index.ts
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

Supprimer toutes les tables sauf Users 
```sql
DO $$
DECLARE
    tbl RECORD;
BEGIN
    FOR tbl IN
        SELECT tablename
        FROM pg_tables
        WHERE schemaname = 'public'
          AND tablename != 'users'
    LOOP
        EXECUTE format('DROP TABLE IF EXISTS %I CASCADE;', tbl.tablename);
    END LOOP;
END $$;
```

Afficher les bases de données
```sql
\list
```

Afficher une base de donnée et ses tables
```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public';
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

```sh
deno install npm:drizzle-orm npm:drizzle-kit npm:pg npm:@types/pg
```

### Drizzle
Si la base de donnée et/ou des tables existes, on peut inspecter le schema et generer des fichiers TS automatiquement : 
```sh
deno --env -A --node-modules-dir npm:drizzle-kit pull
```

Générer un fichier de migration

Voir documentation drizzle 
https://orm.drizzle.team/docs/get-started/postgresql-new

Générer un fichier de migration
```sh
deno task db:generate
```

Appliquer la migration sur la base de donnée
```sh
deno task db:migrate
```
Afficher le drizzle studio
```sh
deno task db:studio
```

Supprimer une migration : 
```sh
npx drizzle-kit drop
```

A revoir 
```sh
npx drizzle-kit generate
npx drizzle-kit migrate
npx drizzle-kit push
npx drizzle-kit check
npx drizzle-kit up
````
