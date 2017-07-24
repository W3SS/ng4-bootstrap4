import { PortfolioDetail } from './portfolio-detail.model';
export class Portfolio {

  constructor(
    public imagePath: string,
    public name: string,
    public description: string,
    public portfolioDetails: PortfolioDetail[]
  ) {}
}
