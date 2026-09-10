CREATE DATABASE amigo_do_pet
    ENCODING 'UTF8'
    TEMPLATE = template0;

-- Depois disso, conecte-se ao banco "amigo_do_pet" (ex: \c amigo_do_pet no psql)
-- e execute o restante do script abaixo.

-- Tipo ENUM para o sexo do pet (Postgres não tem ENUM inline como o MySQL)
CREATE TYPE sexo_pet AS ENUM ('M', 'F');

-- Tabela de Usuários (Donos e Interessados)
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    telefone VARCHAR(15),
    whatsapp VARCHAR(15),
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

-- Criação de um Registro ADMIN na entidade forte
INSERT INTO usuarios (
    nome, 
    cpf, 
    telefone, 
    whatsapp, 
    email, 
    senha
) VALUES (
    'Admin', 
    '12345678901', 
    '17991234567', 
    '17991234567', 
    'admin.dev@amigosdopet.com', 
    'teste123'
);

-- Tabela de Pets
CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    id_cli INTEGER NOT NULL,
    nome VARCHAR(50) NOT NULL,
    sexo sexo_pet,
    especie VARCHAR(30) NOT NULL,
    raca VARCHAR(50),
    peso DECIMAL(5,2),
    tamanho VARCHAR(20),
    idade INTEGER,
    doenca VARCHAR(255),
    obs TEXT,
    CONSTRAINT fk_pet_usuario
        FOREIGN KEY (id_cli) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Tabela de Doações
CREATE TABLE doacoes (
    id SERIAL PRIMARY KEY,
    id_pet INTEGER NOT NULL,
    id_cli_interesse INTEGER,
    data_interesse DATE,
    data_doacao DATE,
    status VARCHAR(50),
    CONSTRAINT fk_doacoes_pet
        FOREIGN KEY (id_pet) REFERENCES pets(id) ON DELETE CASCADE,
    CONSTRAINT fk_doacoes_usuario
        FOREIGN KEY (id_cli_interesse) REFERENCES usuarios(id) ON DELETE SET NULL
);