import { Model, DataTypes } from "../deps.ts";

export class User extends Model {
  static table = "users";

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
  };
}
