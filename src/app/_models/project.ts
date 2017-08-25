import {usersList} from "../components/usersList/usersList.component";
import {User} from "./user";
/**
 * Created by barsaadon on 11/08/2017.
 */
export class Project {
  id: number;
  projectName: string;
  projectTime: string;
  // assignedUsers: number;
  assignedUsers: User[];
}
