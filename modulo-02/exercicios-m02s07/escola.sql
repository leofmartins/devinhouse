CREATE TABLE professores (
    id NUMBER GENERATED BY DEFAULT AS IDENTITY,
    nome VARCHAR(64) NOT NULL,
    sobrenome VARCHAR(128) NOT NULL,
    endereco VARCHAR(256),
    telefone VARCHAR(11),
    email VARCHAR(128),
    data_nascimento DATE,
    nacionalidade VARCHAR(64),
    PRIMARY KEY(id)
);

CREATE TABLE estudantes (
    id NUMBER GENERATED BY DEFAULT AS IDENTITY,
    nome VARCHAR(64) NOT NULL,
    sobrenome VARCHAR(128) NOT NULL,
    matricula VARCHAR(64) NOT NULL,
    email VARCHAR(128),
    data_nascimento DATE,
    nacionalidade VARCHAR(64),
    media_geral NUMBER DEFAULT 0 NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE cursos (
    id NUMBER GENERATED BY DEFAULT AS IDENTITY,
    nome VARCHAR(128) NOT NULL,
    ead VARCHAR(1) NOT NULL,
    nome_professor VARCHAR(128) NOT NULL,
    num_max_alunos NUMBER DEFAULT 0 NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE aluno_curso (
    id NUMBER GENERATED BY DEFAULT AS IDENTITY,
    id_aluno NUMBER NOT NULL,
    id_curso NUMBER NOT NULL,
    media NUMBER DEFAULT 0 NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_aluno) REFERENCES estudantes(id),
    FOREIGN KEY(id_curso) REFERENCES cursos(id)
);

ALTER TABLE cursos
DROP (nome_professor);

ALTER TABLE cursos
ADD professor_id NUMBER;

ALTER TABLE cursos
ADD CONSTRAINT fk_prof_id FOREIGN KEY(professor_id) REFERENCES professores(id);