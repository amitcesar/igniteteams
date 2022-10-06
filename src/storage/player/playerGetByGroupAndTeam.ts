import {playersGetByGroup} from './playersGetByGroup'

export async function playerGetByGroupAndTeam(group: string, team: string){
  try {
    const storage = await playersGetByGroup(group);
    const playerFilteredByTeam = storage.filter(player=> player.team === team);
      return playerFilteredByTeam
  } catch (error) {
    throw error
  }
}
