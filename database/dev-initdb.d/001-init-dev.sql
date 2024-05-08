/*
Script de création de la base de données de test.
A noter, on utilise une stratégie avec DROP et IF NOT EXISTS afin de rendre 
notre script réutilisable dans le future, même si la base existe déjà
*/
create database IF NOT EXISTS Vvent;

/* Créer l'utilisateur API */
create user IF NOT EXISTS 'vvent-dev'@'%.%.%.%' identified by 'vvent-dev-password';
grant select, update, insert, delete on Vvent.* to 'vvent-dev'@'%.%.%.%';
grant trigger on Vvent.* to 'vvent-dev'@'%.%.%.%';
flush privileges;
