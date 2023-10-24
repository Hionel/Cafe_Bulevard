import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

interface Iflags {
  languageName: string;
  languageCode: string;
  flagSrc: string;
}

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {
  flagsData?: Iflags[] = [
    {
      languageName: 'English',
      languageCode: 'en',
      flagSrc: '../assets/bar/languageIcons/engRound.png',
    },
    {
      languageName: 'Română',
      languageCode: 'ro',
      flagSrc: '../assets/bar/languageIcons/roRound.png',
    },
  ];
  selectedLanguage?: string;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.languageCode$.subscribe((code) => {
      this.selectedLanguage = code;
    });
  }

  changeLanguage = (languageCode: string) => {
    console.log(languageCode);
    this.dataService.setLanguage(languageCode);
  };
}
