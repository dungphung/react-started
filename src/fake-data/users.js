import User from "./user";

const ListUser = new Array(10)
  .fill(null)
  .map((_, index) => ({ ...User, shard_id: index }));

export default ListUser;
