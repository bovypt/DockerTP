## TP DOCKER

Création du volume :

```
docker volume create tpdocker
```

Utilisé le volume pour un conteneur :

```
docker run -d -v tpdocker:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=azerty mysql:8
```

Connexion a my sql :

```
docker exec -it containertp mysql -u root -p
```

Creation d'une base de donnée dans le conteneur :

```
create databse test
```

Creation d'une table:

```
CREATE TABLE utilisateurs (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,
    ->     nom VARCHAR(100),
    ->     email VARCHAR(100)
    -> );
```

Insertion de valeur dans cette table:

```
 INSERT INTO utilisateurs (nom, email)
    -> VALUES ('Jean Dupont', 'jean.dupont@example.com');
Query OK, 1 row affected (0.02 sec)
```

Résultat :

mysql> SELECT \* FROM utilisateurs;
+----+-------------+-------------------------+
| id | nom | email |
+----+-------------+-------------------------+
| 1 | Jean Dupont | jean.dupont@example.com |
+----+-------------+-------------------------+
1 row in set (0.01 sec)
