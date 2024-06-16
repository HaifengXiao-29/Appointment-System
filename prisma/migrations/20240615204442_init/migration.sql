-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "startTime" TIME NOT NULL,
    "endTime" TIME NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "service" TEXT NOT NULL,
    "employee" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
