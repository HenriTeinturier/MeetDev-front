import axios from 'axios';
import { LOGIN_TEST, TEST_CONNEXION_BACK } from '../actions/middleware';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    // on traite l'action de type FETCH_RECIPES
    // dispatchée depuis le composant principal
    case LOGIN_TEST: {
      const state = store.getState();
      const { email, password } = state.formLogin.login;
      console.log(email, password);
      let json = {
        email_address: 'mcbernard@mc.cz',
        password: 'fifi',
      };
      json = JSON.stringify(json);
      console.log(json);

      axios({
        method: 'post',
        url: 'http://alerafart-server.eddi.cloud/projet-10-meet-dev-back/public/api/users/login',
        // ou url: 'http://localhost/api/users:8000',
        data: { json },
      })
      /*  .post(
          'http://alerafart-server.eddi.cloud/projet-10-meet-dev-back/public/api/users/login',
          json,
        ) */
        .then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case TEST_CONNEXION_BACK: {
      axios({
        method: 'get',
        url: 'http://alerafart-server.eddi.cloud/projet-10-meet-dev-back/public/api/users',
        // ou url: 'http://localhost/api/users:8000',
      })
        .then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default apiMiddleWare;
