import { Router } from 'express';
// import * as PortfolioController from '../controllers/portfolio.controller';

const router = new Router();


export default router;
// ip recorder
fetch("/insertdata", options)
  .then(res => res.json())
  .then(
    (result) => {
      console.log(window.location.pathname);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      console.log(error);
    }
  );