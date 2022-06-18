import {FilesModel} from "./files.models";
import {DirectoriesModel} from "./directorories.models";

export interface FilesDirectoriesModel {
  repository: string
  branch: string
  files: FilesModel[]
  directories: DirectoriesModel[]
}


