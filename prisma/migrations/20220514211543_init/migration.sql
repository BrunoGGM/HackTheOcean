-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "nameAnimal" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" BYTEA NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Animal_nameAnimal_key" ON "Animal"("nameAnimal");
