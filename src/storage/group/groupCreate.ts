import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupGetAll";

import {GROUP_COLLECTION} from '@storage/storageConfig'
import { AppError } from "@utils/AppError";


export async function createGroup(NewGroup: string) {
    try {
      const storedGroups = await groupsGetAll();
      const groupAlreadyExist = storedGroups.includes(NewGroup)

        if(groupAlreadyExist){
          throw new AppError('Já existe um grupo com esse nome.');
        }

      const storage = JSON.stringify([...storedGroups, NewGroup])
      await AsyncStorage.setItem(GROUP_COLLECTION, storage);
      
    } catch (error) {
      throw error
    }
} 
