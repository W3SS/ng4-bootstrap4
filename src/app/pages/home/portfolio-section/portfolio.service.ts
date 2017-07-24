import { Subject } from 'rxjs/Subject';

import { Portfolio } from './portfolio.model';
import { PortfolioDetail } from './portfolio-detail.model';

export class PortfolioService {

  portfolioId = new Subject();
  page: number;
  project: number;

  private portfolios: Portfolio[] = [
    new Portfolio(
      '../../../../assets/images/portfolio/portfolio1.jpg',
      'Project One',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
      'Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, ' +
      'repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
      [
        new PortfolioDetail('Lorem Ipsum'),
        new PortfolioDetail('Dolor Sit Amet'),
        new PortfolioDetail('Consectetur'),
        new PortfolioDetail('Adipiscing Elit')
      ]
    ),
    new Portfolio(
      '../../../../assets/images/portfolio/portfolio2.jpg',
      'Project Two',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      [new PortfolioDetail('Lorem Ipsum'),
        new PortfolioDetail('Dolor Sit Amet'),
        new PortfolioDetail('Consectetur'),
        new PortfolioDetail('Adipiscing Elit'),
        new PortfolioDetail('Lorem Ipsum'),
        new PortfolioDetail('Dolor Sit Amet'),
      ]
    ),
    new Portfolio(
      '../../../../assets/images/portfolio/portfolio3.jpg',
      'Project Three',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, ' +
      'odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!',
      [
        new PortfolioDetail('Lorem Ipsum'),
        new PortfolioDetail('Dolor Sit Amet')
      ]
    ),
    new Portfolio(
      '../../../../assets/images/portfolio/portfolio4.jpg',
      'Project Four',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      []
    ),
    new Portfolio(
      '../../../../assets/images/portfolio/portfolio5.jpg',
      'Project Five',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      [
        new PortfolioDetail('Lorem Ipsum'),
        new PortfolioDetail('Dolor Sit Amet'),
        new PortfolioDetail('Consectetur'),
      ]
    ),
    new Portfolio(
      '../../../../assets/images/portfolio/portfolio6.png',
      'Project Six',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident,' +
      ' perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.',
      [
        new PortfolioDetail('Lorem Ipsum'),
        new PortfolioDetail('Dolor Sit Amet'),
        new PortfolioDetail('Consectetur'),
        new PortfolioDetail('Adipiscing Elit')
      ]
    ),
    new Portfolio(
      '../../../../assets/images/portfolio/portfolio7.jpg',
      'Project Seven',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      [
        new PortfolioDetail('Lorem Ipsum'),
        new PortfolioDetail('Dolor Sit Amet'),
        new PortfolioDetail('Consectetur'),
      ]
    ),
    new Portfolio(
      '../../../../assets/images/portfolio/portfolio8.png',
      'Project Eight',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident,' +
      ' perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.',
      [
        new PortfolioDetail('Lorem Ipsum'),
        new PortfolioDetail('Dolor Sit Amet'),
        new PortfolioDetail('Consectetur'),
        new PortfolioDetail('Adipiscing Elit')
      ]
    )
  ];


  getPortfolios() {
    return this.portfolios;
  }

  getNavigatePortfolio(id: number) {
    let page = 1;
    let project = id;
    for (let i = 4; i < (id + 1); i += 4) {
      page++;
      project = id - i
    }
    this.page = page;
    this.project = project;
  }

  getNavigationPortfolioValue() {
    return [this.page, this.project]
  }

  getPagePortfolios(id: number) {
    const start = (id - 1) * 4;
    const end = start + 4;
    return this.portfolios.slice(start, end);
  }

  getPortfolioImage(index: number) {
    return this.portfolios[index]
  }
}
