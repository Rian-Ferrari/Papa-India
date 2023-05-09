CREATE DATABASE refugio76;

USE refugio76;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
senha VARCHAR(16),
email VARCHAR(100)
);


INSERT INTO usuario VALUES
	(null, 'Lukas', '12062022', 'lukas.ferrari@gmail.com'),
    (null, 'Rian', '12662022', 'rianferrari37@gmail.com');
    

    
CREATE TABLE localidade (
idLocal INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
complemento VARCHAR(150)
) AUTO_INCREMENT = 1000;

INSERT INTO localidade VALUES
	(null, 'Poseidon', 'Evento do Poseidon'),
    (null, 'Mina BlackWater', 'Evento Febre do Urânio');
    

    
CREATE TABLE farms (
idFarms INT PRIMARY KEY AUTO_INCREMENT,
dtFarms DATE,
tipo VARCHAR(100),
fkUsuario INT, 
fkLocal INT, 
CONSTRAINT fkUsuarioFarms FOREIGN KEY (fkUsuario) 
	REFERENCES usuario(idUsuario),
CONSTRAINT fkLocalidadeFarms FOREIGN KEY (fkLocal) 
	REFERENCES localidade(idLocal)
) AUTO_INCREMENT = 500;

INSERT INTO farms VALUES
	(null, '2023-05-05', 'Farm de Reator de Fusão', 1, 1000),
    (null, '2023-05-06', 'Farm de Aço', 2, 1001);
    
SELECT 
nome AS NomeUsuario,
senha AS SenhaUsuario,
email AS EmailUsuario
	FROM usuario;

SELECT * FROM localidade;

SELECT * FROM farms;

SELECT 
usuario.nome AS NomeUsuario,
farms.tipo AS TipoDoFarm,
localidade.nome AS LocalDoFarm,
farms.dtFarms AS DataDoFarm
	FROM usuario JOIN farms
		ON idUsuario = fkUsuario
			JOIN localidade
		ON idLocal = fkLocal;



