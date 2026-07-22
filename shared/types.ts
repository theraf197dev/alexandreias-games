import * as z from "zod"; 
 
const Player = z.object({ 
  username: z.string(),
  xp: z.number()
});

export type Todo = z.TypeOf<typeof Player>;