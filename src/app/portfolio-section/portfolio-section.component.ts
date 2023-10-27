import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent {

  projects = [
    {
      title: 'Join',
      technologies: ['JavaScript', 'HTML', 'CSS', 'GroupProject'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      img: './assets/img/portfolio/join-big.png',
      githubLink: 'https://github.com/RafaelTauschek/Join',
      livetestLink: 'https://join.rafael-tauschek.de'
    },
    {
      title: 'El Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      img: './assets/img/portfolio/el-pollo-loco-big.png',
      githubLink: 'https://github.com/RafaelTauschek/El-Pollo-Loco',
      livetestLink: 'https://el-pollo-loco.rafael-tauschek.de'
    }
  ]


}
