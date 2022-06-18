import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../services/services.service";
import {FilesDirectoriesModel} from "../models/files_directories.models";
import {BranchsModels} from "../models/branchs.models";
import {ReleasesModels} from "../models/releases.models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private compileRepoService: ServicesService) {
  }

  public filesDirectories?: FilesDirectoriesModel
  public branchs?: BranchsModels[]
  public releases?: ReleasesModels[]

  ngOnInit(): void {
    this.get_repo_files_directories()
    this.get_branchs()
    this.get_releases()
  }

  public get_repo_files_directories() {
    return this.compileRepoService.get_repo_files_directories('Erickson-lopes-dev/Compile-Repo').subscribe(
      (filesDirectories: FilesDirectoriesModel) => {
        console.table(filesDirectories.files);
        console.table(filesDirectories.directories);
        this.filesDirectories = filesDirectories
      }
    )
  }

  public get_branchs() {
    return this.compileRepoService.get_branchs('Erickson-lopes-dev/Compile-Repo').subscribe(
      (branchs: BranchsModels[]) => {
        console.table(branchs);
        this.branchs = branchs
      }
    )
  }

  public get_releases() {
    return this.compileRepoService.get_releases('Erickson-lopes-dev/Compile-Repo').subscribe(
      (releases: ReleasesModels[]) => {
        console.table(releases);
        this.releases = releases
      }
    )
  }
}
