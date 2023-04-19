-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `bio` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `twitterHandle` VARCHAR(255) NULL,
    `googleHandle` VARCHAR(255) NULL,
    `username` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Game` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `upvote_count` INTEGER NOT NULL DEFAULT 0,
    `title` VARCHAR(191) NOT NULL,
    `studio` VARCHAR(191) NULL,
    `thumbnail` VARCHAR(191) NULL,
    `blockchain` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `tagline` VARCHAR(191) NULL,
    `isTeam` BOOLEAN NOT NULL DEFAULT true,
    `fundraising` VARCHAR(191) NULL,
    `links` VARCHAR(191) NULL,
    `gallery` VARCHAR(191) NULL,
    `stage` ENUM('preProduction', 'production', 'playableDemo', 'live') NOT NULL,
    `ownerId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Game_title_studio_key`(`title`, `studio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `genre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Genre_genre_key`(`genre`),
    PRIMARY KEY (`genre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GameGenre` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_GameGenre_AB_unique`(`A`, `B`),
    INDEX `_GameGenre_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
