import { AboutMemeber } from './about.model';
export class AboutService {
  private members: AboutMemeber[] = [
    new AboutMemeber(
      '../../../assets/images/members/member1.jpg',
      'Lucian Lon',
      'Control Valve Assembly',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.',
      'lucian@email.com'
    ),
    new AboutMemeber(
      '../../../assets/images/members/member3.png',
      'Permelia Eddie',
      'Material Handling',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.',
      'parmelia@email.com'
    ),
    new AboutMemeber(
      '../../../assets/images/members/member2.jpg',
      'Leroi Martin',
      'Rotor Assembly',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.',
      'leroi@email.com'
    )
  ];

  getMembers() {
    return this.members;
  }
}
