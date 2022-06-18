import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FilesDirectoriesModel} from "../models/files_directories.models";
import {BranchsModels} from "../models/branchs.models";
import {ReleasesModels} from "../models/releases.models";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) {
  }


  public get_repo_files_directories(repository: string, branch?: string) {
    const body = {
      repository: repository,
      branch: branch
    }

    return this.httpClient.post<FilesDirectoriesModel>(`http://127.0.0.1:5000/repofd`, body);
  }

  public get_branchs(repository: string) {
    const body = {
      repository: repository
    }

    return this.httpClient.post<BranchsModels[]>(`http://127.0.0.1:5000/branchs`, body);
  }

  public get_releases(repository: string) {
    const body = {
      repository: repository
    }

    return this.httpClient.post<ReleasesModels[]>(`http://127.0.0.1:5000/releases`, body);
  }

}
