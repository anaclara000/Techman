-- AddForeignKey
ALTER TABLE `Venda` ADD CONSTRAINT `Venda_automovel_fkey` FOREIGN KEY (`automovel`) REFERENCES `Automoveis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
