CREATE KEYSPACE IF NOT EXISTS "mercado"
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE mercado;

CREATE TABLE "mercado"."produtos" (
id_item int,
pronta_entrega boolean,
endereco text,
itens map<text,text>,
PRIMARY KEY(id_item)
);

INSERT INTO "my_keyspace"."produtos" (id_item, pronta_entrega, endereco, itens) 
VALUES (001, True, 'Rua Pedro Alvares Cabral, 36', {'Lacticinios': 'queijo', 'padaria':'pao de leite'}); 

INSERT INTO "my_keyspace"."produtos" (id_item, pronta_entrega, endereco, itens) 
VALUES (002, True, 'Rua Primeiro de Abril, 3660', {'Limpeza':'Detergente'}); 

INSERT INTO "my_keyspace"."produtos" (id_item, pronta_entrega, endereco, itens) 
VALUES (003, True, 'Rua 25 de Marco, 20, Bloco A', {'Limpeza':'Amaciante', 'Higiene':'Shampoo'});

INSERT INTO "my_keyspace"."produtos" (id_item, pronta_entrega, endereco, itens) 
VALUES (004, True, 'Avenida Carlos Gomes, 3681-B', {'Papelaria':'Caderno'});

CREATE KEYSPACE IF NOT EXISTS "locadora"
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE locadora;

CREATE TABLE "locadora"."videos_por_titulo" (
title text,
added_year text,
added_date text,
description text,
user_id int,
video_id int,
PRIMARY KEY(user_id)
);

COPY videos_por_titulo (title, added_year, added_date, description, user_id, video_id) FROM '/var/lib/cassandra/videos_by_title_year.csv' WITH HEADER=true;
