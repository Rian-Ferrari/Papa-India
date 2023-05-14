CREATE DATABASE refugio76;

USE refugio76;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) UNIQUE NOT NULL, 
senha VARCHAR(16) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL
);
    
    
CREATE TABLE localidade (
idLocal INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
complemento VARCHAR(150) NOT NULL
) AUTO_INCREMENT = 1000;
    

    
CREATE TABLE farms (
idFarms INT PRIMARY KEY AUTO_INCREMENT,
dtFarms DATE NOT NULL,
tipo VARCHAR(100) NOT NULL,
fkUsuario INT, 
fkLocal INT, 
CONSTRAINT fkUsuarioFarms FOREIGN KEY (fkUsuario) 
	REFERENCES usuario(idUsuario),
CONSTRAINT fkLocalidadeFarms FOREIGN KEY (fkLocal) 
	REFERENCES localidade(idLocal)
) AUTO_INCREMENT = 500;
    
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



