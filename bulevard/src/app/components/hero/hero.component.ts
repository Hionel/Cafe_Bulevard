import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  heroData = {
    opening: {
      title: `A Dream Born in 99'`,
      introduction: `Uncover the Charm of the Boulevard at our Local Café Bar`,
      emphasis: `Where Wallet-Friendly Maintains Quality...`,
    },
    invitation: {
      invitationTitle: `Embrace the Moments`,
      firstActivity: `Leisurely Boulevard Coffees`,
      secondActivity: `Sporting Excitement with Friends`,
      thirdActivity: `Late-Night Drinks`,
      invitationClosing: `... and Many more`,
    },
    closing: {
      programTitle: 'OPEN HOURS',
      programDays: 'Everyday',
      programText: '9:00 - 23:00',
      address: 'Bulevardul Nicolae Iorga Nr. 52',
      text: `Come and Toast the Passing Years in our Cozy Retreat or Scroll Down for More`,
    },
  };
}
