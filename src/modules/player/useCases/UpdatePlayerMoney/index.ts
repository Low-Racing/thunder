import { PrismaPlayerRepository } from "@modules/player/repositories/implementations/PrismaPlayerRepository";
import { Controller } from "core/infra/Controller";
import { PrismaUsersRepository } from "modules/accounts/repositories/implementations/PrismaUsersRepository";
import { UpdatePlayerMoney } from "./UpdatePlayerMoney";
import { UpdatePlayerMoneyController } from "./UpdatePlayerMoneyController";

export function makeUpdatePlayerMoneyController(): Controller {
  const playerRepository = new PrismaPlayerRepository();
  const userRepository = new PrismaUsersRepository();
  const useCase = new UpdatePlayerMoney(playerRepository, userRepository);
  const controller = new UpdatePlayerMoneyController(useCase);

  return controller;
}