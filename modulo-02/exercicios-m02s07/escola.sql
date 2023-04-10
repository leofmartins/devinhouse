CREATE TABLE professores (
    nome VARCHAR(64) NOT NULL,
    sobrenome VARCHAR(128) NOT NULL,
    endereco VARCHAR(256),
    telefone VARCHAR(11),
    email VARCHAR(128),
    data_nascimento DATE,
    nacionalidade VARCHAR(64)
);

CREATE TABLE estudantes (
    nome VARCHAR(64) NOT NULL,
    sobrenome VARCHAR(128) NOT NULL,
    matricula VARCHAR(64) NOTE NULL,
    email VARCHAR(128),
    data_nascimento DATE,
    nacionalidade VARCHAR(64),
    media_geral NUMBER DEFAULT 0 NOT NULL,
);

CREATE TABLE cursos (
    codigo NUMBER NOT NULL,
    nome VARCHAR(128) NOT NULL,
    ead VARCHAR(1) NOT NULL,
    nome_professor VARCHAR(128) NOT NULL,
    num_max_alunos NUMBER DEFAULT 0 NOT NULL
);