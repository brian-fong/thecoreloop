-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `handle` VARCHAR(255) NULL,
    `username` VARCHAR(255) NULL,

    UNIQUE INDEX `User_handle_key`(`handle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `upvote_count` INTEGER NOT NULL DEFAULT 0,
    `name` VARCHAR(191) NOT NULL,
    `studio` VARCHAR(191) NOT NULL,
    `thumbnail` VARCHAR(191) NULL,
    `blockchain` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `tagline` VARCHAR(191) NULL,
    `fundraising` BOOLEAN NOT NULL,
    `links` VARCHAR(191) NULL,
    `gallery` VARCHAR(191) NULL,
    `stage` VARCHAR(191) NULL,
    `ownerId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Project_id_key`(`id`),
    UNIQUE INDEX `Project_name_studio_key`(`name`, `studio`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `genre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(65000) NULL,

    UNIQUE INDEX `Genre_genre_key`(`genre`),
    PRIMARY KEY (`genre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectGenre` (
    `A` VARCHAR(191) NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProjectGenre_AB_unique`(`A`, `B`),
    INDEX `_ProjectGenre_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
