-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "startTime" TIMESTAMP NOT NULL,
    "endTime" TIMESTAMP NOT NULL,
    "date" DATE NOT NULL,
    "service" TEXT NOT NULL,
    "employee" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
