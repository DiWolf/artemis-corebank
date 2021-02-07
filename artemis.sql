CREATE TABLE "clientes"."clientes" (
	"id" VARCHAR ( 36 ) COLLATE "pg_catalog"."default" NOT NULL,
	"nombres" VARCHAR ( 100 ) COLLATE "pg_catalog"."default" NOT NULL,
	"aPaterno" VARCHAR ( 100 ) COLLATE "pg_catalog"."default" NOT NULL,
	"aMaterno" VARCHAR ( 100 ) COLLATE "pg_catalog"."default" NOT NULL,
	CONSTRAINT "clientes_pkey" PRIMARY KEY ( "id" ) 
);
ALTER TABLE "clientes"."clientes" OWNER TO "admin";