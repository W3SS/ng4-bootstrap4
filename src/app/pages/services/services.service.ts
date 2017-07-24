import { Services } from './services.model';

export class ServicesService {

  private services: Services[] = [
    new Services(
      'Card Title',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
    ),
    new Services(
      'Card Title',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur ' +
      'praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.'
    ),
    new Services(
      'Card Title',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.'
    )
  ];

  getServices() {
    return this.services;
  }
}
